[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [token](../modules/factories.openzeppelin.contracts.token.md) / [erc20](../modules/factories.openzeppelin.contracts.token.erc20.md) / IERC20\_\_factory

# Class: IERC20\_\_factory

[token](../modules/factories.openzeppelin.contracts.token.md).[erc20](../modules/factories.openzeppelin.contracts.token.erc20.md).IERC20__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.token.erc20.IERC20__factory.md#createinterface)

## Constructors

### constructor

• **new IERC20__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "allowance"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = ""; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[src/contracts/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts:199](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/factories/@openzeppelin/contracts/token/ERC20/IERC20__factory.ts#L199)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC20`](../interfaces/openzeppelin.contracts.token.erc20.IERC20.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC20`](../interfaces/openzeppelin.contracts.token.erc20.IERC20.md)

___

### createInterface

▸ `Static` **createInterface**(): `IERC20Interface`

#### Returns

`IERC20Interface`
