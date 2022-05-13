import {
  Configuration,
  DepositsApi,
  EncodingApi,
  MintsApi,
  TokensApi,
  UsersApi,
  TransfersApi,
  TransfersApiGetTransferRequest,
} from '../api';
import { Signer } from '@ethersproject/abstract-signer';
import { registerOffchainWorkflow } from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit'
import { burnWorkflow, getBurnWorkflow } from './burn';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
  UnsignedBatchNftTransferRequest,
  ERC20Deposit,
  ERC721Deposit,
  ETHDeposit,
  TokenDeposit,
  TokenType,
  UnsignedBurnRequest,
} from '../types';
import { Core__factory } from '../contracts';

const contractAddress = process.env.STARK_CONTRACT_ADDRESS;

export class Workflows {
  private readonly usersApi: UsersApi;
  private readonly mintsApi: MintsApi;
  private readonly transfersApi: TransfersApi;
  private readonly depositsApi: DepositsApi;
  private readonly tokensApi: TokensApi;
  private readonly encodingApi: EncodingApi;

  constructor(protected configuration: Configuration) {
    this.usersApi = new UsersApi(configuration);
    this.mintsApi = new MintsApi(configuration);
    this.transfersApi = new TransfersApi(configuration);
    this.usersApi = new UsersApi(configuration);
    this.mintsApi = new MintsApi(configuration);
    this.depositsApi = new DepositsApi(configuration);
    this.tokensApi = new TokensApi(configuration);
    this.encodingApi = new EncodingApi(configuration);
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

  public batchNftTransfer(
    signer: Signer,
    request: UnsignedBatchNftTransferRequest,
  ) {
    return batchTransfersWorkflow(signer, request, this.transfersApi);
  }

  public burn(signer: Signer, request: UnsignedBurnRequest) {
    return burnWorkflow(signer, request, this.transfersApi);
  }

  public deposit(signer: Signer, deposit: TokenDeposit) {
    // Get instance of contract
    const coreContract = Core__factory.connect(contractAddress!, signer);

    switch (deposit.type) {
    case TokenType.ETH:
      return depositEthWorkflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.encodingApi,
        coreContract,
      );
    case TokenType.ERC20:
      return depositERC20Workflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.tokensApi,
        this.encodingApi,
        coreContract,
      );
    case TokenType.ERC721:
      return depositERC721Workflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.encodingApi,
        coreContract,
      );
    }
  }

  public depositEth(signer: Signer, deposit: ETHDeposit) {
    // Get instance of contract
    const coreContract = Core__factory.connect(contractAddress!, signer);

    return depositEthWorkflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      coreContract,
    );
  }

  public getBurn(request: TransfersApiGetTransferRequest) {
    return getBurnWorkflow(request, this.transfersApi)
  }

  public depositERC20(signer: Signer, deposit: ERC20Deposit) {
    // Get instance of contract
    const coreContract = Core__factory.connect(contractAddress!, signer);

    return depositERC20Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.tokensApi,
      this.encodingApi,
      coreContract,
    );
  }

  public depositERC721(signer: Signer, deposit: ERC721Deposit) {
    // Get instance of contract
    const coreContract = Core__factory.connect(contractAddress!, signer);

    return depositERC721Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      coreContract,
    );
  }
}
