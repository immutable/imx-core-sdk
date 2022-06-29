[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MintsApiListMintsRequest

# Interface: MintsApiListMintsRequest

Request parameters for listMints operation in MintsApi.

**`export`** 

**`interface`** MintsApiListMintsRequest

## Table of contents

### Properties

- [assetId](MintsApiListMintsRequest.md#assetid)
- [cursor](MintsApiListMintsRequest.md#cursor)
- [direction](MintsApiListMintsRequest.md#direction)
- [maxQuantity](MintsApiListMintsRequest.md#maxquantity)
- [maxTimestamp](MintsApiListMintsRequest.md#maxtimestamp)
- [metadata](MintsApiListMintsRequest.md#metadata)
- [minQuantity](MintsApiListMintsRequest.md#minquantity)
- [minTimestamp](MintsApiListMintsRequest.md#mintimestamp)
- [orderBy](MintsApiListMintsRequest.md#orderby)
- [pageSize](MintsApiListMintsRequest.md#pagesize)
- [status](MintsApiListMintsRequest.md#status)
- [tokenAddress](MintsApiListMintsRequest.md#tokenaddress)
- [tokenId](MintsApiListMintsRequest.md#tokenid)
- [tokenName](MintsApiListMintsRequest.md#tokenname)
- [tokenType](MintsApiListMintsRequest.md#tokentype)
- [user](MintsApiListMintsRequest.md#user)

## Properties

### assetId

• `Optional` `Readonly` **assetId**: `string`

Internal IMX ID of the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:512](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L512)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:449](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L449)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:463](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L463)

___

### maxQuantity

• `Optional` `Readonly` **maxQuantity**: `string`

Max quantity for the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:540](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L540)

___

### maxTimestamp

• `Optional` `Readonly` **maxTimestamp**: `string`

Maximum timestamp for this mint

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:491](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L491)

___

### metadata

• `Optional` `Readonly` **metadata**: `string`

JSON-encoded metadata filters for the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:547](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L547)

___

### minQuantity

• `Optional` `Readonly` **minQuantity**: `string`

Min quantity for the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:533](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L533)

___

### minTimestamp

• `Optional` `Readonly` **minTimestamp**: `string`

Minimum timestamp for this mint

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:484](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L484)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:456](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L456)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:442](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L442)

___

### status

• `Optional` `Readonly` **status**: `string`

Status of this mint

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:477](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L477)

___

### tokenAddress

• `Optional` `Readonly` **tokenAddress**: `string`

Token address of the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:526](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L526)

___

### tokenId

• `Optional` `Readonly` **tokenId**: `string`

ERC721 Token ID of the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:505](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L505)

___

### tokenName

• `Optional` `Readonly` **tokenName**: `string`

Token Name of the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:519](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L519)

___

### tokenType

• `Optional` `Readonly` **tokenType**: `string`

Token type of the minted asset

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:498](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L498)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who submitted this mint

**`memberof`** MintsApiListMints

#### Defined in

[src/api/domain/mints-api.ts:470](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/mints-api.ts#L470)
