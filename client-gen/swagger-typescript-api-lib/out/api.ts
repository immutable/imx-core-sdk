/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiAddMetadataSchemaToCollectionRequest {
  /** Not required from API user */
  contract_address?: string;

  /** The metadata container */
  metadata: ApiMetadataSchemaRequest[];
}

export interface ApiApplication {
  /** Time this application was created */
  created_at?: string;

  /** ID of the application */
  id?: string;

  /** Name of the application */
  name?: string;
}

export interface ApiAsset {
  /** Information about the collection to which this asset belongs */
  collection?: ApiCollectionDetails;

  /** Timestamp of when the asset was created */
  created_at?: string;

  /** Description of this NFT */
  description?: string;

  /** Royalties to pay on this asset operations */
  fees?: ApiFee[];

  /** [DEPRECATED] Internal Immutable X Token ID */
  id?: string;

  /** URL of the image which should be used for this asset */
  image_url?: string;

  /** Metadata of this asset */
  metadata?: number[];

  /** Name of this NFT */
  name?: string;

  /** Open orders for this asset */
  orders?: ApiOrderDetails;

  /** Status of this asset (where it is in the system) */
  status?: string;

  /** Address of the ERC721 contract */
  token_address?: string;

  /** ERC721 Token ID of this asset */
  token_id?: string;

  /** Timestamp of when the asset was created */
  updated_at?: string;

  /** URI to access this asset externally to Immutable X */
  uri?: string;

  /** Ethereum address of the user who owns this asset */
  user?: string;
}

export interface ApiAssetProperties {
  /** Details of this asset's collection */
  collection?: ApiCollectionDetails;

  /** Image URL of this asset */
  image_url?: string;

  /** Name of this asset */
  name?: string;
}

export interface ApiBalance {
  /** Amount which is currently inside the exchange */
  balance?: string;

  /** Amount which is currently preparing withdrawal from the exchange */
  preparing_withdrawal?: string;

  /** Symbol of the token (e.g. ETH, IMX) */
  symbol?: string;

  /** Amount which is currently withdrawable from the exchange */
  withdrawable?: string;
}

export interface ApiCancelOrderResponse {
  /** ID of the cancelled order */
  order_id?: number;

  /** New status of the order */
  status?: string;
}

export interface ApiClaimRewardResponse {
  amount?: string;
  asset?: string;
  status: string;
}

export interface ApiCollection {
  /** Ethereum address of the ERC721 contract */
  address?: string;

  /** URL of the tile image for this collection */
  collection_image_url?: string;

  /** Description of the collection */
  description?: string;

  /** URL of the icon for this collection */
  icon_url?: string;

  /** URL of the metadata for this collection */
  metadata_api_url?: string;

  /** Name of the collection */
  name?: string;

  /** The collection's project ID */
  project_id?: number;
}

export interface ApiCollectionDetails {
  /** URL of the icon of the collection */
  icon_url?: string;

  /** Name of the collection */
  name?: string;
}

export interface ApiCollectionFilter {
  /** Key of this property */
  key?: string;

  /** Range of values for this property */
  range?: ApiRange;

  /** Type of this filter */
  type?: string;

  /** List of possible values for this property */
  value?: string[];
}

export interface ApiCreateCollectionRequest {
  /** URL of the tile image for this collection */
  collection_image_url?: string;

  /** Ethereum address of the ERC721 contract */
  contract_address: string;

  /** Description of the collection */
  description?: string;

  /** URL of the icon for this collection */
  icon_url?: string;

  /** URL of the metadata for this collection */
  metadata_api_url?: string;

  /** Name of the collection */
  name: string;

  /** Owner Public Key: The public key of the owner of the contract */
  owner_public_key: string;
}

export interface ApiCreateOrderResponse {
  /** ID of the created order */
  order_id?: number;

  /** Status of the created order */
  status?: string;

  /** Timestamp of the created order */
  time?: number;
}

export interface ApiCreateProjectRequest {
  /** The company name */
  company_name: string;

  /** The project contact email */
  contact_email: string;

  /** The project name */
  name: string;
}

export interface ApiCreateProjectResponse {
  /** The project ID */
  id?: number;
}

export interface ApiCreateTradeResponse {
  /** Current status of trade */
  status?: string;

  /** ID of trade within Immutable X */
  trade_id?: number;
}

export interface ApiCreateTransferResponse {
  sent_signature?: string;
  status?: string;
  time?: number;
  transfer_id?: number;
}

export interface ApiCreateTransferResponseV2 {
  transfer_ids?: number[];
}

export interface ApiCreateWithdrawalResponse {
  /** Status of the withdrawal */
  status?: string;

  /** Time of the withdrawal */
  time?: number;

  /** ID of the withdrawal */
  withdrawal_id?: number;
}

export interface ApiDeposit {
  /** Status of this deposit in Immutable X */
  status?: string;

  /** Timestamp of the deposit */
  timestamp?: string;

  /** Details of the asset being deposited */
  token?: ApiToken;

  /** Sequential ID of this transaction within Immutable X */
  transaction_id?: number;

  /** Ethereum address of the user making this deposit */
  user?: string;
}

export interface ApiFee {
  address: string;

  /**
   * max of 100 = float representation of 100% fee to 2 d.p. precision
   * @max 100
   */
  percentage: number;
  type: string;
}

export interface ApiGetBalanceResponse {
  /** Amount which is currently inside the exchange */
  imx?: string;

  /** Amount which is currently preparing withdrawal from the exchange */
  preparing_withdrawal?: string;

  /** Amount which is currently withdrawable from the exchange */
  withdrawable?: string;
}

export interface ApiGetProjectsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Projects matching query parameters */
  result?: ApiProject[];
}

export interface ApiGetSignableCancelOrderRequest {
  /** ID of the order to be cancelled */
  order_id?: number;
}

export interface ApiGetSignableCancelOrderResponse {
  /** ID of the order to be cancelled */
  order_id?: number;

  /** Hash of the payload to be signed for cancel order */
  payload_hash?: string;
}

export interface ApiGetSignableDepositRequest {
  /** Amount of the token the user is depositing */
  amount: string;

  /** Details of the token the user is depositing */
  token: CoreToken;

  /** User who is depositing */
  user: string;
}

export interface ApiGetSignableDepositResponse {
  /** Amount this user is depositing */
  amount?: string;

  /** ID of the asset this user is depositing */
  asset_id?: string;

  /** Nonce of the deposit */
  nonce?: number;

  /** Public stark key of the depositing user */
  stark_key?: string;

  /** ID of the vault this user is depositing to */
  vault_id?: number;
}

export interface ApiGetSignableOrderRequest {
  /** Amount to buy */
  amount_buy: string;

  /** Amount to sell */
  amount_sell: string;

  /** ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour */
  expiration_timestamp?: number;

  /** Inclusion of either maker or taker fees */
  fees?: TypesFeeEntry[];
  include_fees?: boolean;

  /** Token to buy */
  token_buy: CoreToken;

  /** Token to sell */
  token_sell: CoreToken;

  /** Ethereum address of the submitting user */
  user: string;
}

export interface ApiGetSignableOrderResponse {
  /** Amount to buy */
  amount_buy?: string;

  /** Amount to sell */
  amount_sell?: string;

  /** ID of the asset to buy */
  asset_id_buy?: string;

  /** ID of the asset to sell */
  asset_id_sell?: string;

  /** Expiration timestamp for this order */
  expiration_timestamp?: number;

  /** Fee information */
  fee_info?: CoreFeeInfo;

  /** Nonce of the order */
  nonce?: number;

  /** Public stark key of the created user */
  stark_key?: string;

  /** ID of the vault into which the bought asset will be placed */
  vault_id_buy?: number;

  /** ID of the vault to sell from */
  vault_id_sell?: number;
}

export interface ApiGetSignableRegistrationResponse {
  /** Signature from authorised operator */
  operator_signature?: string;
  payload_hash?: string;
}

export interface ApiGetSignableTransferRequest {
  /** Amount of the token to transfer */
  amount: string;

  /** Ethereum address of the receiving user */
  receiver: string;

  /** Ethereum address of the transferring user */
  sender: string;

  /** Token to transfer */
  token: CoreToken;
}

export interface ApiGetSignableTransferRequestV2 {
  /** Ethereum address of the transferring user */
  sender_ether_key: string;

  /** List of signable transfer details */
  signable_requests: ApiSignableTransferDetailsV2[];
}

export interface ApiGetSignableTransferResponse {
  /** Amount of the asset being transferred */
  amount?: string;

  /** ID of the asset being transferred */
  asset_id?: string;

  /** Token in request to match in SDK implementation */
  expiration_timestamp?: number;

  /** Nonce of the transfer */
  nonce?: number;

  /** Hash of the payload */
  payload_hash?: string;

  /** Receiver of the transfer */
  receiver_stark_key?: string;

  /** ID of the vault being transferred to */
  receiver_vault_id?: number;

  /** Sender of the transfer */
  sender_stark_key?: string;

  /** ID of the vault being transferred from */
  sender_vault_id?: number;
}

export interface ApiGetSignableTransferResponseV2 {
  /** Sender of the transfer */
  sender_stark_key: string;

  /** List of transfer responses without the sender stark key */
  signable_responses?: ApiSignableTransferV2ResponseDetails[];
}

export interface ApiGetSignableWithdrawalRequest {
  /** Amount of the token to withdraw */
  amount: string;

  /** Token to withdraw */
  token: CoreToken;

  /** User who is making the withdrawal */
  user: string;
}

export interface ApiGetSignableWithdrawalResponse {
  /** Amount of the token we are withdrawing */
  amount?: string;

  /** ID of the asset to be withdrawn */
  asset_id?: string;

  /** Nonce of this transaction */
  nonce?: number;

  /** Encoded payload hash */
  payload_hash?: string;

  /** Public stark key of this user */
  stark_key?: string;

  /** ID of the vault we are withdrawing from */
  vault_id?: number;
}

export interface ApiGetUsersApiResponse {
  /** Accounts */
  accounts?: string[];
}

export interface ApiListApplicationsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Applications which match query parameters */
  result?: ApiApplication[];
}

export interface ApiListAssetsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Assets matching query parameters */
  result?: ApiAsset[];
}

export interface ApiListBalancesResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Dictionary of tokens */
  result?: ApiBalance[];
}

export interface ApiListCollectionsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Collections matching query parameters */
  result?: ApiCollection[];
}

export interface ApiListDepositsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Deposits matching query parameters */
  result?: ApiDeposit[];
}

export interface ApiListMintsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Mints matching query parameters */
  result?: ApiMint[];
}

export interface ApiListOrdersResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Orders matching query parameters */
  result?: ApiOrder[];
}

export interface ApiListSnapshotBalancesResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** List of snapshot balance records */
  records?: SnapshotSnapshotBalancesRecord[];
}

export interface ApiListTokensResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Tokens matching query parameters */
  result?: ApiTokenDetails[];
}

export interface ApiListTradesResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Trades matching query parameters */
  result?: ApiTrade[];
}

export interface ApiListTransfersResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Transfers matching query parameters */
  result?: ApiTransfer[];
}

export interface ApiListWithdrawalsResponse {
  /** Generated cursor returned by previous query */
  cursor?: string;

  /** Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results */
  remaining?: number;

  /** Withdrawals matching query parameters */
  result?: ApiWithdrawal[];
}

export interface ApiMetadataSchemaProperty {
  /** Sets the metadata as filterable */
  filterable?: boolean;

  /** Name of the metadata key */
  name?: string;

  /**
   * Type of the metadata. Values: "enum", "text", "boolean", "continuous", "discrete" | Default: "text".
   * Src: https://docs.x.immutable.com/docs/asset-metadata#property-type-mapping
   */
  type?: string;
}

export interface ApiMetadataSchemaRequest {
  /** Sets the metadata as filterable */
  filterable?: boolean;

  /** Name of the metadata key */
  name: string;

  /** Type of the metadata. Values: "enum", "text", "boolean", "continuous", "discrete" | Default: "text". Src: https://docs.x.immutable.com/docs/asset-metadata#property-type-mapping */
  type?: "enum" | "text" | "boolean" | "continuous" | "discrete";
}

export interface ApiMint {
  /** Fee details */
  fees?: ApiFee[];

  /** Status of this mint */
  status?: string;

  /** Timestamp this mint was initiated */
  timestamp?: string;

  /** Details of the asset which has been minted */
  token?: ApiToken;

  /** Sequential ID of transaction in Immutable X */
  transaction_id?: number;

  /** Ethereum address of the user to whom the asset has been minted */
  user?: string;
}

export interface ApiMintRequestV1 {
  /** Signature from authorised minter */
  auth_signature: string;

  /** Random nonce - must be unique */
  nonce?: number;

  /** Tokens to mint */
  tokens: CoreMintTokens[];

  /** Recipient of the assets */
  user: string;
}

export interface ApiMintRequestV2 {
  /** Signature from authorised minter */
  auth_signature: string;

  /** minting contract */
  contract_address: string;

  /** Global contract-level royalty fees */
  royalties?: CoreMintFee[];

  /** Users to mint to */
  users: ApiMintUser[];
}

export interface ApiMintTokensRequestV1 {
  /** Details of requested mints */
  mints: ApiMintRequestV1[];
}

export interface ApiMintTokensResponseV1 {
  results?: CoreMintResult[];
}

export interface ApiMintTokensResponseV2 {
  results?: CoreMintResultV2Map[];
}

export interface ApiMintUser {
  tokens: CoreMintTokenDataV2[];
  user: string;
}

export interface ApiMintableTokenDetails {
  /** Blueprint of this token */
  blueprint?: string;

  /** ID provided by the client for this token */
  client_token_id?: string;

  /** IMX Id of this token */
  token_id?: string;
}

export interface ApiOrder {
  /** Amount of the asset already sold by this order */
  amount_sold?: string;

  /** Details of the asset being bought */
  buy?: ApiToken;

  /** Expiration timestamp of this order */
  expiration_timestamp?: string;

  /** Fee information for the order */
  fees?: CoreOrderFeeInfo[];

  /** ID of the order */
  order_id?: number;

  /** Details of the asset being sold */
  sell?: ApiToken;

  /** Status of the order */
  status?: string;

  /** Timestamp this order was created */
  timestamp?: string;

  /** Updated timestamp of this order */
  updated_timestamp?: string;

  /** Ethereum address of the user who submitted the order */
  user?: string;
}

export interface ApiOrderDetails {
  /** Buy orders for this asset */
  buy_orders?: number[][];

  /** Sell orders for this asset */
  sell_orders?: number[][];
}

export interface ApiProject {
  /** The current period expiry date for collection limit */
  collection_limit_expires_at?: string;

  /** The total monthly collection limit */
  collection_monthly_limit?: number;

  /** The number of collection remaining in the current period */
  collection_remaining?: number;

  /** The company name */
  company_name?: string;

  /** The project contact email */
  contact_email?: string;

  /** The project ID */
  id?: number;

  /** The current period expiry date for mint operation limit */
  mint_limit_expires_at?: string;

  /** The total monthly mint operation limit */
  mint_monthly_limit?: number;

  /** The number of mint operation remaining in the current period */
  mint_remaining?: number;

  /** The project name */
  name?: string;
}

export interface ApiRange {
  /** Maximum value */
  max?: number;

  /** Minimum value */
  min?: number;
}

export interface ApiRegisterUserResponse {
  /** Immutable signature authorising registration */
  tx_hash?: string;
}

export interface ApiSignableTransferDetailsV2 {
  /** Amount of the token to transfer */
  amount: string;

  /** Ethereum address of the receiving user */
  receiver: string;

  /** Token to transfer */
  token: CoreToken;
}

export interface ApiSignableTransferV2ResponseDetails {
  /** Amount of the asset being transferred */
  amount?: string;

  /** ID of the asset being transferred */
  asset_id?: string;

  /** Timestamp when this transfer will expire */
  expiration_timestamp?: number;

  /** Nonce of the transfer */
  nonce?: number;

  /** Hash of the payload to be signed for transfer */
  payload_hash?: string;

  /** Receiver of the transfer */
  receiver_stark_key?: string;

  /** ID of the vault being transferred to */
  receiver_vault_id?: number;

  /** ID of the vault being transferred from */
  sender_vault_id?: number;

  /** Token in request to match in SDK implementation */
  token?: CoreToken;
}

export interface ApiToken {
  /** Token details of this asset */
  data?: ApiTokenData;

  /** Type of this asset */
  type?: string;
}

export interface ApiTokenData {
  /** Number of decimals supported by this asset */
  decimals?: number;

  /** [DEPRECATED] Internal Immutable X Token ID */
  id?: string;

  /** Properties of this asset */
  properties?: ApiAssetProperties;

  /** Quantity of this asset */
  quantity?: string;

  /** Address of ERC721/ERC20 contract */
  token_address?: string;

  /** ERC721 Token ID */
  token_id?: string;
}

export interface ApiTokenDetails {
  /** Number of decimals for token */
  decimals?: string;

  /** Url for the icon of the token */
  image_url?: string;

  /** Full name of the token (e.g. Ether) */
  name?: string;

  /** Quantum for token */
  quantum?: string;

  /** Ticker symbol for token (e.g. ETH/USDC/IMX) */
  symbol?: string;

  /** Address of the ERC721 contract */
  token_address?: string;
}

export interface ApiTrade {
  /** Side A of this trade */
  a?: ApiTradeSide;

  /** Side B of this trade */
  b?: ApiTradeSide;

  /** Status of this trade */
  status?: string;

  /** Time this trade occurred */
  timestamp?: string;

  /** Sequential ID of this trade within Immutable X */
  transaction_id?: number;
}

export interface ApiTradeSide {
  /** The ID of the order involved in the trade */
  order_id?: number;

  /** The amount of that order's asset this trade sold */
  sold?: string;

  /** The contract address of the token that this trade sold */
  token_address?: string;

  /** The ID of the token that this trade sold */
  token_id?: string;

  /** The type of the token that this trade sold */
  token_type?: string;
}

export interface ApiTransfer {
  /** Token details of this asset */
  data?: ApiTokenData;

  /** Ethereum address of the user who received this transfer */
  receiver?: string;

  /** Status of the transaction */
  status?: string;

  /** Timestamp of the transfer */
  timestamp?: string;

  /** Sequential transaction ID */
  transaction_id?: number;

  /** Type of this asset */
  type?: string;

  /** Ethereum address of the user  who submitted this transfer */
  user?: string;
}

export interface ApiUpdateCollectionRequest {
  /** URL of the tile image for this collection */
  collection_image_url?: string;

  /** Description of the collection */
  description?: string;

  /** URL of the icon for this collection */
  icon_url?: string;

  /** URL of the metadata for this collection */
  metadata_api_url?: string;

  /** Name of the collection */
  name?: string;
}

export interface ApiWithdrawal {
  /** Status of the on-chain batch confirmation for this withdrawal */
  rollup_status?: string;

  /** Ethereum address of the user who requested this withdrawal */
  sender?: string;

  /** Status of this withdrawal */
  status?: string;

  /** Time when this withdrawal was initiated */
  timestamp?: string;

  /** Details of the asset this user is withdrawing */
  token?: ApiToken;

  /** Sequential ID of this transaction */
  transaction_id?: number;

  /** Withdrawal has been transferred to user's Layer 1 wallet */
  withdrawn_to_wallet?: boolean;
}

export interface CoreClaimRewardRequest {
  eth_signature: string;
  option: string;
}

export interface CoreFeeData {
  contract_address?: string;
  decimals?: number;
}

export interface CoreFeeInfo {
  asset_id: string;
  fee_limit: string;
  source_vault_id: number;
}

export interface CoreFeeToken {
  data?: CoreFeeData;
  type?: "ETH" | "ERC20";
}

export interface CoreGetSignableRegistrationRequest {
  ether_key: string;
  stark_key: string;
}

export interface CoreGetTLVsResponse {
  code?: number;
  message?: string;
  result?: CoreGetTLVsResult;
}

export interface CoreGetTLVsResult {
  awaiting_cliff?: string;
}

export interface CoreListRewardsResponse {
  code?: number;
  message?: string;
  result?: CoreReward;
}

export interface CoreMintFee {
  /**
   * max of 100 = float representation of 100% fee to 2 d.p. precision
   * @max 100
   */
  percentage: number;
  recipient: string;
}

export interface CoreMintResult {
  client_token_id?: string;
  token_id?: string;
  tx_id?: number;
}

export interface CoreMintResultV2Map {
  contract_address?: string;
  token_id?: string;
  tx_id?: number;
}

export interface CoreMintTokenData {
  blueprint?: string;
  id: string;
  token_address?: string;
}

export interface CoreMintTokenDataV2 {
  blueprint?: string;
  id: string;

  /** overridable fees if specified */
  royalties?: CoreMintFee[];
}

export interface CoreMintTokens {
  data?: CoreMintTokenData;
  type?: string;
}

export interface CoreOrderFeeInfo {
  address?: string;
  amount?: string;
  token?: CoreFeeToken;
  type?: string;
}

export interface CoreRegisterUserRequestVerifyEth {
  eth_signature: string;
  ether_key: string;
  stark_key: string;
  stark_signature: string;
}

export interface CoreReward {
  amount?: string;
  ether_key?: string;
  expiration_time?: string;
  points?: string;
  status?: string;
  token_address?: string;
}

export interface CoreToken {
  data?: any;

  /** @example ETH/ERC20/ERC721 */
  type?: string;
}

export interface OrdersCancelOrderRequest {
  /** ID of the order */
  order_id: number;

  /** Payload signature */
  stark_signature: string;
}

export interface OrdersCreateOrderRequest {
  /** Amount to buy */
  amount_buy: string;

  /** Amount to sell */
  amount_sell: string;

  /** ID of the asset to buy */
  asset_id_buy: string;

  /** ID of the asset to sell */
  asset_id_sell: string;

  /** Expiration timestamp for this order */
  expiration_timestamp: number;

  /** Fee information */
  fees?: TypesFeeEntry[];

  /** Whether to include fees in order */
  include_fees?: boolean;

  /** Nonce of the order */
  nonce: number;

  /** Public stark key of the user creating order */
  stark_key: string;

  /** Payload signature */
  stark_signature: string;

  /** ID of the vault into which the bought asset will be placed */
  vault_id_buy: number;

  /** ID of the vault to sell from */
  vault_id_sell: number;
}

export interface ResponseSuccessResponse {
  result?: string;
}

export interface SnapshotGetSnapshotRequest {
  ether_keys?: string[];
}

export interface SnapshotSnapshotBalancesRecord {
  /** User's IMX balance on Immutable at a snapshot block */
  balance?: string;

  /** User ethereum address */
  ether_key?: string;
}

export interface TradesCreateTradeRequest {
  /** Amount to buy */
  amount_buy: string;

  /** Amount to sell */
  amount_sell: string;

  /** ID of the asset to buy */
  asset_id_buy: string;

  /** ID of the asset to sell */
  asset_id_sell: string;

  /** Expiration timestamp for this trade */
  expiration_timestamp: number;

  /** Fee details */
  fee_info?: TradesFeeInfo;

  /** Fee information */
  fees?: TypesFeeEntry[];

  /** Whether to include fees in trade */
  include_fees?: boolean;

  /** Nonce of the trade */
  nonce: number;

  /** ID of the order */
  order_id: number;

  /** Public stark key of the user creating trade */
  stark_key: string;

  /** Payload signature */
  stark_signature: string;

  /** ID of the vault into which the traded asset will be placed */
  vault_id_buy: number;

  /** ID of the vault to sell from */
  vault_id_sell: number;
}

export interface TradesFeeInfo {
  /** ID of the asset these fees relate to */
  asset_id: string;

  /** Fee limit */
  fee_limit: string;

  /** ID of vault the asset belong to */
  source_vault_id: number;
}

export interface TransfersCreateTransferRequest {
  /** Amount to transfer */
  amount: string;

  /** ID of the asset to transfer */
  asset_id: string;

  /** Expiration timestamp for this transfer */
  expiration_timestamp: number;

  /** Nonce of the transfer */
  nonce: number;

  /** Public stark key of the user receiving the transfer */
  receiver_stark_key: string;

  /** ID of the vault into which the asset will be transferred to */
  receiver_vault_id: number;

  /** Public stark key of the user sending the transfer */
  sender_stark_key: string;

  /** ID of the vault into which the asset is from */
  sender_vault_id: number;

  /** Transfer payload signature */
  stark_signature: string;
}

export interface TransfersCreateTransferRequestV2 {
  /** List of transfers */
  requests: TransfersTransferRequest[];

  /** Public stark key of the user sending the transfer */
  sender_stark_key: string;
}

export interface TransfersTransferRequest {
  /** Amount to transfer */
  amount: string;

  /** ID of the asset to transfer */
  asset_id: string;

  /** Expiration timestamp for this transfer */
  expiration_timestamp: number;

  /** Nonce of the transfer */
  nonce: number;

  /** Public stark key of the user receiving the transfer */
  receiver_stark_key: string;

  /** ID of the vault into which the asset will be transferred to */
  receiver_vault_id: number;

  /** ID of the vault into which the asset is from */
  sender_vault_id: number;

  /** Transfer payload signature */
  stark_signature: string;
}

export interface TypesFeeEntry {
  address?: string;
  fee_percentage?: number;
}

export interface WithdrawalCreateWithdrawalRequest {
  /** Amount to withdraw */
  amount: string;

  /** The ID of asset the user is withdrawing */
  asset_id: string;

  /** Nonce of the withdrawal */
  nonce: number;

  /** Public stark key of the withdrawing user */
  stark_key: string;

  /** Payload signature */
  stark_signature: string;

  /** The ID of the vault the asset belong to */
  vault_id: number;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "//api.ropsten.x.immutable.com";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  private addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  private addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter((key) => "undefined" !== typeof query[key]);
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string") ? JSON.stringify(input) : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  private mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(`${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`, {
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : void 0,
      body: typeof body === "undefined" || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = response as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title Immutable X API
 * @version 0.1
 * @baseUrl //api.ropsten.x.immutable.com
 * @contact Immutable API Support <support@immutable.com>
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description Get a list of applications
     *
     * @tags applications
     * @name ApplicationsList
     * @summary Get a list of applications
     * @request GET:/v1/applications
     */
    applicationsList: (
      query?: { page_size?: number; cursor?: string; order_by?: string; direction?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiListApplicationsResponse, any>({
        path: `/v1/applications`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of an application with the given ID
     *
     * @tags applications
     * @name ApplicationsDetail
     * @summary Get details of an application with the given ID
     * @request GET:/v1/applications/{id}
     */
    applicationsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiApplication, any>({
        path: `/v1/applications/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of assets
     *
     * @tags assets
     * @name AssetsList
     * @summary Get a list of assets
     * @request GET:/v1/assets
     */
    assetsList: (
      query?: {
        page_size?: number;
        cursor?: string;
        order_by?: "updated_at" | "name";
        direction?: string;
        user?: string;
        status?: string;
        name?: string;
        metadata?: string;
        sell_orders?: boolean;
        buy_orders?: boolean;
        include_fees?: boolean;
        collection?: string;
        updated_min_timestamp?: string;
        updated_max_timestamp?: string;
        auxiliary_fee_percentages?: string;
        auxiliary_fee_recipients?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListAssetsResponse, any>({
        path: `/v1/assets`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of an asset
     *
     * @tags assets
     * @name AssetsDetail
     * @summary Get details of an asset
     * @request GET:/v1/assets/{token_address}/{token_id}
     */
    assetsDetail: (
      tokenAddress: string,
      tokenId: string,
      query?: { include_fees?: boolean },
      params: RequestParams = {},
    ) =>
      this.request<ApiAsset, any>({
        path: `/v1/assets/${tokenAddress}/${tokenId}`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Fetches the WEI balances of the user
     *
     * @tags balances
     * @name BalancesDetail
     * @summary Fetches the WEI balances of the user
     * @request GET:/v1/balances/{owner}
     */
    balancesDetail: (owner: string, params: RequestParams = {}) =>
      this.request<ApiGetBalanceResponse, any>({
        path: `/v1/balances/${owner}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get TLV information for a user for a token
     *
     * @tags tlvs
     * @name ClaimsDetail
     * @summary Get TLV information for a user for a token
     * @request GET:/v1/claims/{etherKey}/{tokenAddress}
     */
    claimsDetail: (etherKey: string, tokenAddress: string, params: RequestParams = {}) =>
      this.request<CoreGetTLVsResponse, any>({
        path: `/v1/claims/${etherKey}/${tokenAddress}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of collections
     *
     * @tags collections
     * @name CollectionsList
     * @summary Get a list of collections
     * @request GET:/v1/collections
     */
    collectionsList: (
      query?: { page_size?: number; cursor?: string; order_by?: string; direction?: string; blacklist?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiListCollectionsResponse, any>({
        path: `/v1/collections`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Create collection
     *
     * @tags collections
     * @name CollectionsCreate
     * @summary Create collection
     * @request POST:/v1/collections
     */
    collectionsCreate: (CreateCollection: ApiCreateCollectionRequest, params: RequestParams = {}) =>
      this.request<ApiCollection, any>({
        path: `/v1/collections`,
        method: "POST",
        body: CreateCollection,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a collection at the given address
     *
     * @tags collections
     * @name CollectionsDetail
     * @summary Get details of a collection at the given address
     * @request GET:/v1/collections/{address}
     */
    collectionsDetail: (address: string, params: RequestParams = {}) =>
      this.request<ApiCollection, any>({
        path: `/v1/collections/${address}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update collection
     *
     * @tags collections
     * @name CollectionsPartialUpdate
     * @summary Update collection
     * @request PATCH:/v1/collections/{address}
     */
    collectionsPartialUpdate: (
      address: string,
      UpdateCollectionRequest: ApiUpdateCollectionRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiCollection, any>({
        path: `/v1/collections/${address}`,
        method: "PATCH",
        body: UpdateCollectionRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of collection filters
     *
     * @tags collections
     * @name CollectionsFiltersDetail
     * @summary Get a list of collection filters
     * @request GET:/v1/collections/{address}/filters
     */
    collectionsFiltersDetail: (
      address: string,
      query?: { page_size?: number; next_page_token?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiCollectionFilter, any>({
        path: `/v1/collections/${address}/filters`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get collection metadata schema
     *
     * @tags collections
     * @name CollectionsMetadataSchemaDetail
     * @summary Get collection metadata schema
     * @request GET:/v1/collections/{address}/metadata-schema
     */
    collectionsMetadataSchemaDetail: (address: string, params: RequestParams = {}) =>
      this.request<ApiMetadataSchemaProperty[][], any>({
        path: `/v1/collections/${address}/metadata-schema`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Add metadata schema to collection
     *
     * @tags collections
     * @name CollectionsMetadataSchemaCreate
     * @summary Add metadata schema to collection
     * @request POST:/v1/collections/{address}/metadata-schema
     */
    collectionsMetadataSchemaCreate: (
      address: string,
      AddMetadataSchemaToCollectionRequest: ApiAddMetadataSchemaToCollectionRequest,
      params: RequestParams = {},
    ) =>
      this.request<ResponseSuccessResponse, any>({
        path: `/v1/collections/${address}/metadata-schema`,
        method: "POST",
        body: AddMetadataSchemaToCollectionRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Update metadata schema by name
     *
     * @tags collections, metadata
     * @name CollectionsMetadataSchemaPartialUpdate
     * @summary Update metadata schema by name
     * @request PATCH:/v1/collections/{address}/metadata-schema/{name}
     */
    collectionsMetadataSchemaPartialUpdate: (
      address: string,
      name: string,
      MetadataSchemaRequest: ApiMetadataSchemaRequest,
      params: RequestParams = {},
    ) =>
      this.request<ResponseSuccessResponse, any>({
        path: `/v1/collections/${address}/metadata-schema/${name}`,
        method: "PATCH",
        body: MetadataSchemaRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of deposits
     *
     * @tags deposits
     * @name DepositsList
     * @summary Get a list of deposits
     * @request GET:/v1/deposits
     */
    depositsList: (
      query?: {
        page_size?: number;
        cursor?: string;
        order_by?: string;
        direction?: string;
        user?: string;
        status?: string;
        min_timestamp?: string;
        max_timestamp?: string;
        token_type?: string;
        token_id?: string;
        asset_id?: string;
        token_address?: string;
        token_name?: string;
        min_quantity?: string;
        max_quantity?: string;
        metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListDepositsResponse, any>({
        path: `/v1/deposits`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a deposit with the given ID
     *
     * @tags deposits
     * @name DepositsDetail
     * @summary Get details of a deposit with the given ID
     * @request GET:/v1/deposits/{id}
     */
    depositsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiDeposit, any>({
        path: `/v1/deposits/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a mintable token with the given IMX token ID
     *
     * @tags mints
     * @name MintableTokenDetail
     * @summary Get details of a mintable token with the given IMX token ID
     * @request GET:/v1/mintable-token/{id}
     * @deprecated
     */
    mintableTokenDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiMintableTokenDetails, any>({
        path: `/v1/mintable-token/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a mintable token with the given token address and token ID
     *
     * @tags mints
     * @name MintableTokenDetail2
     * @summary Get details of a mintable token with the given token address and token ID
     * @request GET:/v1/mintable-token/{token_address}/{token_id}
     * @originalName mintableTokenDetail
     * @duplicate
     */
    mintableTokenDetail2: (tokenAddress: string, tokenId: string, params: RequestParams = {}) =>
      this.request<ApiMintableTokenDetails, any>({
        path: `/v1/mintable-token/${tokenAddress}/${tokenId}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of mints
     *
     * @tags mints
     * @name MintsList
     * @summary Get a list of mints
     * @request GET:/v1/mints
     */
    mintsList: (
      query?: {
        page_size?: number;
        cursor?: string;
        order_by?: string;
        direction?: string;
        user?: string;
        status?: string;
        min_timestamp?: string;
        max_timestamp?: string;
        token_type?: string;
        token_id?: string;
        asset_id?: string;
        token_name?: string;
        token_address?: string;
        min_quantity?: string;
        max_quantity?: string;
        metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListMintsResponse, any>({
        path: `/v1/mints`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Mint tokens in a batch
     *
     * @tags mints
     * @name MintsCreate
     * @summary Mint tokens
     * @request POST:/v1/mints
     */
    mintsCreate: (MintTokensRequestV1: ApiMintTokensRequestV1, params: RequestParams = {}) =>
      this.request<ApiMintTokensResponseV1, any>({
        path: `/v1/mints`,
        method: "POST",
        body: MintTokensRequestV1,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a mint with the given ID
     *
     * @tags mints
     * @name MintsDetail
     * @summary Get details of a mint with the given ID
     * @request GET:/v1/mints/{id}
     */
    mintsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiMint, any>({
        path: `/v1/mints/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of orders
     *
     * @tags orders
     * @name OrdersList
     * @summary Get a list of orders
     * @request GET:/v1/orders
     */
    ordersList: (
      query?: {
        page_size?: number;
        cursor?: string;
        order_by?: "created_at" | "expired_at" | "sell_quantity" | "buy_quantity" | "updated_at";
        direction?: string;
        user?: string;
        status?: "active" | "filled" | "cancelled" | "expired" | "inactive";
        min_timestamp?: string;
        max_timestamp?: string;
        updated_min_timestamp?: string;
        updated_max_timestamp?: string;
        buy_token_type?: string;
        buy_token_id?: string;
        buy_asset_id?: string;
        buy_token_address?: string;
        buy_token_name?: string;
        buy_min_quantity?: string;
        buy_max_quantity?: string;
        buy_metadata?: string;
        sell_token_type?: string;
        sell_token_id?: string;
        sell_asset_id?: string;
        sell_token_address?: string;
        sell_token_name?: string;
        sell_min_quantity?: string;
        sell_max_quantity?: string;
        sell_metadata?: string;
        auxiliary_fee_percentages?: string;
        auxiliary_fee_recipients?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListOrdersResponse, any>({
        path: `/v1/orders`,
        method: "GET",
        query: query,
        ...params,
      }),

    /**
     * @description Create an order
     *
     * @tags orders
     * @name OrdersCreate
     * @summary Create an order
     * @request POST:/v1/orders
     */
    ordersCreate: (CreateOrderRequest: OrdersCreateOrderRequest, params: RequestParams = {}) =>
      this.request<ApiCreateOrderResponse, any>({
        path: `/v1/orders`,
        method: "POST",
        body: CreateOrderRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of an order with the given ID
     *
     * @tags orders
     * @name OrdersDetail
     * @summary Get details of an order with the given ID
     * @request GET:/v1/orders/{id}
     */
    ordersDetail: (
      id: string,
      query?: { include_fees?: boolean; auxiliary_fee_percentages?: string; auxiliary_fee_recipients?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiOrder, any>({
        path: `/v1/orders/${id}`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Cancel an order
     *
     * @tags orders
     * @name OrdersDelete
     * @summary cancel an order
     * @request DELETE:/v1/orders/{id}
     */
    ordersDelete: (id: string, CancelOrderRequest: OrdersCancelOrderRequest, params: RequestParams = {}) =>
      this.request<ApiCancelOrderResponse, any>({
        path: `/v1/orders/${id}`,
        method: "DELETE",
        body: CancelOrderRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get projects
     *
     * @tags projects
     * @name ProjectsList
     * @summary Get projects
     * @request GET:/v1/projects
     */
    projectsList: (
      query?: { page_size?: number; cursor?: string; order_by?: string; direction?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiGetProjectsResponse, any>({
        path: `/v1/projects`,
        method: "GET",
        query: query,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Create a project
     *
     * @tags projects
     * @name ProjectsCreate
     * @summary Create a project
     * @request POST:/v1/projects
     */
    projectsCreate: (CreateProjectRequest: ApiCreateProjectRequest, params: RequestParams = {}) =>
      this.request<ApiCreateProjectResponse, any>({
        path: `/v1/projects`,
        method: "POST",
        body: CreateProjectRequest,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Get a project
     *
     * @tags projects
     * @name ProjectsDetail
     * @summary Get a project
     * @request GET:/v1/projects/{id}
     */
    projectsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiProject, any>({
        path: `/v1/projects/${id}`,
        method: "GET",
        type: ContentType.Json,
        ...params,
      }),

    /**
     * @description Distribute campaign rewards
     *
     * @tags claims
     * @name RewardsCreate
     * @summary User claim to redeem campaign rewards
     * @request POST:/v1/rewards
     */
    rewardsCreate: (ClaimRewardRequest: CoreClaimRewardRequest, params: RequestParams = {}) =>
      this.request<ApiClaimRewardResponse, any>({
        path: `/v1/rewards`,
        method: "POST",
        body: ClaimRewardRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get list of claims a user can make to redeem campaign rewards
     *
     * @tags claims
     * @name RewardsDetail
     * @summary Get list of reward claims for a user
     * @request GET:/v1/rewards/{etherKey}
     */
    rewardsDetail: (etherKey: string, params: RequestParams = {}) =>
      this.request<CoreListRewardsResponse, any>({
        path: `/v1/rewards/${etherKey}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets details of a signable deposit
     *
     * @tags deposits
     * @name SignableDepositDetailsCreate
     * @summary Gets details of a signable deposit
     * @request POST:/v1/signable-deposit-details
     */
    signableDepositDetailsCreate: (
      GetSignableDepositRequest: ApiGetSignableDepositRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableDepositResponse, any>({
        path: `/v1/signable-deposit-details`,
        method: "POST",
        body: GetSignableDepositRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details a signable cancel order
     *
     * @tags orders
     * @name SignableOrderDetailsCreate
     * @summary Get details a signable cancel order
     * @request POST:/v1/signable-order-details
     */
    signableOrderDetailsCreate: (
      GetSignableCancelOrderRequest: ApiGetSignableCancelOrderRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableCancelOrderResponse, any>({
        path: `/v1/signable-order-details`,
        method: "POST",
        body: GetSignableCancelOrderRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get operator signature to allow clients to register the user
     *
     * @tags users
     * @name SignableRegistrationCreate
     * @summary Get operator signature to allow clients to register the user
     * @request POST:/v1/signable-registration
     */
    signableRegistrationCreate: (
      GetSignableRegistrationRequest: CoreGetSignableRegistrationRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableRegistrationResponse, any>({
        path: `/v1/signable-registration`,
        method: "POST",
        body: GetSignableRegistrationRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets details of a signable transfer
     *
     * @tags transfers
     * @name SignableTransferDetailsCreate
     * @summary Gets details of a signable transfer
     * @request POST:/v1/signable-transfer-details
     */
    signableTransferDetailsCreate: (
      GetSignableTransferRequest: ApiGetSignableTransferRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableTransferResponse, any>({
        path: `/v1/signable-transfer-details`,
        method: "POST",
        body: GetSignableTransferRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets details of a signable withdrawal
     *
     * @tags withdrawals
     * @name SignableWithdrawalDetailsCreate
     * @summary Gets details of a signable withdrawal
     * @request POST:/v1/signable-withdrawal-details
     */
    signableWithdrawalDetailsCreate: (
      GetSignableWithdrawalRequest: ApiGetSignableWithdrawalRequest,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableWithdrawalResponse, any>({
        path: `/v1/signable-withdrawal-details`,
        method: "POST",
        body: GetSignableWithdrawalRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of snapshot balances
     *
     * @tags snapshot
     * @name SnapshotBalancesCreate
     * @summary Get a snapshot at a specific block
     * @request POST:/v1/snapshot/balances/{tokenAddress}
     */
    snapshotBalancesCreate: (
      tokenAddress: string,
      GetSnapshotRequest: SnapshotGetSnapshotRequest,
      query?: { page_size?: number; cursor?: string },
      params: RequestParams = {},
    ) =>
      this.request<ApiListSnapshotBalancesResponse, any>({
        path: `/v1/snapshot/balances/${tokenAddress}`,
        method: "POST",
        query: query,
        body: GetSnapshotRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of tokens
     *
     * @tags tokens
     * @name TokensList
     * @summary Get a list of tokens
     * @request GET:/v1/tokens
     */
    tokensList: (query?: { address?: string; symbols?: string }, params: RequestParams = {}) =>
      this.request<ApiListTokensResponse, any>({
        path: `/v1/tokens`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of an token
     *
     * @tags tokens
     * @name TokensDetail
     * @summary Get details of an token
     * @request GET:/v1/tokens/{address}
     */
    tokensDetail: (address: string, params: RequestParams = {}) =>
      this.request<ApiTokenDetails, any>({
        path: `/v1/tokens/${address}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of trades
     *
     * @tags trades
     * @name TradesList
     * @summary Get a list of trades
     * @request GET:/v1/trades
     */
    tradesList: (
      query?: {
        party_a_token_type?: string;
        party_a_token_address?: string;
        party_a_token_id?: string;
        party_b_token_type?: string;
        party_b_token_address?: string;
        party_b_token_id?: string;
        page_size?: number;
        cursor?: string;
        order_by?: string;
        direction?: string;
        min_timestamp?: string;
        max_timestamp?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListTradesResponse, any>({
        path: `/v1/trades`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a Trade
     *
     * @tags trades
     * @name TradesCreate
     * @summary Create a Trade between two parties
     * @request POST:/v1/trades
     */
    tradesCreate: (CreateTradeRequest: TradesCreateTradeRequest, params: RequestParams = {}) =>
      this.request<ApiCreateTradeResponse, any>({
        path: `/v1/trades`,
        method: "POST",
        body: CreateTradeRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a trade with the given ID
     *
     * @tags trades
     * @name TradesDetail
     * @summary Get details of a trade with the given ID
     * @request GET:/v1/trades/{id}
     */
    tradesDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiTrade, any>({
        path: `/v1/trades/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of transfers
     *
     * @tags transfers
     * @name TransfersList
     * @summary Get a list of transfers
     * @request GET:/v1/transfers
     */
    transfersList: (
      query?: {
        page_size?: number;
        cursor?: string;
        order_by?: string;
        direction?: string;
        user?: string;
        status?: "success" | "failure";
        min_timestamp?: string;
        max_timestamp?: string;
        token_type?: string;
        token_id?: string;
        asset_id?: string;
        token_address?: string;
        token_name?: string;
        min_quantity?: string;
        max_quantity?: string;
        metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListTransfersResponse, any>({
        path: `/v1/transfers`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new transfer request
     *
     * @tags transfers
     * @name TransfersCreate
     * @summary Creates a transfer of tokens between two parties
     * @request POST:/v1/transfers
     */
    transfersCreate: (CreateTransferRequest: TransfersCreateTransferRequest, params: RequestParams = {}) =>
      this.request<ApiCreateTransferResponse, any>({
        path: `/v1/transfers`,
        method: "POST",
        body: CreateTransferRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get details of a transfer with the given ID
     *
     * @tags transfers
     * @name TransfersDetail
     * @summary Get details of a transfer with the given ID
     * @request GET:/v1/transfers/{id}
     */
    transfersDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiTransfer, any>({
        path: `/v1/transfers/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Registers a user
     *
     * @tags users
     * @name UsersCreate
     * @summary Registers a user
     * @request POST:/v1/users
     */
    usersCreate: (RegisterUserRequestVerifyEth: CoreRegisterUserRequestVerifyEth, params: RequestParams = {}) =>
      this.request<ApiRegisterUserResponse, any>({
        path: `/v1/users`,
        method: "POST",
        body: RegisterUserRequestVerifyEth,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get stark keys for a registered user
     *
     * @tags users
     * @name UsersDetail
     * @summary Get stark keys for a registered user
     * @request GET:/v1/users/{user}
     */
    usersDetail: (user: string, params: RequestParams = {}) =>
      this.request<ApiGetUsersApiResponse, any>({
        path: `/v1/users/${user}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Get a list of withdrawals
     *
     * @tags withdrawals
     * @name WithdrawalsList
     * @summary Get a list of withdrawals
     * @request GET:/v1/withdrawals
     */
    withdrawalsList: (
      query?: {
        withdrawn_to_wallet?: boolean;
        rollup_status?: string;
        page_size?: number;
        cursor?: string;
        order_by?: string;
        direction?: string;
        user?: string;
        status?: string;
        min_timestamp?: string;
        max_timestamp?: string;
        token_type?: string;
        token_id?: string;
        asset_id?: string;
        token_address?: string;
        token_name?: string;
        min_quantity?: string;
        max_quantity?: string;
        metadata?: string;
      },
      params: RequestParams = {},
    ) =>
      this.request<ApiListWithdrawalsResponse, any>({
        path: `/v1/withdrawals`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * @description Creates a withdrawal
     *
     * @tags withdrawals
     * @name WithdrawalsCreate
     * @summary Creates a withdrawal of a token
     * @request POST:/v1/withdrawals
     */
    withdrawalsCreate: (CreateWithdrawalRequest: WithdrawalCreateWithdrawalRequest, params: RequestParams = {}) =>
      this.request<ApiCreateWithdrawalResponse, any>({
        path: `/v1/withdrawals`,
        method: "POST",
        body: CreateWithdrawalRequest,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets details of withdrawal with the given ID
     *
     * @tags withdrawals
     * @name WithdrawalsDetail
     * @summary Gets details of withdrawal with the given ID
     * @request GET:/v1/withdrawals/{id}
     */
    withdrawalsDetail: (id: string, params: RequestParams = {}) =>
      this.request<ApiWithdrawal, any>({
        path: `/v1/withdrawals/${id}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  v2 = {
    /**
     * @description Get a list of balances for given user
     *
     * @tags balances
     * @name BalancesDetail
     * @summary Get a list of balances for given user
     * @request GET:/v2/balances/{owner}
     */
    balancesDetail: (owner: string, params: RequestParams = {}) =>
      this.request<ApiListBalancesResponse, any>({
        path: `/v2/balances/${owner}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * @description Fetches the token balances of the user
     *
     * @tags balances
     * @name BalancesDetail2
     * @summary Fetches the token balances of the user
     * @request GET:/v2/balances/{owner}/{address}
     * @originalName balancesDetail
     * @duplicate
     */
    balancesDetail2: (owner: string, address: string, params: RequestParams = {}) =>
      this.request<ApiGetBalanceResponse, any>({
        path: `/v2/balances/${owner}/${address}`,
        method: "GET",
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Mint tokens in a batch with fees
     *
     * @tags mints
     * @name MintsCreate
     * @summary Mint Tokens V2
     * @request POST:/v2/mints
     */
    mintsCreate: (MintTokensRequestV2: ApiMintRequestV2[], params: RequestParams = {}) =>
      this.request<ApiMintTokensResponseV2, any>({
        path: `/v2/mints`,
        method: "POST",
        body: MintTokensRequestV2,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Gets bulk details of a signable transfer
     *
     * @tags transfers
     * @name SignableTransferDetailsCreate
     * @summary Gets bulk details of a signable transfer
     * @request POST:/v2/signable-transfer-details
     */
    signableTransferDetailsCreate: (
      GetSignableTransferRequestV2: ApiGetSignableTransferRequestV2,
      params: RequestParams = {},
    ) =>
      this.request<ApiGetSignableTransferResponseV2, any>({
        path: `/v2/signable-transfer-details`,
        method: "POST",
        body: GetSignableTransferRequestV2,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * @description Create a new transfer request
     *
     * @tags transfers
     * @name TransfersCreate
     * @summary Creates a transfer of multiple tokens between two parties
     * @request POST:/v2/transfers
     */
    transfersCreate: (CreateTransferRequestV2: TransfersCreateTransferRequestV2, params: RequestParams = {}) =>
      this.request<ApiCreateTransferResponseV2, any>({
        path: `/v2/transfers`,
        method: "POST",
        body: CreateTransferRequestV2,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}
