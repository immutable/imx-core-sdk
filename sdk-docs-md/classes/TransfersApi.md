[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TransfersApi

# Class: TransfersApi

TransfersApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`TransfersApi`**

## Table of contents

### Constructors

- [constructor](TransfersApi.md#constructor)

### Properties

- [axios](TransfersApi.md#axios)
- [basePath](TransfersApi.md#basepath)
- [configuration](TransfersApi.md#configuration)

### Methods

- [createTransfer](TransfersApi.md#createtransfer)
- [createTransferV1](TransfersApi.md#createtransferv1)
- [getSignableTransfer](TransfersApi.md#getsignabletransfer)
- [getSignableTransferV1](TransfersApi.md#getsignabletransferv1)
- [getTransfer](TransfersApi.md#gettransfer)
- [listTransfers](TransfersApi.md#listtransfers)

## Constructors

### constructor

• **new TransfersApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[src/api/base.ts:50](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L50)

## Methods

### createTransfer

▸ **createTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateTransferResponse`](../interfaces/CreateTransferResponse.md), `any`\>\>

Create a new transfer request

**`summary`** Creates a transfer of multiple tokens between two parties

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiCreateTransferRequest`](../interfaces/TransfersApiCreateTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateTransferResponse`](../interfaces/CreateTransferResponse.md), `any`\>\>

___

### createTransferV1

▸ **createTransferV1**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md), `any`\>\>

Create a new transfer request

**`summary`** Creates a transfer of tokens between two parties

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiCreateTransferV1Request`](../interfaces/TransfersApiCreateTransferV1Request.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateTransferResponseV1`](../interfaces/CreateTransferResponseV1.md), `any`\>\>

___

### getSignableTransfer

▸ **getSignableTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableTransferResponse`](../interfaces/GetSignableTransferResponse.md), `any`\>\>

Gets bulk details of a signable transfer

**`summary`** Gets bulk details of a signable transfer

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiGetSignableTransferRequest`](../interfaces/TransfersApiGetSignableTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableTransferResponse`](../interfaces/GetSignableTransferResponse.md), `any`\>\>

___

### getSignableTransferV1

▸ **getSignableTransferV1**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableTransferResponseV1`](../interfaces/GetSignableTransferResponseV1.md), `any`\>\>

Gets details of a signable transfer

**`summary`** Gets details of a signable transfer

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiGetSignableTransferV1Request`](../interfaces/TransfersApiGetSignableTransferV1Request.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableTransferResponseV1`](../interfaces/GetSignableTransferResponseV1.md), `any`\>\>

___

### getTransfer

▸ **getTransfer**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Transfer`](../interfaces/Transfer.md), `any`\>\>

Get details of a transfer with the given ID

**`summary`** Get details of a transfer with the given ID

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiGetTransferRequest`](../interfaces/TransfersApiGetTransferRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Transfer`](../interfaces/Transfer.md), `any`\>\>

___

### listTransfers

▸ **listTransfers**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md), `any`\>\>

Get a list of transfers

**`summary`** Get a list of transfers

**`throws`** 

**`memberof`** TransfersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TransfersApiListTransfersRequest`](../interfaces/TransfersApiListTransfersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListTransfersResponse`](../interfaces/ListTransfersResponse.md), `any`\>\>
