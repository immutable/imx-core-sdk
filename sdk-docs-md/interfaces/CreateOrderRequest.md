[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CreateOrderRequest

# Interface: CreateOrderRequest

**`export`** 

**`interface`** CreateOrderRequest

## Table of contents

### Properties

- [amount\_buy](CreateOrderRequest.md#amount_buy)
- [amount\_sell](CreateOrderRequest.md#amount_sell)
- [asset\_id\_buy](CreateOrderRequest.md#asset_id_buy)
- [asset\_id\_sell](CreateOrderRequest.md#asset_id_sell)
- [expiration\_timestamp](CreateOrderRequest.md#expiration_timestamp)
- [fees](CreateOrderRequest.md#fees)
- [include\_fees](CreateOrderRequest.md#include_fees)
- [nonce](CreateOrderRequest.md#nonce)
- [stark\_key](CreateOrderRequest.md#stark_key)
- [stark\_signature](CreateOrderRequest.md#stark_signature)
- [vault\_id\_buy](CreateOrderRequest.md#vault_id_buy)
- [vault\_id\_sell](CreateOrderRequest.md#vault_id_sell)

## Properties

### amount\_buy

• **amount\_buy**: `string`

Amount to buy

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L29)

___

### amount\_sell

• **amount\_sell**: `string`

Amount to sell

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L35)

___

### asset\_id\_buy

• **asset\_id\_buy**: `string`

ID of the asset to buy

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L41)

___

### asset\_id\_sell

• **asset\_id\_sell**: `string`

ID of the asset to sell

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L47)

___

### expiration\_timestamp

• **expiration\_timestamp**: `number`

Expiration timestamp for this order

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L53)

___

### fees

• `Optional` **fees**: [`FeeEntry`](FeeEntry.md)[]

Fee information

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L59)

___

### include\_fees

• `Optional` **include\_fees**: `boolean`

Whether to include fees in order

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L65)

___

### nonce

• **nonce**: `number`

Nonce of the order

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:71](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L71)

___

### stark\_key

• **stark\_key**: `string`

Public stark key of the user creating order

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:77](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L77)

___

### stark\_signature

• **stark\_signature**: `string`

Payload signature

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:83](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L83)

___

### vault\_id\_buy

• **vault\_id\_buy**: `number`

ID of the vault into which the bought asset will be placed

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:89](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L89)

___

### vault\_id\_sell

• **vault\_id\_sell**: `number`

ID of the vault to sell from

**`memberof`** CreateOrderRequest

#### Defined in

[src/api/models/create-order-request.ts:95](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-order-request.ts#L95)
