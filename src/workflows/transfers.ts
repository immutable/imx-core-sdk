import { Signer } from '@ethersproject/abstract-signer';
import { signRaw } from '../utils';
import {
  TransfersApi,
  GetSignableTransferRequestV1,
  CreateTransferResponseV1,
  GetSignableTransferRequest,
  CreateTransferResponse,
} from '../api';
import { serializeSignature, sign } from '../utils';
import { StarkWallet } from '../types';

export async function transfersWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableTransferRequestV1,
  transfersApi: TransfersApi,
): Promise<CreateTransferResponseV1> {
  // Get signable response for transfer
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

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Obtain Ethereum Address from signer
  const ethAddress = (await signer.getAddress());

  // Assemble transfer params
  const transferSigningParams = {
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

  // create transfer
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

export async function batchTransfersWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableTransferRequest,
  transfersApi: TransfersApi,
): Promise<CreateTransferResponse> {
  // Get signable response for transfer
  const signableResult = await transfersApi.getSignableTransfer({
    getSignableTransferRequestV2: {
      sender_ether_key: request.sender_ether_key,
      signable_requests: request.signable_requests,
    },
  });

  const signableMessage = signableResult.data.signable_message;

  if (signableMessage === undefined) {
    throw new Error('Invalid response from Signable registration offchain');
  }

  // Obtain Ethereum Address from signer
  const ethAddress = (await signer.getAddress());

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // TODO: throw error on missing payload hash?
  // Assemble transfer params and sign payload hash
  const transferSigningParams = {
    sender_stark_key: signableResult.data.sender_stark_key,
    requests: signableResult.data.signable_responses.map(resp => ({
      sender_vault_id: resp.sender_vault_id,
      receiver_stark_key: resp.receiver_stark_key,
      receiver_vault_id: resp.receiver_vault_id,
      asset_id: resp.asset_id,
      amount: resp.amount,
      nonce: resp.nonce,
      expiration_timestamp: resp.expiration_timestamp,
      stark_signature: serializeSignature(
        sign(starkWallet.starkKeyPair, resp.payload_hash),
      ),
    })),
  };

  // create transfer
  const response = await transfersApi.createTransfer({
    createTransferRequestV2: transferSigningParams,
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    transfer_ids: response?.data.transfer_ids,
  };
}
