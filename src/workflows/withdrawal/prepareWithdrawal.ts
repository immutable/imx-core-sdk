import { Signer } from '@ethersproject/abstract-signer';
import { serializeSignature, sign } from '../../utils';
import {
  CreateWithdrawalResponse, MintsApi,
  WithdrawalsApi,
} from '../../api';
import { StarkWallet, TokenPrepareWithdrawal, TokenType } from '../../types';
import * as encUtils from 'enc-utils';
import { keccak256 as solidityKeccak256 } from '@ethersproject/solidity';
import { Errors } from '../errors';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

export async function prepareWithdrawalWorkflow(signer: Signer, starkWallet: StarkWallet, token: TokenPrepareWithdrawal, quantity: string, withdrawalsApi: WithdrawalsApi, mintsApi: MintsApi): Promise<CreateWithdrawalResponse> {

  let signableToken;

  if (token.type === TokenType.ERC721) {
    const tokenAddress = token.data.tokenAddress;
    const tokenId = token.data.tokenId;
    signableToken = await mintsApi.getMintableTokenDetailsByClientTokenId({
      tokenAddress,
      tokenId,
    }).then(mintableToken => ({
      type: TokenType.ERC721,
      data: {
        token_id: getMintingBlobHash(tokenId, mintableToken.data.blueprint),
        token_address: tokenAddress,
      },
    })).catch(error => {
      if (error.response.status === 404) { //token is already minted on L1
        return token;
      }
      throw error; //unable to recover from any other kind of error
    })
  } else {
    signableToken = token
  }

  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: signableToken,
      amount: quantity.toString(),
    },
  })

  const { signable_message: signableMessage, payload_hash: payloadHash } = signableWithdrawalResult.data
  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableWithdrawalInvalidResponse);
  }

  // Sign hash with L2 credentials
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

function getMintingBlobHash(id: string, blueprint = ''): string {
  return encUtils.sanitizeHex(
    solidityKeccak256(
      ['bytes'],
      [encUtils.utf8ToArray(`{${id}}:{${blueprint}}`)],
    ),
  );
}
