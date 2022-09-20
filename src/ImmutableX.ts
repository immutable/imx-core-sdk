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

/**
 * The main entry point for the Core SDK
 */
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
   * Deposit based on a token type. For unregistered Users, the Deposit will be combined with a registration in order to register the User first
   * @param ethSigner - the L1 signer
   * @param deposit - the token type amount in its corresponding unit
   * @returns the response of the resulting transaction
   */
  public deposit(ethSigner: EthSigner, deposit: TokenAmount) {
    return this.workflows.deposit(ethSigner, deposit);
  }

  /**
   * Get details of a Deposit with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Deposit
   */
  public getDeposit(request: DepositsApiGetDepositRequest) {
    return this.depositsApi.getDeposit(request);
  }

  /**
   * Get a list of Deposits
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Deposits
   */
  public listDeposits(request?: DepositsApiListDepositsRequest) {
    return this.depositsApi.listDeposits(request);
  }

  /**
   * Register a User to Immutable X if they are not already
   * @param walletConnection - the pair of L1/L2 signers
   * @returns void if successful
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection);
  }

  /**
   * Checks if a User is registered on on-chain
   * @param walletConnection - the pair of L1/L2 signers
   * @returns true if the User is registered, false otherwise
   */
  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection);
  }

  /**
   * Get Stark keys for a registered User
   * @param ethAddress - the eth address of the User
   * @returns the requested User
   */
  public getUser(ethAddress: string) {
    return this.usersApi.getUsers({
      user: ethAddress,
    });
  }

  /**
   * Get details of an Asset
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Asset
   */
  public getAsset(request: AssetsApiGetAssetRequest) {
    return this.assetApi.getAsset(request);
  }

  /**
   * Get a list of Assets
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Assets
   */
  public listAssets(request?: AssetsApiListAssetsRequest) {
    return this.assetApi.listAssets(request);
  }

  /**
   * Create a Collection
   * @param ethSigner - the L1 signer
   * @param request - the request object to be provided in the API request
   * @returns the created Collection
   */
  public createCollection(
    ethSigner: EthSigner,
    request: CreateCollectionRequest,
  ) {
    return this.workflows.createCollection(ethSigner, request);
  }

  /**
   * Get details of a Collection at the given address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Collection
   */
  public getCollection(request: CollectionsApiGetCollectionRequest) {
    return this.collectionApi.getCollection(request);
  }

  /**
   * Get a list of Collection filters
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Collection Filters
   */
  public listCollectionFilters(
    request: CollectionsApiListCollectionFiltersRequest,
  ) {
    return this.collectionApi.listCollectionFilters(request);
  }

  /**
   * Get a list of Collections
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Collections
   */
  public listCollections(request?: CollectionsApiListCollectionsRequest) {
    return this.collectionApi.listCollections(request);
  }

  /**
   * Update a Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the updated Collection
   */
  public updateCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    request: UpdateCollectionRequest,
  ) {
    return this.workflows.updateCollection(
      ethSigner,
      collectionAddress,
      request,
    );
  }

  /**
   * Add metadata schema to Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the SuccessResponse if successful
   */
  public addMetadataSchemaToCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    request: AddMetadataSchemaToCollectionRequest,
  ) {
    return this.workflows.addMetadataSchemaToCollection(
      ethSigner,
      collectionAddress,
      request,
    );
  }

  /**
   * Get Metadata schema
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Metadata schema
   */
  public getMetadataSchema(request: MetadataApiGetMetadataSchemaRequest) {
    return this.metadataApi.getMetadataSchema(request);
  }

  /**
   * Update metadata schema by name
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param name - the Metadata schema name
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the SuccessResponse if successful
   */
  public updateMetadataSchemaByName(
    ethSigner: EthSigner,
    collectionAddress: string,
    name: string,
    request: MetadataSchemaRequest,
  ) {
    return this.workflows.updateMetadataSchemaByName(
      ethSigner,
      collectionAddress,
      name,
      request,
    );
  }

  /**
   * Create a Project
   * @param ethSigner - the L1 signer
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the created Project
   */
  public async createProject(
    ethSigner: EthSigner,
    request: CreateProjectRequest,
  ) {
    return this.workflows.createProject(ethSigner, request);
  }

  /**
   * Get a Project
   * @param ethSigner - the L1 signer
   * @param id - the Project ID
   * @returns the requested Project
   */
  public async getProject(ethSigner: EthSigner, id: string) {
    return this.workflows.getProject(ethSigner, id);
  }

  /**
   * Get Projects owned by the given User
   * @param ethSigner - the L1 signer
   * @param pageSize - the page size of the result
   * @param cursor - the cursor
   * @param orderBy - the property to sort by
   * @param direction - direction to sort (asc/desc)
   * @returns the requested Projects
   */
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
   * Get the token Balances of the User
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Balance
   */
  public getBalance(request: BalancesApiGetBalanceRequest) {
    return this.balanceApi.getBalance(request);
  }

  /**
   * Get a list of Balances for given User
   * @param request the request object containing the parameters to be provided in the API request
   * @return the requested list of Balances
   */
  public listBalances(request: BalancesApiListBalancesRequest) {
    return this.balanceApi.listBalances(request);
  }

  /**
   * Get details of a Mint with the given ID
   * @param request the request object containing the parameters to be provided in the API request
   * @returns the requested Mint
   */
  public getMint(request: MintsApiGetMintRequest) {
    return this.mintsApi.getMint(request);
  }

  /**
   * Get a list of Mints
   * @param request the request object containing the parameters to be provided in the API request
   * @returns the requested list of Mints
   */
  public listMints(request?: MintsApiListMintsRequest) {
    return this.mintsApi.listMints(request);
  }

  /**
   * Mint tokens in a batch with fees
   * @param ethSigner - the L1 signer
   * @param request - the request object to be provided in the API request
   * @returns the minted tokens
   */
  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request);
  }

  /**
   * Get a list of Withdrawals
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Withdrawals
   */
  public listWithdrawals(request?: WithdrawalsApiListWithdrawalsRequest) {
    return this.withdrawalsApi.listWithdrawals(request);
  }

  /**
   * Get details of Withdrawal with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Withdrawal
   */
  public getWithdrawal(request: WithdrawalsApiGetWithdrawalRequest) {
    return this.withdrawalsApi.getWithdrawal(request);
  }

  /**
   * Create a Withdrawal
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the token type amount in its corresponding unit
   * @returns the created Withdrawal
   */
  public prepareWithdrawal(
    walletConnection: WalletConnection,
    request: TokenAmount,
  ) {
    return this.workflows.prepareWithdrawal(walletConnection, request);
  }

  /**
   * Completes a Withdrawal
   * @param ethSigner - the L1 signer
   * @param starkPublicKey - the Signer address
   * @param token - the token
   * @returns the transaction
   */
  public completeWithdrawal(
    ethSigner: EthSigner,
    starkPublicKey: string,
    token: AnyToken,
  ) {
    return this.workflows.completeWithdrawal(ethSigner, starkPublicKey, token);
  }

  /**
   * Get details of an Order with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Order
   */
  public getOrder(request: OrdersApiGetOrderRequest) {
    return this.ordersApi.getOrder(request);
  }

  /**
   * Get a list of Orders
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Orders
   */
  public listOrders(request?: OrdersApiListOrdersRequest) {
    return this.ordersApi.listOrders(request);
  }

  /**
   * Create an Order
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns the created Order
   */
  public createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request);
  }

  /**
   * Cancel an Order
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns the cancelled Order
   */
  public cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request);
  }

  /**
   * Get details of a Trade with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Trade
   */
  public getTrade(request: TradesApiGetTradeRequest) {
    return this.tradesApi.getTrade(request);
  }

  /**
   * Get a list of Trades
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Trades
   */
  public listTrades(request?: TradesApiListTradesRequest) {
    return this.tradesApi.listTrades(request);
  }

  /**
   * Create a Trade
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns the created Trade
   */
  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return this.workflows.createTrade(walletConnection, request);
  }

  /**
   * Get details of a Token
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Token
   */
  public getToken(request: TokensApiGetTokenRequest) {
    return this.tokensApi.getToken(request);
  }

  /**
   * Get a list of Tokens
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Tokens
   */
  public listTokens(request?: TokensApiListTokensRequest) {
    return this.tokensApi.listTokens(request);
  }

  /**
   * Get details of a Transfer with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested Transfer
   */
  public getTransfer(request: TransfersApiGetTransferRequest) {
    return this.transfersApi.getTransfer(request);
  }

  /**
   * Get a list of Transfers
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Transfers
   */
  public listTransfers(request?: TransfersApiListTransfersRequest) {
    return this.transfersApi.listTransfers(request);
  }

  /**
   * Create a new Transfer request
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns the created Transfer
   */
  public transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    return this.workflows.transfer(walletConnection, request);
  }

  /**
   * Create a batch of transfer requests
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns the list of Transfer IDs
   */
  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    return this.workflows.batchNftTransfer(walletConnection, request);
  }
}
