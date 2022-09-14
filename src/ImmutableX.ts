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
  CreateCollectionRequest,
  UpdateCollectionRequest,
  AddMetadataSchemaToCollectionRequest,
  MetadataSchemaRequest,
  CreateProjectRequest,
  GetSignableTradeRequest,
} from './api';
import { AxiosRequestConfig } from 'axios';

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

  public getDeposit(id: string, options?: AxiosRequestConfig) {
    return this.depositsApi.getDeposit(id, options);
  }

  public listDeposits(
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
    user?: string,
    status?: string,
    updatedMinTimestamp?: string,
    updatedMaxTimestamp?: string,
    tokenType?: string,
    tokenId?: string,
    assetId?: string,
    tokenAddress?: string,
    tokenName?: string,
    minQuantity?: string,
    maxQuantity?: string,
    metadata?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.depositsApi.listDeposits(
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      status,
      updatedMinTimestamp,
      updatedMaxTimestamp,
      tokenType,
      tokenId,
      assetId,
      tokenAddress,
      tokenName,
      minQuantity,
      maxQuantity,
      metadata,
      options,
    );
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
  public getAsset(
    tokenAddress: string,
    tokenId: string,
    includeFees?: boolean,
    options?: AxiosRequestConfig,
  ) {
    return this.assetApi.getAsset(tokenAddress, tokenId, includeFees, options);
  }

  public listAssets(
    pageSize?: number,
    cursor?: string,
    orderBy?: 'updated_at' | 'name',
    direction?: string,
    user?: string,
    status?: string,
    name?: string,
    metadata?: string,
    sellOrders?: boolean,
    buyOrders?: boolean,
    includeFees?: boolean,
    collection?: string,
    updatedMinTimestamp?: string,
    updatedMaxTimestamp?: string,
    auxiliaryFeePercentages?: string,
    auxiliaryFeeRecipients?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.assetApi.listAssets(
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      status,
      name,
      metadata,
      sellOrders,
      buyOrders,
      includeFees,
      collection,
      updatedMinTimestamp,
      updatedMaxTimestamp,
      auxiliaryFeePercentages,
      auxiliaryFeeRecipients,
      options,
    );
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

  public getCollection(address: string, options?: AxiosRequestConfig) {
    return this.collectionApi.getCollection(address, options);
  }

  public listCollectionFilters(
    address: string,
    pageSize?: number,
    nextPageToken?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.collectionApi.listCollectionFilters(
      address,
      pageSize,
      nextPageToken,
      options,
    );
  }

  public listCollections(
    pageSize?: number,
    cursor?: string,
    orderBy?: 'name' | 'address' | 'project_id' | 'created_at' | 'updated_at',
    direction?: string,
    blacklist?: string,
    whitelist?: string,
    keyword?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.collectionApi.listCollections(
      pageSize,
      cursor,
      orderBy,
      direction,
      blacklist,
      whitelist,
      keyword,
      options,
    );
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

  public getMetadataSchema(address: string, options?: AxiosRequestConfig) {
    return this.metadataApi.getMetadataSchema(address, options);
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
  public getBalance(
    owner: string,
    address: string,
    options?: AxiosRequestConfig,
  ) {
    return this.balanceApi.getBalance(owner, address, options);
  }

  public listBalances(owner: string, options?: AxiosRequestConfig) {
    return this.balanceApi.listBalances(owner, options);
  }

  /**
   * Mints
   */
  public getMint(id: string, options?: AxiosRequestConfig) {
    return this.mintsApi.getMint(id, options);
  }

  public listMints(
    pageSize?: number,
    cursor?: string,
    orderBy?: 'transaction_id' | 'token_id' | 'created_at' | 'updated_at',
    direction?: string,
    user?: string,
    status?: string,
    minTimestamp?: string,
    maxTimestamp?: string,
    tokenType?: string,
    tokenId?: string,
    assetId?: string,
    tokenName?: string,
    tokenAddress?: string,
    minQuantity?: string,
    maxQuantity?: string,
    metadata?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.mintsApi.listMints(
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      status,
      minTimestamp,
      maxTimestamp,
      tokenType,
      tokenId,
      assetId,
      tokenName,
      tokenAddress,
      minQuantity,
      maxQuantity,
      metadata,
      options,
    );
  }

  public mint(ethSigner: EthSigner, request: UnsignedMintRequest) {
    return this.workflows.mint(ethSigner, request);
  }

  /**
   * Withdrawal
   */
  public listWithdrawals(
    withdrawnToWallet?: boolean,
    rollupStatus?: string,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
    user?: string,
    status?: string,
    minTimestamp?: string,
    maxTimestamp?: string,
    tokenType?: string,
    tokenId?: string,
    assetId?: string,
    tokenAddress?: string,
    tokenName?: string,
    minQuantity?: string,
    maxQuantity?: string,
    metadata?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.withdrawalsApi.listWithdrawals(
      withdrawnToWallet,
      rollupStatus,
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      status,
      minTimestamp,
      maxTimestamp,
      tokenType,
      tokenId,
      assetId,
      tokenAddress,
      tokenName,
      minQuantity,
      maxQuantity,
      metadata,
      options,
    );
  }

  public getWithdrawal(id: string, options?: AxiosRequestConfig) {
    return this.withdrawalsApi.getWithdrawal(id, options);
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
  public getUsers(user: string, options?: AxiosRequestConfig) {
    return this.usersApi.getUsers(user, options);
  }

  /**
   * Order
   */
  public getOrder(
    id: string,
    includeFees?: boolean,
    auxiliaryFeePercentages?: string,
    auxiliaryFeeRecipients?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.ordersApi.getOrder(
      id,
      includeFees,
      auxiliaryFeePercentages,
      auxiliaryFeeRecipients,
      options,
    );
  }

  public listOrders(
    pageSize?: number,
    cursor?: string,
    orderBy?:
      | 'created_at'
      | 'expired_at'
      | 'sell_quantity'
      | 'buy_quantity'
      | 'buy_quantity_with_fees'
      | 'updated_at',
    direction?: string,
    user?: string,
    status?: 'active' | 'filled' | 'cancelled' | 'expired' | 'inactive',
    minTimestamp?: string,
    maxTimestamp?: string,
    updatedMinTimestamp?: string,
    updatedMaxTimestamp?: string,
    buyTokenType?: string,
    buyTokenId?: string,
    buyAssetId?: string,
    buyTokenAddress?: string,
    buyTokenName?: string,
    buyMinQuantity?: string,
    buyMaxQuantity?: string,
    buyMetadata?: string,
    sellTokenType?: string,
    sellTokenId?: string,
    sellAssetId?: string,
    sellTokenAddress?: string,
    sellTokenName?: string,
    sellMinQuantity?: string,
    sellMaxQuantity?: string,
    sellMetadata?: string,
    auxiliaryFeePercentages?: string,
    auxiliaryFeeRecipients?: string,
    includeFees?: boolean,
    options?: AxiosRequestConfig,
  ) {
    return this.ordersApi.listOrders(
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      status,
      minTimestamp,
      maxTimestamp,
      updatedMinTimestamp,
      updatedMaxTimestamp,
      buyTokenType,
      buyTokenId,
      buyAssetId,
      buyTokenAddress,
      buyTokenName,
      buyMinQuantity,
      buyMaxQuantity,
      buyMetadata,
      sellTokenType,
      sellTokenId,
      sellAssetId,
      sellTokenAddress,
      sellTokenName,
      sellMinQuantity,
      sellMaxQuantity,
      sellMetadata,
      auxiliaryFeePercentages,
      auxiliaryFeeRecipients,
      includeFees,
      options,
    );
  }

  public createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request);
  }

  public cancelOrder(walletConnection: WalletConnection, orderId: number) {
    return this.workflows.cancelOrder(walletConnection, { order_id: orderId });
  }

  /**
   * Trades
   */
  public getTrade(id: string, options?: AxiosRequestConfig) {
    return this.tradesApi.getTrade(id, options);
  }

  public listTrades(
    partyATokenType?: string,
    partyATokenAddress?: string,
    partyBTokenType?: string,
    partyBTokenAddress?: string,
    partyBTokenId?: string,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
    minTimestamp?: string,
    maxTimestamp?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.tradesApi.listTrades(
      partyATokenType,
      partyATokenAddress,
      partyBTokenType,
      partyBTokenAddress,
      partyBTokenId,
      pageSize,
      cursor,
      orderBy,
      direction,
      minTimestamp,
      maxTimestamp,
      options,
    );
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
  public getToken(address: string, options?: AxiosRequestConfig) {
    return this.tokensApi.getToken(address, options);
  }

  public listTokens(
    pageSize?: number,
    cursor?: string,
    orderBy?: 'contract_address' | 'name' | 'symbol',
    direction?: string,
    address?: string,
    symbols?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.tokensApi.listTokens(
      pageSize,
      cursor,
      orderBy,
      direction,
      address,
      symbols,
      options,
    );
  }

  /**
   * Transfers
   */
  public getTransfer(id: string, options?: AxiosRequestConfig) {
    return this.transfersApi.getTransfer(id, options);
  }

  public listTransfers(
    pageSize?: number,
    cursor?: string,
    orderBy?:
      | 'transaction_id'
      | 'updated_at'
      | 'created_at'
      | 'sender_ether_key'
      | 'receiver_ether_key',
    direction?: string,
    user?: string,
    receiver?: string,
    status?: 'success' | 'failure',
    minTimestamp?: string,
    maxTimestamp?: string,
    tokenType?: string,
    tokenId?: string,
    assetId?: string,
    tokenAddress?: string,
    tokenName?: string,
    minQuantity?: string,
    maxQuantity?: string,
    metadata?: string,
    options?: AxiosRequestConfig,
  ) {
    return this.transfersApi.listTransfers(
      pageSize,
      cursor,
      orderBy,
      direction,
      user,
      receiver,
      status,
      minTimestamp,
      maxTimestamp,
      tokenType,
      tokenId,
      assetId,
      tokenAddress,
      tokenName,
      minQuantity,
      maxQuantity,
      metadata,
      options,
    );
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
