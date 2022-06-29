[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / AssetsApi

# Class: AssetsApi

AssetsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`AssetsApi`**

## Table of contents

### Constructors

- [constructor](AssetsApi.md#constructor)

### Properties

- [axios](AssetsApi.md#axios)
- [basePath](AssetsApi.md#basepath)
- [configuration](AssetsApi.md#configuration)

### Methods

- [getAsset](AssetsApi.md#getasset)
- [listAssets](AssetsApi.md#listassets)

## Constructors

### constructor

• **new AssetsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getAsset

▸ **getAsset**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Asset`](../interfaces/Asset.md), `any`\>\>

Get details of an asset

**`summary`** Get details of an asset

**`throws`** 

**`memberof`** AssetsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AssetsApiGetAssetRequest`](../interfaces/AssetsApiGetAssetRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Asset`](../interfaces/Asset.md), `any`\>\>

___

### listAssets

▸ **listAssets**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListAssetsResponse`](../interfaces/ListAssetsResponse.md), `any`\>\>

Get a list of assets

**`summary`** Get a list of assets

**`throws`** 

**`memberof`** AssetsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`AssetsApiListAssetsRequest`](../interfaces/AssetsApiListAssetsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListAssetsResponse`](../interfaces/ListAssetsResponse.md), `any`\>\>
