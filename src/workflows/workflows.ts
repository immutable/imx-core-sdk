import { Signer } from '@ethersproject/abstract-signer';
import {
  Configuration,
  MintsApi,
  UsersApi,
  TransfersApi,
  DepositsApi,
} from '../api';
import { registerOffchainWorkflow } from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import { depositEthWorkflow } from './deposit';
import { burnWorkflow } from './burn';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
  UnsignedBatchNftTransferRequest,
  UnsignedBurnRequest,
} from '../types';

import { depositWorkflow } from './deposit';
import { DepositableToken, TokenType, UnsignedMintRequest } from '../types';
import { depositEthWorkflow } from './deposit';
import { Core__factory } from '../contracts';

const contractAddress = process.env.STARK_CONTRACT_ADDRESS!;

export class Workflows {
  private readonly usersApi: UsersApi;
  private readonly mintsApi: MintsApi;
  private readonly transfersApi: TransfersApi;
  private readonly depositsApi: DepositsApi;

  constructor(protected configuration: Configuration) {
    this.usersApi = new UsersApi(configuration);
    this.mintsApi = new MintsApi(configuration);
    this.transfersApi = new TransfersApi(configuration);
    this.depositsApi = new DepositsApi(configuration);
  }

  public registerOffchain(signer: Signer) {
    return registerOffchainWorkflow(signer, this.usersApi);
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public transfer(signer: Signer, request: UnsignedTransferRequest) {
    return transfersWorkflow(signer, request, this.transfersApi);
  }

  public deposit(signer: Signer, token: DepositableToken) {
    // Get instance of contract
    const coreContract = Core__factory.connect(contractAddress!, signer);

    switch (token.type) {
      case TokenType.ETH:
        return depositEthWorkflow(
          signer,
          token,
          this.depositsApi,
          coreContract,
        );
      case TokenType.ERC20:
        return depositEthWorkflow(
          signer,
          token,
          this.depositsApi,
          coreContract,
        );
      case TokenType.ERC721:
        return depositEthWorkflow(
          signer,
          token,
          this.depositsApi,
          coreContract,
        );
    }
  }

  public burn(signer: Signer, request: UnsignedBurnRequest) {
    return burnWorkflow(signer, request, this.transfersApi);
  }

  public batchNftTransfer(
    signer: Signer,
    request: UnsignedBatchNftTransferRequest,
  ) {
    return batchTransfersWorkflow(signer, request, this.transfersApi);
  }

  public depositEth(signer: Signer, request: string) {
    return depositEthWorkflow(signer, request, this.depositsApi);
  }
}
