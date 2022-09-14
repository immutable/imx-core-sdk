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

  public getDeposit(id: string) {
    return this.depositsApi.getDeposit(id);
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
  ) {
    return this.assetApi.getAsset(tokenAddress, tokenId, includeFees);
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

  public getCollection(address: string) {
    return this.collectionApi.getCollection(address);
  }

  public listCollectionFilters(
    address: string,
    pageSize?: number,
    nextPageToken?: string,
  ) {
    return this.collectionApi.listCollectionFilters(
      address,
      pageSize,
      nextPageToken,
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
  ) {
    return this.collectionApi.listCollections(
      pageSize,
      cursor,
      orderBy,
      direction,
      blacklist,
      whitelist,
      keyword,
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

  public getMetadataSchema(address: string) {
    return this.metadataApi.getMetadataSchema(address);
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
  public getBalance(owner: string, address: string) {
    return this.balanceApi.getBalance(owner, address);
  }

  public listBalances(owner: string) {
    return this.balanceApi.listBalances(owner);
  }

  /**
   * Mints
   */
  public getMint(id: string) {
    return this.mintsApi.getMint(id);
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
    );
  }

  public getWithdrawal(id: string) {
    return this.withdrawalsApi.getWithdrawal(id);
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
  public getUsers(user: string) {
    return this.usersApi.getUsers(user);
  }

  /**
   * Order
   */
  public getOrder(
    id: string,
    includeFees?: boolean,
    auxiliaryFeePercentages?: string,
    auxiliaryFeeRecipients?: string,
  ) {
    return this.ordersApi.getOrder(
      id,
      includeFees,
      auxiliaryFeePercentages,
      auxiliaryFeeRecipients,
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
  public getTrade(id: string) {
    return this.tradesApi.getTrade(id);
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
  public getToken(address: string) {
    return this.tokensApi.getToken(address);
  }

  public listTokens(
    pageSize?: number,
    cursor?: string,
    orderBy?: 'contract_address' | 'name' | 'symbol',
    direction?: string,
    address?: string,
    symbols?: string,
  ) {
    return this.tokensApi.listTokens(
      pageSize,
      cursor,
      orderBy,
      direction,
      address,
      symbols,
    );
  }

  /**
   * Transfers
   */
  public getTransfer(id: string) {
    return this.transfersApi.getTransfer(id);
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
