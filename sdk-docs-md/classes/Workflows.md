[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Workflows

# Class: Workflows

## Table of contents

### Constructors

- [constructor](Workflows.md#constructor)

### Properties

- [config](Workflows.md#config)
- [depositsApi](Workflows.md#depositsapi)
- [encodingApi](Workflows.md#encodingapi)
- [mintsApi](Workflows.md#mintsapi)
- [ordersApi](Workflows.md#ordersapi)
- [tokensApi](Workflows.md#tokensapi)
- [transfersApi](Workflows.md#transfersapi)
- [usersApi](Workflows.md#usersapi)
- [withdrawalsApi](Workflows.md#withdrawalsapi)

### Methods

- [batchNftTransfer](Workflows.md#batchnfttransfer)
- [burn](Workflows.md#burn)
- [cancelOrder](Workflows.md#cancelorder)
- [completeERC20Withdrawal](Workflows.md#completeerc20withdrawal)
- [completeERC721Withdrawal](Workflows.md#completeerc721withdrawal)
- [completeEthWithdrawal](Workflows.md#completeethwithdrawal)
- [completeWithdrawal](Workflows.md#completewithdrawal)
- [deposit](Workflows.md#deposit)
- [depositERC20](Workflows.md#depositerc20)
- [depositERC721](Workflows.md#depositerc721)
- [depositEth](Workflows.md#depositeth)
- [getBurn](Workflows.md#getburn)
- [isRegisteredOnchain](Workflows.md#isregisteredonchain)
- [mint](Workflows.md#mint)
- [prepareWithdrawal](Workflows.md#preparewithdrawal)
- [registerOffchain](Workflows.md#registeroffchain)
- [transfer](Workflows.md#transfer)

## Constructors

### constructor

• **new Workflows**(`config`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`Config`](../interfaces/Config.md) |

## Properties

### config

• `Protected` **config**: [`Config`](../interfaces/Config.md)

#### Defined in

[src/workflows/workflows.ts:62](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L62)

___

### depositsApi

• `Private` `Readonly` **depositsApi**: [`DepositsApi`](DepositsApi.md)

#### Defined in

[src/workflows/workflows.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L53)

___

### encodingApi

• `Private` `Readonly` **encodingApi**: [`EncodingApi`](EncodingApi.md)

#### Defined in

[src/workflows/workflows.ts:54](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L54)

___

### mintsApi

• `Private` `Readonly` **mintsApi**: [`MintsApi`](MintsApi.md)

#### Defined in

[src/workflows/workflows.ts:55](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L55)

___

### ordersApi

• `Private` `Readonly` **ordersApi**: [`OrdersApi`](OrdersApi.md)

#### Defined in

[src/workflows/workflows.ts:56](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L56)

___

### tokensApi

• `Private` `Readonly` **tokensApi**: [`TokensApi`](TokensApi.md)

#### Defined in

[src/workflows/workflows.ts:57](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L57)

___

### transfersApi

• `Private` `Readonly` **transfersApi**: [`TransfersApi`](TransfersApi.md)

#### Defined in

[src/workflows/workflows.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L58)

___

### usersApi

• `Private` `Readonly` **usersApi**: [`UsersApi`](UsersApi.md)

#### Defined in

[src/workflows/workflows.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L59)

___

### withdrawalsApi

• `Private` `Readonly` **withdrawalsApi**: [`WithdrawalsApi`](WithdrawalsApi.md)

#### Defined in

[src/workflows/workflows.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/workflows/workflows.ts#L60)

## Methods

### batchNftTransfer

▸ **batchNftTransfer**(`signer`, `starkWallet`, `request`): `Promise`<[`CreateTransferResponse`](../interfaces/CreateTransferResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |
| `request` | [`GetSignableTransferRequest`](../interfaces/GetSignableTransferRequest.md) |

#### Returns

`Promise`<[`CreateTransferResponse`](../interfaces/CreateTransferResponse.md)\>

___

### burn

▸ **burn**(`signer`, `starkWallet`, `request`): `Promise`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |
| `request` | `GetSignableBurnRequest` |

#### Returns

`Promise`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md)\>

___

### cancelOrder

▸ **cancelOrder**(`signer`, `starkWallet`, `request`): `Promise`<{ `order_id`: `undefined` \| `number` = cancelOrderResponse.data.order\_id; `status`: `undefined` \| `string` = cancelOrderResponse.data.status }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |
| `request` | [`GetSignableCancelOrderRequest`](../interfaces/GetSignableCancelOrderRequest.md) |

#### Returns

`Promise`<{ `order_id`: `undefined` \| `number` = cancelOrderResponse.data.order\_id; `status`: `undefined` \| `string` = cancelOrderResponse.data.status }\>

___

### completeERC20Withdrawal

▸ **completeERC20Withdrawal**(`signer`, `starkPublicKey`, `token`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkPublicKey` | `string` |
| `token` | [`ERC20Withdrawal`](../interfaces/ERC20Withdrawal.md) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### completeERC721Withdrawal

▸ **completeERC721Withdrawal**(`signer`, `starkPublicKey`, `token`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkPublicKey` | `string` |
| `token` | [`ERC721Withdrawal`](../interfaces/ERC721Withdrawal.md) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### completeEthWithdrawal

▸ **completeEthWithdrawal**(`signer`, `starkPublicKey`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkPublicKey` | `string` |

#### Returns

`Promise`<`TransactionResponse`\>

___

### completeWithdrawal

▸ **completeWithdrawal**(`signer`, `starkPublicKey`, `token`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkPublicKey` | `string` |
| `token` | [`TokenWithdrawal`](../modules.md#tokenwithdrawal) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### deposit

▸ **deposit**(`signer`, `deposit`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `deposit` | [`TokenDeposit`](../modules.md#tokendeposit) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### depositERC20

▸ **depositERC20**(`signer`, `deposit`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `deposit` | [`ERC20Deposit`](../interfaces/ERC20Deposit.md) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### depositERC721

▸ **depositERC721**(`signer`, `deposit`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `deposit` | [`ERC721Deposit`](../interfaces/ERC721Deposit.md) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### depositEth

▸ **depositEth**(`signer`, `deposit`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `deposit` | [`ETHDeposit`](../interfaces/ETHDeposit.md) |

#### Returns

`Promise`<`TransactionResponse`\>

___

### getBurn

▸ **getBurn**(`request`): `Promise`<`AxiosResponse`<[`Transfer`](../interfaces/Transfer.md), `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`TransfersApiGetTransferRequest`](../interfaces/TransfersApiGetTransferRequest.md) |

#### Returns

`Promise`<`AxiosResponse`<[`Transfer`](../interfaces/Transfer.md), `any`\>\>

___

### isRegisteredOnchain

▸ **isRegisteredOnchain**(`signer`, `starkWallet`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |

#### Returns

`Promise`<`boolean`\>

___

### mint

▸ **mint**(`signer`, `request`): `Promise`<[`MintTokensResponse`](../interfaces/MintTokensResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `request` | [`UnsignedMintRequest`](../modules.md#unsignedmintrequest) |

#### Returns

`Promise`<[`MintTokensResponse`](../interfaces/MintTokensResponse.md)\>

___

### prepareWithdrawal

▸ **prepareWithdrawal**(`signer`, `starkWallet`, `token`, `quantity`): `Promise`<[`CreateWithdrawalResponse`](../interfaces/CreateWithdrawalResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |
| `token` | [`TokenPrepareWithdrawal`](../modules.md#tokenpreparewithdrawal) |
| `quantity` | `string` |

#### Returns

`Promise`<[`CreateWithdrawalResponse`](../interfaces/CreateWithdrawalResponse.md)\>

___

### registerOffchain

▸ **registerOffchain**(`signer`, `starkWallet`): `Promise`<[`RegisterUserResponse`](../interfaces/RegisterUserResponse.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |

#### Returns

`Promise`<[`RegisterUserResponse`](../interfaces/RegisterUserResponse.md)\>

___

### transfer

▸ **transfer**(`signer`, `starkWallet`, `request`): `Promise`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | `Signer` |
| `starkWallet` | [`StarkWallet`](../interfaces/StarkWallet.md) |
| `request` | [`GetSignableTransferRequestV1`](../interfaces/GetSignableTransferRequestV1.md) |

#### Returns

`Promise`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md)\>
