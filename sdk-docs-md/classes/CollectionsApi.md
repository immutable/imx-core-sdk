[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CollectionsApi

# Class: CollectionsApi

CollectionsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`CollectionsApi`**

## Table of contents

### Constructors

- [constructor](CollectionsApi.md#constructor)

### Properties

- [axios](CollectionsApi.md#axios)
- [basePath](CollectionsApi.md#basepath)
- [configuration](CollectionsApi.md#configuration)

### Methods

- [createCollection](CollectionsApi.md#createcollection)
- [getCollection](CollectionsApi.md#getcollection)
- [listCollectionFilters](CollectionsApi.md#listcollectionfilters)
- [listCollections](CollectionsApi.md#listcollections)
- [updateCollection](CollectionsApi.md#updatecollection)

## Constructors

### constructor

• **new CollectionsApi**(`configuration?`, `basePath?`, `axios?`)

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

### createCollection

▸ **createCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>

Create collection

**`summary`** Create collection

**`throws`** 

**`memberof`** CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionsApiCreateCollectionRequest`](../interfaces/CollectionsApiCreateCollectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>

___

### getCollection

▸ **getCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>

Get details of a collection at the given address

**`summary`** Get details of a collection at the given address

**`throws`** 

**`memberof`** CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionsApiGetCollectionRequest`](../interfaces/CollectionsApiGetCollectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>

___

### listCollectionFilters

▸ **listCollectionFilters**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CollectionFilter`](../interfaces/CollectionFilter.md), `any`\>\>

Get a list of collection filters

**`summary`** Get a list of collection filters

**`throws`** 

**`memberof`** CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionsApiListCollectionFiltersRequest`](../interfaces/CollectionsApiListCollectionFiltersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CollectionFilter`](../interfaces/CollectionFilter.md), `any`\>\>

___

### listCollections

▸ **listCollections**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListCollectionsResponse`](../interfaces/ListCollectionsResponse.md), `any`\>\>

Get a list of collections

**`summary`** Get a list of collections

**`throws`** 

**`memberof`** CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionsApiListCollectionsRequest`](../interfaces/CollectionsApiListCollectionsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListCollectionsResponse`](../interfaces/ListCollectionsResponse.md), `any`\>\>

___

### updateCollection

▸ **updateCollection**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>

Update collection

**`summary`** Update collection

**`throws`** 

**`memberof`** CollectionsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`CollectionsApiUpdateCollectionRequest`](../interfaces/CollectionsApiUpdateCollectionRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Collection`](../interfaces/Collection.md), `any`\>\>
