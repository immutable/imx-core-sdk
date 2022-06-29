[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / AssetsApiListAssetsRequest

# Interface: AssetsApiListAssetsRequest

Request parameters for listAssets operation in AssetsApi.

**`export`** 

**`interface`** AssetsApiListAssetsRequest

## Table of contents

### Properties

- [auxiliaryFeePercentages](AssetsApiListAssetsRequest.md#auxiliaryfeepercentages)
- [auxiliaryFeeRecipients](AssetsApiListAssetsRequest.md#auxiliaryfeerecipients)
- [buyOrders](AssetsApiListAssetsRequest.md#buyorders)
- [collection](AssetsApiListAssetsRequest.md#collection)
- [cursor](AssetsApiListAssetsRequest.md#cursor)
- [direction](AssetsApiListAssetsRequest.md#direction)
- [includeFees](AssetsApiListAssetsRequest.md#includefees)
- [metadata](AssetsApiListAssetsRequest.md#metadata)
- [name](AssetsApiListAssetsRequest.md#name)
- [orderBy](AssetsApiListAssetsRequest.md#orderby)
- [pageSize](AssetsApiListAssetsRequest.md#pagesize)
- [sellOrders](AssetsApiListAssetsRequest.md#sellorders)
- [status](AssetsApiListAssetsRequest.md#status)
- [updatedMaxTimestamp](AssetsApiListAssetsRequest.md#updatedmaxtimestamp)
- [updatedMinTimestamp](AssetsApiListAssetsRequest.md#updatedmintimestamp)
- [user](AssetsApiListAssetsRequest.md#user)

## Properties

### auxiliaryFeePercentages

• `Optional` `Readonly` **auxiliaryFeePercentages**: `string`

Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:422](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L422)

___

### auxiliaryFeeRecipients

• `Optional` `Readonly` **auxiliaryFeeRecipients**: `string`

Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:429](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L429)

___

### buyOrders

• `Optional` `Readonly` **buyOrders**: `boolean`

Set flag to true to fetch an array of buy order details  with accepted status associated with the asset

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:387](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L387)

___

### collection

• `Optional` `Readonly` **collection**: `string`

Collection contract address

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:401](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L401)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:331](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L331)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:345](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L345)

___

### includeFees

• `Optional` `Readonly` **includeFees**: `boolean`

Set flag to include fees associated with the asset

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:394](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L394)

___

### metadata

• `Optional` `Readonly` **metadata**: `string`

JSON-encoded metadata filters for these asset. Example: {

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:373](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L373)

___

### name

• `Optional` `Readonly` **name**: `string`

Name of the asset to search

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:366](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L366)

___

### orderBy

• `Optional` `Readonly` **orderBy**: ``"updated_at"`` \| ``"name"``

Property to sort by

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:338](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L338)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:324](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L324)

___

### sellOrders

• `Optional` `Readonly` **sellOrders**: `boolean`

Set flag to true to fetch an array of sell order details with accepted status associated with the asset

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:380](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L380)

___

### status

• `Optional` `Readonly` **status**: `string`

Status of these assets

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:359](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L359)

___

### updatedMaxTimestamp

• `Optional` `Readonly` **updatedMaxTimestamp**: `string`

Maximum timestamp for when these assets were last updated

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:415](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L415)

___

### updatedMinTimestamp

• `Optional` `Readonly` **updatedMinTimestamp**: `string`

Minimum timestamp for when these assets were last updated

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:408](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L408)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who owns these assets

**`memberof`** AssetsApiListAssets

#### Defined in

[src/api/domain/assets-api.ts:352](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L352)
