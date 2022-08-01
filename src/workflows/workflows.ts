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
  UnsignedMintRequest,
  UnsignedTransferRequest,
  UnsignedBatchNftTransferRequest,
  ERC20Deposit,
  ERC721Deposit,
  ETHDeposit,
  TokenDeposit,
  TokenType,
  UnsignedBurnRequest,
  ImmutableXConfiguration,
  ERC721Withdrawal,
  ERC20Withdrawal,
  TokenWithdrawal,
  PrepareWithdrawalRequest,
  WalletConnection,
} from '../types';
import { Registration__factory } from '../contracts';
import {
  isRegisteredOnChainWorkflow,
  registerOffchainWorkflow,
} from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit';
import { getBurnWorkflow, burnWorkflow } from './burn';
import {
  completeERC20WithdrawalWorfklow,
  completeERC721WithdrawalWorkflow,
  completeEthWithdrawalWorkflow,
  prepareWithdrawalWorkflow,
} from './withdrawal';
import { cancelOrderWorkflow, createOrderWorkflow } from './orders';
import { createTradeWorkflow } from './trades';

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

  constructor(protected config: ImmutableXConfiguration) {
    this.config = config;
    this.depositsApi = new DepositsApi(config.apiConfiguration);
    this.encodingApi = new EncodingApi(config.apiConfiguration);
    this.mintsApi = new MintsApi(config.apiConfiguration);
    this.ordersApi = new OrdersApi(config.apiConfiguration);
    this.tokensApi = new TokensApi(config.apiConfiguration);
    this.tradesApi = new TradesApi(config.apiConfiguration);
    this.transfersApi = new TransfersApi(config.apiConfiguration);
    this.usersApi = new UsersApi(config.apiConfiguration);
    this.withdrawalsApi = new WithdrawalsApi(config.apiConfiguration);
  }

  public registerOffchain(walletConnection: WalletConnection) {
    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    const registrationContract = Registration__factory.connect(
      this.config.l1Configuration.registrationContractAddress,
      walletConnection.l1Signer,
    );

    const l2Address = await walletConnection.l2Signer.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    return transfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: UnsignedBatchNftTransferRequest,
  ) {
    return batchTransfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public burn(
    walletConnection: WalletConnection,
    request: UnsignedBurnRequest,
  ) {
    return burnWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
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
    walletConnection: WalletConnection,
    request: PrepareWithdrawalRequest,
  ) {
    return prepareWithdrawalWorkflow({
      ...walletConnection,
      ...request,
      withdrawalsApi: this.withdrawalsApi,
    });
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
    walletConnection: WalletConnection,
    request: GetSignableOrderRequest,
  ) {
    return createOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    return cancelOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }
}
