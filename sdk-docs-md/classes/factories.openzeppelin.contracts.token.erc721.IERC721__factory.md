[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [token](../modules/factories.openzeppelin.contracts.token.md) / [erc721](../modules/factories.openzeppelin.contracts.token.erc721.md) / IERC721\_\_factory

# Class: IERC721\_\_factory

[token](../modules/factories.openzeppelin.contracts.token.md).[erc721](../modules/factories.openzeppelin.contracts.token.erc721.md).IERC721__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.token.erc721.IERC721__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.token.erc721.IERC721__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.token.erc721.IERC721__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.token.erc721.IERC721__factory.md#createinterface)

## Constructors

### constructor

• **new IERC721__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: ({ `anonymous`: `boolean` = false; `inputs`: { `indexed`: `boolean` = true; `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "Approval"; `outputs`: `undefined` ; `stateMutability`: `undefined` = "view"; `type`: `string` = "event" } \| { `anonymous`: `undefined` = false; `inputs`: { `internalType`: `string` = "address"; `name`: `string` = "owner"; `type`: `string` = "address" }[] ; `name`: `string` = "balanceOf"; `outputs`: { `internalType`: `string` = "uint256"; `name`: `string` = "balance"; `type`: `string` = "uint256" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" })[] = `_abi`

#### Defined in

[src/contracts/factories/@openzeppelin/contracts/token/ERC721/IERC721__factory.ts:301](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/factories/@openzeppelin/contracts/token/ERC721/IERC721__factory.ts#L301)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC721`](../interfaces/openzeppelin.contracts.token.erc721.IERC721.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC721`](../interfaces/openzeppelin.contracts.token.erc721.IERC721.md)

___

### createInterface

▸ `Static` **createInterface**(): `IERC721Interface`

#### Returns

`IERC721Interface`
