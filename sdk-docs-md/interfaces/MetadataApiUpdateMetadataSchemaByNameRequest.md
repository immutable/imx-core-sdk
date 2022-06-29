[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MetadataApiUpdateMetadataSchemaByNameRequest

# Interface: MetadataApiUpdateMetadataSchemaByNameRequest

Request parameters for updateMetadataSchemaByName operation in MetadataApi.

**`export`** 

**`interface`** MetadataApiUpdateMetadataSchemaByNameRequest

## Table of contents

### Properties

- [address](MetadataApiUpdateMetadataSchemaByNameRequest.md#address)
- [iMXSignature](MetadataApiUpdateMetadataSchemaByNameRequest.md#imxsignature)
- [iMXTimestamp](MetadataApiUpdateMetadataSchemaByNameRequest.md#imxtimestamp)
- [metadataSchemaRequest](MetadataApiUpdateMetadataSchemaByNameRequest.md#metadataschemarequest)
- [name](MetadataApiUpdateMetadataSchemaByNameRequest.md#name)

## Properties

### address

• `Readonly` **address**: `string`

Collection contract address

**`memberof`** MetadataApiUpdateMetadataSchemaByName

#### Defined in

[src/api/domain/metadata-api.ts:343](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/metadata-api.ts#L343)

___

### iMXSignature

• `Readonly` **iMXSignature**: `string`

String created by signing wallet address and timestamp

**`memberof`** MetadataApiUpdateMetadataSchemaByName

#### Defined in

[src/api/domain/metadata-api.ts:357](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/metadata-api.ts#L357)

___

### iMXTimestamp

• `Readonly` **iMXTimestamp**: `string`

Unix Epoc timestamp

**`memberof`** MetadataApiUpdateMetadataSchemaByName

#### Defined in

[src/api/domain/metadata-api.ts:364](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/metadata-api.ts#L364)

___

### metadataSchemaRequest

• `Readonly` **metadataSchemaRequest**: [`MetadataSchemaRequest`](MetadataSchemaRequest.md)

update metadata schema

**`memberof`** MetadataApiUpdateMetadataSchemaByName

#### Defined in

[src/api/domain/metadata-api.ts:371](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/metadata-api.ts#L371)

___

### name

• `Readonly` **name**: `string`

Metadata schema name

**`memberof`** MetadataApiUpdateMetadataSchemaByName

#### Defined in

[src/api/domain/metadata-api.ts:350](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/metadata-api.ts#L350)
