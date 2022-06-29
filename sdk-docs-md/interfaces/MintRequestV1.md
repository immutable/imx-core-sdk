[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / MintRequestV1

# Interface: MintRequestV1

**`export`** 

**`interface`** MintRequestV1

## Table of contents

### Properties

- [auth\_signature](MintRequestV1.md#auth_signature)
- [nonce](MintRequestV1.md#nonce)
- [tokens](MintRequestV1.md#tokens)
- [user](MintRequestV1.md#user)

## Properties

### auth\_signature

• **auth\_signature**: `string`

Signature from authorised minter

**`memberof`** MintRequestV1

#### Defined in

[src/api/models/mint-request-v1.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request-v1.ts#L29)

___

### nonce

• `Optional` **nonce**: `number`

Random nonce - must be unique

**`memberof`** MintRequestV1

#### Defined in

[src/api/models/mint-request-v1.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request-v1.ts#L35)

___

### tokens

• **tokens**: [`MintTokens`](MintTokens.md)[]

Tokens to mint

**`memberof`** MintRequestV1

#### Defined in

[src/api/models/mint-request-v1.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request-v1.ts#L41)

___

### user

• **user**: `string`

Recipient of the assets

**`memberof`** MintRequestV1

#### Defined in

[src/api/models/mint-request-v1.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/mint-request-v1.ts#L47)
