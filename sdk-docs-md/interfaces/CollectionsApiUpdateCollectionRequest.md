[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CollectionsApiUpdateCollectionRequest

# Interface: CollectionsApiUpdateCollectionRequest

Request parameters for updateCollection operation in CollectionsApi.

**`export`** 

**`interface`** CollectionsApiUpdateCollectionRequest

## Table of contents

### Properties

- [address](CollectionsApiUpdateCollectionRequest.md#address)
- [iMXSignature](CollectionsApiUpdateCollectionRequest.md#imxsignature)
- [iMXTimestamp](CollectionsApiUpdateCollectionRequest.md#imxtimestamp)
- [updateCollectionRequest](CollectionsApiUpdateCollectionRequest.md#updatecollectionrequest)

## Properties

### address

• `Readonly` **address**: `string`

Collection contract address

**`memberof`** CollectionsApiUpdateCollection

#### Defined in

[src/api/domain/collections-api.ts:577](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L577)

___

### iMXSignature

• `Readonly` **iMXSignature**: `string`

String created by signing wallet address and timestamp

**`memberof`** CollectionsApiUpdateCollection

#### Defined in

[src/api/domain/collections-api.ts:584](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L584)

___

### iMXTimestamp

• `Readonly` **iMXTimestamp**: `string`

Unix Epoc timestamp

**`memberof`** CollectionsApiUpdateCollection

#### Defined in

[src/api/domain/collections-api.ts:591](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L591)

___

### updateCollectionRequest

• `Readonly` **updateCollectionRequest**: [`UpdateCollectionRequest`](UpdateCollectionRequest.md)

update a collection

**`memberof`** CollectionsApiUpdateCollection

#### Defined in

[src/api/domain/collections-api.ts:598](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L598)
