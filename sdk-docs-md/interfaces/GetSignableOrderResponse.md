[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableOrderResponse

# Interface: GetSignableOrderResponse

**`export`** 

**`interface`** GetSignableOrderResponse

## Table of contents

### Properties

- [amount\_buy](GetSignableOrderResponse.md#amount_buy)
- [amount\_sell](GetSignableOrderResponse.md#amount_sell)
- [asset\_id\_buy](GetSignableOrderResponse.md#asset_id_buy)
- [asset\_id\_sell](GetSignableOrderResponse.md#asset_id_sell)
- [expiration\_timestamp](GetSignableOrderResponse.md#expiration_timestamp)
- [fee\_info](GetSignableOrderResponse.md#fee_info)
- [nonce](GetSignableOrderResponse.md#nonce)
- [payload\_hash](GetSignableOrderResponse.md#payload_hash)
- [signable\_message](GetSignableOrderResponse.md#signable_message)
- [stark\_key](GetSignableOrderResponse.md#stark_key)
- [vault\_id\_buy](GetSignableOrderResponse.md#vault_id_buy)
- [vault\_id\_sell](GetSignableOrderResponse.md#vault_id_sell)

## Properties

### amount\_buy

• `Optional` **amount\_buy**: `string`

Amount to buy

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L29)

___

### amount\_sell

• `Optional` **amount\_sell**: `string`

Amount to sell

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L35)

___

### asset\_id\_buy

• `Optional` **asset\_id\_buy**: `string`

ID of the asset to buy

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L41)

___

### asset\_id\_sell

• `Optional` **asset\_id\_sell**: `string`

ID of the asset to sell

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L47)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

Expiration timestamp for this order

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L53)

___

### fee\_info

• `Optional` **fee\_info**: [`FeeInfo`](FeeInfo.md)

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L59)

___

### nonce

• `Optional` **nonce**: `number`

Nonce of the order

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L65)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Hash of the payload to be signed for signable order

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:71](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L71)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign with L1 wallet to confirm order request

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:77](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L77)

___

### stark\_key

• `Optional` **stark\_key**: `string`

Public stark key of the created user

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:83](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L83)

___

### vault\_id\_buy

• `Optional` **vault\_id\_buy**: `number`

ID of the vault into which the bought asset will be placed

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:89](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L89)

___

### vault\_id\_sell

• `Optional` **vault\_id\_sell**: `number`

ID of the vault to sell from

**`memberof`** GetSignableOrderResponse

#### Defined in

[src/api/models/get-signable-order-response.ts:95](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-order-response.ts#L95)
