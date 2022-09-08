import {
  AnyToken,
  EthSigner,
  ImmutableXConfiguration,
  NftTransferDetails,
  TokenAmount,
  UnsignedMintRequest,
  UnsignedOrderRequest,
  UnsignedTransferRequest,
  WalletConnection,
} from './types';
import { Workflows } from './workflows';
import * as API from './api';

export class ImmutableX {
  private depositsApi: API.DepositsApi;
  private mintsApi: API.MintsApi;
  private ordersApi: API.OrdersApi;
  private tokensApi: API.TokensApi;
  private tradesApi: API.TradesApi;
  private transfersApi: API.TransfersApi;
  private usersApi: API.UsersApi;
  private withdrawalsApi: API.WithdrawalsApi;
  private balanceApi: API.BalancesApi;
  private assetApi: API.AssetsApi;
  private collectionApi: API.CollectionsApi;
  private metadataApi: API.MetadataApi;
  private projectsApi: API.ProjectsApi;
  private workflows: Workflows;

  constructor(config: ImmutableXConfiguration) {
    this.depositsApi = new API.DepositsApi(config.apiConfiguration);
    this.mintsApi = new API.MintsApi(config.apiConfiguration);
    this.ordersApi = new API.OrdersApi(config.apiConfiguration);
    this.tokensApi = new API.TokensApi(config.apiConfiguration);
    this.tradesApi = new API.TradesApi(config.apiConfiguration);
    this.transfersApi = new API.TransfersApi(config.apiConfiguration);
    this.usersApi = new API.UsersApi(config.apiConfiguration);
    this.withdrawalsApi = new API.WithdrawalsApi(config.apiConfiguration);
    this.balanceApi = new API.BalancesApi(config.apiConfiguration);
    this.assetApi = new API.AssetsApi(config.apiConfiguration);
    this.collectionApi = new API.CollectionsApi(config.apiConfiguration);
    this.metadataApi = new API.MetadataApi(config.apiConfiguration);
    this.projectsApi = new API.ProjectsApi(config.apiConfiguration);
    this.workflows = new Workflows(config);
  }

  /**
   * Deposits
   */
  public deposit(ethSigner: EthSigner, deposit: TokenAmount) {
    return this.workflows.deposit(ethSigner, deposit);
  }

  public getDeposit(requestParameters: API.DepositsApiGetDepositRequest) {
    return this.depositsApi.getDeposit(requestParameters);
  }

  public listDeposits(requestParameters?: API.DepositsApiListDepositsRequest) {
    return this.depositsApi.listDeposits(requestParameters);
  }

  /**
   * Registration
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection);
  }

  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection);
  }

  /**
   * Assets
   */
  public getAsset(requestParameters: API.AssetsApiGetAssetRequest) {
    return this.assetApi.getAsset(requestParameters);
  }

  public listAsset(requestParameters?: API.AssetsApiListAssetsRequest) {
    return this.assetApi.listAssets(requestParameters);
  }

  /**
   * Collections
   */
  public createCollection(
    ethSigner: EthSigner,
    requestParameters: API.CreateCollectionRequest,
  ) {
    return this.workflows.createCollection(ethSigner, requestParameters);
  }

  public getCollection(
    requestParameters: API.CollectionsApiGetCollectionRequest,
  ) {
    return this.collectionApi.getCollection(requestParameters);
  }

  public listCollectionFilters(
    requestParameters: API.CollectionsApiListCollectionFiltersRequest,
  ) {
    return this.collectionApi.listCollectionFilters(requestParameters);
  }

  public listCollections(
    requestParameters?: API.CollectionsApiListCollectionsRequest,
  ) {
    return this.collectionApi.listCollections(requestParameters);
  }

  public updateCollection(
    ethSigner: EthSigner,
    address: string,
    requestParameters: API.UpdateCollectionRequest,
  ) {
    return this.workflows.updateCollection(
      ethSigner,
      address,
      requestParameters,
    );
  }

  /**
   * /metadata
   */
  public addMetadataSchemaToCollection(
    ethSigner: EthSigner,
    address: string,
    requestParameters: API.AddMetadataSchemaToCollectionRequest,
  ) {
    return this.workflows.addMetadataSchemaToCollection(
      ethSigner,
      address,
      requestParameters,
    );
  }

  public getMetadataSchema(
    requestParameters: API.MetadataApiGetMetadataSchemaRequest,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters);
  }

  public updateMetadataSchemaByName(
    ethSigner: EthSigner,
    address: string,
    name: string,
    requestParameters: API.MetadataSchemaRequest,
  ) {
    return this.workflows.updateMetadataSchemaByName(
      ethSigner,
      address,
      name,
      requestParameters,
    );
  }

  /**
   * Projects
   */
  public async createProject(
    ethSigner: EthSigner,
    requestParameters: API.CreateProjectRequest,
  ) {
    return this.workflows.createProject(ethSigner, requestParameters);
  }

  public async getProject(ethSigner: EthSigner, id: string) {
    return this.workflows.getProject(ethSigner, id);
  }

  public async getProjects(
    ethSigner: EthSigner,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
  ) {
    return this.workflows.getProjects(
      ethSigner,
      pageSize,
      cursor,
      orderBy,
      direction,
    );
  }

  /**
   * Balances
   */
  public getBalance(requestParameters: API.BalancesApiGetBalanceRequest) {
    return this.balanceApi.getBalance(requestParameters);
  }

  public listBalances(requestParameters: API.BalancesApiListBalancesRequest) {
    return this.balanceApi.listBalances(requestParameters);
  }

  /**
   * Mints
   */
  public getMint(requestParameters: API.MintsApiGetMintRequest) {
    return this.mintsApi.getMint(requestParameters);
  }

  public listMints(requestParameters?: API.MintsApiListMintsRequest) {
    return this.mintsApi.listMints(requestParameters);
  }

  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request);
  }

  /**
   * Withdrawal
   */
  public listWithdrawals(
    requestParameters?: API.WithdrawalsApiListWithdrawalsRequest,
  ) {
    return this.withdrawalsApi.listWithdrawals(requestParameters);
  }

  public getWithdrawal(
    requestParameters: API.WithdrawalsApiGetWithdrawalRequest,
  ) {
    return this.withdrawalsApi.getWithdrawal(requestParameters);
  }

  public prepareWithdrawal(
    walletConnection: WalletConnection,
    request: TokenAmount,
  ) {
    return this.workflows.prepareWithdrawal(walletConnection, request);
  }

  public completeWithdrawal(
    ethSigner: EthSigner,
    starkPublicKey: string,
    token: AnyToken,
  ) {
    return this.workflows.completeWithdrawal(ethSigner, starkPublicKey, token);
  }

  /**
   * Users
   */
  public getUsers(requestParameters: API.UsersApiGetUsersRequest) {
    return this.usersApi.getUsers(requestParameters);
  }

  /**
   * Order
   */
  public getOrder(requestParameters: API.OrdersApiGetOrderRequest) {
    return this.ordersApi.getOrder(requestParameters);
  }

  public listOrders(requestParameters?: API.OrdersApiListOrdersRequest) {
    return this.ordersApi.listOrders(requestParameters);
  }

  public createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request);
  }

  public cancelOrder(
    walletConnection: WalletConnection,
    request: API.GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request);
  }

  /**
   * Trades
   */
  public getTrade(requestParameters: API.TradesApiGetTradeRequest) {
    return this.tradesApi.getTrade(requestParameters);
  }

  public listTrades(requestParameters?: API.TradesApiListTradesRequest) {
    return this.tradesApi.listTrades(requestParameters);
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: API.GetSignableTradeRequest,
  ) {
    return this.workflows.createTrade(walletConnection, request);
  }

  /**
   * Tokens
   */
  public getToken(requestParameters: API.TokensApiGetTokenRequest) {
    return this.tokensApi.getToken(requestParameters);
  }

  public listTokens(requestParameters?: API.TokensApiListTokensRequest) {
    return this.tokensApi.listTokens(requestParameters);
  }

  /**
   * Transfers
   */
  public getTransfer(requestParameters: API.TransfersApiGetTransferRequest) {
    return this.transfersApi.getTransfer(requestParameters);
  }

  public listTransfers(
    requestParameters?: API.TransfersApiListTransfersRequest,
  ) {
    return this.transfersApi.listTransfers(requestParameters);
  }

  public transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    return this.workflows.transfer(walletConnection, request);
  }

  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    return this.workflows.batchNftTransfer(walletConnection, request);
  }
}
