import { Configuration, DepositsApi, MintsApi, UsersApi } from '../api';
import { Signer } from '@ethersproject/abstract-signer';
import { registerOffchainWorkflow } from './registration';
import { mintingWorkflow } from './minting';
import { UnsignedMintRequest } from '../types';
import { depositEthWorkflow } from './deposit';

export class Workflows {
  private readonly usersApi: UsersApi;
  private readonly mintsApi: MintsApi;
  private readonly depositsApi: DepositsApi;
  constructor(protected configuration: Configuration) {
    this.usersApi = new UsersApi(configuration);
    this.mintsApi = new MintsApi(configuration);
    this.depositsApi = new DepositsApi(configuration);
  }

  public registerOffchain(signer: Signer) {
    return registerOffchainWorkflow(signer, this.usersApi);
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public depositEth(signer: Signer, amount: string) {
    return depositEthWorkflow(signer, amount, this.depositsApi);
  }
}
