[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [token](../modules/openzeppelin.contracts.token.md) / [erc20](../modules/openzeppelin.contracts.token.erc20.md) / IERC20

# Interface: IERC20

[token](../modules/openzeppelin.contracts.token.md).[erc20](../modules/openzeppelin.contracts.token.erc20.md).IERC20

## Hierarchy

- `BaseContract`

  ↳ **`IERC20`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.token.erc20.IERC20.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.token.erc20.IERC20.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.token.erc20.IERC20.md#_wrappedemits)
- [address](openzeppelin.contracts.token.erc20.IERC20.md#address)
- [callStatic](openzeppelin.contracts.token.erc20.IERC20.md#callstatic)
- [deployTransaction](openzeppelin.contracts.token.erc20.IERC20.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.token.erc20.IERC20.md#estimategas)
- [filters](openzeppelin.contracts.token.erc20.IERC20.md#filters)
- [functions](openzeppelin.contracts.token.erc20.IERC20.md#functions)
- [interface](openzeppelin.contracts.token.erc20.IERC20.md#interface)
- [off](openzeppelin.contracts.token.erc20.IERC20.md#off)
- [on](openzeppelin.contracts.token.erc20.IERC20.md#on)
- [once](openzeppelin.contracts.token.erc20.IERC20.md#once)
- [populateTransaction](openzeppelin.contracts.token.erc20.IERC20.md#populatetransaction)
- [provider](openzeppelin.contracts.token.erc20.IERC20.md#provider)
- [removeListener](openzeppelin.contracts.token.erc20.IERC20.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.token.erc20.IERC20.md#resolvedaddress)
- [signer](openzeppelin.contracts.token.erc20.IERC20.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.token.erc20.IERC20.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.token.erc20.IERC20.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.token.erc20.IERC20.md#_wrapevent)
- [allowance](openzeppelin.contracts.token.erc20.IERC20.md#allowance)
- [approve](openzeppelin.contracts.token.erc20.IERC20.md#approve)
- [attach](openzeppelin.contracts.token.erc20.IERC20.md#attach)
- [balanceOf](openzeppelin.contracts.token.erc20.IERC20.md#balanceof)
- [connect](openzeppelin.contracts.token.erc20.IERC20.md#connect)
- [deployed](openzeppelin.contracts.token.erc20.IERC20.md#deployed)
- [emit](openzeppelin.contracts.token.erc20.IERC20.md#emit)
- [fallback](openzeppelin.contracts.token.erc20.IERC20.md#fallback)
- [listenerCount](openzeppelin.contracts.token.erc20.IERC20.md#listenercount)
- [listeners](openzeppelin.contracts.token.erc20.IERC20.md#listeners)
- [queryFilter](openzeppelin.contracts.token.erc20.IERC20.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.token.erc20.IERC20.md#removealllisteners)
- [totalSupply](openzeppelin.contracts.token.erc20.IERC20.md#totalsupply)
- [transfer](openzeppelin.contracts.token.erc20.IERC20.md#transfer)
- [transferFrom](openzeppelin.contracts.token.erc20.IERC20.md#transferfrom)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:203](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L203)

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
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:258](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L258)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `spender?`: ``null`` \| `string`, `value?`: ``null``) => `ApprovalEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `value?`: ``null``) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:234](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L234)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`]\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:143](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L143)

___

### interface

• **interface**: `IERC20Interface`

#### Overrides

BaseContract.interface

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:122](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L122)

___

### off

• **off**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:138](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L138)

___

### on

• **on**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:139](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L139)

___

### once

• **once**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:140](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L140)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allowance` | (`owner`: `string`, `spender`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `approve` | (`spender`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`account`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `totalSupply` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transfer` | (`to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `amount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:289](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L289)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts:141](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC20/IERC20.ts#L141)

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

### allowance

▸ **allowance**(`owner`, `spender`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `spender` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### approve

▸ **approve**(`spender`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `spender` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### attach

▸ **attach**(`addressOrName`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.attach

___

### balanceOf

▸ **balanceOf**(`account`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `account` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

#### Returns

`Promise`<[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC20`](openzeppelin.contracts.token.erc20.IERC20.md)

#### Overrides

BaseContract.removeAllListeners

___

### totalSupply

▸ **totalSupply**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### transfer

▸ **transfer**(`to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `amount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `amount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>
