[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Configuration

# Class: Configuration

## Table of contents

### Constructors

- [constructor](Configuration.md#constructor)

### Properties

- [accessToken](Configuration.md#accesstoken)
- [apiKey](Configuration.md#apikey)
- [baseOptions](Configuration.md#baseoptions)
- [basePath](Configuration.md#basepath)
- [formDataCtor](Configuration.md#formdatactor)
- [password](Configuration.md#password)
- [username](Configuration.md#username)

### Methods

- [isJsonMime](Configuration.md#isjsonmime)

## Constructors

### constructor

• **new Configuration**(`param?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `param` | [`ConfigurationParameters`](../interfaces/ConfigurationParameters.md) |

## Properties

### accessToken

• `Optional` **accessToken**: `string` \| `Promise`<`string`\> \| (`name?`: `string`, `scopes?`: `string`[]) => `string` \| (`name?`: `string`, `scopes?`: `string`[]) => `Promise`<`string`\>

parameter for oauth2 security

**`param`** security name

**`param`** oauth2 scope

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L53)

___

### apiKey

• `Optional` **apiKey**: `string` \| `Promise`<`string`\> \| (`name`: `string`) => `string` \| (`name`: `string`) => `Promise`<`string`\>

parameter for apiKey security

**`param`** security name

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:32](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L32)

___

### baseOptions

• `Optional` **baseOptions**: `any`

base options for axios calls

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:67](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L67)

___

### basePath

• `Optional` **basePath**: `string`

override base path

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L60)

___

### formDataCtor

• `Optional` **formDataCtor**: () => `any`

#### Type declaration

• **new Configuration**()

The FormData constructor that will be used to create multipart form data
requests. You can inject this here so that execution environments that
do not support the FormData class can still run the generated client.

#### Defined in

[src/api/configuration.ts:75](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L75)

___

### password

• `Optional` **password**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L46)

___

### username

• `Optional` **username**: `string`

parameter for basic security

**`memberof`** Configuration

#### Defined in

[src/api/configuration.ts:39](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/configuration.ts#L39)

## Methods

### isJsonMime

▸ **isJsonMime**(`mime`): `boolean`

Check if the given MIME is a JSON MIME.
JSON MIME examples:
  application/json
  application/json; charset=UTF8
  APPLICATION/JSON
  application/vnd.company+json

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mime` | `string` | MIME (Multipurpose Internet Mail Extensions) |

#### Returns

`boolean`

True if the given MIME is JSON, false otherwise.
