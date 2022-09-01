import {
  TransfersApi,
  GetSignableTransferRequestV1,
  CreateTransferResponseV1,
} from '../api';
import { WalletConnection } from '../types';
import { signRaw } from '../utils';

type TransfersWorkflowParams = WalletConnection & {
  request: GetSignableTransferRequestV1;
  transfersApi: TransfersApi;
};

export async function transfersWorkflow({
  ethSigner,
  starkSigner,
  request,
  transfersApi,
}: TransfersWorkflowParams): Promise<CreateTransferResponseV1> {
  const signableResult = await transfersApi.getSignableTransferV1({
    getSignableTransferRequest: {
      sender: request.sender,
      token: request.token,
      amount: request.amount,
      receiver: request.receiver,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const ethAddress = await ethSigner.getAddress();

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

  const response = await transfersApi.createTransferV1({
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
