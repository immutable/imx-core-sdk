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
  EthSigner,
  UnsignedExchangeTransferRequest,
  ResolvedSigners,
} from '../types';
import {
  WalletConnection,
  Signers,
  StarkExSigner,
} from '@imtbl/provider-sdk-web';
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

export class WorkflowsV2 {
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

  private async resolveEthSigner(signers: Signers): Promise<EthSigner> {
    const ethSigner = signers.ethSigner;

    if (!ethSigner) {
      throw new Error(
        'The wallet connection provided contains no ETH Signer, which is required to perform this action',
      );
    }
    await this.validateChain(ethSigner);

    return ethSigner;
  }

  private resolveStarkExSigner(signers: Signers): StarkExSigner {
    if (!signers.starkExSigner) {
      throw new Error(
        'The wallet connection provided contains no StarkEx Signer, which is required to perform this action',
      );
    }

    return signers.starkExSigner;
  }

  private async resolveSigners(
    walletConnection: WalletConnection,
  ): Promise<ResolvedSigners> {
    return {
      ethSigner: await this.resolveEthSigner(walletConnection.signers),
      starkExSigner: this.resolveStarkExSigner(walletConnection.signers),
    };
  }

  private async validateChain(signer: EthSigner) {
    const chainID = await signer.getChainId();

    if (!this.isChainValid(chainID))
      throw new Error(
        'The wallet used for this operation is not from the correct network.',
      );
  }

  public async registerOffchain(walletConnection: WalletConnection) {
    const signers = await this.resolveSigners(walletConnection);

    return registerOffchainWorkflow({
      signers,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    const signers = await this.resolveSigners(walletConnection);

    const registrationContract = Registration__factory.connect(
      this.config.ethConfiguration.registrationContractAddress,
      signers.ethSigner,
    );

    const l2Address = await signers.starkExSigner.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public async mint(
    walletConnection: WalletConnection,
    request: UnsignedMintRequest,
  ) {
    const signer = await this.resolveEthSigner(walletConnection.signers);

    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public async transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    const signers = await this.resolveSigners(walletConnection);

    return transfersWorkflow({
      signers,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async exchangeTransfer(
    walletConnection: WalletConnection,
    request: UnsignedExchangeTransferRequest,
  ) {
    const signers = await this.resolveSigners(walletConnection);

    return exchangeTransfersWorkflow({
      signers,
      request,
      exchangesApi: this.exchangesApi,
    });
  }

  public async batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    const signers = await this.resolveSigners(walletConnection);

    return batchTransfersWorkflow({
      signers,
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
    const signer = await this.resolveEthSigner(walletConnection.signers);

    return depositEthWorkflow(
      signer,
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
    const signer = await this.resolveEthSigner(walletConnection.signers);

    return depositERC20Workflow(
      signer,
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
    const signer = await this.resolveEthSigner(walletConnection.signers);

    return depositERC721Workflow(
      signer,
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
    const signers = await this.resolveSigners(walletConnection);

    return prepareWithdrawalWorkflow({
      signers,
      ...request,
      withdrawalsApi: this.withdrawalsApi,
    });
  }

  public async completeWithdrawal(
    walletConnection: WalletConnection,
    starkPublicKey: string,
    token: AnyToken,
  ) {
    const signer = await this.resolveEthSigner(walletConnection.signers);

    switch (token.type) {
      case 'ETH':
        return this.completeEthWithdrawal(signer, starkPublicKey);
      case 'ERC20':
        return this.completeERC20Withdrawal(signer, starkPublicKey, token);
      case 'ERC721':
        return this.completeERC721Withdrawal(signer, starkPublicKey, token);
    }
  }

  private async completeEthWithdrawal(
    signer: EthSigner,
    starkPublicKey: string,
  ) {
    return completeEthWithdrawalWorkflow(
      signer,
      starkPublicKey,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  private async completeERC20Withdrawal(
    signer: EthSigner,
    starkPublicKey: string,
    token: ERC20Token,
  ) {
    return completeERC20WithdrawalWorkflow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.usersApi,
      this.config,
    );
  }

  private async completeERC721Withdrawal(
    signer: EthSigner,
    starkPublicKey: string,
    token: ERC721Token,
  ) {
    return completeERC721WithdrawalWorkflow(
      signer,
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
    const signers = await this.resolveSigners(walletConnection);

    return createOrderWorkflow({
      signers,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    const signers = await this.resolveSigners(walletConnection);

    return cancelOrderWorkflow({
      signers,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    const signers = await this.resolveSigners(walletConnection);

    return createTradeWorkflow({
      signers,
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.createProject({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      createProjectRequest,
    });
  }

  public async getProject(walletConnection: WalletConnection, id: string) {
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
    const ethSigner = await this.resolveEthSigner(walletConnection.signers);
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
