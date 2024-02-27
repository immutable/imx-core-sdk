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
  CollectionsApi,
  CreateCollectionRequest,
  UpdateCollectionRequest,
  MetadataApi,
  AddMetadataSchemaToCollectionRequest,
  MetadataSchemaRequest,
  MetadataRefreshesApi,
  CreateMetadataRefreshRequest,
  ExchangesApi,
  PrimarySalesApiSignableCreatePrimarySaleRequest,
  PrimarySalesApi,
} from '../api';
import {
  UnsignedMintRequest,
  UnsignedTransferRequest,
  WalletConnection,
  ERC721Token,
  UnsignedOrderRequest,
  NftTransferDetails,
  TokenAmount,
  ETHAmount,
  ERC20Amount,
  AnyToken,
  EthSigner,
  UnsignedExchangeTransferRequest,
  StarkExContractVersion,
} from '../types';
import { Registration__factory } from '../contracts';
import {
  isRegisteredOnChainWorkflow,
  registerOffchainWorkflow,
  registerOnchainWorkflow,
} from './registration';
import { mintingWorkflow } from './minting';
import { transfersWorkflow, batchTransfersWorkflow } from './transfers';
import {
  depositERC20Workflow,
  depositERC721Workflow,
  depositEthWorkflow,
} from './deposit';
import {
  prepareWithdrawalV2Workflow,
  prepareWithdrawalWorkflow,
} from './withdrawal';
import { cancelOrderWorkflow, createOrderWorkflow } from './orders';
import { createTradeWorkflow } from './trades';
import { generateIMXAuthorisationHeaders } from '../utils';
import { ImmutableXConfiguration } from '../config';
import { exchangeTransfersWorkflow } from './exchangeTransfers';
import axios, { AxiosResponse } from 'axios';
import { Signer } from '@ethersproject/abstract-signer';
import {
  CreatePrimarySaleWorkflow,
  AcceptPrimarySalesWorkflow,
  RejectPrimarySalesWorkflow,
} from './primarySales';
import { TransactionResponse } from '@ethersproject/providers';
import {
  completeAllWithdrawalWorkflow,
  completeWithdrawalV1Workflow,
  completeWithdrawalV2Workflow,
} from './withdrawal/completeWithdrawal';
import { BigNumber } from 'ethers';
import { getWithdrawalBalanceWorkflow } from './withdrawal/getWithdrawalBalance';

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
  private readonly primarySalesApi: PrimarySalesApi;

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
    this.primarySalesApi = new PrimarySalesApi(apiConfiguration);
  }

  private async validateChain(signer: Signer) {
    const chainID = await signer.getChainId();

    if (!this.isChainValid(chainID))
      throw new Error(
        'The wallet used for this operation is not from the correct network.',
      );
  }

  public async registerOnchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.ethSigner);

    return registerOnchainWorkflow(walletConnection, this.config);
  }

  public async registerOffchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.ethSigner);

    return registerOffchainWorkflow({
      ...walletConnection,
      usersApi: this.usersApi,
    });
  }

  public async isRegisteredOnchain(walletConnection: WalletConnection) {
    await this.validateChain(walletConnection.ethSigner);

    const registrationContract = Registration__factory.connect(
      this.config.ethConfiguration.registrationContractAddress,
      walletConnection.ethSigner,
    );

    const l2Address = await walletConnection.starkSigner.getAddress();

    return isRegisteredOnChainWorkflow(l2Address, registrationContract);
  }

  public async mint(signer: Signer, request: UnsignedMintRequest) {
    await this.validateChain(signer);

    return mintingWorkflow(signer, request, this.mintsApi);
  }

  public async transfer(
    walletConnection: WalletConnection,
    request: UnsignedTransferRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return transfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  public async exchangeTransfer(
    walletConnection: WalletConnection,
    request: UnsignedExchangeTransferRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return exchangeTransfersWorkflow({
      ...walletConnection,
      request,
      exchangesApi: this.exchangesApi,
    });
  }

  public async batchNftTransfer(
    walletConnection: WalletConnection,
    request: Array<NftTransferDetails>,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return batchTransfersWorkflow({
      ...walletConnection,
      request,
      transfersApi: this.transfersApi,
    });
  }

  private async getStarkExContractVersion(): Promise<
    AxiosResponse<StarkExContractVersion>
  > {
    const options = {
      baseURL: this.config.apiConfiguration.basePath + '/v1',
    };
    return axios.get(`/starkex-contract-version`, options);
  }

  public async deposit(signer: Signer, deposit: TokenAmount) {
    switch (deposit.type) {
      case 'ETH':
        return this.depositEth(signer, deposit);
      case 'ERC20':
        return this.depositERC20(signer, deposit);
      case 'ERC721':
        return this.depositERC721(signer, deposit);
    }
  }

  private async depositEth(signer: Signer, deposit: ETHAmount) {
    await this.validateChain(signer);

    return depositEthWorkflow(
      signer,
      deposit,
      this.depositsApi,
      this.usersApi,
      this.encodingApi,
      this.config,
    );
  }

  private async depositERC20(signer: Signer, deposit: ERC20Amount) {
    await this.validateChain(signer);

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

  private async depositERC721(signer: Signer, deposit: ERC721Token) {
    await this.validateChain(signer);

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
    await this.validateChain(walletConnection.ethSigner);

    const starkExContractInfo = await this.getStarkExContractVersion();
    const majorContractVersion = await this.parseMajorContractVersion(
      starkExContractInfo.data.version,
    );

    if (majorContractVersion === 3) {
      return prepareWithdrawalWorkflow({
        ...walletConnection,
        ...request,
        withdrawalsApi: this.withdrawalsApi,
      });
    }

    if (majorContractVersion >= 4) {
      return prepareWithdrawalV2Workflow({
        ...walletConnection,
        ...request,
        withdrawalsApi: this.withdrawalsApi,
      });
    }

    throw new Error(
      `Invalid StarkEx contract version (${majorContractVersion}). Please try again later.`,
    );
  }

  private async parseMajorContractVersion(
    contractVersion: string,
  ): Promise<number> {
    return parseInt(contractVersion.charAt(0));
  }

  public async completeWithdrawal(
    walletConnection: WalletConnection,
    token: AnyToken,
  ): Promise<TransactionResponse> {
    await this.validateChain(walletConnection.ethSigner);

    const starkExContractInfo = await this.getStarkExContractVersion();
    const majorContractVersion = await this.parseMajorContractVersion(
      starkExContractInfo.data.version,
    );
    const starkPublicKey = await walletConnection.starkSigner.getAddress();

    if (majorContractVersion === 3) {
      const starkPublicKey = await walletConnection.starkSigner.getAddress();
      return completeWithdrawalV1Workflow(
        walletConnection.ethSigner,
        starkPublicKey,
        token,
        this.encodingApi,
        this.usersApi,
        this.mintsApi,
        this.config,
      );
    } else if (majorContractVersion >= 4) {
      return this.completeWithdrawalAll(
        walletConnection,
        starkPublicKey,
        token,
      );
    } else {
      throw new Error(
        `Invalid StarkEx contract version (${majorContractVersion}). Please try again later.`,
      );
    }
  }

  private async completeWithdrawalAll(
    walletConnection: WalletConnection,
    starkPublicKey: string,
    token: AnyToken,
  ): Promise<TransactionResponse> {
    const ethAddress = await walletConnection.ethSigner.getAddress();
    const { v3Balance, v4Balance } = await this.getWithdrawalBalances(
      walletConnection.ethSigner,
      starkPublicKey,
      ethAddress,
      token,
    );

    if (v3Balance.gt(0)) {
      const isRegistered = await this.isRegisteredOnchain(walletConnection);
      if (isRegistered) {
        return completeAllWithdrawalWorkflow(
          walletConnection.ethSigner,
          starkPublicKey,
          token,
          this.encodingApi,
          this.mintsApi,
          this.config,
        );
      }
      throw new Error('User unregistered');
    }
    if (v4Balance.gt(0)) {
      return completeWithdrawalV2Workflow(
        walletConnection.ethSigner,
        ethAddress,
        token,
        this.encodingApi,
        this.mintsApi,
        this.config,
      );
    }
    throw new Error('Nothing to withdraw');
  }

  private async getWithdrawalBalances(
    signer: Signer,
    starkPublicKey: string,
    ethAddress: string,
    token: AnyToken,
  ): Promise<{ v3Balance: BigNumber; v4Balance: BigNumber }> {
    const v3Balance = await getWithdrawalBalanceWorkflow(
      signer,
      starkPublicKey,
      token,
      this.encodingApi,
      this.mintsApi,
      this.config,
    );
    const v4Balance = await getWithdrawalBalanceWorkflow(
      signer,
      ethAddress,
      token,
      this.encodingApi,
      this.mintsApi,
      this.config,
    );
    return { v3Balance, v4Balance };
  }

  public async createOrder(
    walletConnection: WalletConnection,
    request: UnsignedOrderRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return createOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async cancelOrder(
    walletConnection: WalletConnection,
    request: GetSignableCancelOrderRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return cancelOrderWorkflow({
      ...walletConnection,
      request,
      ordersApi: this.ordersApi,
    });
  }

  public async createTrade(
    walletConnection: WalletConnection,
    request: GetSignableTradeRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return createTradeWorkflow({
      ...walletConnection,
      request,
      tradesApi: this.tradesApi,
    });
  }

  public async getProject(ethSigner: EthSigner, id: string) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.projectsApi.getProject({
      id,
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
    });
  }

  public async createCollection(
    ethSigner: EthSigner,
    createCollectionRequest: CreateCollectionRequest,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.collectionsApi.createCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      createCollectionRequest,
    });
  }

  public async updateCollection(
    ethSigner: EthSigner,
    address: string,
    updateCollectionRequest: UpdateCollectionRequest,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.collectionsApi.updateCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      address,
      updateCollectionRequest,
    });
  }

  public async addMetadataSchemaToCollection(
    ethSigner: EthSigner,
    address: string,
    addMetadataSchemaToCollectionRequest: AddMetadataSchemaToCollectionRequest,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);

    return this.metadataApi.addMetadataSchemaToCollection({
      iMXSignature: imxAuthHeaders.signature,
      iMXTimestamp: imxAuthHeaders.timestamp,
      addMetadataSchemaToCollectionRequest,
      address,
    });
  }

  public async updateMetadataSchemaByName(
    ethSigner: EthSigner,
    address: string,
    name: string,
    metadataSchemaRequest: MetadataSchemaRequest,
  ) {
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
    ethSigner: EthSigner,
    collectionAddress?: string,
    pageSize?: number,
    cursor?: string,
  ) {
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
    ethSigner: EthSigner,
    refreshId: string,
    pageSize?: number,
    cursor?: string,
  ) {
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
    ethSigner: EthSigner,
    refreshId: string,
  ) {
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
    ethSigner: EthSigner,
    request: CreateMetadataRefreshRequest,
  ) {
    const imxAuthHeaders = await generateIMXAuthorisationHeaders(ethSigner);
    const ethAddress = await ethSigner.getAddress();

    return this.metadataRefreshesApi.requestAMetadataRefresh({
      xImxEthSignature: imxAuthHeaders.signature,
      xImxEthTimestamp: imxAuthHeaders.timestamp,
      xImxEthAddress: ethAddress,
      createMetadataRefreshRequest: request,
    });
  }

  public async createPrimarySale(
    walletConnection: WalletConnection,
    request: PrimarySalesApiSignableCreatePrimarySaleRequest,
  ) {
    await this.validateChain(walletConnection.ethSigner);

    return CreatePrimarySaleWorkflow({
      ...walletConnection,
      request,
      primarySalesApi: this.primarySalesApi,
    });
  }

  public async acceptPrimarySale(ethSigner: EthSigner, primarySaleId: number) {
    return AcceptPrimarySalesWorkflow({
      ethSigner,
      primarySaleId,
      primarySalesApi: this.primarySalesApi,
    });
  }

  public async rejectPrimarySale(ethSigner: EthSigner, primarySaleId: number) {
    return RejectPrimarySalesWorkflow({
      ethSigner,
      primarySaleId,
      primarySalesApi: this.primarySalesApi,
    });
  }
}
