[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MintRequest

# Interface: MintRequest

**`export`** 

**`interface`** MintRequest

## Table of contents

### Properties

- [auth\_signature](MintRequest.md#auth_signature)
- [contract\_address](MintRequest.md#contract_address)
- [royalties](MintRequest.md#royalties)
- [users](MintRequest.md#users)

## Properties

### auth\_signature

• **auth\_signature**: `string`

Signature from authorised minter

**`memberof`** MintRequest

#### Defined in

[src/api/models/mint-request.ts:30](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request.ts#L30)

___

### contract\_address

• **contract\_address**: `string`

minting contract

**`memberof`** MintRequest

#### Defined in

[src/api/models/mint-request.ts:36](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request.ts#L36)

___

### royalties

• `Optional` **royalties**: [`MintFee`](MintFee.md)[]

Global contract-level royalty fees

**`memberof`** MintRequest

#### Defined in

[src/api/models/mint-request.ts:42](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request.ts#L42)

___

### users

• **users**: [`MintUser`](MintUser.md)[]

Users to mint to

**`memberof`** MintRequest

#### Defined in

[src/api/models/mint-request.ts:48](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request.ts#L48)
