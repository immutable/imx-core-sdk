[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / EncodingApi

# Class: EncodingApi

EncodingApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`EncodingApi`**

## Table of contents

### Constructors

- [constructor](EncodingApi.md#constructor)

### Properties

- [axios](EncodingApi.md#axios)
- [basePath](EncodingApi.md#basepath)
- [configuration](EncodingApi.md#configuration)

### Methods

- [encodeAsset](EncodingApi.md#encodeasset)

## Constructors

### constructor

• **new EncodingApi**(`configuration?`, `basePath?`, `axios?`)

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

### encodeAsset

▸ **encodeAsset**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`EncodeAssetResponse`](../interfaces/EncodeAssetResponse.md), `any`\>\>

Retrieves the Starkex Encoded format for a given asset so that it can be used as parameter for Starkex smart contracts

**`summary`** Retrieves the Starkex Encoded format for a given asset

**`throws`** 

**`memberof`** EncodingApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`EncodingApiEncodeAssetRequest`](../interfaces/EncodingApiEncodeAssetRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`EncodeAssetResponse`](../interfaces/EncodeAssetResponse.md), `any`\>\>
