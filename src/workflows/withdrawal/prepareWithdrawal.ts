import { Signer } from '@ethersproject/abstract-signer';
import { serializeSignature, sign, signMessage } from '../../utils';
import { CreateWithdrawalResponse, WithdrawalsApi } from '../../api';
import {
  convertToSignableRequestFormat,
  PrepareWithdrawalRequest,
  StarkWallet,
  TokenPrepareWithdrawal,
  WalletConnection,
} from '../../types';

const assertIsDefined = <T>(value?: T): T => {
  if (value !== undefined) return value;
  throw new Error('undefined field exception');
};

type PrepareWithdrawalRequestParams = PrepareWithdrawalRequest &
  WalletConnection & {
    withdrawalsApi: WithdrawalsApi;
  };

export async function prepareWithdrawalWorkflowWithSigner({
  l1Signer,
  l2Signer,
  token,
  quantity,
  withdrawalsApi,
}: PrepareWithdrawalRequestParams): Promise<CreateWithdrawalResponse> {
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await l1Signer.getAddress(),
      token: convertToSignableRequestFormat(token),
      amount: quantity.toString(),
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableWithdrawalResult.data;

  // Sign hash with L2 credentials
  const starkSignature = await l2Signer.signMessage(payloadHash);

  const { ethAddress, ethSignature } = await signMessage(
    signableMessage,
    l1Signer,
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
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return prepareWithdrawalResponse.data;
}

export async function prepareWithdrawalWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  token: TokenPrepareWithdrawal,
  quantity: string,
  withdrawalsApi: WithdrawalsApi,
): Promise<CreateWithdrawalResponse> {
  const signableWithdrawalResult = await withdrawalsApi.getSignableWithdrawal({
    getSignableWithdrawalRequest: {
      user: await signer.getAddress(),
      token: convertToSignableRequestFormat(token),
      amount: quantity.toString(),
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableWithdrawalResult.data;

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  const { ethAddress, ethSignature } = await signMessage(
    signableMessage,
    signer,
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
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return prepareWithdrawalResponse.data;
}
