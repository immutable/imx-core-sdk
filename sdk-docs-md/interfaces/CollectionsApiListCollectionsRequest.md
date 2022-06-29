[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CollectionsApiListCollectionsRequest

# Interface: CollectionsApiListCollectionsRequest

Request parameters for listCollections operation in CollectionsApi.

**`export`** 

**`interface`** CollectionsApiListCollectionsRequest

## Table of contents

### Properties

- [blacklist](CollectionsApiListCollectionsRequest.md#blacklist)
- [cursor](CollectionsApiListCollectionsRequest.md#cursor)
- [direction](CollectionsApiListCollectionsRequest.md#direction)
- [keyword](CollectionsApiListCollectionsRequest.md#keyword)
- [orderBy](CollectionsApiListCollectionsRequest.md#orderby)
- [pageSize](CollectionsApiListCollectionsRequest.md#pagesize)
- [whitelist](CollectionsApiListCollectionsRequest.md#whitelist)

## Properties

### blacklist

• `Optional` `Readonly` **blacklist**: `string`

List of collections not to be included, separated by commas

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:549](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L549)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:528](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L528)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:542](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L542)

___

### keyword

• `Optional` `Readonly` **keyword**: `string`

Keyword to search in collection name and description

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:563](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L563)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:535](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L535)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:521](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L521)

___

### whitelist

• `Optional` `Readonly` **whitelist**: `string`

List of collections to be included, separated by commas

**`memberof`** CollectionsApiListCollections

#### Defined in

[src/api/domain/collections-api.ts:556](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L556)
