[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / BalancesApi

# Class: BalancesApi

BalancesApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`BalancesApi`**

## Table of contents

### Constructors

- [constructor](BalancesApi.md#constructor)

### Properties

- [axios](BalancesApi.md#axios)
- [basePath](BalancesApi.md#basepath)
- [configuration](BalancesApi.md#configuration)

### Methods

- [getBalance](BalancesApi.md#getbalance)
- [listBalances](BalancesApi.md#listbalances)

## Constructors

### constructor

• **new BalancesApi**(`configuration?`, `basePath?`, `axios?`)

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

### getBalance

▸ **getBalance**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Balance`](../interfaces/Balance.md), `any`\>\>

Fetches the token balances of the user

**`summary`** Fetches the token balances of the user

**`throws`** 

**`memberof`** BalancesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`BalancesApiGetBalanceRequest`](../interfaces/BalancesApiGetBalanceRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Balance`](../interfaces/Balance.md), `any`\>\>

___

### listBalances

▸ **listBalances**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`ListBalancesResponse`](../interfaces/ListBalancesResponse.md), `any`\>\>

Get a list of balances for given user

**`summary`** Get a list of balances for given user

**`throws`** 

**`memberof`** BalancesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`BalancesApiListBalancesRequest`](../interfaces/BalancesApiListBalancesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListBalancesResponse`](../interfaces/ListBalancesResponse.md), `any`\>\>
