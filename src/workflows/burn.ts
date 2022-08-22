import {
  TransfersApi,
  TransfersApiGetTransferRequest,
  CreateTransferResponseV1,
} from '../api';
import { WalletConnection, UnsignedTransferRequest } from '../types';
import { GetSignableBurnRequest } from '../types';
import { transfersWorkflow } from './transfers';

const BurnEthAddress = '0x0000000000000000000000000000000000000000';

type burnWorkflowParams = WalletConnection & {
  request: GetSignableBurnRequest;
  transfersApi: TransfersApi;
};

export async function burnWorkflow({
  ethSigner,
  starkSigner,
  request,
  transfersApi,
}: burnWorkflowParams): Promise<CreateTransferResponseV1> {
  const transferRequest: UnsignedTransferRequest = {
    sender: request.sender,
    receiver: BurnEthAddress,
    token: request.token,
    amount: request.amount,
  };

  return transfersWorkflow({
    ethSigner,
    starkSigner,
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
