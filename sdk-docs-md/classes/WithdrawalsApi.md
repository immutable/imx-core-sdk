[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / WithdrawalsApi

# Class: WithdrawalsApi

WithdrawalsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`WithdrawalsApi`**

## Table of contents

### Constructors

- [constructor](WithdrawalsApi.md#constructor)

### Properties

- [axios](WithdrawalsApi.md#axios)
- [basePath](WithdrawalsApi.md#basepath)
- [configuration](WithdrawalsApi.md#configuration)

### Methods

- [createWithdrawal](WithdrawalsApi.md#createwithdrawal)
- [getSignableWithdrawal](WithdrawalsApi.md#getsignablewithdrawal)
- [getWithdrawal](WithdrawalsApi.md#getwithdrawal)
- [listWithdrawals](WithdrawalsApi.md#listwithdrawals)

## Constructors

### constructor

• **new WithdrawalsApi**(`configuration?`, `basePath?`, `axios?`)

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

### createWithdrawal

▸ **createWithdrawal**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateWithdrawalResponse`](../interfaces/CreateWithdrawalResponse.md), `any`\>\>

Creates a withdrawal

**`summary`** Creates a withdrawal of a token

**`throws`** 

**`memberof`** WithdrawalsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`WithdrawalsApiCreateWithdrawalRequest`](../interfaces/WithdrawalsApiCreateWithdrawalRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateWithdrawalResponse`](../interfaces/CreateWithdrawalResponse.md), `any`\>\>

___

### getSignableWithdrawal

▸ **getSignableWithdrawal**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetSignableWithdrawalResponse`](../interfaces/GetSignableWithdrawalResponse.md), `any`\>\>

Gets details of a signable withdrawal

**`summary`** Gets details of a signable withdrawal

**`throws`** 

**`memberof`** WithdrawalsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`WithdrawalsApiGetSignableWithdrawalRequest`](../interfaces/WithdrawalsApiGetSignableWithdrawalRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetSignableWithdrawalResponse`](../interfaces/GetSignableWithdrawalResponse.md), `any`\>\>

___

### getWithdrawal

▸ **getWithdrawal**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Withdrawal`](../interfaces/Withdrawal.md), `any`\>\>

Gets details of withdrawal with the given ID

**`summary`** Gets details of withdrawal with the given ID

**`throws`** 

**`memberof`** WithdrawalsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`WithdrawalsApiGetWithdrawalRequest`](../interfaces/WithdrawalsApiGetWithdrawalRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Withdrawal`](../interfaces/Withdrawal.md), `any`\>\>

___

### listWithdrawals

▸ **listWithdrawals**(`requestParameters?`, `options?`): `Promise`<`AxiosResponse`<[`ListWithdrawalsResponse`](../interfaces/ListWithdrawalsResponse.md), `any`\>\>

Get a list of withdrawals

**`summary`** Get a list of withdrawals

**`throws`** 

**`memberof`** WithdrawalsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`WithdrawalsApiListWithdrawalsRequest`](../interfaces/WithdrawalsApiListWithdrawalsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`ListWithdrawalsResponse`](../interfaces/ListWithdrawalsResponse.md), `any`\>\>
