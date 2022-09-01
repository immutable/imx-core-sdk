import { Signer } from '@ethersproject/abstract-signer';

import {
  DepositsApi,
  EncodingApi,
  MintsApi,
  OrdersApi,
  TokensApi,
  UsersApi,
  TransfersApi,
  WithdrawalsApi,
  GetSignableOrderRequest,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  TradesApi,
} from '../api';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
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
import { transfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit';
import { burnWorkflow } from './burn';
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
    return chainID === this.config.ethConfiguration.chainID;
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
    const chainID = await signer.getChainId();

    if (!this.isChainValid(chainID))
      throw new Error(
        'The wallet used for this operation is not from the correct network.',
      );
  }

  public async registerOffchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.ethSigner);

    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.ethSigner);

    const registrationContract = Registration__factory.connect(
      this.config.ethConfiguration.registrationContractAddress,
      walletConnection.ethSigner,
    );

    const l2Address = await walletConnection.starkSigner.getAddress();

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
    await this.validateChain(walletConnection.ethSigner);

    return transfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async burn(
    walletConnection: WalletConnection,
    request: UnsignedBurnRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return burnWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
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

  private async depositEth(signer: Signer, deposit: ETHDeposit) {
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

  private async depositERC20(signer: Signer, deposit: ERC20Deposit) {
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

  private async depositERC721(signer: Signer, deposit: ERC721Deposit) {
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
    await this.validateChain(walletConnection.ethSigner);

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

  private async completeEthWithdrawal(signer: Signer, starkPublicKey: string) {
    await this.validateChain(signer);

    return completeEthWithdrawalWorkflow(
      signer,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  private async completeERC20Withdrawal(
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

  private async completeERC721Withdrawal(
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
    await this.validateChain(walletConnection.ethSigner);

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
    await this.validateChain(walletConnection.ethSigner);

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
    await this.validateChain(walletConnection.ethSigner);

    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }
}
