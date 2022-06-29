[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CreateTradeRequestV1

# Interface: CreateTradeRequestV1

**`export`** 

**`interface`** CreateTradeRequestV1

## Table of contents

### Properties

- [amount\_buy](CreateTradeRequestV1.md#amount_buy)
- [amount\_sell](CreateTradeRequestV1.md#amount_sell)
- [asset\_id\_buy](CreateTradeRequestV1.md#asset_id_buy)
- [asset\_id\_sell](CreateTradeRequestV1.md#asset_id_sell)
- [expiration\_timestamp](CreateTradeRequestV1.md#expiration_timestamp)
- [fee\_info](CreateTradeRequestV1.md#fee_info)
- [fees](CreateTradeRequestV1.md#fees)
- [include\_fees](CreateTradeRequestV1.md#include_fees)
- [nonce](CreateTradeRequestV1.md#nonce)
- [order\_id](CreateTradeRequestV1.md#order_id)
- [stark\_key](CreateTradeRequestV1.md#stark_key)
- [stark\_signature](CreateTradeRequestV1.md#stark_signature)
- [vault\_id\_buy](CreateTradeRequestV1.md#vault_id_buy)
- [vault\_id\_sell](CreateTradeRequestV1.md#vault_id_sell)

## Properties

### amount\_buy

• **amount\_buy**: `string`

Amount to buy

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:30](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L30)

___

### amount\_sell

• **amount\_sell**: `string`

Amount to sell

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:36](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L36)

___

### asset\_id\_buy

• **asset\_id\_buy**: `string`

ID of the asset to buy

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:42](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L42)

___

### asset\_id\_sell

• **asset\_id\_sell**: `string`

ID of the asset to sell

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:48](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L48)

___

### expiration\_timestamp

• **expiration\_timestamp**: `number`

Expiration timestamp for this trade

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:54](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L54)

___

### fee\_info

• `Optional` **fee\_info**: [`FeeInfo`](FeeInfo.md)

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L60)

___

### fees

• `Optional` **fees**: [`FeeEntry`](FeeEntry.md)[]

Fee information

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:66](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L66)

___

### include\_fees

• `Optional` **include\_fees**: `boolean`

Whether to include fees in trade

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:72](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L72)

___

### nonce

• **nonce**: `number`

Nonce of the trade

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:78](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L78)

___

### order\_id

• **order\_id**: `number`

ID of the order

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:84](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L84)

___

### stark\_key

• **stark\_key**: `string`

Public stark key of the user creating trade

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:90](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L90)

___

### stark\_signature

• **stark\_signature**: `string`

Payload signature

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:96](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L96)

___

### vault\_id\_buy

• **vault\_id\_buy**: `number`

ID of the vault into which the traded asset will be placed

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:102](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L102)

___

### vault\_id\_sell

• **vault\_id\_sell**: `number`

ID of the vault to sell from

**`memberof`** CreateTradeRequestV1

#### Defined in

[src/api/models/create-trade-request-v1.ts:108](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-trade-request-v1.ts#L108)
