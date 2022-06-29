[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MetadataApi

# Class: MetadataApi

MetadataApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`MetadataApi`**

## Table of contents

### Constructors

- [constructor](MetadataApi.md#constructor)

### Properties

- [axios](MetadataApi.md#axios)
- [basePath](MetadataApi.md#basepath)
- [configuration](MetadataApi.md#configuration)

### Methods

- [addMetadataSchemaToCollection](MetadataApi.md#addmetadataschematocollection)
- [getMetadataSchema](MetadataApi.md#getmetadataschema)
- [updateMetadataSchemaByName](MetadataApi.md#updatemetadataschemabyname)

## Constructors

### constructor

• **new MetadataApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[src/api/base.ts:50](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L50)

## Methods

### addMetadataSchemaToCollection

▸ **addMetadataSchemaToCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SuccessResponse`](../interfaces/SuccessResponse.md), `any`\>\>

Add metadata schema to collection

**`summary`** Add metadata schema to collection

**`throws`** 

**`memberof`** MetadataApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MetadataApiAddMetadataSchemaToCollectionRequest`](../interfaces/MetadataApiAddMetadataSchemaToCollectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SuccessResponse`](../interfaces/SuccessResponse.md), `any`\>\>

___

### getMetadataSchema

▸ **getMetadataSchema**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`MetadataSchemaProperty`](../interfaces/MetadataSchemaProperty.md)[], `any`\>\>

Get collection metadata schema

**`summary`** Get collection metadata schema

**`throws`** 

**`memberof`** MetadataApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MetadataApiGetMetadataSchemaRequest`](../interfaces/MetadataApiGetMetadataSchemaRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`MetadataSchemaProperty`](../interfaces/MetadataSchemaProperty.md)[], `any`\>\>

___

### updateMetadataSchemaByName

▸ **updateMetadataSchemaByName**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`SuccessResponse`](../interfaces/SuccessResponse.md), `any`\>\>

Update metadata schema by name

**`summary`** Update metadata schema by name

**`throws`** 

**`memberof`** MetadataApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`MetadataApiUpdateMetadataSchemaByNameRequest`](../interfaces/MetadataApiUpdateMetadataSchemaByNameRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`SuccessResponse`](../interfaces/SuccessResponse.md), `any`\>\>
