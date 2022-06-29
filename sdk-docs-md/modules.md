[@imtbl/core-sdk](README.md) / Exports

# @imtbl/core-sdk

## Table of contents

### References

- [Core](modules.md#core)
- [Core\_\_factory](modules.md#core__factory)
- [IERC165](modules.md#ierc165)
- [IERC165\_\_factory](modules.md#ierc165__factory)
- [IERC20](modules.md#ierc20)
- [IERC20\_\_factory](modules.md#ierc20__factory)
- [IERC721](modules.md#ierc721)
- [IERC721\_\_factory](modules.md#ierc721__factory)
- [Registration](modules.md#registration)
- [Registration\_\_factory](modules.md#registration__factory)

### Namespaces

- [contracts](modules/contracts.md)
- [factories](modules/factories.md)
- [openzeppelin](modules/openzeppelin.md)

### Enumerations

- [TokenType](enums/TokenType.md)

### Classes

- [AssetsApi](classes/AssetsApi.md)
- [BalancesApi](classes/BalancesApi.md)
- [CollectionsApi](classes/CollectionsApi.md)
- [Configuration](classes/Configuration.md)
- [DepositsApi](classes/DepositsApi.md)
- [EncodingApi](classes/EncodingApi.md)
- [MetadataApi](classes/MetadataApi.md)
- [MintsApi](classes/MintsApi.md)
- [OrdersApi](classes/OrdersApi.md)
- [ProjectsApi](classes/ProjectsApi.md)
- [TokensApi](classes/TokensApi.md)
- [TradesApi](classes/TradesApi.md)
- [TransfersApi](classes/TransfersApi.md)
- [UsersApi](classes/UsersApi.md)
- [WithdrawalsApi](classes/WithdrawalsApi.md)
- [Workflows](classes/Workflows.md)

### Interfaces

- [AddMetadataSchemaToCollectionRequest](interfaces/AddMetadataSchemaToCollectionRequest.md)
- [Application](interfaces/Application.md)
- [Asset](interfaces/Asset.md)
- [AssetProperties](interfaces/AssetProperties.md)
- [AssetsApiGetAssetRequest](interfaces/AssetsApiGetAssetRequest.md)
- [AssetsApiListAssetsRequest](interfaces/AssetsApiListAssetsRequest.md)
- [Balance](interfaces/Balance.md)
- [BalancesApiGetBalanceRequest](interfaces/BalancesApiGetBalanceRequest.md)
- [BalancesApiListBalancesRequest](interfaces/BalancesApiListBalancesRequest.md)
- [CancelOrderRequest](interfaces/CancelOrderRequest.md)
- [CancelOrderResponse](interfaces/CancelOrderResponse.md)
- [Collection](interfaces/Collection.md)
- [CollectionDetails](interfaces/CollectionDetails.md)
- [CollectionFilter](interfaces/CollectionFilter.md)
- [CollectionsApiCreateCollectionRequest](interfaces/CollectionsApiCreateCollectionRequest.md)
- [CollectionsApiGetCollectionRequest](interfaces/CollectionsApiGetCollectionRequest.md)
- [CollectionsApiListCollectionFiltersRequest](interfaces/CollectionsApiListCollectionFiltersRequest.md)
- [CollectionsApiListCollectionsRequest](interfaces/CollectionsApiListCollectionsRequest.md)
- [CollectionsApiUpdateCollectionRequest](interfaces/CollectionsApiUpdateCollectionRequest.md)
- [Config](interfaces/Config.md)
- [ConfigurationParameters](interfaces/ConfigurationParameters.md)
- [CreateCollectionRequest](interfaces/CreateCollectionRequest.md)
- [CreateOrderRequest](interfaces/CreateOrderRequest.md)
- [CreateOrderResponse](interfaces/CreateOrderResponse.md)
- [CreateProjectRequest](interfaces/CreateProjectRequest.md)
- [CreateProjectResponse](interfaces/CreateProjectResponse.md)
- [CreateTradeRequestV1](interfaces/CreateTradeRequestV1.md)
- [CreateTradeResponse](interfaces/CreateTradeResponse.md)
- [CreateTransferRequest](interfaces/CreateTransferRequest.md)
- [CreateTransferRequestV1](interfaces/CreateTransferRequestV1.md)
- [CreateTransferResponse](interfaces/CreateTransferResponse.md)
- [CreateTransferResponseV1](interfaces/CreateTransferResponseV1.md)
- [CreateWithdrawalRequest](interfaces/CreateWithdrawalRequest.md)
- [CreateWithdrawalResponse](interfaces/CreateWithdrawalResponse.md)
- [Deposit](interfaces/Deposit.md)
- [DepositsApiGetDepositRequest](interfaces/DepositsApiGetDepositRequest.md)
- [DepositsApiGetSignableDepositRequest](interfaces/DepositsApiGetSignableDepositRequest.md)
- [DepositsApiListDepositsRequest](interfaces/DepositsApiListDepositsRequest.md)
- [ERC20Deposit](interfaces/ERC20Deposit.md)
- [ERC20PrepareWithdrawal](interfaces/ERC20PrepareWithdrawal.md)
- [ERC20Withdrawal](interfaces/ERC20Withdrawal.md)
- [ERC721Deposit](interfaces/ERC721Deposit.md)
- [ERC721Withdrawal](interfaces/ERC721Withdrawal.md)
- [ETHDeposit](interfaces/ETHDeposit.md)
- [ETHWithdrawal](interfaces/ETHWithdrawal.md)
- [EncodeAssetRequest](interfaces/EncodeAssetRequest.md)
- [EncodeAssetRequestToken](interfaces/EncodeAssetRequestToken.md)
- [EncodeAssetResponse](interfaces/EncodeAssetResponse.md)
- [EncodeAssetTokenData](interfaces/EncodeAssetTokenData.md)
- [EncodingApiEncodeAssetRequest](interfaces/EncodingApiEncodeAssetRequest.md)
- [Fee](interfaces/Fee.md)
- [FeeData](interfaces/FeeData.md)
- [FeeEntry](interfaces/FeeEntry.md)
- [FeeInfo](interfaces/FeeInfo.md)
- [FeeToken](interfaces/FeeToken.md)
- [GetProjectsResponse](interfaces/GetProjectsResponse.md)
- [GetSignableCancelOrderRequest](interfaces/GetSignableCancelOrderRequest.md)
- [GetSignableCancelOrderResponse](interfaces/GetSignableCancelOrderResponse.md)
- [GetSignableDepositRequest](interfaces/GetSignableDepositRequest.md)
- [GetSignableDepositResponse](interfaces/GetSignableDepositResponse.md)
- [GetSignableOrderRequest](interfaces/GetSignableOrderRequest.md)
- [GetSignableOrderResponse](interfaces/GetSignableOrderResponse.md)
- [GetSignableRegistrationOffchainResponse](interfaces/GetSignableRegistrationOffchainResponse.md)
- [GetSignableRegistrationRequest](interfaces/GetSignableRegistrationRequest.md)
- [GetSignableRegistrationResponse](interfaces/GetSignableRegistrationResponse.md)
- [GetSignableTradeRequest](interfaces/GetSignableTradeRequest.md)
- [GetSignableTradeResponse](interfaces/GetSignableTradeResponse.md)
- [GetSignableTransferRequest](interfaces/GetSignableTransferRequest.md)
- [GetSignableTransferRequestV1](interfaces/GetSignableTransferRequestV1.md)
- [GetSignableTransferResponse](interfaces/GetSignableTransferResponse.md)
- [GetSignableTransferResponseV1](interfaces/GetSignableTransferResponseV1.md)
- [GetSignableWithdrawalRequest](interfaces/GetSignableWithdrawalRequest.md)
- [GetSignableWithdrawalResponse](interfaces/GetSignableWithdrawalResponse.md)
- [GetTLVsResult](interfaces/GetTLVsResult.md)
- [GetUsersApiResponse](interfaces/GetUsersApiResponse.md)
- [ListAssetsResponse](interfaces/ListAssetsResponse.md)
- [ListBalancesResponse](interfaces/ListBalancesResponse.md)
- [ListCollectionsResponse](interfaces/ListCollectionsResponse.md)
- [ListDepositsResponse](interfaces/ListDepositsResponse.md)
- [ListMintsResponse](interfaces/ListMintsResponse.md)
- [ListOrdersResponse](interfaces/ListOrdersResponse.md)
- [ListTokensResponse](interfaces/ListTokensResponse.md)
- [ListTradesResponse](interfaces/ListTradesResponse.md)
- [ListTransfersResponse](interfaces/ListTransfersResponse.md)
- [ListWithdrawalsResponse](interfaces/ListWithdrawalsResponse.md)
- [MetadataApiAddMetadataSchemaToCollectionRequest](interfaces/MetadataApiAddMetadataSchemaToCollectionRequest.md)
- [MetadataApiGetMetadataSchemaRequest](interfaces/MetadataApiGetMetadataSchemaRequest.md)
- [MetadataApiUpdateMetadataSchemaByNameRequest](interfaces/MetadataApiUpdateMetadataSchemaByNameRequest.md)
- [MetadataSchemaProperty](interfaces/MetadataSchemaProperty.md)
- [MetadataSchemaRequest](interfaces/MetadataSchemaRequest.md)
- [Mint](interfaces/Mint.md)
- [MintFee](interfaces/MintFee.md)
- [MintRequest](interfaces/MintRequest.md)
- [MintRequestV1](interfaces/MintRequestV1.md)
- [MintResultDetails](interfaces/MintResultDetails.md)
- [MintResultV1](interfaces/MintResultV1.md)
- [MintTokenData](interfaces/MintTokenData.md)
- [MintTokenDataV2](interfaces/MintTokenDataV2.md)
- [MintTokens](interfaces/MintTokens.md)
- [MintTokensResponse](interfaces/MintTokensResponse.md)
- [MintUser](interfaces/MintUser.md)
- [MintableTokenDetails](interfaces/MintableTokenDetails.md)
- [MintsApiGetMintRequest](interfaces/MintsApiGetMintRequest.md)
- [MintsApiGetMintableTokenDetailsByClientTokenIdRequest](interfaces/MintsApiGetMintableTokenDetailsByClientTokenIdRequest.md)
- [MintsApiListMintsRequest](interfaces/MintsApiListMintsRequest.md)
- [MintsApiMintTokensRequest](interfaces/MintsApiMintTokensRequest.md)
- [Order](interfaces/Order.md)
- [OrderDetails](interfaces/OrderDetails.md)
- [OrderFeeInfo](interfaces/OrderFeeInfo.md)
- [OrdersApiCancelOrderRequest](interfaces/OrdersApiCancelOrderRequest.md)
- [OrdersApiCreateOrderRequest](interfaces/OrdersApiCreateOrderRequest.md)
- [OrdersApiGetOrderRequest](interfaces/OrdersApiGetOrderRequest.md)
- [OrdersApiGetSignableCancelOrderRequest](interfaces/OrdersApiGetSignableCancelOrderRequest.md)
- [OrdersApiGetSignableOrderRequest](interfaces/OrdersApiGetSignableOrderRequest.md)
- [OrdersApiListOrdersRequest](interfaces/OrdersApiListOrdersRequest.md)
- [Project](interfaces/Project.md)
- [ProjectsApiCreateProjectRequest](interfaces/ProjectsApiCreateProjectRequest.md)
- [ProjectsApiGetProjectRequest](interfaces/ProjectsApiGetProjectRequest.md)
- [ProjectsApiGetProjectsRequest](interfaces/ProjectsApiGetProjectsRequest.md)
- [Range](interfaces/Range.md)
- [RegisterUserRequest](interfaces/RegisterUserRequest.md)
- [RegisterUserResponse](interfaces/RegisterUserResponse.md)
- [SignableToken](interfaces/SignableToken.md)
- [SignableTransferDetails](interfaces/SignableTransferDetails.md)
- [SignableTransferResponseDetails](interfaces/SignableTransferResponseDetails.md)
- [SnapshotBalancesRecord](interfaces/SnapshotBalancesRecord.md)
- [StarkWallet](interfaces/StarkWallet.md)
- [SuccessResponse](interfaces/SuccessResponse.md)
- [Token](interfaces/Token.md)
- [TokenData](interfaces/TokenData.md)
- [TokenDetails](interfaces/TokenDetails.md)
- [TokensApiGetTokenRequest](interfaces/TokensApiGetTokenRequest.md)
- [TokensApiListTokensRequest](interfaces/TokensApiListTokensRequest.md)
- [Trade](interfaces/Trade.md)
- [TradeSide](interfaces/TradeSide.md)
- [TradesApiCreateTradeRequest](interfaces/TradesApiCreateTradeRequest.md)
- [TradesApiGetSignableTradeRequest](interfaces/TradesApiGetSignableTradeRequest.md)
- [TradesApiGetTradeRequest](interfaces/TradesApiGetTradeRequest.md)
- [TradesApiListTradesRequest](interfaces/TradesApiListTradesRequest.md)
- [Transfer](interfaces/Transfer.md)
- [TransferRequest](interfaces/TransferRequest.md)
- [TransfersApiCreateTransferRequest](interfaces/TransfersApiCreateTransferRequest.md)
- [TransfersApiCreateTransferV1Request](interfaces/TransfersApiCreateTransferV1Request.md)
- [TransfersApiGetSignableTransferRequest](interfaces/TransfersApiGetSignableTransferRequest.md)
- [TransfersApiGetSignableTransferV1Request](interfaces/TransfersApiGetSignableTransferV1Request.md)
- [TransfersApiGetTransferRequest](interfaces/TransfersApiGetTransferRequest.md)
- [TransfersApiListTransfersRequest](interfaces/TransfersApiListTransfersRequest.md)
- [UpdateCollectionRequest](interfaces/UpdateCollectionRequest.md)
- [UsersApiGetSignableRegistrationOffchainRequest](interfaces/UsersApiGetSignableRegistrationOffchainRequest.md)
- [UsersApiGetSignableRegistrationRequest](interfaces/UsersApiGetSignableRegistrationRequest.md)
- [UsersApiGetUsersRequest](interfaces/UsersApiGetUsersRequest.md)
- [UsersApiRegisterUserRequest](interfaces/UsersApiRegisterUserRequest.md)
- [Withdrawal](interfaces/Withdrawal.md)
- [WithdrawalsApiCreateWithdrawalRequest](interfaces/WithdrawalsApiCreateWithdrawalRequest.md)
- [WithdrawalsApiGetSignableWithdrawalRequest](interfaces/WithdrawalsApiGetSignableWithdrawalRequest.md)
- [WithdrawalsApiGetWithdrawalRequest](interfaces/WithdrawalsApiGetWithdrawalRequest.md)
- [WithdrawalsApiListWithdrawalsRequest](interfaces/WithdrawalsApiListWithdrawalsRequest.md)

### Type Aliases

- [EncodeAssetRequestTokenTypeEnum](modules.md#encodeassetrequesttokentypeenum)
- [EthNetwork](modules.md#ethnetwork)
- [FeeTokenTypeEnum](modules.md#feetokentypeenum)
- [MetadataSchemaRequestTypeEnum](modules.md#metadataschemarequesttypeenum)
- [TokenDeposit](modules.md#tokendeposit)
- [TokenPrepareWithdrawal](modules.md#tokenpreparewithdrawal)
- [TokenWithdrawal](modules.md#tokenwithdrawal)
- [UnsignedBatchNftTransferRequest](modules.md#unsignedbatchnfttransferrequest)
- [UnsignedBurnRequest](modules.md#unsignedburnrequest)
- [UnsignedMintRequest](modules.md#unsignedmintrequest)
- [UnsignedTransferRequest](modules.md#unsignedtransferrequest)

### Variables

- [ETH\_PREPARE\_WITHDRAWAL\_DATA](modules.md#eth_prepare_withdrawal_data)
- [EncodeAssetRequestTokenTypeEnum](modules.md#encodeassetrequesttokentypeenum-1)
- [FeeTokenTypeEnum](modules.md#feetokentypeenum-1)
- [MetadataSchemaRequestTypeEnum](modules.md#metadataschemarequesttypeenum-1)
- [ORDER](modules.md#order)
- [SECP\_ORDER](modules.md#secp_order)
- [constantPointsHex](modules.md#constantpointshex)

### Functions

- [AssetsApiAxiosParamCreator](modules.md#assetsapiaxiosparamcreator)
- [AssetsApiFactory](modules.md#assetsapifactory)
- [AssetsApiFp](modules.md#assetsapifp)
- [BalancesApiAxiosParamCreator](modules.md#balancesapiaxiosparamcreator)
- [BalancesApiFactory](modules.md#balancesapifactory)
- [BalancesApiFp](modules.md#balancesapifp)
- [CollectionsApiAxiosParamCreator](modules.md#collectionsapiaxiosparamcreator)
- [CollectionsApiFactory](modules.md#collectionsapifactory)
- [CollectionsApiFp](modules.md#collectionsapifp)
- [DepositsApiAxiosParamCreator](modules.md#depositsapiaxiosparamcreator)
- [DepositsApiFactory](modules.md#depositsapifactory)
- [DepositsApiFp](modules.md#depositsapifp)
- [EncodingApiAxiosParamCreator](modules.md#encodingapiaxiosparamcreator)
- [EncodingApiFactory](modules.md#encodingapifactory)
- [EncodingApiFp](modules.md#encodingapifp)
- [MetadataApiAxiosParamCreator](modules.md#metadataapiaxiosparamcreator)
- [MetadataApiFactory](modules.md#metadataapifactory)
- [MetadataApiFp](modules.md#metadataapifp)
- [MintsApiAxiosParamCreator](modules.md#mintsapiaxiosparamcreator)
- [MintsApiFactory](modules.md#mintsapifactory)
- [MintsApiFp](modules.md#mintsapifp)
- [OrdersApiAxiosParamCreator](modules.md#ordersapiaxiosparamcreator)
- [OrdersApiFactory](modules.md#ordersapifactory)
- [OrdersApiFp](modules.md#ordersapifp)
- [ProjectsApiAxiosParamCreator](modules.md#projectsapiaxiosparamcreator)
- [ProjectsApiFactory](modules.md#projectsapifactory)
- [ProjectsApiFp](modules.md#projectsapifp)
- [TokensApiAxiosParamCreator](modules.md#tokensapiaxiosparamcreator)
- [TokensApiFactory](modules.md#tokensapifactory)
- [TokensApiFp](modules.md#tokensapifp)
- [TradesApiAxiosParamCreator](modules.md#tradesapiaxiosparamcreator)
- [TradesApiFactory](modules.md#tradesapifactory)
- [TradesApiFp](modules.md#tradesapifp)
- [TransfersApiAxiosParamCreator](modules.md#transfersapiaxiosparamcreator)
- [TransfersApiFactory](modules.md#transfersapifactory)
- [TransfersApiFp](modules.md#transfersapifp)
- [UsersApiAxiosParamCreator](modules.md#usersapiaxiosparamcreator)
- [UsersApiFactory](modules.md#usersapifactory)
- [UsersApiFp](modules.md#usersapifp)
- [WithdrawalsApiAxiosParamCreator](modules.md#withdrawalsapiaxiosparamcreator)
- [WithdrawalsApiFactory](modules.md#withdrawalsapifactory)
- [WithdrawalsApiFp](modules.md#withdrawalsapifp)
- [convertToSignableRequestFormat](modules.md#converttosignablerequestformat)
- [deserializeSignature](modules.md#deserializesignature)
- [fixMessage](modules.md#fixmessage)
- [generateStarkWallet](modules.md#generatestarkwallet)
- [getAccountPath](modules.md#getaccountpath)
- [getConfig](modules.md#getconfig)
- [getIntFromBits](modules.md#getintfrombits)
- [getKeyPair](modules.md#getkeypair)
- [getKeyPairFromPath](modules.md#getkeypairfrompath)
- [getKeyPairFromPrivateKey](modules.md#getkeypairfromprivatekey)
- [getKeyPairFromPublicKey](modules.md#getkeypairfrompublickey)
- [getPublic](modules.md#getpublic)
- [getStarkPublicKey](modules.md#getstarkpublickey)
- [getXCoordinate](modules.md#getxcoordinate)
- [grindKey](modules.md#grindkey)
- [hashKeyWithIndex](modules.md#hashkeywithindex)
- [importRecoveryParam](modules.md#importrecoveryparam)
- [serializeEthSignature](modules.md#serializeethsignature)
- [serializeSignature](modules.md#serializesignature)
- [sign](modules.md#sign)
- [signMessage](modules.md#signmessage)
- [signRaw](modules.md#signraw)

## References

### Core

Re-exports [Core](interfaces/contracts.Core.md)

___

### Core\_\_factory

Re-exports [Core__factory](classes/factories.contracts.Core__factory.md)

___

### IERC165

Re-exports [IERC165](interfaces/openzeppelin.contracts.utils.introspection.IERC165.md)

___

### IERC165\_\_factory

Re-exports [IERC165__factory](classes/factories.openzeppelin.contracts.utils.introspection.IERC165__factory.md)

___

### IERC20

Re-exports [IERC20](interfaces/openzeppelin.contracts.token.erc20.IERC20.md)

___

### IERC20\_\_factory

Re-exports [IERC20__factory](classes/factories.openzeppelin.contracts.token.erc20.IERC20__factory.md)

___

### IERC721

Re-exports [IERC721](interfaces/openzeppelin.contracts.token.erc721.IERC721.md)

___

### IERC721\_\_factory

Re-exports [IERC721__factory](classes/factories.openzeppelin.contracts.token.erc721.IERC721__factory.md)

___

### Registration

Re-exports [Registration](interfaces/contracts.Registration.md)

___

### Registration\_\_factory

Re-exports [Registration__factory](classes/factories.contracts.Registration__factory.md)

## Type Aliases

### EncodeAssetRequestTokenTypeEnum

Ƭ **EncodeAssetRequestTokenTypeEnum**: typeof [`EncodeAssetRequestTokenTypeEnum`](modules.md#encodeassetrequesttokentypeenum-1)[keyof typeof [`EncodeAssetRequestTokenTypeEnum`](modules.md#encodeassetrequesttokentypeenum-1)]

#### Defined in

[src/api/models/encode-asset-request-token.ts:38](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/encode-asset-request-token.ts#L38)

[src/api/models/encode-asset-request-token.ts:44](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/encode-asset-request-token.ts#L44)

___

### EthNetwork

Ƭ **EthNetwork**: ``"dev"`` \| ``"ropsten"`` \| ``"mainnet"``

#### Defined in

[src/types/index.ts:15](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/index.ts#L15)

___

### FeeTokenTypeEnum

Ƭ **FeeTokenTypeEnum**: typeof [`FeeTokenTypeEnum`](modules.md#feetokentypeenum-1)[keyof typeof [`FeeTokenTypeEnum`](modules.md#feetokentypeenum-1)]

#### Defined in

[src/api/models/fee-token.ts:38](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/fee-token.ts#L38)

[src/api/models/fee-token.ts:43](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/fee-token.ts#L43)

___

### MetadataSchemaRequestTypeEnum

Ƭ **MetadataSchemaRequestTypeEnum**: typeof [`MetadataSchemaRequestTypeEnum`](modules.md#metadataschemarequesttypeenum-1)[keyof typeof [`MetadataSchemaRequestTypeEnum`](modules.md#metadataschemarequesttypeenum-1)]

#### Defined in

[src/api/models/metadata-schema-request.ts:43](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L43)

[src/api/models/metadata-schema-request.ts:51](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L51)

___

### TokenDeposit

Ƭ **TokenDeposit**: [`ETHDeposit`](interfaces/ETHDeposit.md) \| [`ERC20Deposit`](interfaces/ERC20Deposit.md) \| [`ERC721Deposit`](interfaces/ERC721Deposit.md)

#### Defined in

[src/types/deposit.ts:21](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/deposit.ts#L21)

___

### TokenPrepareWithdrawal

Ƭ **TokenPrepareWithdrawal**: `ETHPrepareWithdrawal` \| [`ERC20PrepareWithdrawal`](interfaces/ERC20PrepareWithdrawal.md) \| [`ERC721Withdrawal`](interfaces/ERC721Withdrawal.md)

#### Defined in

[src/types/withdrawal.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/withdrawal.ts#L47)

___

### TokenWithdrawal

Ƭ **TokenWithdrawal**: [`ETHWithdrawal`](interfaces/ETHWithdrawal.md) \| [`ERC20Withdrawal`](interfaces/ERC20Withdrawal.md) \| [`ERC721Withdrawal`](interfaces/ERC721Withdrawal.md)

#### Defined in

[src/types/withdrawal.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/withdrawal.ts#L46)

___

### UnsignedBatchNftTransferRequest

Ƭ **UnsignedBatchNftTransferRequest**: [`GetSignableTransferRequest`](interfaces/GetSignableTransferRequest.md)

#### Defined in

[src/types/index.ts:25](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/index.ts#L25)

___

### UnsignedBurnRequest

Ƭ **UnsignedBurnRequest**: `GetSignableBurnRequest`

#### Defined in

[src/types/index.ts:26](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/index.ts#L26)

___

### UnsignedMintRequest

Ƭ **UnsignedMintRequest**: `Omit`<[`MintRequest`](interfaces/MintRequest.md), ``"auth_signature"``\>

#### Defined in

[src/types/index.ts:23](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/index.ts#L23)

___

### UnsignedTransferRequest

Ƭ **UnsignedTransferRequest**: [`GetSignableTransferRequestV1`](interfaces/GetSignableTransferRequestV1.md)

#### Defined in

[src/types/index.ts:24](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/index.ts#L24)

## Variables

### ETH\_PREPARE\_WITHDRAWAL\_DATA

• `Const` **ETH\_PREPARE\_WITHDRAWAL\_DATA**: `ETHPrepareWithdrawal`

#### Defined in

[src/types/withdrawal.ts:14](https://github.com/immutable/imx-core-sdk/blob/7204457/src/types/withdrawal.ts#L14)

___

### EncodeAssetRequestTokenTypeEnum

• `Const` **EncodeAssetRequestTokenTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Erc20` | ``"ERC20"`` |
| `Erc721` | ``"ERC721"`` |
| `Eth` | ``"ETH"`` |

#### Defined in

[src/api/models/encode-asset-request-token.ts:38](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/encode-asset-request-token.ts#L38)

[src/api/models/encode-asset-request-token.ts:44](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/encode-asset-request-token.ts#L44)

___

### FeeTokenTypeEnum

• `Const` **FeeTokenTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Erc20` | ``"ERC20"`` |
| `Eth` | ``"ETH"`` |

#### Defined in

[src/api/models/fee-token.ts:38](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/fee-token.ts#L38)

[src/api/models/fee-token.ts:43](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/fee-token.ts#L43)

___

### MetadataSchemaRequestTypeEnum

• `Const` **MetadataSchemaRequestTypeEnum**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Boolean` | ``"boolean"`` |
| `Continuous` | ``"continuous"`` |
| `Discrete` | ``"discrete"`` |
| `Enum` | ``"enum"`` |
| `Text` | ``"text"`` |

#### Defined in

[src/api/models/metadata-schema-request.ts:43](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L43)

[src/api/models/metadata-schema-request.ts:51](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L51)

___

### ORDER

• `Const` **ORDER**: `BN`

#### Defined in

[src/utils/crypto/constants.ts:3](https://github.com/immutable/imx-core-sdk/blob/7204457/src/utils/crypto/constants.ts#L3)

___

### SECP\_ORDER

• `Const` **SECP\_ORDER**: `BN`

#### Defined in

[src/utils/crypto/constants.ts:8](https://github.com/immutable/imx-core-sdk/blob/7204457/src/utils/crypto/constants.ts#L8)

___

### constantPointsHex

• `Const` **constantPointsHex**: `string`[][]

#### Defined in

[src/utils/stark/points.ts:1](https://github.com/immutable/imx-core-sdk/blob/7204457/src/utils/stark/points.ts#L1)

## Functions

### AssetsApiAxiosParamCreator

▸ **AssetsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAsset` | (`tokenAddress`: `string`, `tokenId`: `string`, `includeFees?`: `boolean`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listAssets` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"name"``, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `name?`: `string`, `metadata?`: `string`, `sellOrders?`: `boolean`, `buyOrders?`: `boolean`, `includeFees?`: `boolean`, `collection?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### AssetsApiFactory

▸ **AssetsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAsset` | (`tokenAddress`: `string`, `tokenId`: `string`, `includeFees?`: `boolean`, `options?`: `any`) => `AxiosPromise`<[`Asset`](interfaces/Asset.md)\> |
| `listAssets` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"name"``, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `name?`: `string`, `metadata?`: `string`, `sellOrders?`: `boolean`, `buyOrders?`: `boolean`, `includeFees?`: `boolean`, `collection?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListAssetsResponse`](interfaces/ListAssetsResponse.md)\> |

___

### AssetsApiFp

▸ **AssetsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getAsset` | (`tokenAddress`: `string`, `tokenId`: `string`, `includeFees?`: `boolean`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Asset`](interfaces/Asset.md)\>\> |
| `listAssets` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"name"``, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `name?`: `string`, `metadata?`: `string`, `sellOrders?`: `boolean`, `buyOrders?`: `boolean`, `includeFees?`: `boolean`, `collection?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListAssetsResponse`](interfaces/ListAssetsResponse.md)\>\> |

___

### BalancesApiAxiosParamCreator

▸ **BalancesApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getBalance` | (`owner`: `string`, `address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listBalances` | (`owner`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### BalancesApiFactory

▸ **BalancesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getBalance` | (`owner`: `string`, `address`: `string`, `options?`: `any`) => `AxiosPromise`<[`Balance`](interfaces/Balance.md)\> |
| `listBalances` | (`owner`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListBalancesResponse`](interfaces/ListBalancesResponse.md)\> |

___

### BalancesApiFp

▸ **BalancesApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getBalance` | (`owner`: `string`, `address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Balance`](interfaces/Balance.md)\>\> |
| `listBalances` | (`owner`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListBalancesResponse`](interfaces/ListBalancesResponse.md)\>\> |

___

### CollectionsApiAxiosParamCreator

▸ **CollectionsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCollection` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createCollectionRequest`: [`CreateCollectionRequest`](interfaces/CreateCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getCollection` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listCollectionFilters` | (`address`: `string`, `pageSize?`: `number`, `nextPageToken?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listCollections` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `blacklist?`: `string`, `whitelist?`: `string`, `keyword?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `updateCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `updateCollectionRequest`: [`UpdateCollectionRequest`](interfaces/UpdateCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### CollectionsApiFactory

▸ **CollectionsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCollection` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createCollectionRequest`: [`CreateCollectionRequest`](interfaces/CreateCollectionRequest.md), `options?`: `any`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\> |
| `getCollection` | (`address`: `string`, `options?`: `any`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\> |
| `listCollectionFilters` | (`address`: `string`, `pageSize?`: `number`, `nextPageToken?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CollectionFilter`](interfaces/CollectionFilter.md)\> |
| `listCollections` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `blacklist?`: `string`, `whitelist?`: `string`, `keyword?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListCollectionsResponse`](interfaces/ListCollectionsResponse.md)\> |
| `updateCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `updateCollectionRequest`: [`UpdateCollectionRequest`](interfaces/UpdateCollectionRequest.md), `options?`: `any`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\> |

___

### CollectionsApiFp

▸ **CollectionsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createCollection` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createCollectionRequest`: [`CreateCollectionRequest`](interfaces/CreateCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\>\> |
| `getCollection` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\>\> |
| `listCollectionFilters` | (`address`: `string`, `pageSize?`: `number`, `nextPageToken?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CollectionFilter`](interfaces/CollectionFilter.md)\>\> |
| `listCollections` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `blacklist?`: `string`, `whitelist?`: `string`, `keyword?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListCollectionsResponse`](interfaces/ListCollectionsResponse.md)\>\> |
| `updateCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `updateCollectionRequest`: [`UpdateCollectionRequest`](interfaces/UpdateCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Collection`](interfaces/Collection.md)\>\> |

___

### DepositsApiAxiosParamCreator

▸ **DepositsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDeposit` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableDeposit` | (`getSignableDepositRequest`: [`GetSignableDepositRequest`](interfaces/GetSignableDepositRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listDeposits` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### DepositsApiFactory

▸ **DepositsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDeposit` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Deposit`](interfaces/Deposit.md)\> |
| `getSignableDeposit` | (`getSignableDepositRequest`: [`GetSignableDepositRequest`](interfaces/GetSignableDepositRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableDepositResponse`](interfaces/GetSignableDepositResponse.md)\> |
| `listDeposits` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListDepositsResponse`](interfaces/ListDepositsResponse.md)\> |

___

### DepositsApiFp

▸ **DepositsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getDeposit` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Deposit`](interfaces/Deposit.md)\>\> |
| `getSignableDeposit` | (`getSignableDepositRequest`: [`GetSignableDepositRequest`](interfaces/GetSignableDepositRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableDepositResponse`](interfaces/GetSignableDepositResponse.md)\>\> |
| `listDeposits` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListDepositsResponse`](interfaces/ListDepositsResponse.md)\>\> |

___

### EncodingApiAxiosParamCreator

▸ **EncodingApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encodeAsset` | (`assetType`: `string`, `encodeAssetRequest`: [`EncodeAssetRequest`](interfaces/EncodeAssetRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### EncodingApiFactory

▸ **EncodingApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encodeAsset` | (`assetType`: `string`, `encodeAssetRequest`: [`EncodeAssetRequest`](interfaces/EncodeAssetRequest.md), `options?`: `any`) => `AxiosPromise`<[`EncodeAssetResponse`](interfaces/EncodeAssetResponse.md)\> |

___

### EncodingApiFp

▸ **EncodingApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `encodeAsset` | (`assetType`: `string`, `encodeAssetRequest`: [`EncodeAssetRequest`](interfaces/EncodeAssetRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`EncodeAssetResponse`](interfaces/EncodeAssetResponse.md)\>\> |

___

### MetadataApiAxiosParamCreator

▸ **MetadataApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addMetadataSchemaToCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `addMetadataSchemaToCollectionRequest`: [`AddMetadataSchemaToCollectionRequest`](interfaces/AddMetadataSchemaToCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getMetadataSchema` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `updateMetadataSchemaByName` | (`address`: `string`, `name`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `metadataSchemaRequest`: [`MetadataSchemaRequest`](interfaces/MetadataSchemaRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### MetadataApiFactory

▸ **MetadataApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addMetadataSchemaToCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `addMetadataSchemaToCollectionRequest`: [`AddMetadataSchemaToCollectionRequest`](interfaces/AddMetadataSchemaToCollectionRequest.md), `options?`: `any`) => `AxiosPromise`<[`SuccessResponse`](interfaces/SuccessResponse.md)\> |
| `getMetadataSchema` | (`address`: `string`, `options?`: `any`) => `AxiosPromise`<[`MetadataSchemaProperty`](interfaces/MetadataSchemaProperty.md)[]\> |
| `updateMetadataSchemaByName` | (`address`: `string`, `name`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `metadataSchemaRequest`: [`MetadataSchemaRequest`](interfaces/MetadataSchemaRequest.md), `options?`: `any`) => `AxiosPromise`<[`SuccessResponse`](interfaces/SuccessResponse.md)\> |

___

### MetadataApiFp

▸ **MetadataApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `addMetadataSchemaToCollection` | (`address`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `addMetadataSchemaToCollectionRequest`: [`AddMetadataSchemaToCollectionRequest`](interfaces/AddMetadataSchemaToCollectionRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SuccessResponse`](interfaces/SuccessResponse.md)\>\> |
| `getMetadataSchema` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MetadataSchemaProperty`](interfaces/MetadataSchemaProperty.md)[]\>\> |
| `updateMetadataSchemaByName` | (`address`: `string`, `name`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `metadataSchemaRequest`: [`MetadataSchemaRequest`](interfaces/MetadataSchemaRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`SuccessResponse`](interfaces/SuccessResponse.md)\>\> |

___

### MintsApiAxiosParamCreator

▸ **MintsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getMint` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getMintableTokenDetailsByClientTokenId` | (`tokenAddress`: `string`, `tokenId`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listMints` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenName?`: `string`, `tokenAddress?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `mintTokens` | (`mintTokensRequestV2`: [`MintRequest`](interfaces/MintRequest.md)[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### MintsApiFactory

▸ **MintsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getMint` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Mint`](interfaces/Mint.md)\> |
| `getMintableTokenDetailsByClientTokenId` | (`tokenAddress`: `string`, `tokenId`: `string`, `options?`: `any`) => `AxiosPromise`<[`MintableTokenDetails`](interfaces/MintableTokenDetails.md)\> |
| `listMints` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenName?`: `string`, `tokenAddress?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListMintsResponse`](interfaces/ListMintsResponse.md)\> |
| `mintTokens` | (`mintTokensRequestV2`: [`MintRequest`](interfaces/MintRequest.md)[], `options?`: `any`) => `AxiosPromise`<[`MintTokensResponse`](interfaces/MintTokensResponse.md)\> |

___

### MintsApiFp

▸ **MintsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getMint` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Mint`](interfaces/Mint.md)\>\> |
| `getMintableTokenDetailsByClientTokenId` | (`tokenAddress`: `string`, `tokenId`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MintableTokenDetails`](interfaces/MintableTokenDetails.md)\>\> |
| `listMints` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenName?`: `string`, `tokenAddress?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListMintsResponse`](interfaces/ListMintsResponse.md)\>\> |
| `mintTokens` | (`mintTokensRequestV2`: [`MintRequest`](interfaces/MintRequest.md)[], `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`MintTokensResponse`](interfaces/MintTokensResponse.md)\>\> |

___

### OrdersApiAxiosParamCreator

▸ **OrdersApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cancelOrder` | (`id`: `string`, `cancelOrderRequest`: [`CancelOrderRequest`](interfaces/CancelOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `createOrder` | (`createOrderRequest`: [`CreateOrderRequest`](interfaces/CreateOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getOrder` | (`id`: `string`, `includeFees?`: `boolean`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableCancelOrder` | (`getSignableCancelOrderRequest`: [`GetSignableCancelOrderRequest`](interfaces/GetSignableCancelOrderRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableOrder` | (`getSignableOrderRequestV3`: [`GetSignableOrderRequest`](interfaces/GetSignableOrderRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listOrders` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"created_at"`` \| ``"expired_at"`` \| ``"sell_quantity"`` \| ``"buy_quantity"`` \| ``"buy_quantity_with_fees"``, `direction?`: `string`, `user?`: `string`, `status?`: ``"active"`` \| ``"filled"`` \| ``"cancelled"`` \| ``"expired"`` \| ``"inactive"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `buyTokenType?`: `string`, `buyTokenId?`: `string`, `buyAssetId?`: `string`, `buyTokenAddress?`: `string`, `buyTokenName?`: `string`, `buyMinQuantity?`: `string`, `buyMaxQuantity?`: `string`, `buyMetadata?`: `string`, `sellTokenType?`: `string`, `sellTokenId?`: `string`, `sellAssetId?`: `string`, `sellTokenAddress?`: `string`, `sellTokenName?`: `string`, `sellMinQuantity?`: `string`, `sellMaxQuantity?`: `string`, `sellMetadata?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### OrdersApiFactory

▸ **OrdersApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cancelOrder` | (`id`: `string`, `cancelOrderRequest`: [`CancelOrderRequest`](interfaces/CancelOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CancelOrderResponse`](interfaces/CancelOrderResponse.md)\> |
| `createOrder` | (`createOrderRequest`: [`CreateOrderRequest`](interfaces/CreateOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CreateOrderResponse`](interfaces/CreateOrderResponse.md)\> |
| `getOrder` | (`id`: `string`, `includeFees?`: `boolean`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `any`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\> |
| `getSignableCancelOrder` | (`getSignableCancelOrderRequest`: [`GetSignableCancelOrderRequest`](interfaces/GetSignableCancelOrderRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableCancelOrderResponse`](interfaces/GetSignableCancelOrderResponse.md)\> |
| `getSignableOrder` | (`getSignableOrderRequestV3`: [`GetSignableOrderRequest`](interfaces/GetSignableOrderRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableOrderResponse`](interfaces/GetSignableOrderResponse.md)\> |
| `listOrders` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"created_at"`` \| ``"expired_at"`` \| ``"sell_quantity"`` \| ``"buy_quantity"`` \| ``"buy_quantity_with_fees"``, `direction?`: `string`, `user?`: `string`, `status?`: ``"active"`` \| ``"filled"`` \| ``"cancelled"`` \| ``"expired"`` \| ``"inactive"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `buyTokenType?`: `string`, `buyTokenId?`: `string`, `buyAssetId?`: `string`, `buyTokenAddress?`: `string`, `buyTokenName?`: `string`, `buyMinQuantity?`: `string`, `buyMaxQuantity?`: `string`, `buyMetadata?`: `string`, `sellTokenType?`: `string`, `sellTokenId?`: `string`, `sellAssetId?`: `string`, `sellTokenAddress?`: `string`, `sellTokenName?`: `string`, `sellMinQuantity?`: `string`, `sellMaxQuantity?`: `string`, `sellMetadata?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListOrdersResponse`](interfaces/ListOrdersResponse.md)\> |

___

### OrdersApiFp

▸ **OrdersApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `cancelOrder` | (`id`: `string`, `cancelOrderRequest`: [`CancelOrderRequest`](interfaces/CancelOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CancelOrderResponse`](interfaces/CancelOrderResponse.md)\>\> |
| `createOrder` | (`createOrderRequest`: [`CreateOrderRequest`](interfaces/CreateOrderRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateOrderResponse`](interfaces/CreateOrderResponse.md)\>\> |
| `getOrder` | (`id`: `string`, `includeFees?`: `boolean`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Order`](interfaces/Order.md)\>\> |
| `getSignableCancelOrder` | (`getSignableCancelOrderRequest`: [`GetSignableCancelOrderRequest`](interfaces/GetSignableCancelOrderRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableCancelOrderResponse`](interfaces/GetSignableCancelOrderResponse.md)\>\> |
| `getSignableOrder` | (`getSignableOrderRequestV3`: [`GetSignableOrderRequest`](interfaces/GetSignableOrderRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableOrderResponse`](interfaces/GetSignableOrderResponse.md)\>\> |
| `listOrders` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: ``"updated_at"`` \| ``"created_at"`` \| ``"expired_at"`` \| ``"sell_quantity"`` \| ``"buy_quantity"`` \| ``"buy_quantity_with_fees"``, `direction?`: `string`, `user?`: `string`, `status?`: ``"active"`` \| ``"filled"`` \| ``"cancelled"`` \| ``"expired"`` \| ``"inactive"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `updatedMinTimestamp?`: `string`, `updatedMaxTimestamp?`: `string`, `buyTokenType?`: `string`, `buyTokenId?`: `string`, `buyAssetId?`: `string`, `buyTokenAddress?`: `string`, `buyTokenName?`: `string`, `buyMinQuantity?`: `string`, `buyMaxQuantity?`: `string`, `buyMetadata?`: `string`, `sellTokenType?`: `string`, `sellTokenId?`: `string`, `sellAssetId?`: `string`, `sellTokenAddress?`: `string`, `sellTokenName?`: `string`, `sellMinQuantity?`: `string`, `sellMaxQuantity?`: `string`, `sellMetadata?`: `string`, `auxiliaryFeePercentages?`: `string`, `auxiliaryFeeRecipients?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListOrdersResponse`](interfaces/ListOrdersResponse.md)\>\> |

___

### ProjectsApiAxiosParamCreator

▸ **ProjectsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createProject` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createProjectRequest`: [`CreateProjectRequest`](interfaces/CreateProjectRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getProject` | (`id`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getProjects` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### ProjectsApiFactory

▸ **ProjectsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createProject` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createProjectRequest`: [`CreateProjectRequest`](interfaces/CreateProjectRequest.md), `options?`: `any`) => `AxiosPromise`<[`CreateProjectResponse`](interfaces/CreateProjectResponse.md)\> |
| `getProject` | (`id`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `options?`: `any`) => `AxiosPromise`<[`Project`](interfaces/Project.md)\> |
| `getProjects` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `options?`: `any`) => `AxiosPromise`<[`GetProjectsResponse`](interfaces/GetProjectsResponse.md)\> |

___

### ProjectsApiFp

▸ **ProjectsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createProject` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `createProjectRequest`: [`CreateProjectRequest`](interfaces/CreateProjectRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateProjectResponse`](interfaces/CreateProjectResponse.md)\>\> |
| `getProject` | (`id`: `string`, `iMXSignature`: `string`, `iMXTimestamp`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Project`](interfaces/Project.md)\>\> |
| `getProjects` | (`iMXSignature`: `string`, `iMXTimestamp`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetProjectsResponse`](interfaces/GetProjectsResponse.md)\>\> |

___

### TokensApiAxiosParamCreator

▸ **TokensApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getToken` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listTokens` | (`address?`: `string`, `symbols?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### TokensApiFactory

▸ **TokensApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getToken` | (`address`: `string`, `options?`: `any`) => `AxiosPromise`<[`TokenDetails`](interfaces/TokenDetails.md)\> |
| `listTokens` | (`address?`: `string`, `symbols?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListTokensResponse`](interfaces/ListTokensResponse.md)\> |

___

### TokensApiFp

▸ **TokensApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getToken` | (`address`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`TokenDetails`](interfaces/TokenDetails.md)\>\> |
| `listTokens` | (`address?`: `string`, `symbols?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListTokensResponse`](interfaces/ListTokensResponse.md)\>\> |

___

### TradesApiAxiosParamCreator

▸ **TradesApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTrade` | (`createTradeRequest`: [`CreateTradeRequestV1`](interfaces/CreateTradeRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableTrade` | (`getSignableTradeRequest`: [`GetSignableTradeRequest`](interfaces/GetSignableTradeRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getTrade` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listTrades` | (`partyATokenType?`: `string`, `partyATokenAddress?`: `string`, `partyATokenId?`: `string`, `partyBTokenType?`: `string`, `partyBTokenAddress?`: `string`, `partyBTokenId?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### TradesApiFactory

▸ **TradesApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTrade` | (`createTradeRequest`: [`CreateTradeRequestV1`](interfaces/CreateTradeRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CreateTradeResponse`](interfaces/CreateTradeResponse.md)\> |
| `getSignableTrade` | (`getSignableTradeRequest`: [`GetSignableTradeRequest`](interfaces/GetSignableTradeRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableTradeResponse`](interfaces/GetSignableTradeResponse.md)\> |
| `getTrade` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Trade`](interfaces/Trade.md)\> |
| `listTrades` | (`partyATokenType?`: `string`, `partyATokenAddress?`: `string`, `partyATokenId?`: `string`, `partyBTokenType?`: `string`, `partyBTokenAddress?`: `string`, `partyBTokenId?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListTradesResponse`](interfaces/ListTradesResponse.md)\> |

___

### TradesApiFp

▸ **TradesApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTrade` | (`createTradeRequest`: [`CreateTradeRequestV1`](interfaces/CreateTradeRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateTradeResponse`](interfaces/CreateTradeResponse.md)\>\> |
| `getSignableTrade` | (`getSignableTradeRequest`: [`GetSignableTradeRequest`](interfaces/GetSignableTradeRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableTradeResponse`](interfaces/GetSignableTradeResponse.md)\>\> |
| `getTrade` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Trade`](interfaces/Trade.md)\>\> |
| `listTrades` | (`partyATokenType?`: `string`, `partyATokenAddress?`: `string`, `partyATokenId?`: `string`, `partyBTokenType?`: `string`, `partyBTokenAddress?`: `string`, `partyBTokenId?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListTradesResponse`](interfaces/ListTradesResponse.md)\>\> |

___

### TransfersApiAxiosParamCreator

▸ **TransfersApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTransfer` | (`createTransferRequestV2`: [`CreateTransferRequest`](interfaces/CreateTransferRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `createTransferV1` | (`createTransferRequest`: [`CreateTransferRequestV1`](interfaces/CreateTransferRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableTransfer` | (`getSignableTransferRequestV2`: [`GetSignableTransferRequest`](interfaces/GetSignableTransferRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableTransferV1` | (`getSignableTransferRequest`: [`GetSignableTransferRequestV1`](interfaces/GetSignableTransferRequestV1.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getTransfer` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listTransfers` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: ``"success"`` \| ``"failure"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### TransfersApiFactory

▸ **TransfersApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTransfer` | (`createTransferRequestV2`: [`CreateTransferRequest`](interfaces/CreateTransferRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CreateTransferResponse`](interfaces/CreateTransferResponse.md)\> |
| `createTransferV1` | (`createTransferRequest`: [`CreateTransferRequestV1`](interfaces/CreateTransferRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CreateTransferResponseV1`](interfaces/CreateTransferResponseV1.md)\> |
| `getSignableTransfer` | (`getSignableTransferRequestV2`: [`GetSignableTransferRequest`](interfaces/GetSignableTransferRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableTransferResponse`](interfaces/GetSignableTransferResponse.md)\> |
| `getSignableTransferV1` | (`getSignableTransferRequest`: [`GetSignableTransferRequestV1`](interfaces/GetSignableTransferRequestV1.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableTransferResponseV1`](interfaces/GetSignableTransferResponseV1.md)\> |
| `getTransfer` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Transfer`](interfaces/Transfer.md)\> |
| `listTransfers` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: ``"success"`` \| ``"failure"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListTransfersResponse`](interfaces/ListTransfersResponse.md)\> |

___

### TransfersApiFp

▸ **TransfersApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createTransfer` | (`createTransferRequestV2`: [`CreateTransferRequest`](interfaces/CreateTransferRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateTransferResponse`](interfaces/CreateTransferResponse.md)\>\> |
| `createTransferV1` | (`createTransferRequest`: [`CreateTransferRequestV1`](interfaces/CreateTransferRequestV1.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateTransferResponseV1`](interfaces/CreateTransferResponseV1.md)\>\> |
| `getSignableTransfer` | (`getSignableTransferRequestV2`: [`GetSignableTransferRequest`](interfaces/GetSignableTransferRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableTransferResponse`](interfaces/GetSignableTransferResponse.md)\>\> |
| `getSignableTransferV1` | (`getSignableTransferRequest`: [`GetSignableTransferRequestV1`](interfaces/GetSignableTransferRequestV1.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableTransferResponseV1`](interfaces/GetSignableTransferResponseV1.md)\>\> |
| `getTransfer` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Transfer`](interfaces/Transfer.md)\>\> |
| `listTransfers` | (`pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: ``"success"`` \| ``"failure"``, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListTransfersResponse`](interfaces/ListTransfersResponse.md)\>\> |

___

### UsersApiAxiosParamCreator

▸ **UsersApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getSignableRegistration` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableRegistrationOffchain` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getUsers` | (`user`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `registerUser` | (`registerUserRequest`: [`RegisterUserRequest`](interfaces/RegisterUserRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### UsersApiFactory

▸ **UsersApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getSignableRegistration` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableRegistrationResponse`](interfaces/GetSignableRegistrationResponse.md)\> |
| `getSignableRegistrationOffchain` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableRegistrationOffchainResponse`](interfaces/GetSignableRegistrationOffchainResponse.md)\> |
| `getUsers` | (`user`: `string`, `options?`: `any`) => `AxiosPromise`<[`GetUsersApiResponse`](interfaces/GetUsersApiResponse.md)\> |
| `registerUser` | (`registerUserRequest`: [`RegisterUserRequest`](interfaces/RegisterUserRequest.md), `options?`: `any`) => `AxiosPromise`<[`RegisterUserResponse`](interfaces/RegisterUserResponse.md)\> |

___

### UsersApiFp

▸ **UsersApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `getSignableRegistration` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableRegistrationResponse`](interfaces/GetSignableRegistrationResponse.md)\>\> |
| `getSignableRegistrationOffchain` | (`getSignableRegistrationRequest`: [`GetSignableRegistrationRequest`](interfaces/GetSignableRegistrationRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableRegistrationOffchainResponse`](interfaces/GetSignableRegistrationOffchainResponse.md)\>\> |
| `getUsers` | (`user`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetUsersApiResponse`](interfaces/GetUsersApiResponse.md)\>\> |
| `registerUser` | (`registerUserRequest`: [`RegisterUserRequest`](interfaces/RegisterUserRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`RegisterUserResponse`](interfaces/RegisterUserResponse.md)\>\> |

___

### WithdrawalsApiAxiosParamCreator

▸ **WithdrawalsApiAxiosParamCreator**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createWithdrawal` | (`createWithdrawalRequest`: [`CreateWithdrawalRequest`](interfaces/CreateWithdrawalRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getSignableWithdrawal` | (`getSignableWithdrawalRequest`: [`GetSignableWithdrawalRequest`](interfaces/GetSignableWithdrawalRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `getWithdrawal` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |
| `listWithdrawals` | (`withdrawnToWallet?`: `boolean`, `rollupStatus?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<`RequestArgs`\> |

___

### WithdrawalsApiFactory

▸ **WithdrawalsApiFactory**(`configuration?`, `basePath?`, `axios?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |
| `basePath?` | `string` |
| `axios?` | `AxiosInstance` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createWithdrawal` | (`createWithdrawalRequest`: [`CreateWithdrawalRequest`](interfaces/CreateWithdrawalRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `any`) => `AxiosPromise`<[`CreateWithdrawalResponse`](interfaces/CreateWithdrawalResponse.md)\> |
| `getSignableWithdrawal` | (`getSignableWithdrawalRequest`: [`GetSignableWithdrawalRequest`](interfaces/GetSignableWithdrawalRequest.md), `options?`: `any`) => `AxiosPromise`<[`GetSignableWithdrawalResponse`](interfaces/GetSignableWithdrawalResponse.md)\> |
| `getWithdrawal` | (`id`: `string`, `options?`: `any`) => `AxiosPromise`<[`Withdrawal`](interfaces/Withdrawal.md)\> |
| `listWithdrawals` | (`withdrawnToWallet?`: `boolean`, `rollupStatus?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `any`) => `AxiosPromise`<[`ListWithdrawalsResponse`](interfaces/ListWithdrawalsResponse.md)\> |

___

### WithdrawalsApiFp

▸ **WithdrawalsApiFp**(`configuration?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `configuration?` | [`Configuration`](classes/Configuration.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `createWithdrawal` | (`createWithdrawalRequest`: [`CreateWithdrawalRequest`](interfaces/CreateWithdrawalRequest.md), `xImxEthAddress?`: `string`, `xImxEthSignature?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`CreateWithdrawalResponse`](interfaces/CreateWithdrawalResponse.md)\>\> |
| `getSignableWithdrawal` | (`getSignableWithdrawalRequest`: [`GetSignableWithdrawalRequest`](interfaces/GetSignableWithdrawalRequest.md), `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`GetSignableWithdrawalResponse`](interfaces/GetSignableWithdrawalResponse.md)\>\> |
| `getWithdrawal` | (`id`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`Withdrawal`](interfaces/Withdrawal.md)\>\> |
| `listWithdrawals` | (`withdrawnToWallet?`: `boolean`, `rollupStatus?`: `string`, `pageSize?`: `number`, `cursor?`: `string`, `orderBy?`: `string`, `direction?`: `string`, `user?`: `string`, `status?`: `string`, `minTimestamp?`: `string`, `maxTimestamp?`: `string`, `tokenType?`: `string`, `tokenId?`: `string`, `assetId?`: `string`, `tokenAddress?`: `string`, `tokenName?`: `string`, `minQuantity?`: `string`, `maxQuantity?`: `string`, `metadata?`: `string`, `options?`: `AxiosRequestConfig`<`any`\>) => `Promise`<(`axios?`: `AxiosInstance`, `basePath?`: `string`) => `AxiosPromise`<[`ListWithdrawalsResponse`](interfaces/ListWithdrawalsResponse.md)\>\> |

___

### convertToSignableRequestFormat

▸ **convertToSignableRequestFormat**(`token`): `SignableWithdrawalToken`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | [`TokenPrepareWithdrawal`](modules.md#tokenpreparewithdrawal) |

#### Returns

`SignableWithdrawalToken`

___

### deserializeSignature

▸ **deserializeSignature**(`sig`, `size?`): `SignatureOptions`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sig` | `string` | `undefined` |
| `size` | `number` | `64` |

#### Returns

`SignatureOptions`

___

### fixMessage

▸ **fixMessage**(`msg`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg` | `string` |

#### Returns

`string`

___

### generateStarkWallet

▸ **generateStarkWallet**(`signer`): `Promise`<[`StarkWallet`](interfaces/StarkWallet.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |

#### Returns

`Promise`<[`StarkWallet`](interfaces/StarkWallet.md)\>

___

### getAccountPath

▸ **getAccountPath**(`layer`, `application`, `ethereumAddress`, `index`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `layer` | `string` |
| `application` | `string` |
| `ethereumAddress` | `string` |
| `index` | `string` |

#### Returns

`string`

___

### getConfig

▸ **getConfig**(`network?`): [`Config`](interfaces/Config.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `network` | [`EthNetwork`](modules.md#ethnetwork) | `'ropsten'` |

#### Returns

[`Config`](interfaces/Config.md)

___

### getIntFromBits

▸ **getIntFromBits**(`hex`, `start`, `end?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `hex` | `string` | `undefined` |
| `start` | `number` | `undefined` |
| `end` | `undefined` \| `number` | `undefined` |

#### Returns

`number`

___

### getKeyPair

▸ **getKeyPair**(`privateKey`): `ec.KeyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`ec.KeyPair`

___

### getKeyPairFromPath

▸ **getKeyPairFromPath**(`seed`, `path`): `ec.KeyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `seed` | `string` |
| `path` | `string` |

#### Returns

`ec.KeyPair`

___

### getKeyPairFromPrivateKey

▸ **getKeyPairFromPrivateKey**(`privateKey`): `ec.KeyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`ec.KeyPair`

___

### getKeyPairFromPublicKey

▸ **getKeyPairFromPublicKey**(`publicKey`): `ec.KeyPair`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`ec.KeyPair`

___

### getPublic

▸ **getPublic**(`keyPair`, `compressed?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `keyPair` | `KeyPair` | `undefined` |
| `compressed` | `boolean` | `false` |

#### Returns

`string`

___

### getStarkPublicKey

▸ **getStarkPublicKey**(`keyPair`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `KeyPair` |

#### Returns

`string`

___

### getXCoordinate

▸ **getXCoordinate**(`publicKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |

#### Returns

`string`

___

### grindKey

▸ **grindKey**(`privateKey`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `privateKey` | `string` |

#### Returns

`string`

___

### hashKeyWithIndex

▸ **hashKeyWithIndex**(`key`, `index`): `BN`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `index` | `number` |

#### Returns

`BN`

___

### importRecoveryParam

▸ **importRecoveryParam**(`v`): `number` \| `undefined`

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `string` |

#### Returns

`number` \| `undefined`

___

### serializeEthSignature

▸ **serializeEthSignature**(`sig`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `SignatureOptions` |

#### Returns

`string`

___

### serializeSignature

▸ **serializeSignature**(`sig`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sig` | `SignatureOptions` |

#### Returns

`string`

___

### sign

▸ **sign**(`keyPair`, `msg`): `ec.Signature`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyPair` | `KeyPair` |
| `msg` | `string` |

#### Returns

`ec.Signature`

___

### signMessage

▸ **signMessage**(`message`, `signer`): `Promise`<{ `ethAddress`: `string` ; `ethSignature`: `string` ; `message`: `string`  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `signer` | `Signer` |

#### Returns

`Promise`<{ `ethAddress`: `string` ; `ethSignature`: `string` ; `message`: `string`  }\>

___

### signRaw

▸ **signRaw**(`payload`, `signer`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `string` |
| `signer` | `Signer` |

#### Returns

`Promise`<`string`\>
