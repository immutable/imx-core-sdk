[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TokenData

# Interface: TokenData

**`export`** 

**`interface`** TokenData

## Table of contents

### Properties

- [decimals](TokenData.md#decimals)
- [id](TokenData.md#id)
- [properties](TokenData.md#properties)
- [quantity](TokenData.md#quantity)
- [quantity\_with\_fees](TokenData.md#quantity_with_fees)
- [token\_address](TokenData.md#token_address)
- [token\_id](TokenData.md#token_id)

## Properties

### decimals

• `Optional` **decimals**: `number`

Number of decimals supported by this asset

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L29)

___

### id

• `Optional` **id**: `string`

[DEPRECATED] Internal Immutable X Token ID

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L35)

___

### properties

• `Optional` **properties**: [`AssetProperties`](AssetProperties.md)

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L41)

___

### quantity

• `Optional` **quantity**: `string`

Quantity of this asset

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L47)

___

### quantity\_with\_fees

• `Optional` **quantity\_with\_fees**: `string`

Quantity of this asset with the sum of all fees applied to the asset

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L53)

___

### token\_address

• `Optional` **token\_address**: `string`

Address of ERC721/ERC20 contract

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L59)

___

### token\_id

• `Optional` **token\_id**: `string`

ERC721 Token ID

**`memberof`** TokenData

#### Defined in

[src/api/models/token-data.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/token-data.ts#L65)
