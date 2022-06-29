[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / DepositsApi

# Class: DepositsApi

DepositsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`DepositsApi`**

## Table of contents

### Constructors

- [constructor](DepositsApi.md#constructor)

### Properties

- [axios](DepositsApi.md#axios)
- [basePath](DepositsApi.md#basepath)
- [configuration](DepositsApi.md#configuration)

### Methods

- [getDeposit](DepositsApi.md#getdeposit)
- [getSignableDeposit](DepositsApi.md#getsignabledeposit)
- [listDeposits](DepositsApi.md#listdeposits)

## Constructors

### constructor

• **new DepositsApi**(`configuration?`, `basePath?`, `axios?`)

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

### getDeposit

▸ **getDeposit**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Deposit`](../interfaces/Deposit.md), `any`\>\>

Get details of a deposit with the given ID

**`summary`** Get details of a deposit with the given ID

**`throws`** 

**`memberof`** DepositsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DepositsApiGetDepositRequest`](../interfaces/DepositsApiGetDepositRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Deposit`](../interfaces/Deposit.md), `any`\>\>

___

### getSignableDeposit

▸ **getSignableDeposit**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableDepositResponse`](../interfaces/GetSignableDepositResponse.md), `any`\>\>

Gets details of a signable deposit

**`summary`** Gets details of a signable deposit

**`throws`** 

**`memberof`** DepositsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DepositsApiGetSignableDepositRequest`](../interfaces/DepositsApiGetSignableDepositRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableDepositResponse`](../interfaces/GetSignableDepositResponse.md), `any`\>\>

___

### listDeposits

▸ **listDeposits**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListDepositsResponse`](../interfaces/ListDepositsResponse.md), `any`\>\>

Get a list of deposits

**`summary`** Get a list of deposits

**`throws`** 

**`memberof`** DepositsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`DepositsApiListDepositsRequest`](../interfaces/DepositsApiListDepositsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListDepositsResponse`](../interfaces/ListDepositsResponse.md), `any`\>\>
