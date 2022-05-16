import { Signer } from '@ethersproject/abstract-signer';
import { generateStarkWallet, serializeSignature, sign } from '../utils';
import {
  CoreEncodeAssetRequestTokenTypeEnum,
  CreateWithdrawalResponse,
  EncodeAssetResponse, EncodingApi,
  SignableToken,
  WithdrawalsApi,
} from '../api';
import { Core } from '../contracts';
import * as encUtils from 'enc-utils';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception')
}

const buildTokenForWithdrawalRequest = (token: SignableToken): SignableToken => {
  if (token.type === 'MINTABLE_ERC721') {
    return {
      ...token,
      type: 'ERC721',
    }
  }
  return token;
}

export async function prepareWithdrawalWorkflow(signer: Signer, token: SignableToken, quantity: string, withdrawalsApi: WithdrawalsApi): Promise<CreateWithdrawalResponse> {

  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: buildTokenForWithdrawalRequest(token),
      amount: quantity.toString(),
    },
  })

  const { signable_message: signableMessage, payload_hash: payloadHash } = signableWithdrawalResult.data
  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error('payload_hash or signable_message missing from SignableWithdrawal response')
  }

  // Sign message with L1 credentials
  //used in headers
  //const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkWallet = await generateStarkWallet(signer);
  const starkSignature = serializeSignature(sign(starkWallet.starkKeyPair, payloadHash));

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: quantity.toString(),
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
  })

  return prepareWithdrawalResponse.data;
}


export async function completeETHWithdrawalWorkflow(signer: Signer, starkPublicKey: string, coreContract: Core, encodingApi: EncodingApi) {
  const assetType = await getEncodeAssetInfo('asset', 'ETH', encodingApi)
  const populatedTrasaction = await coreContract.populateTransaction.withdraw(starkPublicKey, assetType.asset_type!)
  return signer.sendTransaction(populatedTrasaction)
}

export async function completeMintableERC721WithdrawalWorfklow(signer: Signer, starkPublicKey: string, token: SignableToken, coreContract: Core, encodingApi: EncodingApi) {
  const assetType = await getEncodeAssetInfo('mintable-asset', 'ERC721', encodingApi, token.data)
  const mintableBlob = getMintingBlob(token)

  const populatedTrasaction = await coreContract.populateTransaction.withdrawAndMint(starkPublicKey, assetType.asset_type!, mintableBlob)
  return signer.sendTransaction({
    ...populatedTrasaction,
    //gasPrice: 40000000000,
    //gasLimit: 7000000
  })
}

async function getEncodeAssetInfo(assetType: string, tokenType: CoreEncodeAssetRequestTokenTypeEnum, encodingApi: EncodingApi, tokenData?: any): Promise<EncodeAssetResponse> {
  const result = await encodingApi.encodeAsset({
    assetType,
    encodeAssetRequest: {
      token: {
        type: tokenType,
        ...(tokenData && { data: tokenData }),
      },
    },
  });
  return result.data;
}

function getMintingBlob(token: SignableToken): string {
  const tokenData = token.data || {} as any;
  const id = tokenData.id || '';
  const blueprint = tokenData.blueprint || '';
  return encUtils.sanitizeHex(encUtils.utf8ToHex(`{${id}}:{${blueprint}}`));
}