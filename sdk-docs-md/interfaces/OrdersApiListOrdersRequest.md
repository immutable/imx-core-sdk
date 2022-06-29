[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / OrdersApiListOrdersRequest

# Interface: OrdersApiListOrdersRequest

Request parameters for listOrders operation in OrdersApi.

**`export`** 

**`interface`** OrdersApiListOrdersRequest

## Table of contents

### Properties

- [auxiliaryFeePercentages](OrdersApiListOrdersRequest.md#auxiliaryfeepercentages)
- [auxiliaryFeeRecipients](OrdersApiListOrdersRequest.md#auxiliaryfeerecipients)
- [buyAssetId](OrdersApiListOrdersRequest.md#buyassetid)
- [buyMaxQuantity](OrdersApiListOrdersRequest.md#buymaxquantity)
- [buyMetadata](OrdersApiListOrdersRequest.md#buymetadata)
- [buyMinQuantity](OrdersApiListOrdersRequest.md#buyminquantity)
- [buyTokenAddress](OrdersApiListOrdersRequest.md#buytokenaddress)
- [buyTokenId](OrdersApiListOrdersRequest.md#buytokenid)
- [buyTokenName](OrdersApiListOrdersRequest.md#buytokenname)
- [buyTokenType](OrdersApiListOrdersRequest.md#buytokentype)
- [cursor](OrdersApiListOrdersRequest.md#cursor)
- [direction](OrdersApiListOrdersRequest.md#direction)
- [maxTimestamp](OrdersApiListOrdersRequest.md#maxtimestamp)
- [minTimestamp](OrdersApiListOrdersRequest.md#mintimestamp)
- [orderBy](OrdersApiListOrdersRequest.md#orderby)
- [pageSize](OrdersApiListOrdersRequest.md#pagesize)
- [sellAssetId](OrdersApiListOrdersRequest.md#sellassetid)
- [sellMaxQuantity](OrdersApiListOrdersRequest.md#sellmaxquantity)
- [sellMetadata](OrdersApiListOrdersRequest.md#sellmetadata)
- [sellMinQuantity](OrdersApiListOrdersRequest.md#sellminquantity)
- [sellTokenAddress](OrdersApiListOrdersRequest.md#selltokenaddress)
- [sellTokenId](OrdersApiListOrdersRequest.md#selltokenid)
- [sellTokenName](OrdersApiListOrdersRequest.md#selltokenname)
- [sellTokenType](OrdersApiListOrdersRequest.md#selltokentype)
- [status](OrdersApiListOrdersRequest.md#status)
- [updatedMaxTimestamp](OrdersApiListOrdersRequest.md#updatedmaxtimestamp)
- [updatedMinTimestamp](OrdersApiListOrdersRequest.md#updatedmintimestamp)
- [user](OrdersApiListOrdersRequest.md#user)

## Properties

### auxiliaryFeePercentages

• `Optional` `Readonly` **auxiliaryFeePercentages**: `string`

Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:974](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L974)

___

### auxiliaryFeeRecipients

• `Optional` `Readonly` **auxiliaryFeeRecipients**: `string`

Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:981](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L981)

___

### buyAssetId

• `Optional` `Readonly` **buyAssetId**: `string`

Internal IMX ID of the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:876](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L876)

___

### buyMaxQuantity

• `Optional` `Readonly` **buyMaxQuantity**: `string`

Max quantity for the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:904](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L904)

___

### buyMetadata

• `Optional` `Readonly` **buyMetadata**: `string`

JSON-encoded metadata filters for the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:911](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L911)

___

### buyMinQuantity

• `Optional` `Readonly` **buyMinQuantity**: `string`

Min quantity for the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:897](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L897)

___

### buyTokenAddress

• `Optional` `Readonly` **buyTokenAddress**: `string`

Comma separated string of token addresses of the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:883](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L883)

___

### buyTokenId

• `Optional` `Readonly` **buyTokenId**: `string`

ERC721 Token ID of the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:869](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L869)

___

### buyTokenName

• `Optional` `Readonly` **buyTokenName**: `string`

Token name of the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:890](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L890)

___

### buyTokenType

• `Optional` `Readonly` **buyTokenType**: `string`

Token type of the asset this order buys

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:862](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L862)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:799](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L799)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:813](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L813)

___

### maxTimestamp

• `Optional` `Readonly` **maxTimestamp**: `string`

Maximum created at timestamp for this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:841](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L841)

___

### minTimestamp

• `Optional` `Readonly` **minTimestamp**: `string`

Minimum created at timestamp for this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:834](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L834)

___

### orderBy

• `Optional` `Readonly` **orderBy**: ``"updated_at"`` \| ``"created_at"`` \| ``"expired_at"`` \| ``"sell_quantity"`` \| ``"buy_quantity"`` \| ``"buy_quantity_with_fees"``

Property to sort by

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:806](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L806)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:792](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L792)

___

### sellAssetId

• `Optional` `Readonly` **sellAssetId**: `string`

Internal IMX ID of the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:932](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L932)

___

### sellMaxQuantity

• `Optional` `Readonly` **sellMaxQuantity**: `string`

Max quantity for the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:960](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L960)

___

### sellMetadata

• `Optional` `Readonly` **sellMetadata**: `string`

JSON-encoded metadata filters for the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:967](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L967)

___

### sellMinQuantity

• `Optional` `Readonly` **sellMinQuantity**: `string`

Min quantity for the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:953](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L953)

___

### sellTokenAddress

• `Optional` `Readonly` **sellTokenAddress**: `string`

Comma separated string of token addresses of the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:939](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L939)

___

### sellTokenId

• `Optional` `Readonly` **sellTokenId**: `string`

ERC721 Token ID of the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:925](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L925)

___

### sellTokenName

• `Optional` `Readonly` **sellTokenName**: `string`

Token name of the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:946](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L946)

___

### sellTokenType

• `Optional` `Readonly` **sellTokenType**: `string`

Token type of the asset this order sells

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:918](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L918)

___

### status

• `Optional` `Readonly` **status**: ``"active"`` \| ``"filled"`` \| ``"cancelled"`` \| ``"expired"`` \| ``"inactive"``

Status of this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:827](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L827)

___

### updatedMaxTimestamp

• `Optional` `Readonly` **updatedMaxTimestamp**: `string`

Maximum updated at timestamp for this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:855](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L855)

___

### updatedMinTimestamp

• `Optional` `Readonly` **updatedMinTimestamp**: `string`

Minimum updated at timestamp for this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:848](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L848)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who submitted this order

**`memberof`** OrdersApiListOrders

#### Defined in

[src/api/domain/orders-api.ts:820](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/orders-api.ts#L820)
