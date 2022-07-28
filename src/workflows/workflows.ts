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

  private isChainValid(chainID: number) {
    return chainID === this.config.l1Configuration.chainID;
  }

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

  private async validateChain(signer: Signer) {
    if (!this.isChainValid(await signer.getChainId()))
      throw new Error(
        'The wallet used for this operation is not from the correct network.',
      );
  }

  public async registerOffchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.l1Signer);

    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.l1Signer);

    const registrationContract = Registration__factory.connect(
      this.config.l1Configuration.registrationContractAddress,
      walletConnection.l1Signer,
    );

    const l2Address = await walletConnection.l2Signer.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public async mint(signer: Signer, request: UnsignedMintRequest) {
    await this.validateChain(signer);

    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public async transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return transfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async batchNftTransfer(
    walletConnection: WalletConnection,
    request: UnsignedBatchNftTransferRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return batchTransfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async burn(
    walletConnection: WalletConnection,
    request: UnsignedBurnRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return burnWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async getBurn(request: TransfersApiGetTransferRequest) {
    return getBurnWorkflow(request, this.transfersApi);
  }

  public async deposit(signer: Signer, deposit: TokenDeposit) {
    switch (deposit.type) {
      case TokenType.ETH:
        return this.depositEth(signer, deposit);
      case TokenType.ERC20:
        return this.depositERC20(signer, deposit);
      case TokenType.ERC721:
        return this.depositERC721(signer, deposit);
    }
  }

  public async depositEth(signer: Signer, deposit: ETHDeposit) {
    await this.validateChain(signer);

    return depositEthWorkflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public async depositERC20(signer: Signer, deposit: ERC20Deposit) {
    await this.validateChain(signer);

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

  public async depositERC721(signer: Signer, deposit: ERC721Deposit) {
    await this.validateChain(signer);

    return depositERC721Workflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public async prepareWithdrawal(
    walletConnection: WalletConnection,
    request: PrepareWithdrawalRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return prepareWithdrawalWorkflow({
      ...walletConnection,
      ...request,
      withdrawalsApi: this.withdrawalsApi,
    });
  }

  public completeWithdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: TokenWithdrawal,
  ) {
    switch (token.type) {
      case TokenType.ETH:
        return this.completeEthWithdrawal(signer, starkPublicKey);
      case TokenType.ERC20:
        return this.completeERC20Withdrawal(signer, starkPublicKey, token);
      case TokenType.ERC721:
        return this.completeERC721Withdrawal(signer, starkPublicKey, token);
    }
  }

  public async completeEthWithdrawal(signer: Signer, starkPublicKey: string) {
    await this.validateChain(signer);

    return completeEthWithdrawalWorkflow(
      signer,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public async completeERC20Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC20Withdrawal,
  ) {
    await this.validateChain(signer);

    return completeERC20WithdrawalWorfklow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  public async completeERC721Withdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: ERC721Withdrawal,
  ) {
    await this.validateChain(signer);

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

  public async createOrder(
    walletConnection: WalletConnection,
    request: GetSignableOrderRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return createOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return cancelOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    await this.validateChain(walletConnection.l1Signer);

    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }
}
