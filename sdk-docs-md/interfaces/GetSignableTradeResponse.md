[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableTradeResponse

# Interface: GetSignableTradeResponse

**`export`** 

**`interface`** GetSignableTradeResponse

## Table of contents

### Properties

- [amount\_buy](GetSignableTradeResponse.md#amount_buy)
- [amount\_sell](GetSignableTradeResponse.md#amount_sell)
- [asset\_id\_buy](GetSignableTradeResponse.md#asset_id_buy)
- [asset\_id\_sell](GetSignableTradeResponse.md#asset_id_sell)
- [expiration\_timestamp](GetSignableTradeResponse.md#expiration_timestamp)
- [fee\_info](GetSignableTradeResponse.md#fee_info)
- [nonce](GetSignableTradeResponse.md#nonce)
- [payload\_hash](GetSignableTradeResponse.md#payload_hash)
- [signable\_message](GetSignableTradeResponse.md#signable_message)
- [stark\_key](GetSignableTradeResponse.md#stark_key)
- [vault\_id\_buy](GetSignableTradeResponse.md#vault_id_buy)
- [vault\_id\_sell](GetSignableTradeResponse.md#vault_id_sell)

## Properties

### amount\_buy

• `Optional` **amount\_buy**: `string`

Amount to buy

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L29)

___

### amount\_sell

• `Optional` **amount\_sell**: `string`

Amount to sell

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L35)

___

### asset\_id\_buy

• `Optional` **asset\_id\_buy**: `string`

ID of the asset to buy

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L41)

___

### asset\_id\_sell

• `Optional` **asset\_id\_sell**: `string`

ID of the asset to sell

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L47)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

Expiration timestamp for this order

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L53)

___

### fee\_info

• `Optional` **fee\_info**: [`FeeInfo`](FeeInfo.md)

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L59)

___

### nonce

• `Optional` **nonce**: `number`

Nonce of the order

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L65)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Payload Hash

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:71](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L71)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign with L1 wallet to confirm trade request

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:77](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L77)

___

### stark\_key

• `Optional` **stark\_key**: `string`

Public stark key of the created user

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:83](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L83)

___

### vault\_id\_buy

• `Optional` **vault\_id\_buy**: `number`

ID of the vault into which the bought asset will be placed

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:89](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L89)

___

### vault\_id\_sell

• `Optional` **vault\_id\_sell**: `number`

ID of the vault to sell from

**`memberof`** GetSignableTradeResponse

#### Defined in

[src/api/models/get-signable-trade-response.ts:95](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-trade-response.ts#L95)
