import { Signer } from '@ethersproject/abstract-signer';
import { Configuration, MintsApi, UsersApi, TransfersApi } from '../api';
import { registerOffchainWorkflow } from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
  UnsignedBatchNftTransferRequest,
} from '../types';

export class Workflows {
  private readonly usersApi:      UsersApi
  private readonly mintsApi:      MintsApi
  private readonly transfersApi:  TransfersApi
  constructor(protected configuration: Configuration) {
    this.usersApi       = new UsersApi(configuration)
    this.mintsApi       = new MintsApi(configuration)
    this.transfersApi   = new TransfersApi(configuration)
  }

  public registerOffchain(signer: Signer) {
    return registerOffchainWorkflow(signer, this.usersApi)
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi)
  }

  public transfer(signer: Signer, request: UnsignedTransferRequest) {
    return transfersWorkflow(signer, request, this.transfersApi)
  }

  public batchNftTransfer(signer: Signer, request: UnsignedBatchNftTransferRequest) {
    return batchTransfersWorkflow(signer, request, this.transfersApi)
  }
}