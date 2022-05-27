import { Signer } from '@ethersproject/abstract-signer';
import {
  TransfersApi,
  CreateTransferResponseV1,
  TransfersApiGetTransferRequest,
} from '../api';
import { serializeSignature, sign, signRaw } from '../utils';
import { BurnAddress } from './constants';
import { GetSignableBurnRequest } from './types';
import { StarkWallet } from '../types';

export async function burnWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableBurnRequest,
  transfersApi: TransfersApi,
): Promise<CreateTransferResponseV1> {
  // Get signable response for transfer
  const signableResult = await transfersApi.getSignableTransferV1({
    getSignableTransferRequest: {
      sender: request.sender,
      token: request.token,
      amount: request.amount,
      receiver: BurnAddress.BurnEthAddress,
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
  const ethAddress = (await signer.getAddress()).toLowerCase();

  // Assemble transfer params
  const transferSigningParams = {
    sender_stark_key: signableResult.data.sender_stark_key,
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

export async function getBurnWorkflow(
  request: TransfersApiGetTransferRequest,
  transfersApi: TransfersApi,
) {
  return await transfersApi.getTransfer({ id: request.id });
}
