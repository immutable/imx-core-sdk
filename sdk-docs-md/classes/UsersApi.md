[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / UsersApi

# Class: UsersApi

UsersApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`UsersApi`**

## Table of contents

### Constructors

- [constructor](UsersApi.md#constructor)

### Properties

- [axios](UsersApi.md#axios)
- [basePath](UsersApi.md#basepath)
- [configuration](UsersApi.md#configuration)

### Methods

- [getSignableRegistration](UsersApi.md#getsignableregistration)
- [getSignableRegistrationOffchain](UsersApi.md#getsignableregistrationoffchain)
- [getUsers](UsersApi.md#getusers)
- [registerUser](UsersApi.md#registeruser)

## Constructors

### constructor

• **new UsersApi**(`configuration?`, `basePath?`, `axios?`)

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

### getSignableRegistration

▸ **getSignableRegistration**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableRegistrationResponse`](../interfaces/GetSignableRegistrationResponse.md), `any`\>\>

Get operator signature to allow clients to register the user

**`summary`** Get operator signature to allow clients to register the user

**`throws`** 

**`memberof`** UsersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UsersApiGetSignableRegistrationRequest`](../interfaces/UsersApiGetSignableRegistrationRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableRegistrationResponse`](../interfaces/GetSignableRegistrationResponse.md), `any`\>\>

___

### getSignableRegistrationOffchain

▸ **getSignableRegistrationOffchain**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableRegistrationOffchainResponse`](../interfaces/GetSignableRegistrationOffchainResponse.md), `any`\>\>

Get encoded details to allow clients to register the user offchain

**`summary`** Get encoded details to allow clients to register the user offchain

**`throws`** 

**`memberof`** UsersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UsersApiGetSignableRegistrationOffchainRequest`](../interfaces/UsersApiGetSignableRegistrationOffchainRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableRegistrationOffchainResponse`](../interfaces/GetSignableRegistrationOffchainResponse.md), `any`\>\>

___

### getUsers

▸ **getUsers**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetUsersApiResponse`](../interfaces/GetUsersApiResponse.md), `any`\>\>

Get stark keys for a registered user

**`summary`** Get stark keys for a registered user

**`throws`** 

**`memberof`** UsersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UsersApiGetUsersRequest`](../interfaces/UsersApiGetUsersRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetUsersApiResponse`](../interfaces/GetUsersApiResponse.md), `any`\>\>

___

### registerUser

▸ **registerUser**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`RegisterUserResponse`](../interfaces/RegisterUserResponse.md), `any`\>\>

Registers a user

**`summary`** Registers a user

**`throws`** 

**`memberof`** UsersApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`UsersApiRegisterUserRequest`](../interfaces/UsersApiRegisterUserRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`RegisterUserResponse`](../interfaces/RegisterUserResponse.md), `any`\>\>
