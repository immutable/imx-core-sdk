import { CreateTransferResponseV1, ExchangesApi } from '../api';
import { UnsignedExchangeTransferRequest } from '../types';
import { WalletConnection } from '@imtbl/provider-sdk-web';
import { signRaw } from '../utils';
import { convertToSignableToken } from '../utils/convertToSignableToken';

type TransfersWorkflowParams = {
  walletConnection: WalletConnection;
  request: UnsignedExchangeTransferRequest;
  exchangesApi: ExchangesApi;
};

export async function exchangeTransfersWorkflow({
  walletConnection,
  request,
  exchangesApi,
}: TransfersWorkflowParams): Promise<CreateTransferResponseV1> {
  const { ethSigner, starkExSigner } = walletConnection.signers;

  if (!ethSigner) {
    throw new Error('Wallet does not support signing transactions on Ethereum');
  }

  const ethAddress = await ethSigner.getAddress();

  const transferAmount = request.amount;
  const signableResult = await exchangesApi.getExchangeSignableTransfer({
    id: request.transactionID,
    getSignableTransferRequest: {
      sender: ethAddress,
      token: convertToSignableToken(request),
      amount: transferAmount,
      receiver: request.receiver,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkExSigner.signMessage({
    payload: '',
    message: payloadHash,
    signature: '',
  });

  const transferSigningParams = {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    sender_stark_key: signableResult.data.sender_stark_key!,
    sender_vault_id: signableResult.data.sender_vault_id,
    receiver_stark_key: signableResult.data.receiver_stark_key,
    receiver_vault_id: signableResult.data.receiver_vault_id,
    asset_id: signableResult.data.asset_id,
    amount: signableResult.data.amount,
    nonce: signableResult.data.nonce,
    expiration_timestamp: signableResult.data.expiration_timestamp,
    stark_signature: starkSignature,
  };

  const response = await exchangesApi.createExchangeTransfer({
    id: request.transactionID,
    createTransferRequest: transferSigningParams,
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    sent_signature: response?.data.sent_signature,
    status: response?.data.status?.toString(),
    time: response?.data.time,
    transfer_id: response?.data.transfer_id,
  };
}
