[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableOrderRequest

# Interface: GetSignableOrderRequest

**`export`** 

**`interface`** GetSignableOrderRequest

## Table of contents

### Properties

- [amount\_buy](GetSignableOrderRequest.md#amount_buy)
- [amount\_sell](GetSignableOrderRequest.md#amount_sell)
- [expiration\_timestamp](GetSignableOrderRequest.md#expiration_timestamp)
- [fees](GetSignableOrderRequest.md#fees)
- [token\_buy](GetSignableOrderRequest.md#token_buy)
- [token\_sell](GetSignableOrderRequest.md#token_sell)
- [user](GetSignableOrderRequest.md#user)

## Properties

### amount\_buy

• **amount\_buy**: `string`

Amount to buy

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:30](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L30)

___

### amount\_sell

• **amount\_sell**: `string`

Amount to sell

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:36](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L36)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:42](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L42)

___

### fees

• `Optional` **fees**: [`FeeEntry`](FeeEntry.md)[]

Inclusion of either maker or taker fees

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:48](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L48)

___

### token\_buy

• **token\_buy**: [`SignableToken`](SignableToken.md)

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:54](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L54)

___

### token\_sell

• **token\_sell**: [`SignableToken`](SignableToken.md)

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L60)

___

### user

• **user**: `string`

Ethereum address of the submitting user

**`memberof`** GetSignableOrderRequest

#### Defined in

[src/api/models/get-signable-order-request.ts:66](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-request.ts#L66)
