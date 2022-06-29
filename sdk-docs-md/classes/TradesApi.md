[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TradesApi

# Class: TradesApi

TradesApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`TradesApi`**

## Table of contents

### Constructors

- [constructor](TradesApi.md#constructor)

### Properties

- [axios](TradesApi.md#axios)
- [basePath](TradesApi.md#basepath)
- [configuration](TradesApi.md#configuration)

### Methods

- [createTrade](TradesApi.md#createtrade)
- [getSignableTrade](TradesApi.md#getsignabletrade)
- [getTrade](TradesApi.md#gettrade)
- [listTrades](TradesApi.md#listtrades)

## Constructors

### constructor

• **new TradesApi**(`configuration?`, `basePath?`, `axios?`)

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

### createTrade

▸ **createTrade**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateTradeResponse`](../interfaces/CreateTradeResponse.md), `any`\>\>

Create a Trade

**`summary`** Create a Trade between two parties

**`throws`** 

**`memberof`** TradesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TradesApiCreateTradeRequest`](../interfaces/TradesApiCreateTradeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateTradeResponse`](../interfaces/CreateTradeResponse.md), `any`\>\>

___

### getSignableTrade

▸ **getSignableTrade**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableTradeResponse`](../interfaces/GetSignableTradeResponse.md), `any`\>\>

Get details a signable trade V3

**`summary`** Get details a signable trade V3

**`throws`** 

**`memberof`** TradesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TradesApiGetSignableTradeRequest`](../interfaces/TradesApiGetSignableTradeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableTradeResponse`](../interfaces/GetSignableTradeResponse.md), `any`\>\>

___

### getTrade

▸ **getTrade**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Trade`](../interfaces/Trade.md), `any`\>\>

Get details of a trade with the given ID

**`summary`** Get details of a trade with the given ID

**`throws`** 

**`memberof`** TradesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TradesApiGetTradeRequest`](../interfaces/TradesApiGetTradeRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Trade`](../interfaces/Trade.md), `any`\>\>

___

### listTrades

▸ **listTrades**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListTradesResponse`](../interfaces/ListTradesResponse.md), `any`\>\>

Get a list of trades

**`summary`** Get a list of trades

**`throws`** 

**`memberof`** TradesApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`TradesApiListTradesRequest`](../interfaces/TradesApiListTradesRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListTradesResponse`](../interfaces/ListTradesResponse.md), `any`\>\>
