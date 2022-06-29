[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / Registration

# Interface: Registration

[contracts](../modules/contracts.md).Registration

## Hierarchy

- `BaseContract`

  ↳ **`Registration`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.Registration.md#_deployedpromise)
- [\_runningEvents](contracts.Registration.md#_runningevents)
- [\_wrappedEmits](contracts.Registration.md#_wrappedemits)
- [address](contracts.Registration.md#address)
- [callStatic](contracts.Registration.md#callstatic)
- [deployTransaction](contracts.Registration.md#deploytransaction)
- [estimateGas](contracts.Registration.md#estimategas)
- [filters](contracts.Registration.md#filters)
- [functions](contracts.Registration.md#functions)
- [interface](contracts.Registration.md#interface)
- [off](contracts.Registration.md#off)
- [on](contracts.Registration.md#on)
- [once](contracts.Registration.md#once)
- [populateTransaction](contracts.Registration.md#populatetransaction)
- [provider](contracts.Registration.md#provider)
- [removeListener](contracts.Registration.md#removelistener)
- [resolvedAddress](contracts.Registration.md#resolvedaddress)
- [signer](contracts.Registration.md#signer)

### Methods

- [\_checkRunningEvents](contracts.Registration.md#_checkrunningevents)
- [\_deployed](contracts.Registration.md#_deployed)
- [\_wrapEvent](contracts.Registration.md#_wrapevent)
- [attach](contracts.Registration.md#attach)
- [connect](contracts.Registration.md#connect)
- [deployed](contracts.Registration.md#deployed)
- [emit](contracts.Registration.md#emit)
- [fallback](contracts.Registration.md#fallback)
- [imx](contracts.Registration.md#imx)
- [isRegistered](contracts.Registration.md#isregistered)
- [listenerCount](contracts.Registration.md#listenercount)
- [listeners](contracts.Registration.md#listeners)
- [queryFilter](contracts.Registration.md#queryfilter)
- [registerAndDepositNft](contracts.Registration.md#registeranddepositnft)
- [registerAndWithdraw](contracts.Registration.md#registerandwithdraw)
- [registerAndWithdrawNft](contracts.Registration.md#registerandwithdrawnft)
- [registerAndWithdrawNftTo](contracts.Registration.md#registerandwithdrawnftto)
- [registerAndWithdrawTo](contracts.Registration.md#registerandwithdrawto)
- [regsiterAndWithdrawAndMint](contracts.Registration.md#regsiterandwithdrawandmint)
- [removeAllListeners](contracts.Registration.md#removealllisteners)

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
| `imx` | (`overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isRegistered` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `registerAndDepositNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndWithdraw` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndWithdrawNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndWithdrawNftTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndWithdrawTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `recipient`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `regsiterAndWithdrawAndMint` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/contracts/contracts/Registration.ts:278](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L278)

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
| `imx` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isRegistered` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `registerAndDepositNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndWithdraw` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndWithdrawNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndWithdrawNftTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndWithdrawTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `regsiterAndWithdrawAndMint` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/contracts/contracts/Registration.ts:344](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L344)

___

### filters

• **filters**: `Object`

#### Overrides

BaseContract.filters

#### Defined in

[src/contracts/contracts/Registration.ts:342](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L342)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `imx` | (`overrides?`: `CallOverrides`) => `Promise`<[`string`]\> |
| `isRegistered` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `registerAndDepositNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndWithdraw` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndWithdrawNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndWithdrawNftTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndWithdrawTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `regsiterAndWithdrawAndMint` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/contracts/contracts/Registration.ts:152](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L152)

___

### interface

• **interface**: `RegistrationInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/contracts/contracts/Registration.ts:131](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L131)

___

### off

• **off**: `OnEvent`<[`Registration`](contracts.Registration.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/contracts/contracts/Registration.ts:147](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L147)

___

### on

• **on**: `OnEvent`<[`Registration`](contracts.Registration.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/contracts/contracts/Registration.ts:148](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L148)

___

### once

• **once**: `OnEvent`<[`Registration`](contracts.Registration.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/contracts/contracts/Registration.ts:149](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L149)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `imx` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isRegistered` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `registerAndDepositNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndWithdraw` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndWithdrawNft` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndWithdrawNftTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndWithdrawTo` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `recipient`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `regsiterAndWithdrawAndMint` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/contracts/contracts/Registration.ts:408](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L408)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`Registration`](contracts.Registration.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/contracts/contracts/Registration.ts:150](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Registration.ts#L150)

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

▸ **attach**(`addressOrName`): [`Registration`](contracts.Registration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Registration`](contracts.Registration.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`Registration`](contracts.Registration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Registration`](contracts.Registration.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`Registration`](contracts.Registration.md)\>

#### Returns

`Promise`<[`Registration`](contracts.Registration.md)\>

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

### imx

▸ **imx**(`overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### isRegistered

▸ **isRegistered**(`starkKey`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`boolean`\>

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

### registerAndDepositNft

▸ **registerAndDepositNft**(`ethKey`, `starkKey`, `signature`, `assetType`, `vaultId`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAndWithdraw

▸ **registerAndWithdraw**(`ethKey`, `starkKey`, `signature`, `assetType`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAndWithdrawNft

▸ **registerAndWithdrawNft**(`ethKey`, `starkKey`, `signature`, `assetType`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAndWithdrawNftTo

▸ **registerAndWithdrawNftTo**(`ethKey`, `starkKey`, `signature`, `assetType`, `tokenId`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAndWithdrawTo

▸ **registerAndWithdrawTo**(`ethKey`, `starkKey`, `signature`, `assetType`, `recipient`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `recipient` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### regsiterAndWithdrawAndMint

▸ **regsiterAndWithdrawAndMint**(`ethKey`, `starkKey`, `signature`, `assetType`, `mintingBlob`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `mintingBlob` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Registration`](contracts.Registration.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Registration`](contracts.Registration.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`Registration`](contracts.Registration.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Registration`](contracts.Registration.md)

#### Overrides

BaseContract.removeAllListeners
