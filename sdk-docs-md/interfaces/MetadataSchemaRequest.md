[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MetadataSchemaRequest

# Interface: MetadataSchemaRequest

**`export`** 

**`interface`** MetadataSchemaRequest

## Table of contents

### Properties

- [filterable](MetadataSchemaRequest.md#filterable)
- [name](MetadataSchemaRequest.md#name)
- [type](MetadataSchemaRequest.md#type)

## Properties

### filterable

• `Optional` **filterable**: `boolean`

Sets the metadata as filterable

**`memberof`** MetadataSchemaRequest

#### Defined in

[src/api/models/metadata-schema-request.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L28)

___

### name

• **name**: `string`

Name of the metadata key

**`memberof`** MetadataSchemaRequest

#### Defined in

[src/api/models/metadata-schema-request.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L34)

___

### type

• `Optional` **type**: [`MetadataSchemaRequestTypeEnum`](../modules.md#metadataschemarequesttypeenum-1)

Type of the metadata. Values: \"enum\", \"text\", \"boolean\", \"continuous\", \"discrete\" | Default: \"text\". Src: https://docs.x.immutable.com/docs/asset-metadata#property-type-mapping

**`memberof`** MetadataSchemaRequest

#### Defined in

[src/api/models/metadata-schema-request.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/metadata-schema-request.ts#L40)
