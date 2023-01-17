import {
  DepositsApi,
  EncodingApi,
  MintsApi,
  OrdersApi,
  TokensApi,
  UsersApi,
  TransfersApi,
  WithdrawalsApi,
  GetSignableCancelOrderRequest,
  GetSignableTradeRequest,
  TradesApi,
  ProjectsApi,
  CreateProjectRequest,
  CollectionsApi,
  CreateCollectionRequest,
  UpdateCollectionRequest,
  MetadataApi,
  AddMetadataSchemaToCollectionRequest,
  MetadataSchemaRequest,
  MetadataRefreshesApi,
  CreateMetadataRefreshRequest,
  ExchangesApi,
} from '../api';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
  ERC721Token,
  UnsignedOrderRequest,
  NftTransferDetails,
  TokenAmount,
  ETHAmount,
  ERC20Amount,
  AnyToken,
  ERC20Token,
  UnsignedExchangeTransferRequest,
} from '../types';
import { WalletConnection } from '@imtbl/provider-sdk-web';
import { Registration__factory } from '../contracts';
import {
  isRegisteredOnChainWorkflow,
  registerOffchainWorkflow,
} from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit';
import {
  completeERC20WithdrawalWorkflow,
  completeERC721WithdrawalWorkflow,
  completeEthWithdrawalWorkflow,
  prepareWithdrawalWorkflow,
} from './withdrawal';
import { cancelOrderWorkflow, createOrderWorkflow } from './orders';
import { createTradeWorkflow } from './trades';
import { generateIMXAuthorisationHeaders } from '../utils';
import { ImmutableXConfiguration } from '../config';
import { exchangeTransfersWorkflow } from './exchangeTransfers';

export class Workflows {
  private readonly depositsApi: DepositsApi;
  private readonly encodingApi: EncodingApi;
  private readonly mintsApi: MintsApi;
  private readonly ordersApi: OrdersApi;
  private readonly tokensApi: TokensApi;
  private readonly tradesApi: TradesApi;
  private readonly transfersApi: TransfersApi;
  private readonly usersApi: UsersApi;
  private readonly withdrawalsApi: WithdrawalsApi;
  private readonly projectsApi: ProjectsApi;
  private readonly collectionsApi: CollectionsApi;
  private readonly metadataApi: MetadataApi;
  private readonly metadataRefreshesApi: MetadataRefreshesApi;
  private readonly exchangesApi: ExchangesApi;

  private isChainValid(chainID: number) {
    return chainID === this.config.ethConfiguration.chainID;
  }

  constructor(protected config: ImmutableXConfiguration) {
    const { apiConfiguration } = config;

    this.config = config;
    this.depositsApi = new DepositsApi(apiConfiguration);
    this.encodingApi = new EncodingApi(apiConfiguration);
    this.mintsApi = new MintsApi(apiConfiguration);
    this.ordersApi = new OrdersApi(apiConfiguration);
    this.tokensApi = new TokensApi(apiConfiguration);
    this.tradesApi = new TradesApi(apiConfiguration);
    this.transfersApi = new TransfersApi(apiConfiguration);
    this.usersApi = new UsersApi(apiConfiguration);
    this.withdrawalsApi = new WithdrawalsApi(apiConfiguration);
    this.projectsApi = new ProjectsApi(apiConfiguration);
    this.collectionsApi = new CollectionsApi(apiConfiguration);
    this.metadataApi = new MetadataApi(apiConfiguration);
    this.metadataRefreshesApi = new MetadataRefreshesApi(apiConfiguration);
    this.exchangesApi = new ExchangesApi(apiConfiguration);
  }

  private async validateChain(walletConnection: WalletConnection) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const chainID = await ethSigner.getChainId();

    if (!this.isChainValid(chainID))
      throw new Error(
        'The wallet used for this operation is not from the correct network.',
      );
  }

  public async registerOffchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection);

    return registerOffchainWorkflow({
      walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection);

    const { ethSigner, starkExSigner } = walletConnection.signers;
    const registrationContract = Registration__factory.connect(
      this.config.ethConfiguration.registrationContractAddress,
      ethSigner,
    );

    const l2Address = await starkExSigner.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public async mint(
    walletConnection: WalletConnection,
    request: UnsignedMintRequest,
  ) {
    await this.validateChain(walletConnection);

    return mintingWorkflow(walletConnection, request, this.mintsApi);
  }

  public async transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    await this.validateChain(walletConnection);

    return transfersWorkflow({
      walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async exchangeTransfer(
    walletConnection: WalletConnection,
    request: UnsignedExchangeTransferRequest,
  ) {
    await this.validateChain(walletConnection);

    return exchangeTransfersWorkflow({
      walletConnection,
      request,
      exchangesApi: this.exchangesApi,
    });
  }

  public async batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    await this.validateChain(walletConnection);

    return batchTransfersWorkflow({
      walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async deposit(
    walletConnection: WalletConnection,
    deposit: TokenAmount,
  ) {
    switch (deposit.type) {
      case 'ETH':
        return this.depositEth(walletConnection, deposit);
      case 'ERC20':
        return this.depositERC20(walletConnection, deposit);
      case 'ERC721':
        return this.depositERC721(walletConnection, deposit);
    }
  }

  private async depositEth(
    walletConnection: WalletConnection,
    deposit: ETHAmount,
  ) {
    await this.validateChain(walletConnection);

    return depositEthWorkflow(
      walletConnection.signers.ethSigner,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  private async depositERC20(
    walletConnection: WalletConnection,
    deposit: ERC20Amount,
  ) {
    await this.validateChain(walletConnection);

    return depositERC20Workflow(
      walletConnection.signers.ethSigner,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.tokensApi,
      this.encodingApi,
      this.config,
    );
  }

  private async depositERC721(
    walletConnection: WalletConnection,
    deposit: ERC721Token,
  ) {
    await this.validateChain(walletConnection);

    return depositERC721Workflow(
      walletConnection.signers.ethSigner,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  public async prepareWithdrawal(
    walletConnection: WalletConnection,
    request: TokenAmount,
  ) {
    await this.validateChain(walletConnection);

    return prepareWithdrawalWorkflow({
      walletConnection,
      request,
      withdrawalsApi: this.withdrawalsApi,
    });
  }

  public completeWithdrawal(
    walletConnection: WalletConnection,
    starkPublicKey: string,
    token: AnyToken,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    switch (token.type) {
      case 'ETH':
        return this.completeEthWithdrawal(ethSigner, starkPublicKey);
      case 'ERC20':
        return this.completeERC20Withdrawal(ethSigner, starkPublicKey, token);
      case 'ERC721':
        return this.completeERC721Withdrawal(ethSigner, starkPublicKey, token);
    }
  }

  private async completeEthWithdrawal(
    walletConnection: WalletConnection,
    starkPublicKey: string,
  ) {
    await this.validateChain(walletConnection);

    const ethSigner = walletConnection.signers.ethSigner;

    return completeEthWithdrawalWorkflow(
      ethSigner,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  private async completeERC20Withdrawal(
    walletConnection: WalletConnection,
    starkPublicKey: string,
    token: ERC20Token,
  ) {
    await this.validateChain(walletConnection);

    const ethSigner = walletConnection.signers.ethSigner;

    return completeERC20WithdrawalWorkflow(
      ethSigner,
      starkPublicKey,
      token,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  private async completeERC721Withdrawal(
    walletConnection: WalletConnection,
    starkPublicKey: string,
    token: ERC721Token,
  ) {
    await this.validateChain(walletConnection);

    const ethSigner = walletConnection.signers.ethSigner;

    return completeERC721WithdrawalWorkflow(
      ethSigner,
      starkPublicKey,
      token,
      this.encodingApi,
      this.mintsApi,
      this.usersApi,
      this.config,
    );
  }

  public async createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    await this.validateChain(walletConnection);

    return createOrderWorkflow({
      walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    await this.validateChain(walletConnection);

    return cancelOrderWorkflow({
      walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    await this.validateChain(walletConnection);

    return createTradeWorkflow({
      walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }

  /**
   * IMX authorisation header functions
   */
  public async createProject(
    walletConnection: WalletConnection,
    createProjectRequest: CreateProjectRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.createProject({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      createProjectRequest,
    });
  }

  public async getProject(walletConnection: WalletConnection, id: string) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.getProject({
      id,
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
    });
  }

  public async getProjects(
    walletConnection: WalletConnection,
    pageSize?: number,
    cursor?: string,
    orderBy?: string,
    direction?: string,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.getProjects({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      pageSize,
      cursor,
      orderBy,
      direction,
    });
  }

  public async createCollection(
    walletConnection: WalletConnection,
    createCollectionRequest: CreateCollectionRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.collectionsApi.createCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      createCollectionRequest,
    });
  }

  public async updateCollection(
    walletConnection: WalletConnection,
    address: string,
    updateCollectionRequest: UpdateCollectionRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.collectionsApi.updateCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      address,
      updateCollectionRequest,
    });
  }

  public async addMetadataSchemaToCollection(
    walletConnection: WalletConnection,
    address: string,
    addMetadataSchemaToCollectionRequest: AddMetadataSchemaToCollectionRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.metadataApi.addMetadataSchemaToCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      addMetadataSchemaToCollectionRequest,
      address,
    });
  }

  public async updateMetadataSchemaByName(
    walletConnection: WalletConnection,
    address: string,
    name: string,
    metadataSchemaRequest: MetadataSchemaRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.metadataApi.updateMetadataSchemaByName({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      address,
      name,
      metadataSchemaRequest,
    });
  }

  public async listMetadataRefreshes(
    walletConnection: WalletConnection,
    collectionAddress?: string,
    pageSize?: number,
    cursor?: string,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);
    const ethAddress = await ethSigner.getAddress();

    return this.metadataRefreshesApi.getAListOfMetadataRefreshes({
      xImxEthSignature: imxAuthHeaders.signature,
      xImxEthTimestamp: imxAuthHeaders.timestamp,
      xImxEthAddress: ethAddress,
      collectionAddress,
      pageSize,
      cursor,
    });
  }

  public async getMetadataRefreshErrors(
    walletConnection: WalletConnection,
    refreshId: string,
    pageSize?: number,
    cursor?: string,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);
    const ethAddress = await ethSigner.getAddress();

    return this.metadataRefreshesApi.getMetadataRefreshErrors({
      xImxEthSignature: imxAuthHeaders.signature,
      xImxEthTimestamp: imxAuthHeaders.timestamp,
      xImxEthAddress: ethAddress,
      refreshId,
      pageSize,
      cursor,
    });
  }

  public async getMetadataRefreshResults(
    walletConnection: WalletConnection,
    refreshId: string,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);
    const ethAddress = await ethSigner.getAddress();

    return this.metadataRefreshesApi.getMetadataRefreshResults({
      xImxEthSignature: imxAuthHeaders.signature,
      xImxEthTimestamp: imxAuthHeaders.timestamp,
      xImxEthAddress: ethAddress,
      refreshId,
    });
  }

  public async createMetadataRefresh(
    walletConnection: WalletConnection,
    request: CreateMetadataRefreshRequest,
  ) {
    const ethSigner = walletConnection.signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'Wallet does not support signing transactions on Ethereum',
      );
    }

    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);
    const ethAddress = await ethSigner.getAddress();

    return this.metadataRefreshesApi.requestAMetadataRefresh({
      xImxEthSignature: imxAuthHeaders.signature,
      xImxEthTimestamp: imxAuthHeaders.timestamp,
      xImxEthAddress: ethAddress,
      createMetadataRefreshRequest: request,
    });
  }
}
