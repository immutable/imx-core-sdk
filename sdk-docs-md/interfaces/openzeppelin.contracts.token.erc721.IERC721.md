[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [openzeppelin](../modules/openzeppelin.md) / [contracts](../modules/openzeppelin.contracts.md) / [token](../modules/openzeppelin.contracts.token.md) / [erc721](../modules/openzeppelin.contracts.token.erc721.md) / IERC721

# Interface: IERC721

[token](../modules/openzeppelin.contracts.token.md).[erc721](../modules/openzeppelin.contracts.token.erc721.md).IERC721

## Hierarchy

- `BaseContract`

  ↳ **`IERC721`**

## Table of contents

### Properties

- [\_deployedPromise](openzeppelin.contracts.token.erc721.IERC721.md#_deployedpromise)
- [\_runningEvents](openzeppelin.contracts.token.erc721.IERC721.md#_runningevents)
- [\_wrappedEmits](openzeppelin.contracts.token.erc721.IERC721.md#_wrappedemits)
- [address](openzeppelin.contracts.token.erc721.IERC721.md#address)
- [callStatic](openzeppelin.contracts.token.erc721.IERC721.md#callstatic)
- [deployTransaction](openzeppelin.contracts.token.erc721.IERC721.md#deploytransaction)
- [estimateGas](openzeppelin.contracts.token.erc721.IERC721.md#estimategas)
- [filters](openzeppelin.contracts.token.erc721.IERC721.md#filters)
- [functions](openzeppelin.contracts.token.erc721.IERC721.md#functions)
- [interface](openzeppelin.contracts.token.erc721.IERC721.md#interface)
- [off](openzeppelin.contracts.token.erc721.IERC721.md#off)
- [on](openzeppelin.contracts.token.erc721.IERC721.md#on)
- [once](openzeppelin.contracts.token.erc721.IERC721.md#once)
- [populateTransaction](openzeppelin.contracts.token.erc721.IERC721.md#populatetransaction)
- [provider](openzeppelin.contracts.token.erc721.IERC721.md#provider)
- [removeListener](openzeppelin.contracts.token.erc721.IERC721.md#removelistener)
- [resolvedAddress](openzeppelin.contracts.token.erc721.IERC721.md#resolvedaddress)
- [signer](openzeppelin.contracts.token.erc721.IERC721.md#signer)

### Methods

- [\_checkRunningEvents](openzeppelin.contracts.token.erc721.IERC721.md#_checkrunningevents)
- [\_deployed](openzeppelin.contracts.token.erc721.IERC721.md#_deployed)
- [\_wrapEvent](openzeppelin.contracts.token.erc721.IERC721.md#_wrapevent)
- [approve](openzeppelin.contracts.token.erc721.IERC721.md#approve)
- [attach](openzeppelin.contracts.token.erc721.IERC721.md#attach)
- [balanceOf](openzeppelin.contracts.token.erc721.IERC721.md#balanceof)
- [connect](openzeppelin.contracts.token.erc721.IERC721.md#connect)
- [deployed](openzeppelin.contracts.token.erc721.IERC721.md#deployed)
- [emit](openzeppelin.contracts.token.erc721.IERC721.md#emit)
- [fallback](openzeppelin.contracts.token.erc721.IERC721.md#fallback)
- [getApproved](openzeppelin.contracts.token.erc721.IERC721.md#getapproved)
- [isApprovedForAll](openzeppelin.contracts.token.erc721.IERC721.md#isapprovedforall)
- [listenerCount](openzeppelin.contracts.token.erc721.IERC721.md#listenercount)
- [listeners](openzeppelin.contracts.token.erc721.IERC721.md#listeners)
- [ownerOf](openzeppelin.contracts.token.erc721.IERC721.md#ownerof)
- [queryFilter](openzeppelin.contracts.token.erc721.IERC721.md#queryfilter)
- [removeAllListeners](openzeppelin.contracts.token.erc721.IERC721.md#removealllisteners)
- [safeTransferFrom(address,address,uint256)](openzeppelin.contracts.token.erc721.IERC721.md#safetransferfrom(address,address,uint256))
- [safeTransferFrom(address,address,uint256,bytes)](openzeppelin.contracts.token.erc721.IERC721.md#safetransferfrom(address,address,uint256,bytes))
- [setApprovalForAll](openzeppelin.contracts.token.erc721.IERC721.md#setapprovalforall)
- [supportsInterface](openzeppelin.contracts.token.erc721.IERC721.md#supportsinterface)
- [transferFrom](openzeppelin.contracts.token.erc721.IERC721.md#transferfrom)

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
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`boolean`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:316](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L316)

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
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:407](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L407)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Approval` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `ApprovalEventFilter` |
| `Approval(address,address,uint256)` | (`owner?`: ``null`` \| `string`, `approved?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `ApprovalEventFilter` |
| `ApprovalForAll` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => `ApprovalForAllEventFilter` |
| `ApprovalForAll(address,address,bool)` | (`owner?`: ``null`` \| `string`, `operator?`: ``null`` \| `string`, `approved?`: ``null``) => `ApprovalForAllEventFilter` |
| `Transfer` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TransferEventFilter` |
| `Transfer(address,address,uint256)` | (`from?`: ``null`` \| `string`, `to?`: ``null`` \| `string`, `tokenId?`: ``null`` \| `BigNumberish`) => `TransferEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:372](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L372)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `operator`: `string`  }\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `owner`: `string`  }\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<[`boolean`]\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:200](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L200)

___

### interface

• **interface**: `IERC721Interface`

#### Overrides

BaseContract.interface

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:179](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L179)

___

### off

• **off**: `OnEvent`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:195](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L195)

___

### on

• **on**: `OnEvent`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:196](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L196)

___

### once

• **once**: `OnEvent`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:197](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L197)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `approve` | (`to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `balanceOf` | (`owner`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getApproved` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isApprovedForAll` | (`owner`: `string`, `operator`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `ownerOf` | (`tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `safeTransferFrom(address,address,uint256,bytes)` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `data`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `setApprovalForAll` | (`operator`: `string`, `_approved`: `boolean`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `supportsInterface` | (`interfaceId`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `transferFrom` | (`from`: `string`, `to`: `string`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:466](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L466)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts:198](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/@openzeppelin/contracts/token/ERC721/IERC721.ts#L198)

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

### approve

▸ **approve**(`to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### attach

▸ **attach**(`addressOrName`): [`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Overrides

BaseContract.attach

___

### balanceOf

▸ **balanceOf**(`owner`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### connect

▸ **connect**(`signerOrProvider`): [`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

#### Returns

`Promise`<[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)\>

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

### getApproved

▸ **getApproved**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### isApprovedForAll

▸ **isApprovedForAll**(`owner`, `operator`, `overrides?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `owner` | `string` |
| `operator` | `string` |
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

### ownerOf

▸ **ownerOf**(`tokenId`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

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

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`IERC721`](openzeppelin.contracts.token.erc721.IERC721.md)

#### Overrides

BaseContract.removeAllListeners

___

### safeTransferFrom(address,address,uint256)

▸ **safeTransferFrom(address,address,uint256)**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### safeTransferFrom(address,address,uint256,bytes)

▸ **safeTransferFrom(address,address,uint256,bytes)**(`from`, `to`, `tokenId`, `data`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `data` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### setApprovalForAll

▸ **setApprovalForAll**(`operator`, `_approved`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operator` | `string` |
| `_approved` | `boolean` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

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

___

### transferFrom

▸ **transferFrom**(`from`, `to`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `from` | `string` |
| `to` | `string` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>
