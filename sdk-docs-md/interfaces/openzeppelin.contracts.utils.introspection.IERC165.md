[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [utils](../modules/openzeppelin.contracts.utils.md) / [introspection](../modules/openzeppelin.contracts.utils.introspection.md) / IERC165

# Interface: IERC165

[utils](../modules/openzeppelin.contracts.utils.md).[introspection](../modules/openzeppelin.contracts.utils.introspection.md).IERC165

## Hierarchy

- `BaseContract`

  ↳ **`IERC165`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.utils.introspection.IERC165.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.utils.introspection.IERC165.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.utils.introspection.IERC165.md#_wrappedemits)
- [address](openzeppelin.contracts.utils.introspection.IERC165.md#address)
- [callStatic](openzeppelin.contracts.utils.introspection.IERC165.md#callstatic)
- [deployTransaction](openzeppelin.contracts.utils.introspection.IERC165.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.utils.introspection.IERC165.md#estimategas)
- [filters](openzeppelin.contracts.utils.introspection.IERC165.md#filters)
- [functions](openzeppelin.contracts.utils.introspection.IERC165.md#functions)
- [interface](openzeppelin.contracts.utils.introspection.IERC165.md#interface)
- [off](openzeppelin.contracts.utils.introspection.IERC165.md#off)
- [on](openzeppelin.contracts.utils.introspection.IERC165.md#on)
- [once](openzeppelin.contracts.utils.introspection.IERC165.md#once)
- [populateTransaction](openzeppelin.contracts.utils.introspection.IERC165.md#populatetransaction)
- [provider](openzeppelin.contracts.utils.introspection.IERC165.md#provider)
- [removeListener](openzeppelin.contracts.utils.introspection.IERC165.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.utils.introspection.IERC165.md#resolvedaddress)
- [signer](openzeppelin.contracts.utils.introspection.IERC165.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.utils.introspection.IERC165.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.utils.introspection.IERC165.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.utils.introspection.IERC165.md#_wrapevent)
- [attach](openzeppelin.contracts.utils.introspection.IERC165.md#attach)
- [connect](openzeppelin.contracts.utils.introspection.IERC165.md#connect)
- [deployed](openzeppelin.contracts.utils.introspection.IERC165.md#deployed)
- [emit](openzeppelin.contracts.utils.introspection.IERC165.md#emit)
- [fallback](openzeppelin.contracts.utils.introspection.IERC165.md#fallback)
- [listenerCount](openzeppelin.contracts.utils.introspection.IERC165.md#listenercount)
- [listeners](openzeppelin.contracts.utils.introspection.IERC165.md#listeners)
- [queryFilter](openzeppelin.contracts.utils.introspection.IERC165.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.utils.introspection.IERC165.md#removealllisteners)
- [supportsInterface](openzeppelin.contracts.utils.introspection.IERC165.md#supportsinterface)

## Properties

### \_deployedPromise

• **\_deployedPromise**: `Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployedPromise

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:100

___

### \_runningEvents

• **\_runningEvents**: `Object`

#### Index signature

▪ [eventTag: `string`]: `RunningEvent`

#### Inherited from

BaseContract.\_runningEvents

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:101

___

### \_wrappedEmits

• **\_wrappedEmits**: `Object`

#### Index signature

▪ [eventTag: `string`]: (...`args`: `any`[]) => `void`

#### Inherited from

BaseContract.\_wrappedEmits

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:104

___

### address

• `Readonly` **address**: `string`

#### Inherited from

BaseContract.address

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:79

___

### callStatic

• **callStatic**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:80](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L80)

___

### deployTransaction

• `Readonly` **deployTransaction**: `TransactionResponse`

#### Inherited from

BaseContract.deployTransaction

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:99

___

### estimateGas

• **estimateGas**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:89](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L89)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:87](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L87)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:68](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L68)

___

### interface

• **interface**: `IERC165Interface`

#### Overrides

BaseContract.interface

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L47)

___

### off

• **off**: `OnEvent`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:63](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L63)

___

### on

• **on**: `OnEvent`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:64](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L64)

___

### once

• **once**: `OnEvent`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L65)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:96](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L96)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts:66](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/utils/introspection/IERC165.ts#L66)

___

### resolvedAddress

• `Readonly` **resolvedAddress**: `Promise`<`string`\>

#### Inherited from

BaseContract.resolvedAddress

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:98

___

### signer

• `Readonly` **signer**: `Signer`

#### Inherited from

BaseContract.signer

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:81

## Methods

### \_checkRunningEvents

▸ **_checkRunningEvents**(`runningEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |

#### Returns

`void`

#### Inherited from

BaseContract.\_checkRunningEvents

___

### \_deployed

▸ **_deployed**(`blockTag?`): `Promise`<`Contract`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag?` | `BlockTag` |

#### Returns

`Promise`<`Contract`\>

#### Inherited from

BaseContract.\_deployed

___

### \_wrapEvent

▸ **_wrapEvent**(`runningEvent`, `log`, `listener`): `Event`

#### Parameters

| Name | Type |
| :------ | :------ |
| `runningEvent` | `RunningEvent` |
| `log` | `Log` |
| `listener` | `Listener` |

#### Returns

`Event`

#### Inherited from

BaseContract.\_wrapEvent

___

### attach

▸ **attach**(`addressOrName`): [`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Returns

`Promise`<[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)\>

#### Overrides

BaseContract.deployed

___

### emit

▸ **emit**(`eventName`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` \| `EventFilter` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

BaseContract.emit

___

### fallback

▸ **fallback**(`overrides?`): `Promise`<`TransactionResponse`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `TransactionRequest` |

#### Returns

`Promise`<`TransactionResponse`\>

#### Inherited from

BaseContract.fallback

___

### listenerCount

▸ **listenerCount**(`eventName?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` \| `EventFilter` |

#### Returns

`number`

#### Inherited from

BaseContract.listenerCount

___

### listeners

▸ **listeners**<`TEvent`\>(`eventFilter?`): `TypedListener`<`TEvent`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter?` | `TypedEventFilter`<`TEvent`\> |

#### Returns

`TypedListener`<`TEvent`\>[]

#### Overrides

BaseContract.listeners

▸ **listeners**(`eventName?`): `Listener`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

`Listener`[]

#### Overrides

BaseContract.listeners

___

### queryFilter

▸ **queryFilter**<`TEvent`\>(`event`, `fromBlockOrBlockhash?`, `toBlock?`): `Promise`<`TEvent`[]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `TypedEventFilter`<`TEvent`\> |
| `fromBlockOrBlockhash?` | `string` \| `number` |
| `toBlock?` | `string` \| `number` |

#### Returns

`Promise`<`TEvent`[]\>

#### Overrides

BaseContract.queryFilter

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC165`](openzeppelin.contracts.utils.introspection.IERC165.md)

#### Overrides

BaseContract.removeAllListeners

___

### supportsInterface

▸ **supportsInterface**(`interfaceId`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `interfaceId` | `BytesLike` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>
