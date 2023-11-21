import {
  AnyToken,
  EthSigner,
  NftTransferDetails,
  TokenAmount,
  UnsignedExchangeTransferRequest,
  UnsignedMintRequest,
  UnsignedOrderRequest,
  UnsignedTransferRequest,
  WalletConnection,
} from './types';
import { Workflows } from './workflows';
import {
  AddMetadataSchemaToCollectionRequest,
  AssetsApi,
  AssetsApiGetAssetRequest,
  AssetsApiListAssetsRequest,
  BalancesApi,
  BalancesApiGetBalanceRequest,
  BalancesApiListBalancesRequest,
  CollectionsApi,
  CollectionsApiGetCollectionRequest,
  CollectionsApiListCollectionFiltersRequest,
  CollectionsApiListCollectionsRequest,
  CreateCollectionRequest,
  CreateMetadataRefreshRequest,
  CreateProjectRequest,
  DepositsApi,
  DepositsApiGetDepositRequest,
  DepositsApiListDepositsRequest,
  ExchangesApi,
  ExchangesApiCreateExchangeRequest,
  ExchangesApiGetExchangeRequest,
  ExchangesApiGetExchangesRequest,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  MetadataApi,
  MetadataApiGetMetadataSchemaRequest,
  MetadataRefreshesApi,
  MetadataSchemaRequest,
  MintsApi,
  MintsApiGetMintRequest,
  MintsApiListMintsRequest,
  NftCheckoutPrimaryApi,
  NftCheckoutPrimaryApiCreateNftPrimaryRequest,
  NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest,
  NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest,
  NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest,
  OrdersApi,
  OrdersApiGetOrderV3Request,
  OrdersApiListOrdersV3Request,
  ProjectsApi,
  TokensApi,
  TokensApiGetTokenRequest,
  TokensApiListTokensRequest,
  TradesApi,
  TradesApiGetTradeV3Request,
  TradesApiListTradesV3Request,
  TransfersApi,
  TransfersApiGetTransferRequest,
  TransfersApiListTransfersRequest,
  UpdateCollectionRequest,
  UsersApi,
  WithdrawalsApi,
  WithdrawalsApiGetWithdrawalRequest,
  WithdrawalsApiListWithdrawalsRequest,
} from './api';
import { formatError } from './utils/formatError';
import { ImmutableXConfiguration } from './config';

/**
 * The main entry point for the Core SDK
 */
export class ImmutableX {
  public depositsApi: DepositsApi;
  public mintsApi: MintsApi;
  public ordersApi: OrdersApi;
  public tokensApi: TokensApi;
  public tradesApi: TradesApi;
  public transfersApi: TransfersApi;
  public exchangeApi: ExchangesApi;
  public nftCheckoutPrimaryApi: NftCheckoutPrimaryApi;
  public usersApi: UsersApi;
  public withdrawalsApi: WithdrawalsApi;
  public balanceApi: BalancesApi;
  public assetApi: AssetsApi;
  public collectionApi: CollectionsApi;
  public metadataApi: MetadataApi;
  public metadataRefreshesApi: MetadataRefreshesApi;
  public projectsApi: ProjectsApi;
  private workflows: Workflows;

  constructor(config: ImmutableXConfiguration) {
    this.depositsApi = new DepositsApi(config.apiConfiguration);
    this.mintsApi = new MintsApi(config.apiConfiguration);
    this.ordersApi = new OrdersApi(config.apiConfiguration);
    this.tokensApi = new TokensApi(config.apiConfiguration);
    this.tradesApi = new TradesApi(config.apiConfiguration);
    this.transfersApi = new TransfersApi(config.apiConfiguration);
    this.exchangeApi = new ExchangesApi(config.apiConfiguration);
    this.usersApi = new UsersApi(config.apiConfiguration);
    this.withdrawalsApi = new WithdrawalsApi(config.apiConfiguration);
    this.balanceApi = new BalancesApi(config.apiConfiguration);
    this.assetApi = new AssetsApi(config.apiConfiguration);
    this.collectionApi = new CollectionsApi(config.apiConfiguration);
    this.metadataApi = new MetadataApi(config.apiConfiguration);
    this.metadataRefreshesApi = new MetadataRefreshesApi(
      config.apiConfiguration,
    );
    this.nftCheckoutPrimaryApi = new NftCheckoutPrimaryApi(
      config.apiConfiguration,
    );
    this.projectsApi = new ProjectsApi(config.apiConfiguration);
    this.workflows = new Workflows(config);
  }

  public getStarkExContractVersion() {
    return this.workflows
      .getStarkExContractVersion()
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Deposit based on a token type. For unregistered Users, the Deposit will be combined with a registration in order to register the User first
   * @param ethSigner - the L1 signer
   * @param deposit - the token type amount in its corresponding unit
   * @returns a promise that resolves with the resulting transaction
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Deposits
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Assets
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Collections
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @returns a promise that resolves with the requested metadata refresh
   * @throws {@link index.IMXError}
   */
  public createMetadataRefresh(
    ethSigner: EthSigner,
    request: CreateMetadataRefreshRequest,
  ) {
    return this.workflows
      .createMetadataRefresh(ethSigner, request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a Project
   * @param ethSigner - the L1 signer
   * @param request - the request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the created Project
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Mints
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
   */
  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get a list of Withdrawals
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Withdrawals
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
   */
  public getOrder(request: OrdersApiGetOrderV3Request) {
    return this.ordersApi
      .getOrderV3(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Orders
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Orders
   * @throws {@link index.IMXError}
   */
  public listOrders(request?: OrdersApiListOrdersV3Request) {
    return this.ordersApi
      .listOrdersV3(request)
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
   */
  public getTrade(request: TradesApiGetTradeV3Request) {
    return this.tradesApi
      .getTradeV3(request)
      .then(res => res.data)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get a list of Trades
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Trades
   * @throws {@link index.IMXError}
   */
  public listTrades(request?: TradesApiListTradesV3Request) {
    return this.tradesApi
      .listTradesV3(request)
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Tokens
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @param request - optional request object containing the parameters to be provided in the API request
   * @returns a promise that resolves with the requested list of Transfers
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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
   * @throws {@link index.IMXError}
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

  /**
   * Create a new Exchange transaction
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Exchange Transaction
   * @throws {@link index.IMXError}
   */
  public createExchange(request: ExchangesApiCreateExchangeRequest) {
    return this.exchangeApi.createExchange(request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get an Exchange transaction
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the Exchange Transaction
   * @throws {@link index.IMXError}
   */
  public getExchange(request: ExchangesApiGetExchangeRequest) {
    return this.exchangeApi.getExchange(request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get Exchange transactions
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with Exchange Transactions
   * @throws {@link index.IMXError}
   */
  public getExchanges(request: ExchangesApiGetExchangesRequest) {
    return this.exchangeApi.getExchanges(request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Create a new Transfer request
   * @param walletConnection - the pair of Eth/Stark signers
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created Exchange Transfer
   * @throws {@link index.IMXError}
   */
  public exchangeTransfer(
    walletConnection: WalletConnection,
    request: UnsignedExchangeTransferRequest,
  ) {
    return this.workflows
      .exchangeTransfer(walletConnection, request)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Create a new nft primary transaction
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with the created nft primary Transaction
   * @throws {@link index.IMXError}
   */
  public createNftPrimary(
    request: NftCheckoutPrimaryApiCreateNftPrimaryRequest,
  ) {
    return this.nftCheckoutPrimaryApi.createNftPrimary(request).catch(err => {
      throw formatError(err);
    });
  }

  /**
   * Get nft primary supported currencies and their limits
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with nft primary Currencies
   * @throws {@link index.IMXError}
   */
  public getCurrenciesNFTCheckoutPrimary(
    request: NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest,
  ) {
    return this.nftCheckoutPrimaryApi
      .getCurrenciesNFTCheckoutPrimary(request)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get nft primary transaction by transaction id
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with nft primary transaction
   * @throws {@link index.IMXError}
   */
  public getNftPrimaryTransaction(
    request: NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest,
  ) {
    return this.nftCheckoutPrimaryApi
      .getNftPrimaryTransaction(request)
      .catch(err => {
        throw formatError(err);
      });
  }

  /**
   * Get list of nft primary transactions
   * @param request - the request object to be provided in the API request
   * @returns a promise that resolves with nft primary transaction
   * @throws {@link index.IMXError}
   */
  public getNftPrimaryTransactions(
    request: NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest,
  ) {
    return this.nftCheckoutPrimaryApi
      .getNftPrimaryTransactions(request)
      .catch(err => {
        throw formatError(err);
      });
  }
}
