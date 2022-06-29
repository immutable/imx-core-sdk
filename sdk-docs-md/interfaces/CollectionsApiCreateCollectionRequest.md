[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CollectionsApiCreateCollectionRequest

# Interface: CollectionsApiCreateCollectionRequest

Request parameters for createCollection operation in CollectionsApi.

**`export`** 

**`interface`** CollectionsApiCreateCollectionRequest

## Table of contents

### Properties

- [createCollectionRequest](CollectionsApiCreateCollectionRequest.md#createcollectionrequest)
- [iMXSignature](CollectionsApiCreateCollectionRequest.md#imxsignature)
- [iMXTimestamp](CollectionsApiCreateCollectionRequest.md#imxtimestamp)

## Properties

### createCollectionRequest

• `Readonly` **createCollectionRequest**: [`CreateCollectionRequest`](CreateCollectionRequest.md)

create a collection

**`memberof`** CollectionsApiCreateCollection

#### Defined in

[src/api/domain/collections-api.ts:465](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L465)

___

### iMXSignature

• `Readonly` **iMXSignature**: `string`

String created by signing wallet address and timestamp

**`memberof`** CollectionsApiCreateCollection

#### Defined in

[src/api/domain/collections-api.ts:451](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L451)

___

### iMXTimestamp

• `Readonly` **iMXTimestamp**: `string`

Unix Epoc timestamp

**`memberof`** CollectionsApiCreateCollection

#### Defined in

[src/api/domain/collections-api.ts:458](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/collections-api.ts#L458)
