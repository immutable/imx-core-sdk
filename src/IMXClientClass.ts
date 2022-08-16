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
  MintRequest,
  GetSignableTransferRequestV1,
  GetSignableTransferRequest,
  GetSignableOrderRequest,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  // Configuration as APIConfiguration,
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

// export * from './types';

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
  // TODO
}

// export const IMXClientFactory = (config: ImmutableXConfiguration) => {
//   const depositsApi = new DepositsApi(config.apiConfiguration);
//   const mintsApi = new MintsApi(config.apiConfiguration);
//   const ordersApi = new OrdersApi(config.apiConfiguration);
//   const tokensApi = new TokensApi(config.apiConfiguration);
//   const tradesApi = new TradesApi(config.apiConfiguration);
//   const transfersApi = new TransfersApi(config.apiConfiguration);
//   const usersApi = new UsersApi(config.apiConfiguration);
//   const withdrawalsApi = new WithdrawalsApi(config.apiConfiguration);
//   const balanceApi = new BalancesApi(config.apiConfiguration);
//   const assetApi = new AssetsApi(config.apiConfiguration);
//   const collectionApi = new CollectionsApi(config.apiConfiguration);
//   const metadataApi = new MetadataApi(config.apiConfiguration);
//   const projectsApi = new ProjectsApi(config.apiConfiguration);
//   const workflows = new Workflows(config);

//   // Client Interface
//   return {
//     // Workflows
//     registerOffchain: workflows.registerOffchain,
//     isRegisteredOnchain: workflows.isRegisteredOnchain,
//     mint: workflows.mint,
//     burn: workflows.burn,
//     transfer: workflows.transfer,
//     batchNftTransfer: workflows.batchNftTransfer,
//     prepareWithdrawal: workflows.prepareWithdrawal,
//     deposit: workflows.deposit,
//     completeWithdrawal: workflows.completeWithdrawal,
//     createOrder: workflows.createOrder,
//     cancelOrder: workflows.cancelOrder,
//     createTrade: workflows.createTrade,

//     // Utils
//     createStarkSigner,
//     generateStarkKeyPair,
//     generateStarkKeyPairFromSignedMessage,
//     getKeyPair,

//     // API calls
//     // Assets
//     getAsset: assetApi.getAsset,
//     listAsset: assetApi.listAssets,

//     // Collections
//     createCollection: collectionApi.createCollection,
//     getCollection: collectionApi.getCollection,
//     listCollectionFilters: collectionApi.listCollectionFilters,
//     listCollections: collectionApi.listCollections,
//     updateCollection: collectionApi.updateCollection,

//     // Metadata
//     addMetadataSchemaToCollection: metadataApi.addMetadataSchemaToCollection,
//     getMetadataSchema: metadataApi.getMetadataSchema,
//     updateMetadataSchemaByName: metadataApi.updateMetadataSchemaByName,

//     // Projects
//     createProject: projectsApi.createProject,
//     getProject: projectsApi.getProject,
//     getProjects: projectsApi.getProjects,

//     // Balance
//     getBalance: balanceApi.getBalance,
//     listBalances: balanceApi.listBalances,

//     // Deposits
//     getDeposit: depositsApi.getDeposit,
//     listDeposits: depositsApi.listDeposits,

//     // MintsApi
//     getMint: mintsApi.getMint,
//     listMints: mintsApi.listMints,

//     // Withdrawal
//     listWithdrawals: withdrawalsApi.listWithdrawals,
//     getWithdrawal: withdrawalsApi.getWithdrawal,

//     // Users
//     getUsers: usersApi.getUsers,

//     // Order
//     getOrder: ordersApi.getOrder,
//     listOrders: ordersApi.listOrders,

//     // Trades
//     getTrade: tradesApi.getTrade,
//     listTrades: tradesApi.listTrades,

//     // Tokens
//     getToken: tokensApi.getToken,
//     listTokens: tokensApi.listTokens,

//     // Transfers
//     getTransfer: transfersApi.getTransfer,
//     listTransfers: transfersApi.listTransfers,
//   };
// };
