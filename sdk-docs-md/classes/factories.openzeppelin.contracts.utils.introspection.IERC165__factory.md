[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / [factories](../modules/factories.md) / [openzeppelin](../modules/factories.openzeppelin.md) / [contracts](../modules/factories.openzeppelin.contracts.md) / [utils](../modules/factories.openzeppelin.contracts.utils.md) / [introspection](../modules/factories.openzeppelin.contracts.utils.introspection.md) / IERC165\_\_factory

# Class: IERC165\_\_factory

[utils](../modules/factories.openzeppelin.contracts.utils.md).[introspection](../modules/factories.openzeppelin.contracts.utils.introspection.md).IERC165__factory

## Table of contents

### Constructors

- [constructor](factories.openzeppelin.contracts.utils.introspection.IERC165__factory.md#constructor)

### Properties

- [abi](factories.openzeppelin.contracts.utils.introspection.IERC165__factory.md#abi)

### Methods

- [connect](factories.openzeppelin.contracts.utils.introspection.IERC165__factory.md#connect)
- [createInterface](factories.openzeppelin.contracts.utils.introspection.IERC165__factory.md#createinterface)

## Constructors

### constructor

• **new IERC165__factory**()

## Properties

### abi

▪ `Static` `Readonly` **abi**: { `inputs`: { `internalType`: `string` = "bytes4"; `name`: `string` = "interfaceId"; `type`: `string` = "bytes4" }[] ; `name`: `string` = "supportsInterface"; `outputs`: { `internalType`: `string` = "bool"; `name`: `string` = ""; `type`: `string` = "bool" }[] ; `stateMutability`: `string` = "view"; `type`: `string` = "function" }[] = `_abi`

#### Defined in

[src/contracts/factories/@openzeppelin/contracts/utils/introspection/IERC165__factory.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/contracts/factories/@openzeppelin/contracts/utils/introspection/IERC165__factory.ts#L35)

## Methods

### connect

▸ `Static` **connect**(`address`, `signerOrProvider`): [`IERC165`](../interfaces/openzeppelin.contracts.utils.introspection.IERC165.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |
| `signerOrProvider` | `Signer` \| `Provider` |

#### Returns

[`IERC165`](../interfaces/openzeppelin.contracts.utils.introspection.IERC165.md)

___

### createInterface

▸ `Static` **createInterface**(): `IERC165Interface`

#### Returns

`IERC165Interface`
