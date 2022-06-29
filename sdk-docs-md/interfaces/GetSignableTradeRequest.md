[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableTradeRequest

# Interface: GetSignableTradeRequest

**`export`** 

**`interface`** GetSignableTradeRequest

## Table of contents

### Properties

- [amount\_buy](GetSignableTradeRequest.md#amount_buy)
- [amount\_sell](GetSignableTradeRequest.md#amount_sell)
- [expiration\_timestamp](GetSignableTradeRequest.md#expiration_timestamp)
- [fees](GetSignableTradeRequest.md#fees)
- [token\_buy](GetSignableTradeRequest.md#token_buy)
- [token\_sell](GetSignableTradeRequest.md#token_sell)
- [user](GetSignableTradeRequest.md#user)

## Properties

### amount\_buy

• **amount\_buy**: `string`

Amount to buy

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:30](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L30)

___

### amount\_sell

• **amount\_sell**: `string`

Amount to sell

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:36](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L36)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:42](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L42)

___

### fees

• `Optional` **fees**: [`FeeEntry`](FeeEntry.md)[]

Inclusion of either maker or taker fees

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:48](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L48)

___

### token\_buy

• **token\_buy**: [`SignableToken`](SignableToken.md)

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:54](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L54)

___

### token\_sell

• **token\_sell**: [`SignableToken`](SignableToken.md)

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L60)

___

### user

• **user**: `string`

Ethereum address of the submitting user

**`memberof`** GetSignableTradeRequest

#### Defined in

[src/api/models/get-signable-trade-request.ts:66](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-request.ts#L66)
