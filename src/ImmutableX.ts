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
import {
  DepositsApi,
  MintsApi,
  OrdersApi,
  TokensApi,
  TradesApi,
  TransfersApi,
  UsersApi,
  WithdrawalsApi,
  BalancesApi,
  AssetsApi,
  CollectionsApi,
  MetadataApi,
  ProjectsApi,
  DepositsApiGetDepositRequest,
  DepositsApiListDepositsRequest,
  AssetsApiGetAssetRequest,
  AssetsApiListAssetsRequest,
  CreateCollectionRequest,
  CollectionsApiGetCollectionRequest,
  CollectionsApiListCollectionFiltersRequest,
  CollectionsApiListCollectionsRequest,
  UpdateCollectionRequest,
  AddMetadataSchemaToCollectionRequest,
  MetadataApiGetMetadataSchemaRequest,
  MetadataSchemaRequest,
  CreateProjectRequest,
  BalancesApiGetBalanceRequest,
  BalancesApiListBalancesRequest,
  MintsApiGetMintRequest,
  MintsApiListMintsRequest,
  WithdrawalsApiListWithdrawalsRequest,
  WithdrawalsApiGetWithdrawalRequest,
  OrdersApiGetOrderRequest,
  OrdersApiListOrdersRequest,
  GetSignableCancelOrderRequest,
  TradesApiGetTradeRequest,
  TradesApiListTradesRequest,
  GetSignableTradeRequest,
  TokensApiGetTokenRequest,
  TokensApiListTokensRequest,
  TransfersApiGetTransferRequest,
  TransfersApiListTransfersRequest,
} from './api';

export class ImmutableX {
  private depositsApi: DepositsApi;
  private mintsApi: MintsApi;
  private ordersApi: OrdersApi;
  private tokensApi: TokensApi;
  private tradesApi: TradesApi;
  private transfersApi: TransfersApi;
  private usersApi: UsersApi;
  private withdrawalsApi: WithdrawalsApi;
  private balanceApi: BalancesApi;
  private assetApi: AssetsApi;
  private collectionApi: CollectionsApi;
  private metadataApi: MetadataApi;
  private projectsApi: ProjectsApi;
  private workflows: Workflows;

  constructor(config: ImmutableXConfiguration) {
    this.depositsApi = new DepositsApi(config.apiConfiguration);
    this.mintsApi = new MintsApi(config.apiConfiguration);
    this.ordersApi = new OrdersApi(config.apiConfiguration);
    this.tokensApi = new TokensApi(config.apiConfiguration);
    this.tradesApi = new TradesApi(config.apiConfiguration);
    this.transfersApi = new TransfersApi(config.apiConfiguration);
    this.usersApi = new UsersApi(config.apiConfiguration);
    this.withdrawalsApi = new WithdrawalsApi(config.apiConfiguration);
    this.balanceApi = new BalancesApi(config.apiConfiguration);
    this.assetApi = new AssetsApi(config.apiConfiguration);
    this.collectionApi = new CollectionsApi(config.apiConfiguration);
    this.metadataApi = new MetadataApi(config.apiConfiguration);
    this.projectsApi = new ProjectsApi(config.apiConfiguration);
    this.workflows = new Workflows(config);
  }

  /**
   * Deposits
   */
  public deposit(ethSigner: EthSigner, deposit: TokenAmount) {
    return this.workflows.deposit(ethSigner, deposit);
  }

  public getDeposit(requestParameters: DepositsApiGetDepositRequest) {
    return this.depositsApi.getDeposit(requestParameters);
  }

  public listDeposits(requestParameters?: DepositsApiListDepositsRequest) {
    return this.depositsApi.listDeposits(requestParameters);
  }

  /**
   * User Registration
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection);
  }

  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection);
  }

  public getUser(ethAddress: string) {
    return this.usersApi.getUsers({
      user: ethAddress,
    });
  }

  /**
   * Assets
   */
  public getAsset(requestParameters: AssetsApiGetAssetRequest) {
    return this.assetApi.getAsset(requestParameters);
  }

  public listAssets(requestParameters?: AssetsApiListAssetsRequest) {
    return this.assetApi.listAssets(requestParameters);
  }

  /**
   * Collections
   */
  public createCollection(
    ethSigner: EthSigner,
    requestParameters: CreateCollectionRequest,
  ) {
    return this.workflows.createCollection(ethSigner, requestParameters);
  }

  public getCollection(requestParameters: CollectionsApiGetCollectionRequest) {
    return this.collectionApi.getCollection(requestParameters);
  }

  public listCollectionFilters(
    requestParameters: CollectionsApiListCollectionFiltersRequest,
  ) {
    return this.collectionApi.listCollectionFilters(requestParameters);
  }

  public listCollections(
    requestParameters?: CollectionsApiListCollectionsRequest,
  ) {
    return this.collectionApi.listCollections(requestParameters);
  }

  public updateCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    requestParameters: UpdateCollectionRequest,
  ) {
    return this.workflows.updateCollection(
      ethSigner,
      collectionAddress,
      requestParameters,
    );
  }

  /**
   * /metadata
   */
  public addMetadataSchemaToCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    requestParameters: AddMetadataSchemaToCollectionRequest,
  ) {
    return this.workflows.addMetadataSchemaToCollection(
      ethSigner,
      collectionAddress,
      requestParameters,
    );
  }

  public getMetadataSchema(
    requestParameters: MetadataApiGetMetadataSchemaRequest,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters);
  }

  public updateMetadataSchemaByName(
    ethSigner: EthSigner,
    collectionAddress: string,
    name: string,
    requestParameters: MetadataSchemaRequest,
  ) {
    return this.workflows.updateMetadataSchemaByName(
      ethSigner,
      collectionAddress,
      name,
      requestParameters,
    );
  }

  /**
   * Projects
   */
  public async createProject(
    ethSigner: EthSigner,
    requestParameters: CreateProjectRequest,
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
  public getBalance(requestParameters: BalancesApiGetBalanceRequest) {
    return this.balanceApi.getBalance(requestParameters);
  }

  public listBalances(requestParameters: BalancesApiListBalancesRequest) {
    return this.balanceApi.listBalances(requestParameters);
  }

  /**
   * Mints
   */
  public getMint(requestParameters: MintsApiGetMintRequest) {
    return this.mintsApi.getMint(requestParameters);
  }

  public listMints(requestParameters?: MintsApiListMintsRequest) {
    return this.mintsApi.listMints(requestParameters);
  }

  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request);
  }

  /**
   * Withdrawal
   */
  public listWithdrawals(
    requestParameters?: WithdrawalsApiListWithdrawalsRequest,
  ) {
    return this.withdrawalsApi.listWithdrawals(requestParameters);
  }

  public getWithdrawal(requestParameters: WithdrawalsApiGetWithdrawalRequest) {
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
   * Order
   */
  public getOrder(requestParameters: OrdersApiGetOrderRequest) {
    return this.ordersApi.getOrder(requestParameters);
  }

  public listOrders(requestParameters?: OrdersApiListOrdersRequest) {
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
    request: GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request);
  }

  /**
   * Trades
   */
  public getTrade(requestParameters: TradesApiGetTradeRequest) {
    return this.tradesApi.getTrade(requestParameters);
  }

  public listTrades(requestParameters?: TradesApiListTradesRequest) {
    return this.tradesApi.listTrades(requestParameters);
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return this.workflows.createTrade(walletConnection, request);
  }

  /**
   * Tokens
   */
  public getToken(requestParameters: TokensApiGetTokenRequest) {
    return this.tokensApi.getToken(requestParameters);
  }

  public listTokens(requestParameters?: TokensApiListTokensRequest) {
    return this.tokensApi.listTokens(requestParameters);
  }

  /**
   * Transfers
   */
  public getTransfer(requestParameters: TransfersApiGetTransferRequest) {
    return this.transfersApi.getTransfer(requestParameters);
  }

  public listTransfers(requestParameters?: TransfersApiListTransfersRequest) {
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
