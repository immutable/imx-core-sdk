import { Signer } from '@ethersproject/abstract-signer';
import {
  DepositsApi,
  EncodingApi,
  MintsApi,
  OrdersApi,
  TokensApi,
  UsersApi,
  TransfersApi,
  TransfersApiGetTransferRequest,
  WithdrawalsApi,
  GetSignableOrderRequest,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  TradesApi,
} from '../api';
import {
  isRegisteredOnChainWorkflow,
  registerOffchainWorkflow,
  registerOffchainWorkflowWithSigner,
} from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit';
import { burnWorkflow, getBurnWorkflow } from './burn';
import {
  completeERC20WithdrawalWorfklow,
  completeERC721WithdrawalWorkflow,
  completeEthWithdrawalWorkflow,
  prepareWithdrawalWorkflow,
} from './withdrawal';
import { createOrderWorkflow, cancelOrderWorkflow } from './orders';
import { createTradeWorkflow, createTradeWorkflowWithSigner } from './trades';
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
  TokenPrepareWithdrawal,
  Config,
  ERC721Withdrawal,
  ERC20Withdrawal,
  TokenWithdrawal,
  StarkWallet,
  L1Signer,
  L2Signer,
} from '../types';
import { Registration__factory } from '../contracts';

export class Workflows {
  private readonly depositsApi: DepositsApi;
  private readonly encodingApi: EncodingApi;
  private readonly mintsApi: MintsApi;
  private readonly ordersApi: OrdersApi;
  private readonly tokensApi: TokensApi;
  private readonly tradesApi: TradesApi;
  private readonly transfersApi: TransfersApi;
  private readonly usersApi: UsersApi;
  private readonly withdrawalsApi: WithdrawalsApi;

  constructor(protected config: Config) {
    this.config = config;
    this.depositsApi = new DepositsApi(config.api);
    this.encodingApi = new EncodingApi(config.api);
    this.mintsApi = new MintsApi(config.api);
    this.ordersApi = new OrdersApi(config.api);
    this.tokensApi = new TokensApi(config.api);
    this.tradesApi = new TradesApi(config.api);
    this.transfersApi = new TransfersApi(config.api);
    this.usersApi = new UsersApi(config.api);
    this.withdrawalsApi = new WithdrawalsApi(config.api);
  }

  /** @deprecated */
  public registerOffchain(signer: Signer, starkWallet: StarkWallet) {
    return registerOffchainWorkflow(signer, starkWallet, this.usersApi);
  }


  public registerOffchainWithSigner(l1Signer: L1Signer, l2Signer: L2Signer) {
    return registerOffchainWorkflowWithSigner(l1Signer, l2Signer, this.usersApi);
  }

  public isRegisteredOnchain(signer: Signer, starkWallet: StarkWallet) {
    // Get instance of registration contract
    const registrationContract = Registration__factory.connect(
      this.config.registrationContractAddress,
      signer,
    );

    return isRegisteredOnChainWorkflow(
      starkWallet.starkPublicKey,
      registrationContract,
    );
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public transfer(
    signer: Signer,
    starkWallet: StarkWallet,
    request: UnsignedTransferRequest,
  ) {
    return transfersWorkflow(signer, starkWallet, request, this.transfersApi);
  }

  public batchNftTransfer(
    signer: Signer,
    starkWallet: StarkWallet,
    request: UnsignedBatchNftTransferRequest,
  ) {
    return batchTransfersWorkflow(
      signer,
      starkWallet,
      request,
      this.transfersApi,
    );
  }

  public burn(
    signer: Signer,
    starkWallet: StarkWallet,
    request: UnsignedBurnRequest,
  ) {
    return burnWorkflow(signer, starkWallet, request, this.transfersApi);
  }

  public getBurn(request: TransfersApiGetTransferRequest) {
    return getBurnWorkflow(request, this.transfersApi);
  }

  public deposit(signer: Signer, deposit: TokenDeposit) {
    switch (deposit.type) {
    case TokenType.ETH:
      return depositEthWorkflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.encodingApi,
        this.config,
      );
    case TokenType.ERC20:
      return depositERC20Workflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.tokensApi,
        this.encodingApi,
        this.config,
      );
    case TokenType.ERC721:
      return depositERC721Workflow(
        signer,
        deposit,
        this.depositsApi,
        this.usersApi,
        this.encodingApi,
        this.config,
      );
    }
  }

  public depositEth(signer: Signer, deposit: ETHDeposit) {
    return depositEthWorkflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public depositERC20(signer: Signer, deposit: ERC20Deposit) {
    return depositERC20Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.tokensApi,
      this.encodingApi,
      this.config,
    );
  }

  public depositERC721(signer: Signer, deposit: ERC721Deposit) {
    return depositERC721Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public prepareWithdrawal(
    signer: Signer,
    starkWallet: StarkWallet,
    token: TokenPrepareWithdrawal,
    quantity: string,
  ) {
    return prepareWithdrawalWorkflow(
      signer,
      starkWallet,
      token,
      quantity,
      this.withdrawalsApi,
    );
  }

  public completeEthWithdrawal(signer: Signer, starkPublicKey: string) {
    return completeEthWithdrawalWorkflow(
      signer,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public completeERC20Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC20Withdrawal,
  ) {
    return completeERC20WithdrawalWorfklow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public completeERC721Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC721Withdrawal,
  ) {
    return completeERC721WithdrawalWorkflow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.mintsApi,
      this.usersApi,
      this.config,
    );
  }

  public completeWithdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: TokenWithdrawal,
  ) {
    switch (token.type) {
    case TokenType.ETH:
      return this.completeEthWithdrawal(signer, starkPublicKey);
    case TokenType.ERC721:
      return this.completeERC721Withdrawal(signer, starkPublicKey, token);
    case TokenType.ERC20:
      return this.completeERC20Withdrawal(signer, starkPublicKey, token);
    }
  }

  public createOrder(
    signer: Signer,
    starkWallet: StarkWallet,
    request: GetSignableOrderRequest,
  ) {
    return createOrderWorkflow(signer, starkWallet, request, this.ordersApi);
  }

  public cancelOrder(
    signer: Signer,
    starkWallet: StarkWallet,
    request: GetSignableCancelOrderRequest,
  ) {
    return cancelOrderWorkflow(signer, starkWallet, request, this.ordersApi);
  }

  /** @deprecated */
  public createTrade(
    signer: Signer,
    starkWallet: StarkWallet,
    request: GetSignableTradeRequest,
  ) {
    return createTradeWorkflow(signer, starkWallet, request, this.tradesApi);
  }

  public createTradeWithSigner(
    l1Signer: L1Signer,
    l2Signer: L2Signer,
    request: GetSignableTradeRequest,
  ) {
    return createTradeWorkflowWithSigner(l1Signer, l2Signer, request, this.tradesApi);
  }
}
