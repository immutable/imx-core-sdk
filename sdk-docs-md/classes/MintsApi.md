[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MintsApi

# Class: MintsApi

MintsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`MintsApi`**

## Table of contents

### Constructors

- [constructor](MintsApi.md#constructor)

### Properties

- [axios](MintsApi.md#axios)
- [basePath](MintsApi.md#basepath)
- [configuration](MintsApi.md#configuration)

### Methods

- [getMint](MintsApi.md#getmint)
- [getMintableTokenDetailsByClientTokenId](MintsApi.md#getmintabletokendetailsbyclienttokenid)
- [listMints](MintsApi.md#listmints)
- [mintTokens](MintsApi.md#minttokens)

## Constructors

### constructor

• **new MintsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getMint

▸ **getMint**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Mint`](../interfaces/Mint.md), `any`\>\>

Get details of a mint with the given ID

**`summary`** Get details of a mint with the given ID

**`throws`** 

**`memberof`** MintsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MintsApiGetMintRequest`](../interfaces/MintsApiGetMintRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Mint`](../interfaces/Mint.md), `any`\>\>

___

### getMintableTokenDetailsByClientTokenId

▸ **getMintableTokenDetailsByClientTokenId**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`MintableTokenDetails`](../interfaces/MintableTokenDetails.md), `any`\>\>

Get details of a mintable token with the given token address and token ID

**`summary`** Get details of a mintable token with the given token address and token ID

**`throws`** 

**`memberof`** MintsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MintsApiGetMintableTokenDetailsByClientTokenIdRequest`](../interfaces/MintsApiGetMintableTokenDetailsByClientTokenIdRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MintableTokenDetails`](../interfaces/MintableTokenDetails.md), `any`\>\>

___

### listMints

▸ **listMints**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListMintsResponse`](../interfaces/ListMintsResponse.md), `any`\>\>

Get a list of mints

**`summary`** Get a list of mints

**`throws`** 

**`memberof`** MintsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MintsApiListMintsRequest`](../interfaces/MintsApiListMintsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListMintsResponse`](../interfaces/ListMintsResponse.md), `any`\>\>

___

### mintTokens

▸ **mintTokens**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`MintTokensResponse`](../interfaces/MintTokensResponse.md), `any`\>\>

Mint tokens in a batch with fees

**`summary`** Mint Tokens V2

**`throws`** 

**`memberof`** MintsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MintsApiMintTokensRequest`](../interfaces/MintsApiMintTokensRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MintTokensResponse`](../interfaces/MintTokensResponse.md), `any`\>\>
