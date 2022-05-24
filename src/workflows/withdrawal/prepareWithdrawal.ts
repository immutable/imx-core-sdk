import { Signer } from '@ethersproject/abstract-signer';
import { serializeSignature, sign, signMessage } from '../../utils';
import { CreateWithdrawalResponse, WithdrawalsApi } from '../../api';
import { convertToSignableRequestFormat, StarkWallet, TokenPrepareWithdrawal } from '../../types';
import { Errors } from '../errors';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

export async function prepareWithdrawalWorkflow(signer: Signer, starkWallet: StarkWallet, token: TokenPrepareWithdrawal, quantity: string, withdrawalsApi: WithdrawalsApi): Promise<CreateWithdrawalResponse> {

  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: convertToSignableRequestFormat(token),
      amount: quantity.toString(),
    },
  })

  const { signable_message: signableMessage, payload_hash: payloadHash } = signableWithdrawalResult.data
  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableWithdrawalInvalidResponse);
  }

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(sign(starkWallet.starkKeyPair, payloadHash));

  const { ethAddress, ethSignature } = await signMessage(signableMessage, signer);

  const prepareWithdrawalResponse = await withdrawalsApi.createWithdrawal({
    createWithdrawalRequest: {
      stark_key: assertIsDefined(signableWithdrawalResult.data.stark_key),
      amount: quantity.toString(),
      asset_id: assertIsDefined(signableWithdrawalResult.data.asset_id),
      vault_id: assertIsDefined(signableWithdrawalResult.data.vault_id),
      nonce: assertIsDefined(signableWithdrawalResult.data.nonce),
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  })

  return prepareWithdrawalResponse.data;
}
