[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / OrdersApiGetOrderRequest

# Interface: OrdersApiGetOrderRequest

Request parameters for getOrder operation in OrdersApi.

**`export`** 

**`interface`** OrdersApiGetOrderRequest

## Table of contents

### Properties

- [auxiliaryFeePercentages](OrdersApiGetOrderRequest.md#auxiliaryfeepercentages)
- [auxiliaryFeeRecipients](OrdersApiGetOrderRequest.md#auxiliaryfeerecipients)
- [id](OrdersApiGetOrderRequest.md#id)
- [includeFees](OrdersApiGetOrderRequest.md#includefees)

## Properties

### auxiliaryFeePercentages

• `Optional` `Readonly` **auxiliaryFeePercentages**: `string`

Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients

**`memberof`** OrdersApiGetOrder

#### Defined in

[src/api/domain/orders-api.ts:743](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L743)

___

### auxiliaryFeeRecipients

• `Optional` `Readonly` **auxiliaryFeeRecipients**: `string`

Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages

**`memberof`** OrdersApiGetOrder

#### Defined in

[src/api/domain/orders-api.ts:750](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L750)

___

### id

• `Readonly` **id**: `string`

Order ID

**`memberof`** OrdersApiGetOrder

#### Defined in

[src/api/domain/orders-api.ts:729](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L729)

___

### includeFees

• `Optional` `Readonly` **includeFees**: `boolean`

Set flag to true to include fee body for the order

**`memberof`** OrdersApiGetOrder

#### Defined in

[src/api/domain/orders-api.ts:736](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L736)
