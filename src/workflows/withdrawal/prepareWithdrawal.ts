import { Signer } from '@ethersproject/abstract-signer';
import { generateStarkWallet, serializeSignature, sign } from '../../utils';
import {
  CreateWithdrawalResponse,
  SignableToken,
  WithdrawalsApi,
} from '../../api';
import { Errors } from '../errors';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

const buildTokenForWithdrawalRequest = (
  token: SignableToken,
): SignableToken => {
  if (token.type === 'MINTABLE_ERC721') {
    return {
      ...token,
      type: 'ERC721',
    };
  }
  return token;
};

export async function prepareWithdrawalWorkflow(
  signer: Signer,
  token: SignableToken,
  quantity: string,
  withdrawalsApi: WithdrawalsApi,
): Promise<CreateWithdrawalResponse> {
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: buildTokenForWithdrawalRequest(token),
      amount: quantity.toString(),
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableWithdrawalResult.data;
  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableWithdrawalInvalidResponse);
  }

  // Sign hash with L2 credentials
  const starkWallet = await generateStarkWallet(signer);
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: quantity.toString(),
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
  });

  return prepareWithdrawalResponse.data;
}
