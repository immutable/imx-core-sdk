[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / OrdersApi

# Class: OrdersApi

OrdersApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`OrdersApi`**

## Table of contents

### Constructors

- [constructor](OrdersApi.md#constructor)

### Properties

- [axios](OrdersApi.md#axios)
- [basePath](OrdersApi.md#basepath)
- [configuration](OrdersApi.md#configuration)

### Methods

- [cancelOrder](OrdersApi.md#cancelorder)
- [createOrder](OrdersApi.md#createorder)
- [getOrder](OrdersApi.md#getorder)
- [getSignableCancelOrder](OrdersApi.md#getsignablecancelorder)
- [getSignableOrder](OrdersApi.md#getsignableorder)
- [listOrders](OrdersApi.md#listorders)

## Constructors

### constructor

• **new OrdersApi**(`configuration?`, `basePath?`, `axios?`)

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

### cancelOrder

▸ **cancelOrder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CancelOrderResponse`](../interfaces/CancelOrderResponse.md), `any`\>\>

Cancel an order

**`summary`** cancel an order

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiCancelOrderRequest`](../interfaces/OrdersApiCancelOrderRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CancelOrderResponse`](../interfaces/CancelOrderResponse.md), `any`\>\>

___

### createOrder

▸ **createOrder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateOrderResponse`](../interfaces/CreateOrderResponse.md), `any`\>\>

Create an order

**`summary`** Create an order

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiCreateOrderRequest`](../interfaces/OrdersApiCreateOrderRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateOrderResponse`](../interfaces/CreateOrderResponse.md), `any`\>\>

___

### getOrder

▸ **getOrder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md), `any`\>\>

Get details of an order with the given ID

**`summary`** Get details of an order with the given ID

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiGetOrderRequest`](../interfaces/OrdersApiGetOrderRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Order`](../interfaces/Order.md), `any`\>\>

___

### getSignableCancelOrder

▸ **getSignableCancelOrder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableCancelOrderResponse`](../interfaces/GetSignableCancelOrderResponse.md), `any`\>\>

Get details a signable cancel order

**`summary`** Get details a signable cancel order

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiGetSignableCancelOrderRequest`](../interfaces/OrdersApiGetSignableCancelOrderRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableCancelOrderResponse`](../interfaces/GetSignableCancelOrderResponse.md), `any`\>\>

___

### getSignableOrder

▸ **getSignableOrder**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableOrderResponse`](../interfaces/GetSignableOrderResponse.md), `any`\>\>

Get details a signable order V3

**`summary`** Get details a signable order V3

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiGetSignableOrderRequest`](../interfaces/OrdersApiGetSignableOrderRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableOrderResponse`](../interfaces/GetSignableOrderResponse.md), `any`\>\>

___

### listOrders

▸ **listOrders**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListOrdersResponse`](../interfaces/ListOrdersResponse.md), `any`\>\>

Get a list of orders

**`summary`** Get a list of orders

**`throws`** 

**`memberof`** OrdersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`OrdersApiListOrdersRequest`](../interfaces/OrdersApiListOrdersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListOrdersResponse`](../interfaces/ListOrdersResponse.md), `any`\>\>
