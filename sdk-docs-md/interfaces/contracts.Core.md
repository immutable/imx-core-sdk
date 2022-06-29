[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [contracts](../modules/contracts.md) / Core

# Interface: Core

[contracts](../modules/contracts.md).Core

## Hierarchy

- `BaseContract`

  ↳ **`Core`**

## Table of contents

### Properties

- [\_deployedPromise](contracts.Core.md#_deployedpromise)
- [\_runningEvents](contracts.Core.md#_runningevents)
- [\_wrappedEmits](contracts.Core.md#_wrappedemits)
- [address](contracts.Core.md#address)
- [callStatic](contracts.Core.md#callstatic)
- [deployTransaction](contracts.Core.md#deploytransaction)
- [estimateGas](contracts.Core.md#estimategas)
- [filters](contracts.Core.md#filters)
- [functions](contracts.Core.md#functions)
- [interface](contracts.Core.md#interface)
- [off](contracts.Core.md#off)
- [on](contracts.Core.md#on)
- [once](contracts.Core.md#once)
- [populateTransaction](contracts.Core.md#populatetransaction)
- [provider](contracts.Core.md#provider)
- [removeListener](contracts.Core.md#removelistener)
- [resolvedAddress](contracts.Core.md#resolvedaddress)
- [signer](contracts.Core.md#signer)

### Methods

- [\_checkRunningEvents](contracts.Core.md#_checkrunningevents)
- [\_deployed](contracts.Core.md#_deployed)
- [\_wrapEvent](contracts.Core.md#_wrapevent)
- [announceAvailabilityVerifierRemovalIntent](contracts.Core.md#announceavailabilityverifierremovalintent)
- [announceVerifierRemovalIntent](contracts.Core.md#announceverifierremovalintent)
- [attach](contracts.Core.md#attach)
- [connect](contracts.Core.md#connect)
- [deployed](contracts.Core.md#deployed)
- [deposit(uint256,uint256,uint256)](contracts.Core.md#deposit(uint256,uint256,uint256))
- [deposit(uint256,uint256,uint256,uint256)](contracts.Core.md#deposit(uint256,uint256,uint256,uint256))
- [depositCancel](contracts.Core.md#depositcancel)
- [depositERC20](contracts.Core.md#depositerc20)
- [depositEth](contracts.Core.md#depositeth)
- [depositNft](contracts.Core.md#depositnft)
- [depositNftReclaim](contracts.Core.md#depositnftreclaim)
- [depositReclaim](contracts.Core.md#depositreclaim)
- [emit](contracts.Core.md#emit)
- [escape](contracts.Core.md#escape)
- [fallback](contracts.Core.md#fallback)
- [freezeRequest](contracts.Core.md#freezerequest)
- [fullWithdrawalRequest](contracts.Core.md#fullwithdrawalrequest)
- [getAssetInfo](contracts.Core.md#getassetinfo)
- [getCancellationRequest](contracts.Core.md#getcancellationrequest)
- [getDepositBalance](contracts.Core.md#getdepositbalance)
- [getEthKey](contracts.Core.md#getethkey)
- [getFullWithdrawalRequest](contracts.Core.md#getfullwithdrawalrequest)
- [getLastBatchId](contracts.Core.md#getlastbatchid)
- [getOrderRoot](contracts.Core.md#getorderroot)
- [getOrderTreeHeight](contracts.Core.md#getordertreeheight)
- [getQuantizedDepositBalance](contracts.Core.md#getquantizeddepositbalance)
- [getQuantum](contracts.Core.md#getquantum)
- [getRegisteredAvailabilityVerifiers](contracts.Core.md#getregisteredavailabilityverifiers)
- [getRegisteredVerifiers](contracts.Core.md#getregisteredverifiers)
- [getSequenceNumber](contracts.Core.md#getsequencenumber)
- [getVaultRoot](contracts.Core.md#getvaultroot)
- [getVaultTreeHeight](contracts.Core.md#getvaulttreeheight)
- [getWithdrawalBalance](contracts.Core.md#getwithdrawalbalance)
- [isAvailabilityVerifier](contracts.Core.md#isavailabilityverifier)
- [isFrozen](contracts.Core.md#isfrozen)
- [isOperator](contracts.Core.md#isoperator)
- [isTokenAdmin](contracts.Core.md#istokenadmin)
- [isUserAdmin](contracts.Core.md#isuseradmin)
- [isVerifier](contracts.Core.md#isverifier)
- [listenerCount](contracts.Core.md#listenercount)
- [listeners](contracts.Core.md#listeners)
- [mainAcceptGovernance](contracts.Core.md#mainacceptgovernance)
- [mainCancelNomination](contracts.Core.md#maincancelnomination)
- [mainIsGovernor](contracts.Core.md#mainisgovernor)
- [mainNominateNewGovernor](contracts.Core.md#mainnominatenewgovernor)
- [mainRemoveGovernor](contracts.Core.md#mainremovegovernor)
- [onERC721Received](contracts.Core.md#onerc721received)
- [queryFilter](contracts.Core.md#queryfilter)
- [registerAndDepositERC20](contracts.Core.md#registeranddepositerc20)
- [registerAndDepositEth](contracts.Core.md#registeranddepositeth)
- [registerAvailabilityVerifier](contracts.Core.md#registeravailabilityverifier)
- [registerOperator](contracts.Core.md#registeroperator)
- [registerToken](contracts.Core.md#registertoken)
- [registerTokenAdmin](contracts.Core.md#registertokenadmin)
- [registerUser](contracts.Core.md#registeruser)
- [registerUserAdmin](contracts.Core.md#registeruseradmin)
- [registerVerifier](contracts.Core.md#registerverifier)
- [removeAllListeners](contracts.Core.md#removealllisteners)
- [removeAvailabilityVerifier](contracts.Core.md#removeavailabilityverifier)
- [removeVerifier](contracts.Core.md#removeverifier)
- [unFreeze](contracts.Core.md#unfreeze)
- [unregisterOperator](contracts.Core.md#unregisteroperator)
- [unregisterTokenAdmin](contracts.Core.md#unregistertokenadmin)
- [unregisterUserAdmin](contracts.Core.md#unregisteruseradmin)
- [updateState](contracts.Core.md#updatestate)
- [withdraw](contracts.Core.md#withdraw)
- [withdrawAndMint](contracts.Core.md#withdrawandmint)
- [withdrawNft](contracts.Core.md#withdrawnft)
- [withdrawNftTo](contracts.Core.md#withdrawnftto)
- [withdrawTo](contracts.Core.md#withdrawto)

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
| `announceAvailabilityVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `announceVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `deposit(uint256,uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositCancel` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositERC20` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositEth` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositNft` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositNftReclaim` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `depositReclaim` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `escape` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `assetId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `freezeRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `fullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getAssetInfo` | (`assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getCancellationRequest` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEthKey` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`string`\> |
| `getFullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastBatchId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOrderRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOrderTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getQuantizedDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getQuantum` | (`presumedAssetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRegisteredAvailabilityVerifiers` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getRegisteredVerifiers` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `getSequenceNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVaultRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVaultTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWithdrawalBalance` | (`ownerKey`: `BigNumberish`, `assetId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isFrozen` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isOperator` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isTokenAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isUserAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `isVerifier` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mainAcceptGovernance` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mainCancelNomination` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mainIsGovernor` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mainNominateNewGovernor` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `mainRemoveGovernor` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `onERC721Received` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndDepositERC20` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAndDepositEth` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerAvailabilityVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerOperator` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerToken` | (`arg0`: `BigNumberish`, `arg1`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerTokenAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUser` | (`arg0`: `string`, `arg1`: `BigNumberish`, `arg2`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerUserAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `registerVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `removeVerifier` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unFreeze` | (`overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterOperator` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterTokenAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `unregisterUserAdmin` | (`arg0`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `updateState` | (`publicInput`: `BigNumberish`[], `applicationData`: `BigNumberish`[], `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdraw` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawAndMint` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawNft` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawNftTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `BigNumberish`, `arg3`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |
| `withdrawTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `string`, `overrides?`: `CallOverrides`) => `Promise`<`void`\> |

#### Overrides

BaseContract.callStatic

#### Defined in

[src/contracts/contracts/Core.ts:1598](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L1598)

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
| `announceAvailabilityVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `announceVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `deposit(uint256,uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositCancel` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositERC20` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositEth` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositNft` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositNftReclaim` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `depositReclaim` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `escape` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `assetId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `freezeRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `fullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getAssetInfo` | (`assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getCancellationRequest` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getEthKey` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getFullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getLastBatchId` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOrderRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getOrderTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getQuantizedDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getQuantum` | (`presumedAssetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getRegisteredAvailabilityVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getRegisteredVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `getSequenceNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVaultRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getVaultTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `getWithdrawalBalance` | (`ownerKey`: `BigNumberish`, `assetId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`BigNumber`\> |
| `isAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isFrozen` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `isVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mainAcceptGovernance` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mainCancelNomination` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mainIsGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mainNominateNewGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `mainRemoveGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `onERC721Received` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndDepositERC20` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAndDepositEth` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerAvailabilityVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerToken` | (`arg0`: `BigNumberish`, `arg1`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUser` | (`arg0`: `string`, `arg1`: `BigNumberish`, `arg2`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `registerVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `removeVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unFreeze` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `unregisterUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `updateState` | (`publicInput`: `BigNumberish`[], `applicationData`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdraw` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawAndMint` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawNft` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawNftTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `BigNumberish`, `arg3`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |
| `withdrawTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`BigNumber`\> |

#### Overrides

BaseContract.estimateGas

#### Defined in

[src/contracts/contracts/Core.ts:2098](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L2098)

___

### filters

• **filters**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `LogDeposit` | (`depositorEthKey?`: ``null``, `starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogDepositEventFilter` |
| `LogDeposit(address,uint256,uint256,uint256,uint256,uint256)` | (`depositorEthKey?`: ``null``, `starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogDepositEventFilter` |
| `LogDepositCancel` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetId?`: ``null``) => `LogDepositCancelEventFilter` |
| `LogDepositCancel(uint256,uint256,uint256)` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetId?`: ``null``) => `LogDepositCancelEventFilter` |
| `LogDepositCancelReclaimed` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogDepositCancelReclaimedEventFilter` |
| `LogDepositCancelReclaimed(uint256,uint256,uint256,uint256,uint256)` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogDepositCancelReclaimedEventFilter` |
| `LogDepositNftCancelReclaimed` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``) => `LogDepositNftCancelReclaimedEventFilter` |
| `LogDepositNftCancelReclaimed(uint256,uint256,uint256,uint256,uint256)` | (`starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``) => `LogDepositNftCancelReclaimedEventFilter` |
| `LogFullWithdrawalRequest` | (`starkKey?`: ``null``, `vaultId?`: ``null``) => `LogFullWithdrawalRequestEventFilter` |
| `LogFullWithdrawalRequest(uint256,uint256)` | (`starkKey?`: ``null``, `vaultId?`: ``null``) => `LogFullWithdrawalRequestEventFilter` |
| `LogMintWithdrawalPerformed` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``, `assetId?`: ``null``) => `LogMintWithdrawalPerformedEventFilter` |
| `LogMintWithdrawalPerformed(uint256,uint256,uint256,uint256,uint256)` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``, `assetId?`: ``null``) => `LogMintWithdrawalPerformedEventFilter` |
| `LogMintableWithdrawalAllowed` | (`ownerKey?`: ``null``, `assetId?`: ``null``, `quantizedAmount?`: ``null``) => `LogMintableWithdrawalAllowedEventFilter` |
| `LogMintableWithdrawalAllowed(uint256,uint256,uint256)` | (`ownerKey?`: ``null``, `assetId?`: ``null``, `quantizedAmount?`: ``null``) => `LogMintableWithdrawalAllowedEventFilter` |
| `LogNftDeposit` | (`depositorEthKey?`: ``null``, `starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``) => `LogNftDepositEventFilter` |
| `LogNftDeposit(address,uint256,uint256,uint256,uint256,uint256)` | (`depositorEthKey?`: ``null``, `starkKey?`: ``null``, `vaultId?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``) => `LogNftDepositEventFilter` |
| `LogNftWithdrawalAllowed` | (`ownerKey?`: ``null``, `assetId?`: ``null``) => `LogNftWithdrawalAllowedEventFilter` |
| `LogNftWithdrawalAllowed(uint256,uint256)` | (`ownerKey?`: ``null``, `assetId?`: ``null``) => `LogNftWithdrawalAllowedEventFilter` |
| `LogNftWithdrawalPerformed` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``, `recipient?`: ``null``) => `LogNftWithdrawalPerformedEventFilter` |
| `LogNftWithdrawalPerformed(uint256,uint256,uint256,uint256,address)` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `tokenId?`: ``null``, `assetId?`: ``null``, `recipient?`: ``null``) => `LogNftWithdrawalPerformedEventFilter` |
| `LogRootUpdate` | (`sequenceNumber?`: ``null``, `batchId?`: ``null``, `vaultRoot?`: ``null``, `orderRoot?`: ``null``) => `LogRootUpdateEventFilter` |
| `LogRootUpdate(uint256,uint256,uint256,uint256)` | (`sequenceNumber?`: ``null``, `batchId?`: ``null``, `vaultRoot?`: ``null``, `orderRoot?`: ``null``) => `LogRootUpdateEventFilter` |
| `LogStateTransitionFact` | (`stateTransitionFact?`: ``null``) => `LogStateTransitionFactEventFilter` |
| `LogStateTransitionFact(bytes32)` | (`stateTransitionFact?`: ``null``) => `LogStateTransitionFactEventFilter` |
| `LogVaultBalanceChangeApplied` | (`ethKey?`: ``null``, `assetId?`: ``null``, `vaultId?`: ``null``, `quantizedAmountChange?`: ``null``) => `LogVaultBalanceChangeAppliedEventFilter` |
| `LogVaultBalanceChangeApplied(address,uint256,uint256,int256)` | (`ethKey?`: ``null``, `assetId?`: ``null``, `vaultId?`: ``null``, `quantizedAmountChange?`: ``null``) => `LogVaultBalanceChangeAppliedEventFilter` |
| `LogWithdrawalAllowed` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogWithdrawalAllowedEventFilter` |
| `LogWithdrawalAllowed(uint256,uint256,uint256,uint256)` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``) => `LogWithdrawalAllowedEventFilter` |
| `LogWithdrawalPerformed` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``, `recipient?`: ``null``) => `LogWithdrawalPerformedEventFilter` |
| `LogWithdrawalPerformed(uint256,uint256,uint256,uint256,address)` | (`ownerKey?`: ``null``, `assetType?`: ``null``, `nonQuantizedAmount?`: ``null``, `quantizedAmount?`: ``null``, `recipient?`: ``null``) => `LogWithdrawalPerformedEventFilter` |

#### Overrides

BaseContract.filters

#### Defined in

[src/contracts/contracts/Core.ts:1901](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L1901)

___

### functions

• **functions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `announceAvailabilityVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `announceVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `deposit(uint256,uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositCancel` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositERC20` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositEth` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositNft` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositNftReclaim` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `depositReclaim` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `escape` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `assetId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `freezeRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `fullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getAssetInfo` | (`assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `assetInfo`: `string`  }\> |
| `getCancellationRequest` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `request`: `BigNumber`  }\> |
| `getDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getEthKey` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`string`] & { `ethKey`: `string`  }\> |
| `getFullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `res`: `BigNumber`  }\> |
| `getLastBatchId` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `batchId`: `BigNumber`  }\> |
| `getOrderRoot` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `root`: `BigNumber`  }\> |
| `getOrderTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `height`: `BigNumber`  }\> |
| `getQuantizedDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `getQuantum` | (`presumedAssetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `quantum`: `BigNumber`  }\> |
| `getRegisteredAvailabilityVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getRegisteredVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `getSequenceNumber` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `seq`: `BigNumber`  }\> |
| `getVaultRoot` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `root`: `BigNumber`  }\> |
| `getVaultTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `height`: `BigNumber`  }\> |
| `getWithdrawalBalance` | (`ownerKey`: `BigNumberish`, `assetId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<[`BigNumber`] & { `balance`: `BigNumber`  }\> |
| `isAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isFrozen` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `isVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mainAcceptGovernance` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mainCancelNomination` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mainIsGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mainNominateNewGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `mainRemoveGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `onERC721Received` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndDepositERC20` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAndDepositEth` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerAvailabilityVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerToken` | (`arg0`: `BigNumberish`, `arg1`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUser` | (`arg0`: `string`, `arg1`: `BigNumberish`, `arg2`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `registerVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `removeVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unFreeze` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `unregisterUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `updateState` | (`publicInput`: `BigNumberish`[], `applicationData`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdraw` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawAndMint` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawNft` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawNftTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `BigNumberish`, `arg3`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |
| `withdrawTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`ContractTransaction`\> |

#### Overrides

BaseContract.functions

#### Defined in

[src/contracts/contracts/Core.ts:893](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L893)

___

### interface

• **interface**: `CoreInterface`

#### Overrides

BaseContract.interface

#### Defined in

[src/contracts/contracts/Core.ts:872](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L872)

___

### off

• **off**: `OnEvent`<[`Core`](contracts.Core.md)\>

#### Overrides

BaseContract.off

#### Defined in

[src/contracts/contracts/Core.ts:888](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L888)

___

### on

• **on**: `OnEvent`<[`Core`](contracts.Core.md)\>

#### Overrides

BaseContract.on

#### Defined in

[src/contracts/contracts/Core.ts:889](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L889)

___

### once

• **once**: `OnEvent`<[`Core`](contracts.Core.md)\>

#### Overrides

BaseContract.once

#### Defined in

[src/contracts/contracts/Core.ts:890](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L890)

___

### populateTransaction

• **populateTransaction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `announceAvailabilityVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `announceVerifierRemovalIntent` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `deposit(uint256,uint256,uint256,uint256)` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositCancel` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositERC20` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositEth` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositNft` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositNftReclaim` | (`starkKey`: `BigNumberish`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `depositReclaim` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `escape` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `assetId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `freezeRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `fullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getAssetInfo` | (`assetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getCancellationRequest` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getEthKey` | (`starkKey`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getFullWithdrawalRequest` | (`starkKey`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getLastBatchId` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getOrderRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getOrderTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getQuantizedDepositBalance` | (`starkKey`: `BigNumberish`, `assetId`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getQuantum` | (`presumedAssetType`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getRegisteredAvailabilityVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getRegisteredVerifiers` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `getSequenceNumber` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVaultRoot` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getVaultTreeHeight` | (`overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `getWithdrawalBalance` | (`ownerKey`: `BigNumberish`, `assetId`: `BigNumberish`, `overrides?`: `CallOverrides`) => `Promise`<`PopulatedTransaction`\> |
| `isAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isFrozen` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `isVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mainAcceptGovernance` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mainCancelNomination` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mainIsGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mainNominateNewGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `mainRemoveGovernor` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `onERC721Received` | (`arg0`: `string`, `arg1`: `string`, `arg2`: `BigNumberish`, `arg3`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndDepositERC20` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `quantizedAmount`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAndDepositEth` | (`ethKey`: `string`, `starkKey`: `BigNumberish`, `signature`: `BytesLike`, `assetType`: `BigNumberish`, `vaultId`: `BigNumberish`, `overrides?`: `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerAvailabilityVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerToken` | (`arg0`: `BigNumberish`, `arg1`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUser` | (`arg0`: `string`, `arg1`: `BigNumberish`, `arg2`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `registerVerifier` | (`arg0`: `string`, `arg1`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeAvailabilityVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `removeVerifier` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unFreeze` | (`overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterOperator` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterTokenAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `unregisterUserAdmin` | (`arg0`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `updateState` | (`publicInput`: `BigNumberish`[], `applicationData`: `BigNumberish`[], `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdraw` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawAndMint` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `mintingBlob`: `BytesLike`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawNft` | (`ownerKey`: `BigNumberish`, `assetType`: `BigNumberish`, `tokenId`: `BigNumberish`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawNftTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `BigNumberish`, `arg3`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |
| `withdrawTo` | (`arg0`: `BigNumberish`, `arg1`: `BigNumberish`, `arg2`: `string`, `overrides?`: `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  }) => `Promise`<`PopulatedTransaction`\> |

#### Overrides

BaseContract.populateTransaction

#### Defined in

[src/contracts/contracts/Core.ts:2447](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L2447)

___

### provider

• `Readonly` **provider**: `Provider`

#### Inherited from

BaseContract.provider

#### Defined in

node_modules/@ethersproject/contracts/lib/index.d.ts:82

___

### removeListener

• **removeListener**: `OnEvent`<[`Core`](contracts.Core.md)\>

#### Overrides

BaseContract.removeListener

#### Defined in

[src/contracts/contracts/Core.ts:891](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/contracts/Core.ts#L891)

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

### announceAvailabilityVerifierRemovalIntent

▸ **announceAvailabilityVerifierRemovalIntent**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### announceVerifierRemovalIntent

▸ **announceVerifierRemovalIntent**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### attach

▸ **attach**(`addressOrName`): [`Core`](contracts.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressOrName` | `string` |

#### Returns

[`Core`](contracts.Core.md)

#### Overrides

BaseContract.attach

___

### connect

▸ **connect**(`signerOrProvider`): [`Core`](contracts.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `signerOrProvider` | `string` \| `Signer` \| `Provider` |

#### Returns

[`Core`](contracts.Core.md)

#### Overrides

BaseContract.connect

___

### deployed

▸ **deployed**(): `Promise`<[`Core`](contracts.Core.md)\>

#### Returns

`Promise`<[`Core`](contracts.Core.md)\>

#### Overrides

BaseContract.deployed

___

### deposit(uint256,uint256,uint256)

▸ **deposit(uint256,uint256,uint256)**(`starkKey`, `assetType`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### deposit(uint256,uint256,uint256,uint256)

▸ **deposit(uint256,uint256,uint256,uint256)**(`starkKey`, `assetType`, `vaultId`, `quantizedAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `quantizedAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositCancel

▸ **depositCancel**(`starkKey`, `assetId`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositERC20

▸ **depositERC20**(`starkKey`, `assetType`, `vaultId`, `quantizedAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `quantizedAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositEth

▸ **depositEth**(`starkKey`, `assetType`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositNft

▸ **depositNft**(`starkKey`, `assetType`, `vaultId`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositNftReclaim

▸ **depositNftReclaim**(`starkKey`, `assetType`, `vaultId`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### depositReclaim

▸ **depositReclaim**(`starkKey`, `assetId`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

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

### escape

▸ **escape**(`starkKey`, `vaultId`, `assetId`, `quantizedAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `quantizedAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

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

### freezeRequest

▸ **freezeRequest**(`starkKey`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### fullWithdrawalRequest

▸ **fullWithdrawalRequest**(`starkKey`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### getAssetInfo

▸ **getAssetInfo**(`assetType`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `assetType` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### getCancellationRequest

▸ **getCancellationRequest**(`starkKey`, `assetId`, `vaultId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getDepositBalance

▸ **getDepositBalance**(`starkKey`, `assetId`, `vaultId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getEthKey

▸ **getEthKey**(`starkKey`, `overrides?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`string`\>

___

### getFullWithdrawalRequest

▸ **getFullWithdrawalRequest**(`starkKey`, `vaultId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getLastBatchId

▸ **getLastBatchId**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getOrderRoot

▸ **getOrderRoot**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getOrderTreeHeight

▸ **getOrderTreeHeight**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getQuantizedDepositBalance

▸ **getQuantizedDepositBalance**(`starkKey`, `assetId`, `vaultId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `starkKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getQuantum

▸ **getQuantum**(`presumedAssetType`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `presumedAssetType` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getRegisteredAvailabilityVerifiers

▸ **getRegisteredAvailabilityVerifiers**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### getRegisteredVerifiers

▸ **getRegisteredVerifiers**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### getSequenceNumber

▸ **getSequenceNumber**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getVaultRoot

▸ **getVaultRoot**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getVaultTreeHeight

▸ **getVaultTreeHeight**(`overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### getWithdrawalBalance

▸ **getWithdrawalBalance**(`ownerKey`, `assetId`, `overrides?`): `Promise`<`BigNumber`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerKey` | `BigNumberish` |
| `assetId` | `BigNumberish` |
| `overrides?` | `CallOverrides` |

#### Returns

`Promise`<`BigNumber`\>

___

### isAvailabilityVerifier

▸ **isAvailabilityVerifier**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### isFrozen

▸ **isFrozen**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### isOperator

▸ **isOperator**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### isTokenAdmin

▸ **isTokenAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### isUserAdmin

▸ **isUserAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### isVerifier

▸ **isVerifier**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

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

### mainAcceptGovernance

▸ **mainAcceptGovernance**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### mainCancelNomination

▸ **mainCancelNomination**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### mainIsGovernor

▸ **mainIsGovernor**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### mainNominateNewGovernor

▸ **mainNominateNewGovernor**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### mainRemoveGovernor

▸ **mainRemoveGovernor**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### onERC721Received

▸ **onERC721Received**(`arg0`, `arg1`, `arg2`, `arg3`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `arg2` | `BigNumberish` |
| `arg3` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

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

### registerAndDepositERC20

▸ **registerAndDepositERC20**(`ethKey`, `starkKey`, `signature`, `assetType`, `vaultId`, `quantizedAmount`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `quantizedAmount` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAndDepositEth

▸ **registerAndDepositEth**(`ethKey`, `starkKey`, `signature`, `assetType`, `vaultId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ethKey` | `string` |
| `starkKey` | `BigNumberish` |
| `signature` | `BytesLike` |
| `assetType` | `BigNumberish` |
| `vaultId` | `BigNumberish` |
| `overrides?` | `PayableOverrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerAvailabilityVerifier

▸ **registerAvailabilityVerifier**(`arg0`, `arg1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerOperator

▸ **registerOperator**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerToken

▸ **registerToken**(`arg0`, `arg1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `arg1` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerTokenAdmin

▸ **registerTokenAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerUser

▸ **registerUser**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `BigNumberish` |
| `arg2` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerUserAdmin

▸ **registerUserAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### registerVerifier

▸ **registerVerifier**(`arg0`, `arg1`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `arg1` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### removeAllListeners

▸ **removeAllListeners**<`TEvent`\>(`eventFilter`): [`Core`](contracts.Core.md)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TEvent` | extends `TypedEvent`<`any`, `any`, `TEvent`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFilter` | `TypedEventFilter`<`TEvent`\> |

#### Returns

[`Core`](contracts.Core.md)

#### Overrides

BaseContract.removeAllListeners

▸ **removeAllListeners**(`eventName?`): [`Core`](contracts.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName?` | `string` |

#### Returns

[`Core`](contracts.Core.md)

#### Overrides

BaseContract.removeAllListeners

___

### removeAvailabilityVerifier

▸ **removeAvailabilityVerifier**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### removeVerifier

▸ **removeVerifier**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### unFreeze

▸ **unFreeze**(`overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### unregisterOperator

▸ **unregisterOperator**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### unregisterTokenAdmin

▸ **unregisterTokenAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### unregisterUserAdmin

▸ **unregisterUserAdmin**(`arg0`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### updateState

▸ **updateState**(`publicInput`, `applicationData`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicInput` | `BigNumberish`[] |
| `applicationData` | `BigNumberish`[] |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### withdraw

▸ **withdraw**(`ownerKey`, `assetType`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### withdrawAndMint

▸ **withdrawAndMint**(`ownerKey`, `assetType`, `mintingBlob`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `mintingBlob` | `BytesLike` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### withdrawNft

▸ **withdrawNft**(`ownerKey`, `assetType`, `tokenId`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `ownerKey` | `BigNumberish` |
| `assetType` | `BigNumberish` |
| `tokenId` | `BigNumberish` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### withdrawNftTo

▸ **withdrawNftTo**(`arg0`, `arg1`, `arg2`, `arg3`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `arg1` | `BigNumberish` |
| `arg2` | `BigNumberish` |
| `arg3` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>

___

### withdrawTo

▸ **withdrawTo**(`arg0`, `arg1`, `arg2`, `overrides?`): `Promise`<`ContractTransaction`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg0` | `BigNumberish` |
| `arg1` | `BigNumberish` |
| `arg2` | `string` |
| `overrides?` | `Overrides` & { `from?`: `string` \| `Promise`<`string`\>  } |

#### Returns

`Promise`<`ContractTransaction`\>
