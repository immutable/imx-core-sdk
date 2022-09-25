import {
  AnyToken,
  EthSigner,
  formatError,
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
  MetadataRefreshesApi,
  CreateMetadataRefreshRequest,
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
  private metadataRefreshesApi: MetadataRefreshesApi;
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
    this.metadataRefreshesApi = new MetadataRefreshesApi(
      config.apiConfiguration,
    );
    this.projectsApi = new ProjectsApi(config.apiConfiguration);
    this.workflows = new Workflows(config);
  }

  /**
   * Deposit based on a token type. For unregistered Users, the Deposit will be combined with a registration in order to register the User first
   * @param ethSigner - the L1 signer
   * @param deposit - the token type amount in its corresponding unit
   * @returns a promise that resolves with the resulting transaction
   * @throws IMXError
   */
  public deposit(ethSigner: EthSigner, deposit: TokenAmount) {
    return this.workflows.deposit(ethSigner, deposit).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get details of a Deposit with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Deposit
   * @throws IMXError
   */
  public getDeposit(request: DepositsApiGetDepositRequest) {
    return this.depositsApi
      .getDeposit(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Deposits
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Deposits
   * @throws IMXError
   */
  public listDeposits(request?: DepositsApiListDepositsRequest) {
    return this.depositsApi
      .listDeposits(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Register a User to Immutable X if they are not already
   * @param walletConnection - the pair of L1/L2 signers
   * @returns a promise that resolves with void if successful
   * @throws IMXError
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Checks if a User is registered on on-chain
   * @param walletConnection - the pair of L1/L2 signers
   * @returns a promise that resolves with true if the User is registered, false otherwise
   * @throws IMXError
   */
  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get Stark keys for a registered User
   * @param ethAddress - the eth address of the User
   * @returns a promise that resolves with the requested User
   * @throws IMXError
   */
  public getUser(ethAddress: string) {
    return this.usersApi
      .getUsers({ user: ethAddress })
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of an Asset
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Asset
   * @throws IMXError
   */
  public getAsset(request: AssetsApiGetAssetRequest) {
    return this.assetApi
      .getAsset(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Assets
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Assets
   * @throws IMXError
   */
  public listAssets(request?: AssetsApiListAssetsRequest) {
    return this.assetApi
      .listAssets(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a Collection
   * @param ethSigner - the L1 signer
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Collection
   * @throws IMXError
   */
  public createCollection(
    ethSigner: EthSigner,
    request: CreateCollectionRequest,
  ) {
    return this.workflows
      .createCollection(ethSigner, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of a Collection at the given address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Collection
   * @throws IMXError
   */
  public getCollection(request: CollectionsApiGetCollectionRequest) {
    return this.collectionApi
      .getCollection(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Collection filters
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Collection Filters
   * @throws IMXError
   */
  public listCollectionFilters(
    request: CollectionsApiListCollectionFiltersRequest,
  ) {
    return this.collectionApi
      .listCollectionFilters(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Collections
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Collections
   * @throws IMXError
   */
  public listCollections(request?: CollectionsApiListCollectionsRequest) {
    return this.collectionApi
      .listCollections(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Update a Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the updated Collection
   * @throws IMXError
   */
  public updateCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    request: UpdateCollectionRequest,
  ) {
    return this.workflows
      .updateCollection(ethSigner, collectionAddress, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Add metadata schema to Collection
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the SuccessResponse if successful
   * @throws IMXError
   */
  public addMetadataSchemaToCollection(
    ethSigner: EthSigner,
    collectionAddress: string,
    request: AddMetadataSchemaToCollectionRequest,
  ) {
    return this.workflows
      .addMetadataSchemaToCollection(ethSigner, collectionAddress, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get Metadata schema
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Metadata schema
   * @throws IMXError
   */
  public getMetadataSchema(request: MetadataApiGetMetadataSchemaRequest) {
    return this.metadataApi
      .getMetadataSchema(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Update metadata schema by name
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param name - the Metadata schema name
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the SuccessResponse if successful
   * @throws IMXError
   */
  public updateMetadataSchemaByName(
    ethSigner: EthSigner,
    collectionAddress: string,
    name: string,
    request: MetadataSchemaRequest,
  ) {
    return this.workflows
      .updateMetadataSchemaByName(ethSigner, collectionAddress, name, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of metadata refreshes
   * @param ethSigner - the L1 signer
   * @param collectionAddress - the Collection contract address
   * @param pageSize - the page size of the result
   * @param cursor - the cursor
   * @returns a promise that resolves with the requested metadata refreshes
   * @throws IMXError
   */
  public listMetadataRefreshes(
    ethSigner: EthSigner,
    collectionAddress?: string,
    pageSize?: number,
    cursor?: string,
  ) {
    return this.workflows
      .listMetadataRefreshes(ethSigner, collectionAddress, pageSize, cursor)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of metadata refresh errors
   * @param ethSigner - the L1 signer
   * @param refreshId - the metadata refresh ID
   * @param pageSize - the page size of the result
   * @param cursor - the cursor
   * @returns a promise that resolves with the requested metadata refresh errors
   * @throws IMXError
   */
  public getMetadataRefreshErrors(
    ethSigner: EthSigner,
    refreshId: string,
    pageSize?: number,
    cursor?: string,
  ) {
    return this.workflows
      .getMetadataRefreshErrors(ethSigner, refreshId, pageSize, cursor)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of metadata refresh results
   * @param ethSigner - the L1 signer
   * @param refreshId - the metadata refresh ID
   * @returns a promise that resolves with the requested metadata refresh results
   * @throws IMXError
   */
  public getMetadataRefreshResults(ethSigner: EthSigner, refreshId: string) {
    return this.workflows
      .getMetadataRefreshResults(ethSigner, refreshId)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Request a metadata refresh
   * @param ethSigner - the L1 signer
   * @param request the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested metadata refresh ID
   * @throws IMXError
   */
  public requestMetadataRefresh(
    ethSigner: EthSigner,
    request: CreateMetadataRefreshRequest,
  ) {
    return this.workflows
      .requestMetadataRefresh(ethSigner, request)
      .then(res => res.data.refresh_id)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a Project
   * @param ethSigner - the L1 signer
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the created Project
   * @throws IMXError
   */
  public async createProject(
    ethSigner: EthSigner,
    request: CreateProjectRequest,
  ) {
    return this.workflows
      .createProject(ethSigner, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a Project
   * @param ethSigner - the L1 signer
   * @param id - the Project ID
   * @returns a promise that resolves with the requested Project
   * @throws IMXError
   */
  public async getProject(ethSigner: EthSigner, id: string) {
    return this.workflows
      .getProject(ethSigner, id)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get Projects owned by the given User
   * @param ethSigner - the L1 signer
   * @param pageSize - the page size of the result
   * @param cursor - the cursor
   * @param orderBy - the property to sort by
   * @param direction - direction to sort (asc/desc)
   * @returns a promise that resolves with the requested Projects
   * @throws IMXError
   */
  public async getProjects(
    ethSigner: EthSigner,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
  ) {
    return this.workflows
      .getProjects(ethSigner, pageSize, cursor, orderBy, direction)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get the token Balances of the User
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Balance
   * @throws IMXError
   */
  public getBalance(request: BalancesApiGetBalanceRequest) {
    return this.balanceApi
      .getBalance(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Balances for given User
   * @param request the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Balances
   * @throws IMXError
   */
  public listBalances(request: BalancesApiListBalancesRequest) {
    return this.balanceApi
      .listBalances(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of a Mint with the given ID
   * @param request the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Mint
   * @throws IMXError
   */
  public getMint(request: MintsApiGetMintRequest) {
    return this.mintsApi
      .getMint(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Mints
   * @param request the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Mints
   * @throws IMXError
   */
  public listMints(request?: MintsApiListMintsRequest) {
    return this.mintsApi
      .listMints(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Mint tokens in a batch with fees
   * @param ethSigner - the L1 signer
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the minted tokens
   * @throws IMXError
   */
  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get a list of Withdrawals
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Withdrawals
   * @throws IMXError
   */
  public listWithdrawals(request?: WithdrawalsApiListWithdrawalsRequest) {
    return this.withdrawalsApi
      .listWithdrawals(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of Withdrawal with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Withdrawal
   * @throws IMXError
   */
  public getWithdrawal(request: WithdrawalsApiGetWithdrawalRequest) {
    return this.withdrawalsApi
      .getWithdrawal(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a Withdrawal
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the token type amount in its corresponding unit
   * @returns a promise that resolves with the created Withdrawal
   * @throws IMXError
   */
  public prepareWithdrawal(
    walletConnection: WalletConnection,
    request: TokenAmount,
  ) {
    return this.workflows
      .prepareWithdrawal(walletConnection, request)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Completes a Withdrawal
   * @param ethSigner - the L1 signer
   * @param starkPublicKey - the Signer address
   * @param token - the token
   * @returns a promise that resolves with the transaction
   * @throws IMXError
   */
  public completeWithdrawal(
    ethSigner: EthSigner,
    starkPublicKey: string,
    token: AnyToken,
  ) {
    return this.workflows
      .completeWithdrawal(ethSigner, starkPublicKey, token)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of an Order with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Order
   * @throws IMXError
   */
  public getOrder(request: OrdersApiGetOrderRequest) {
    return this.ordersApi
      .getOrder(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Orders
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Orders
   * @throws IMXError
   */
  public listOrders(request?: OrdersApiListOrdersRequest) {
    return this.ordersApi
      .listOrders(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create an Order
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Order
   * @throws IMXError
   */
  public createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Cancel an Order
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the cancelled Order
   * @throws IMXError
   */
  public cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get details of a Trade with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Trade
   * @throws IMXError
   */
  public getTrade(request: TradesApiGetTradeRequest) {
    return this.tradesApi
      .getTrade(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Trades
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Trades
   * @throws IMXError
   */
  public listTrades(request?: TradesApiListTradesRequest) {
    return this.tradesApi
      .listTrades(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a Trade
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Trade
   * @throws IMXError
   */
  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return this.workflows.createTrade(walletConnection, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get details of a Token
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Token
   * @throws IMXError
   */
  public getToken(request: TokensApiGetTokenRequest) {
    return this.tokensApi
      .getToken(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Tokens
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Tokens
   * @throws IMXError
   */
  public listTokens(request?: TokensApiListTokensRequest) {
    return this.tokensApi
      .listTokens(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get details of a Transfer with the given ID
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested Transfer
   * @throws IMXError
   */
  public getTransfer(request: TransfersApiGetTransferRequest) {
    return this.transfersApi
      .getTransfer(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Transfers
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Transfers
   * @throws IMXError
   */
  public listTransfers(request?: TransfersApiListTransfersRequest) {
    return this.transfersApi
      .listTransfers(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a new Transfer request
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Transfer
   * @throws IMXError
   */
  public transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    return this.workflows.transfer(walletConnection, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Create a batch of NFT transfer requests
   * @param walletConnection - the pair of L1/L2 signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the list of Transfer IDs
   * @throws IMXError
   */
  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    return this.workflows
      .batchNftTransfer(walletConnection, request)
      .catch(err => {
        throw formatError(err);
      });
  }
}
