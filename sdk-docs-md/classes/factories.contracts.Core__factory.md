[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [contracts](../modules/factories.contracts.md) / Core\_\_factory

# Class: Core\_\_factory

[factories](../modules/factories.md).[contracts](../modules/factories.contracts.md).Core__factory

## Table of contents

### Constructors

- [constructor](factories.contracts.Core__factory.md#constructor)

### Properties

- [abi](factories.contracts.Core__factory.md#abi)

### Methods

- [connect](factories.contracts.Core__factory.md#connect)
- [createInterface](factories.contracts.Core__factory.md#createinterface)

## Constructors

### constructor

• **new Core__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = false; `internalType`: `string` = "address"; `name`: `string` = "depositorEthKey"; `type`: `string` = "address" }[] ; `name`: `string` = "LogDeposit"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "assetType"; `type`: `string` = "uint256" }[] ; `name`: `string` = "getAssetInfo"; `outputs`: { `internalType`: `string` = "bytes"; `name`: `string` = "assetInfo"; `type`: `string` = "bytes" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[src/contracts/factories/contracts/Core__factory.ts:1601](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/factories/contracts/Core__factory.ts#L1601)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`Core`](../interfaces/contracts.Core.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`Core`](../interfaces/contracts.Core.md)

___

### createInterface

▸ `Static` **createInterface**(): `CoreInterface`

#### Returns

`CoreInterface`
