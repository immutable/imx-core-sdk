import { AxiosRequestConfig } from 'axios';
import { ec } from 'elliptic';
import { Signer } from '@ethersproject/abstract-signer';
import {
  AssetsApi,
  BalancesApi,
  CollectionsApi,
  DepositsApi,
  MetadataApi,
  MintsApi,
  OrdersApi,
  ProjectsApi,
  TokensApi,
  TradesApi,
  TransfersApi,
  UsersApi,
  WithdrawalsApi,
  // AssetsApiGetAssetRequest,
  // AssetsApiListAssetsRequest,
  // BalancesApiGetBalanceRequest,
  // BalancesApiListBalancesRequest,
  // CollectionsApiCreateCollectionRequest,
  // CollectionsApiGetCollectionRequest,
  // CollectionsApiListCollectionFiltersRequest,
  // CollectionsApiListCollectionsRequest,
  // CollectionsApiUpdateCollectionRequest,
  // DepositsApiGetDepositRequest,
  // DepositsApiListDepositsRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
  GetSignableOrderRequest,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  // MetadataApiAddMetadataSchemaToCollectionRequest,
  // MetadataApiGetMetadataSchemaRequest,
  // MetadataApiUpdateMetadataSchemaByNameRequest,
  // MintsApiGetMintRequest,
  // MintsApiListMintsRequest,
  // OrdersApiGetOrderRequest,
  // OrdersApiListOrdersRequest,
  // ProjectsApiCreateProjectRequest,
  // ProjectsApiGetProjectRequest,
  // ProjectsApiGetProjectsRequest,
  // TokensApiGetTokenRequest,
  // TokensApiListTokensRequest,
  // TradesApiGetTradeRequest,
  // TradesApiListTradesRequest,
  // TransfersApiGetTransferRequest,
  // TransfersApiListTransfersRequest,
  // UsersApiGetUsersRequest,
  // WithdrawalsApiListWithdrawalsRequest,
  // WithdrawalsApiGetWithdrawalRequest,
} from './api';
import {
  ImmutableXConfiguration,
  WalletConnection,
  UnsignedMintRequest,
  PrepareWithdrawalRequest,
  TokenDeposit,
  TokenWithdrawal,
} from './types';
import { GetSignableBurnRequest } from './workflows/types';
import { Workflows } from './workflows';
import {
  createStarkSigner,
  generateStarkKeyPair,
  generateStarkKeyPairFromSignedMessage,
  getKeyPair,
} from './exportutils';

export * from './types';
// export * from './api';
export * from './api/models';

import {
  AssetsApiGetAssetRequest,
  AssetsApiListAssetsRequest,
  BalancesApiGetBalanceRequest,
  BalancesApiListBalancesRequest,
  CollectionsApiCreateCollectionRequest,
  CollectionsApiGetCollectionRequest,
  CollectionsApiListCollectionFiltersRequest,
  CollectionsApiListCollectionsRequest,
  CollectionsApiUpdateCollectionRequest,
  DepositsApiGetDepositRequest,
  DepositsApiListDepositsRequest,
  // GetSignableTransferRequestV1,
  // GetSignableTransferRequest,
  // GetSignableOrderRequest,
  // GetSignableCancelOrderRequest,
  // GetSignableTradeRequest,
  MetadataApiAddMetadataSchemaToCollectionRequest,
  MetadataApiGetMetadataSchemaRequest,
  MetadataApiUpdateMetadataSchemaByNameRequest,
  MintsApiGetMintRequest,
  MintsApiListMintsRequest,
  OrdersApiGetOrderRequest,
  OrdersApiListOrdersRequest,
  ProjectsApiCreateProjectRequest,
  ProjectsApiGetProjectRequest,
  ProjectsApiGetProjectsRequest,
  TokensApiGetTokenRequest,
  TokensApiListTokensRequest,
  TradesApiGetTradeRequest,
  TradesApiListTradesRequest,
  TransfersApiGetTransferRequest,
  TransfersApiListTransfersRequest,
  UsersApiGetUsersRequest,
  WithdrawalsApiListWithdrawalsRequest,
  WithdrawalsApiGetWithdrawalRequest,
} from './api';

export type AxiosOptions = AxiosRequestConfig<any> | undefined;

export class ImxClient {
  private depositsApi;
  private mintsApi;
  private ordersApi;
  private tokensApi;
  private tradesApi;
  private transfersApi;
  private usersApi;
  private withdrawalsApi;
  private balanceApi;
  private assetApi;
  private collectionApi;
  private metadataApi;
  private projectsApi;
  private workflows;

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
   * Workflow Methods
   */
  public registerOffchain(walletConnection: WalletConnection) {
    return this.workflows.registerOffchain(walletConnection);
  }

  public isRegisteredOnchain(walletConnection: WalletConnection) {
    return this.workflows.isRegisteredOnchain(walletConnection);
  }

  public mint(signer: Signer, request: UnsignedMintRequest) {
    return this.workflows.mint(signer, request);
  }

  public burn(
    walletConnection: WalletConnection,
    request: GetSignableBurnRequest,
  ) {
    return this.workflows.burn(walletConnection, request);
  }

  public transfer(
    walletConnection: WalletConnection,
    request: GetSignableTransferRequestV1,
  ) {
    return this.workflows.transfer(walletConnection, request);
  }

  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: GetSignableTransferRequest,
  ) {
    return this.workflows.batchNftTransfer(walletConnection, request);
  }

  public prepareWithdrawal(
    walletConnection: WalletConnection,
    request: PrepareWithdrawalRequest,
  ) {
    return this.workflows.prepareWithdrawal(walletConnection, request);
  }

  public deposit(signer: Signer, deposit: TokenDeposit) {
    return this.workflows.deposit(signer, deposit);
  }

  public completeWithdrawal(
    signer: Signer,
    starkPublicKey: string,
    token: TokenWithdrawal,
  ) {
    return this.workflows.completeWithdrawal(signer, starkPublicKey, token);
  }

  public createOrder(
    walletConnection: WalletConnection,
    request: GetSignableOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request);
  }

  public cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request);
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    return this.workflows.createTrade(walletConnection, request);
  }

  /**
   * Util Methods
   */
  public createStarkSigner(keyPair: ec.KeyPair) {
    return createStarkSigner(keyPair);
  }

  public generateStarkKeyPair(signer: Signer) {
    return generateStarkKeyPair(signer);
  }

  public generateStarkKeyPairFromSignedMessage(
    ethAddress: string,
    signature: string,
  ) {
    return generateStarkKeyPairFromSignedMessage(ethAddress, signature);
  }

  public getKeyPair(privateKey: string) {
    return getKeyPair(privateKey);
  }

  /**
   * API Methods
   */
  // Assets
  public getAsset(
    requestParameters: AssetsApiGetAssetRequest,
    options?: AxiosOptions,
  ) {
    return this.assetApi.getAsset(requestParameters, options);
  }

  public listAsset(
    requestParameters?: AssetsApiListAssetsRequest,
    options?: AxiosOptions,
  ) {
    return this.assetApi.listAssets(requestParameters, options);
  }

  // Collections
  public createCollection(
    requestParameters: CollectionsApiCreateCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.createCollection(requestParameters, options);
  }

  public getCollection(
    requestParameters: CollectionsApiGetCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.getCollection(requestParameters, options);
  }

  public listCollectionFilters(
    requestParameters: CollectionsApiListCollectionFiltersRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.listCollectionFilters(requestParameters, options);
  }

  public listCollections(
    requestParameters?: CollectionsApiListCollectionsRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.listCollections(requestParameters, options);
  }

  public updateCollection(
    requestParameters: CollectionsApiUpdateCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.updateCollection(requestParameters, options);
  }

  // Metadata
  public addMetadataSchemaToCollection(
    requestParameters: MetadataApiAddMetadataSchemaToCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.addMetadataSchemaToCollection(
      requestParameters,
      options,
    );
  }

  public getMetadataSchema(
    requestParameters: MetadataApiGetMetadataSchemaRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters, options);
  }

  public updateMetadataSchemaByName(
    requestParameters: MetadataApiUpdateMetadataSchemaByNameRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.updateMetadataSchemaByName(
      requestParameters,
      options,
    );
  }

  // Projects
  public createProject(
    requestParameters: ProjectsApiCreateProjectRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.createProject(requestParameters, options);
  }

  public getProject(
    requestParameters: ProjectsApiGetProjectRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.getProject(requestParameters, options);
  }

  public getProjects(
    requestParameters: ProjectsApiGetProjectsRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.getProjects(requestParameters, options);
  }

  // Balance
  public getBalance(
    requestParameters: BalancesApiGetBalanceRequest,
    options?: AxiosOptions,
  ) {
    return this.balanceApi.getBalance(requestParameters, options);
  }

  public listBalances(
    requestParameters: BalancesApiListBalancesRequest,
    options?: AxiosOptions,
  ) {
    return this.balanceApi.listBalances(requestParameters, options);
  }

  // Deposits
  public getDeposit(
    requestParameters: DepositsApiGetDepositRequest,
    options?: AxiosOptions,
  ) {
    return this.depositsApi.getDeposit(requestParameters, options);
  }

  public listDeposits(
    requestParameters?: DepositsApiListDepositsRequest,
    options?: AxiosOptions,
  ) {
    return this.depositsApi.listDeposits(requestParameters, options);
  }

  // MintsApi
  public getMint(
    requestParameters: MintsApiGetMintRequest,
    options?: AxiosOptions,
  ) {
    return this.mintsApi.getMint(requestParameters, options);
  }

  public listMints(
    requestParameters?: MintsApiListMintsRequest,
    options?: AxiosOptions,
  ) {
    return this.mintsApi.listMints(requestParameters, options);
  }

  // Withdrawal
  public listWithdrawals(
    requestParameters?: WithdrawalsApiListWithdrawalsRequest,
    options?: AxiosOptions,
  ) {
    return this.withdrawalsApi.listWithdrawals(requestParameters, options);
  }

  public getWithdrawal(
    requestParameters: WithdrawalsApiGetWithdrawalRequest,
    options?: AxiosOptions,
  ) {
    return this.withdrawalsApi.getWithdrawal(requestParameters, options);
  }

  // Users
  public getUsers(
    requestParameters: UsersApiGetUsersRequest,
    options?: AxiosOptions,
  ) {
    return this.usersApi.getUsers(requestParameters, options);
  }

  // Order
  public getOrder(
    requestParameters: OrdersApiGetOrderRequest,
    options?: AxiosOptions,
  ) {
    return this.ordersApi.getOrder(requestParameters, options);
  }

  public listOrders(
    requestParameters?: OrdersApiListOrdersRequest,
    options?: AxiosOptions,
  ) {
    return this.ordersApi.listOrders(requestParameters, options);
  }

  // Trades
  public getTrade(
    requestParameters: TradesApiGetTradeRequest,
    options?: AxiosOptions,
  ) {
    return this.tradesApi.getTrade(requestParameters, options);
  }

  public listTrades(
    requestParameters?: TradesApiListTradesRequest,
    options?: AxiosOptions,
  ) {
    return this.tradesApi.listTrades(requestParameters, options);
  }

  // Tokens
  public getToken(
    requestParameters: TokensApiGetTokenRequest,
    options?: AxiosOptions,
  ) {
    return this.tokensApi.getToken(requestParameters, options);
  }

  public listTokens(
    requestParameters?: TokensApiListTokensRequest,
    options?: AxiosOptions,
  ) {
    return this.tokensApi.listTokens(requestParameters, options);
  }

  // Transfers
  public getTransfer(
    requestParameters: TransfersApiGetTransferRequest,
    options?: AxiosOptions,
  ) {
    return this.transfersApi.getTransfer(requestParameters, options);
  }

  public listTransfers(
    requestParameters?: TransfersApiListTransfersRequest,
    options?: AxiosOptions,
  ) {
    return this.transfersApi.listTransfers(requestParameters, options);
  }
}
