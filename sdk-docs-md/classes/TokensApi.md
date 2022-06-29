[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TokensApi

# Class: TokensApi

TokensApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`TokensApi`**

## Table of contents

### Constructors

- [constructor](TokensApi.md#constructor)

### Properties

- [axios](TokensApi.md#axios)
- [basePath](TokensApi.md#basepath)
- [configuration](TokensApi.md#configuration)

### Methods

- [getToken](TokensApi.md#gettoken)
- [listTokens](TokensApi.md#listtokens)

## Constructors

### constructor

• **new TokensApi**(`configuration?`, `basePath?`, `axios?`)

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

### getToken

▸ **getToken**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`TokenDetails`](../interfaces/TokenDetails.md), `any`\>\>

Get details of a token

**`summary`** Get details of a token

**`throws`** 

**`memberof`** TokensApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TokensApiGetTokenRequest`](../interfaces/TokensApiGetTokenRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`TokenDetails`](../interfaces/TokenDetails.md), `any`\>\>

___

### listTokens

▸ **listTokens**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListTokensResponse`](../interfaces/ListTokensResponse.md), `any`\>\>

Get a list of tokens

**`summary`** Get a list of tokens

**`throws`** 

**`memberof`** TokensApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TokensApiListTokensRequest`](../interfaces/TokensApiListTokensRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListTokensResponse`](../interfaces/ListTokensResponse.md), `any`\>\>
