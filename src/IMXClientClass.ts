import { AxiosRequestConfig } from 'axios';
import { ec } from 'elliptic';
import { Signer } from '@ethersproject/abstract-signer';
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
import * as API from './api';

export type AxiosOptions = AxiosRequestConfig<any> | undefined;

export class IMXClientClass {
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
    request: API.GetSignableTransferRequestV1,
  ) {
    return this.workflows.transfer(walletConnection, request);
  }

  public batchNftTransfer(
    walletConnection: WalletConnection,
    request: API.GetSignableTransferRequest,
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
    request: API.GetSignableOrderRequest,
  ) {
    return this.workflows.createOrder(walletConnection, request);
  }

  public cancelOrder(
    walletConnection: WalletConnection,
    request: API.GetSignableCancelOrderRequest,
  ) {
    return this.workflows.cancelOrder(walletConnection, request);
  }

  public createTrade(
    walletConnection: WalletConnection,
    request: API.GetSignableTradeRequest,
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
    requestParameters: API.AssetsApiGetAssetRequest,
    options?: AxiosOptions,
  ) {
    return this.assetApi.getAsset(requestParameters, options);
  }

  public listAsset(
    requestParameters?: API.AssetsApiListAssetsRequest,
    options?: AxiosOptions,
  ) {
    return this.assetApi.listAssets(requestParameters, options);
  }

  // Collections
  public createCollection(
    requestParameters: API.CollectionsApiCreateCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.createCollection(requestParameters, options);
  }

  public getCollection(
    requestParameters: API.CollectionsApiGetCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.getCollection(requestParameters, options);
  }

  public listCollectionFilters(
    requestParameters: API.CollectionsApiListCollectionFiltersRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.listCollectionFilters(requestParameters, options);
  }

  public listCollections(
    requestParameters?: API.CollectionsApiListCollectionsRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.listCollections(requestParameters, options);
  }

  public updateCollection(
    requestParameters: API.CollectionsApiUpdateCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.collectionApi.updateCollection(requestParameters, options);
  }

  // Metadata
  public addMetadataSchemaToCollection(
    requestParameters: API.MetadataApiAddMetadataSchemaToCollectionRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.addMetadataSchemaToCollection(
      requestParameters,
      options,
    );
  }

  public getMetadataSchema(
    requestParameters: API.MetadataApiGetMetadataSchemaRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.getMetadataSchema(requestParameters, options);
  }

  public updateMetadataSchemaByName(
    requestParameters: API.MetadataApiUpdateMetadataSchemaByNameRequest,
    options?: AxiosOptions,
  ) {
    return this.metadataApi.updateMetadataSchemaByName(
      requestParameters,
      options,
    );
  }

  // Projects
  public createProject(
    requestParameters: API.ProjectsApiCreateProjectRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.createProject(requestParameters, options);
  }

  public getProject(
    requestParameters: API.ProjectsApiGetProjectRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.getProject(requestParameters, options);
  }

  public getProjects(
    requestParameters: API.ProjectsApiGetProjectsRequest,
    options?: AxiosOptions,
  ) {
    return this.projectsApi.getProjects(requestParameters, options);
  }

  // Balance
  public getBalance(
    requestParameters: API.BalancesApiGetBalanceRequest,
    options?: AxiosOptions,
  ) {
    return this.balanceApi.getBalance(requestParameters, options);
  }

  public listBalances(
    requestParameters: API.BalancesApiListBalancesRequest,
    options?: AxiosOptions,
  ) {
    return this.balanceApi.listBalances(requestParameters, options);
  }

  // Deposits
  public getDeposit(
    requestParameters: API.DepositsApiGetDepositRequest,
    options?: AxiosOptions,
  ) {
    return this.depositsApi.getDeposit(requestParameters, options);
  }

  public listDeposits(
    requestParameters?: API.DepositsApiListDepositsRequest,
    options?: AxiosOptions,
  ) {
    return this.depositsApi.listDeposits(requestParameters, options);
  }

  // MintsApi
  public getMint(
    requestParameters: API.MintsApiGetMintRequest,
    options?: AxiosOptions,
  ) {
    return this.mintsApi.getMint(requestParameters, options);
  }

  public listMints(
    requestParameters?: API.MintsApiListMintsRequest,
    options?: AxiosOptions,
  ) {
    return this.mintsApi.listMints(requestParameters, options);
  }

  // Withdrawal
  public listWithdrawals(
    requestParameters?: API.WithdrawalsApiListWithdrawalsRequest,
    options?: AxiosOptions,
  ) {
    return this.withdrawalsApi.listWithdrawals(requestParameters, options);
  }

  public getWithdrawal(
    requestParameters: API.WithdrawalsApiGetWithdrawalRequest,
    options?: AxiosOptions,
  ) {
    return this.withdrawalsApi.getWithdrawal(requestParameters, options);
  }

  // Users
  public getUsers(
    requestParameters: API.UsersApiGetUsersRequest,
    options?: AxiosOptions,
  ) {
    return this.usersApi.getUsers(requestParameters, options);
  }

  // Order
  public getOrder(
    requestParameters: API.OrdersApiGetOrderRequest,
    options?: AxiosOptions,
  ) {
    return this.ordersApi.getOrder(requestParameters, options);
  }

  public listOrders(
    requestParameters?: API.OrdersApiListOrdersRequest,
    options?: AxiosOptions,
  ) {
    return this.ordersApi.listOrders(requestParameters, options);
  }

  // Trades
  public getTrade(
    requestParameters: API.TradesApiGetTradeRequest,
    options?: AxiosOptions,
  ) {
    return this.tradesApi.getTrade(requestParameters, options);
  }

  public listTrades(
    requestParameters?: API.TradesApiListTradesRequest,
    options?: AxiosOptions,
  ) {
    return this.tradesApi.listTrades(requestParameters, options);
  }

  // Tokens
  public getToken(
    requestParameters: API.TokensApiGetTokenRequest,
    options?: AxiosOptions,
  ) {
    return this.tokensApi.getToken(requestParameters, options);
  }

  public listTokens(
    requestParameters?: API.TokensApiListTokensRequest,
    options?: AxiosOptions,
  ) {
    return this.tokensApi.listTokens(requestParameters, options);
  }

  // Transfers
  public getTransfer(
    requestParameters: API.TransfersApiGetTransferRequest,
    options?: AxiosOptions,
  ) {
    return this.transfersApi.getTransfer(requestParameters, options);
  }

  public listTransfers(
    requestParameters?: API.TransfersApiListTransfersRequest,
    options?: AxiosOptions,
  ) {
    return this.transfersApi.listTransfers(requestParameters, options);
  }
}
