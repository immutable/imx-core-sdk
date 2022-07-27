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
  Config,
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

const INVALID_CHAIN_ERROR_MESSAGE = 'Invalid chain.';

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

  private readonly isChainValid = (chainID: number) =>
    chainID === this.config.chainID;

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

  public async registerOffchain(walletConnection: WalletConnection) {
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

    const registrationContract = Registration__factory.connect(
      this.config.registrationContractAddress,
      walletConnection.l1Signer,
    );

    const l2Address = await walletConnection.l2Signer.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public async mint(signer: Signer, request: UnsignedMintRequest) {
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public async transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

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
    if (!this.isChainValid(await walletConnection.l1Signer.getChainId()))
      throw Error(INVALID_CHAIN_ERROR_MESSAGE);

    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }
}
