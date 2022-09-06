import {
  EthSigner,
  ImmutableXConfiguration,
  NftTransferDetails,
  PrepareWithdrawalRequest,
  TokenDeposit,
  TokenWithdrawal,
  UnsignedMintRequest,
  UnsignedOrderRequest,
  UnsignedTransferRequest,
  WalletConnection,
} from './types';
import { Workflows } from './workflows';
import * as API from './api';
import { generateIMXAuthorisationHeaders } from './utils';

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
  public deposit(signer: EthSigner, deposit: TokenDeposit) {
    return this.workflows.deposit(signer, deposit);
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
    requestParameters: API.CollectionsApiCreateCollectionRequest,
  ) {
    return this.collectionApi.createCollection(requestParameters);
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
    requestParameters: API.CollectionsApiUpdateCollectionRequest,
  ) {
    return this.collectionApi.updateCollection(requestParameters);
  }

  /**
   * /metadata
   */
  public addMetadataSchemaToCollection(
    requestParameters: API.MetadataApiAddMetadataSchemaToCollectionRequest,
  ) {
    return this.metadataApi.addMetadataSchemaToCollection(requestParameters);
  }

  public getMetadataSchema(
    requestParameters: API.MetadataApiGetMetadataSchemaRequest,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters);
  }

  public updateMetadataSchemaByName(
    requestParameters: API.MetadataApiUpdateMetadataSchemaByNameRequest,
  ) {
    return this.metadataApi.updateMetadataSchemaByName(requestParameters);
  }

  /**
   * Projects
   */
  // Alternative createProject & getProject that handle auth headers internally.
  // WHY:
  // - hides the unnecessary complexity around generating IMX signature from the user
  // - unlocks the possibility to change the auth mechanics without breaking the interface
  // - AxiosOptions not exposed, can be easily added later if needed
  public async createProject(
    createProjectRequest: API.CreateProjectRequest,
    ethSigner: EthSigner,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.createProject({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      createProjectRequest: createProjectRequest,
    });
  }

  public async getProject(id: string, ethSigner: EthSigner) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.getProject({
      id: id,
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
    });
  }

  public async getProjects(
    ethSigner: EthSigner,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.getProjects({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      pageSize: pageSize,
      cursor: cursor,
      orderBy: orderBy,
      direction: direction,
    });
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

  public mint(signer: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(signer, request);
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
    request: PrepareWithdrawalRequest,
  ) {
    return this.workflows.prepareWithdrawal(walletConnection, request);
  }

  public completeWithdrawal(
    signer: EthSigner,
    starkPublicKey: string,
    token: TokenWithdrawal,
  ) {
    return this.workflows.completeWithdrawal(signer, starkPublicKey, token);
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
