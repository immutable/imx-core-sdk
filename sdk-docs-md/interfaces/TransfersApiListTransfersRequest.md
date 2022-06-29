[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TransfersApiListTransfersRequest

# Interface: TransfersApiListTransfersRequest

Request parameters for listTransfers operation in TransfersApi.

**`export`** 

**`interface`** TransfersApiListTransfersRequest

## Table of contents

### Properties

- [assetId](TransfersApiListTransfersRequest.md#assetid)
- [cursor](TransfersApiListTransfersRequest.md#cursor)
- [direction](TransfersApiListTransfersRequest.md#direction)
- [maxQuantity](TransfersApiListTransfersRequest.md#maxquantity)
- [maxTimestamp](TransfersApiListTransfersRequest.md#maxtimestamp)
- [metadata](TransfersApiListTransfersRequest.md#metadata)
- [minQuantity](TransfersApiListTransfersRequest.md#minquantity)
- [minTimestamp](TransfersApiListTransfersRequest.md#mintimestamp)
- [orderBy](TransfersApiListTransfersRequest.md#orderby)
- [pageSize](TransfersApiListTransfersRequest.md#pagesize)
- [status](TransfersApiListTransfersRequest.md#status)
- [tokenAddress](TransfersApiListTransfersRequest.md#tokenaddress)
- [tokenId](TransfersApiListTransfersRequest.md#tokenid)
- [tokenName](TransfersApiListTransfersRequest.md#tokenname)
- [tokenType](TransfersApiListTransfersRequest.md#tokentype)
- [user](TransfersApiListTransfersRequest.md#user)

## Properties

### assetId

• `Optional` `Readonly` **assetId**: `string`

Internal IMX ID of the minted asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:723](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L723)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:660](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L660)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:674](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L674)

___

### maxQuantity

• `Optional` `Readonly` **maxQuantity**: `string`

Max quantity for the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:751](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L751)

___

### maxTimestamp

• `Optional` `Readonly` **maxTimestamp**: `string`

Maximum timestamp for this transfer

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:702](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L702)

___

### metadata

• `Optional` `Readonly` **metadata**: `string`

JSON-encoded metadata filters for the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:758](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L758)

___

### minQuantity

• `Optional` `Readonly` **minQuantity**: `string`

Max quantity for the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:744](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L744)

___

### minTimestamp

• `Optional` `Readonly` **minTimestamp**: `string`

Minimum timestamp for this transfer

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:695](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L695)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:667](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L667)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:653](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L653)

___

### status

• `Optional` `Readonly` **status**: ``"success"`` \| ``"failure"``

Status of this transfer

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:688](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L688)

___

### tokenAddress

• `Optional` `Readonly` **tokenAddress**: `string`

Token address of the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:730](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L730)

___

### tokenId

• `Optional` `Readonly` **tokenId**: `string`

ERC721 Token ID of the minted asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:716](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L716)

___

### tokenName

• `Optional` `Readonly` **tokenName**: `string`

Token name of the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:737](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L737)

___

### tokenType

• `Optional` `Readonly` **tokenType**: `string`

Token type of the transferred asset

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:709](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L709)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who submitted this transfer

**`memberof`** TransfersApiListTransfers

#### Defined in

[src/api/domain/transfers-api.ts:681](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/transfers-api.ts#L681)
