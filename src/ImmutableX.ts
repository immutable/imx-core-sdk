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
   * Deposit based on a token type
   * @param ethSigner - the L1 signer
   * @param deposit - the token type amount in its corresponding unit
   * @returns the response of the resulting transaction
   */
  public deposit(ethSigner: EthSigner, deposit: TokenAmount) {
    return this.workflows.deposit(ethSigner, deposit);
  }

  /**
   * Get details of a Deposit with the given ID
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Deposit
   */
  public getDeposit(requestParameters: DepositsApiGetDepositRequest) {
    return this.depositsApi.getDeposit(requestParameters);
  }

  /**
   * Get a list of Deposits
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Deposits
   */
  public listDeposits(requestParameters?: DepositsApiListDepositsRequest) {
    return this.depositsApi.listDeposits(requestParameters);
  }

  /**
   * Register a User to Immutable X if they are not already
   * @param walletConnection - the pair of Signers for the wallet
   * @returns void if successful
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection);
  }

  /**
   * Checks if a User is registered on on-chain
   * @param walletConnection - the pair of Signers for the wallet
   * @returns true if the User is registered, false otherwise
   */
  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection);
  }

  /**
   * Get stark keys for a registered User
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Asset
   */
  public getAsset(requestParameters: AssetsApiGetAssetRequest) {
    return this.assetApi.getAsset(requestParameters);
  }

  /**
   * Get a list of Assets
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Assets
   */
  public listAssets(requestParameters?: AssetsApiListAssetsRequest) {
    return this.assetApi.listAssets(requestParameters);
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Collection
   */
  public getCollection(requestParameters: CollectionsApiGetCollectionRequest) {
    return this.collectionApi.getCollection(requestParameters);
  }

  /**
   * Get a list of Collection filters
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Collection Filters
   */
  public listCollectionFilters(
    requestParameters: CollectionsApiListCollectionFiltersRequest,
  ) {
    return this.collectionApi.listCollectionFilters(requestParameters);
  }

  /**
   * Get a list of Collections
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Collections
   */
  public listCollections(
    requestParameters?: CollectionsApiListCollectionsRequest,
  ) {
    return this.collectionApi.listCollections(requestParameters);
  }

  /**
   * Update a Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the updated Collection
   */
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
   * Add metadata schema to Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the SuccessResponse if successful
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

  /**
   * Get Metadata schema
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Metadata schema
   */
  public getMetadataSchema(
    requestParameters: MetadataApiGetMetadataSchemaRequest,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters);
  }

  /**
   * Update metadata schema by name
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param name - the Metadata schema name
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the SuccessResponse if successful
   */
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
   * Create a Project
   * @param ethSigner - the L1 signer
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the created Project
   */
  public async createProject(
    ethSigner: EthSigner,
    requestParameters: CreateProjectRequest,
  ) {
    return this.workflows.createProject(ethSigner, requestParameters);
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
   * Get Projects
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Balance
   */
  public getBalance(requestParameters: BalancesApiGetBalanceRequest) {
    return this.balanceApi.getBalance(requestParameters);
  }

  /**
   * Get a list of Balances for given User
   * @param requestParameters the request object containing the parameters to be provided in the API request
   * @return the requested list of Balances
   */
  public listBalances(requestParameters: BalancesApiListBalancesRequest) {
    return this.balanceApi.listBalances(requestParameters);
  }

  /**
   * Get details of a Mint with the given ID
   * @param requestParameters the request object containing the parameters to be provided in the API request
   * @returns the requested Mint
   */
  public getMint(requestParameters: MintsApiGetMintRequest) {
    return this.mintsApi.getMint(requestParameters);
  }

  /**
   * Get a list of Mints
   * @param requestParameters the request object containing the parameters to be provided in the API request
   * @returns the requested list of Mints
   */
  public listMints(requestParameters?: MintsApiListMintsRequest) {
    return this.mintsApi.listMints(requestParameters);
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Withdrawals
   */
  public listWithdrawals(
    requestParameters?: WithdrawalsApiListWithdrawalsRequest,
  ) {
    return this.withdrawalsApi.listWithdrawals(requestParameters);
  }

  /**
   * Get details of Withdrawal with the given ID
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Withdrawal
   */
  public getWithdrawal(requestParameters: WithdrawalsApiGetWithdrawalRequest) {
    return this.withdrawalsApi.getWithdrawal(requestParameters);
  }

  /**
   * Create a Withdrawal
   * @param walletConnection - the pair of Signers for the wallet
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Order
   */
  public getOrder(requestParameters: OrdersApiGetOrderRequest) {
    return this.ordersApi.getOrder(requestParameters);
  }

  /**
   * Get a list of Orders
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Orders
   */
  public listOrders(requestParameters?: OrdersApiListOrdersRequest) {
    return this.ordersApi.listOrders(requestParameters);
  }

  /**
   * Create an Order
   * @param walletConnection - the pair of Signers for the wallet
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
   * @param walletConnection - the pair of Signers for the wallet
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Trade
   */
  public getTrade(requestParameters: TradesApiGetTradeRequest) {
    return this.tradesApi.getTrade(requestParameters);
  }

  /**
   * Get a list of Trades
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Trades
   */
  public listTrades(requestParameters?: TradesApiListTradesRequest) {
    return this.tradesApi.listTrades(requestParameters);
  }

  /**
   * Create a Trade
   * @param walletConnection - the pair of Signers for the wallet
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
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Token
   */
  public getToken(requestParameters: TokensApiGetTokenRequest) {
    return this.tokensApi.getToken(requestParameters);
  }

  /**
   * Get a list of Tokens
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Tokens
   */
  public listTokens(requestParameters?: TokensApiListTokensRequest) {
    return this.tokensApi.listTokens(requestParameters);
  }

  /**
   * Get details of a Transfer with the given ID
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested Transfer
   */
  public getTransfer(requestParameters: TransfersApiGetTransferRequest) {
    return this.transfersApi.getTransfer(requestParameters);
  }

  /**
   * Get a list of Transfers
   * @param requestParameters - the request object containing the parameters to be provided in the API request
   * @returns the requested list of Transfers
   */
  public listTransfers(requestParameters?: TransfersApiListTransfersRequest) {
    return this.transfersApi.listTransfers(requestParameters);
  }

  /**
   * Create a new Transfer request
   * @param walletConnection - the pair of Signers for the wallet
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
   * @param walletConnection - the pair of Signers for the wallet
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
