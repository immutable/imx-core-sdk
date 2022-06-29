[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / OrdersApiCancelOrderRequest

# Interface: OrdersApiCancelOrderRequest

Request parameters for cancelOrder operation in OrdersApi.

**`export`** 

**`interface`** OrdersApiCancelOrderRequest

## Table of contents

### Properties

- [cancelOrderRequest](OrdersApiCancelOrderRequest.md#cancelorderrequest)
- [id](OrdersApiCancelOrderRequest.md#id)
- [xImxEthAddress](OrdersApiCancelOrderRequest.md#ximxethaddress)
- [xImxEthSignature](OrdersApiCancelOrderRequest.md#ximxethsignature)

## Properties

### cancelOrderRequest

• `Readonly` **cancelOrderRequest**: [`CancelOrderRequest`](CancelOrderRequest.md)

cancel an order

**`memberof`** OrdersApiCancelOrder

#### Defined in

[src/api/domain/orders-api.ts:673](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L673)

___

### id

• `Readonly` **id**: `string`

Order ID to cancel

**`memberof`** OrdersApiCancelOrder

#### Defined in

[src/api/domain/orders-api.ts:666](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L666)

___

### xImxEthAddress

• `Optional` `Readonly` **xImxEthAddress**: `string`

eth address

**`memberof`** OrdersApiCancelOrder

#### Defined in

[src/api/domain/orders-api.ts:680](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L680)

___

### xImxEthSignature

• `Optional` `Readonly` **xImxEthSignature**: `string`

eth signature

**`memberof`** OrdersApiCancelOrder

#### Defined in

[src/api/domain/orders-api.ts:687](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L687)
