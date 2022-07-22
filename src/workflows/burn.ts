import {
  TransfersApi,
  TransfersApiGetTransferRequest,
  CreateTransferResponseV1,
} from '../api';
import { WalletConnection, UnsignedTransferRequest } from '../types';
import { BurnAddress } from './constants';
import { GetSignableBurnRequest } from './types';
import { transfersWorkflow } from './transfers';

type burnWorkflowParams = WalletConnection & {
  request: GetSignableBurnRequest;
  transfersApi: TransfersApi;
};

export async function burnWorkflow({
  l1Signer,
  l2Signer,
  request,
  transfersApi,
}: burnWorkflowParams): Promise<CreateTransferResponseV1> {
  const transferRequest: UnsignedTransferRequest = {
    sender: request.sender,
    receiver: BurnAddress.BurnEthAddress,
    token: request.token,
    amount: request.amount,
  };

  return transfersWorkflow({
    l1Signer,
    l2Signer,
    request: transferRequest,
    transfersApi,
  });
}

export async function getBurnWorkflow(
  request: TransfersApiGetTransferRequest,
  transfersApi: TransfersApi,
) {
  return await transfersApi.getTransfer({ id: request.id });
}
