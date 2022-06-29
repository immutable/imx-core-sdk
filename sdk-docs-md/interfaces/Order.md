[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Order

# Interface: Order

**`export`** 

**`interface`** Order

## Table of contents

### Properties

- [amount\_sold](Order.md#amount_sold)
- [buy](Order.md#buy)
- [expiration\_timestamp](Order.md#expiration_timestamp)
- [fees](Order.md#fees)
- [order\_id](Order.md#order_id)
- [sell](Order.md#sell)
- [status](Order.md#status)
- [timestamp](Order.md#timestamp)
- [updated\_timestamp](Order.md#updated_timestamp)
- [user](Order.md#user)

## Properties

### amount\_sold

• `Optional` **amount\_sold**: `string`

Amount of the asset already sold by this order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:30](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L30)

___

### buy

• `Optional` **buy**: [`Token`](Token.md)

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:36](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L36)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `string`

Expiration timestamp of this order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:42](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L42)

___

### fees

• `Optional` **fees**: [`OrderFeeInfo`](OrderFeeInfo.md)[]

Fee information for the order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:48](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L48)

___

### order\_id

• `Optional` **order\_id**: `number`

ID of the order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:54](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L54)

___

### sell

• `Optional` **sell**: [`Token`](Token.md)

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:60](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L60)

___

### status

• `Optional` **status**: `string`

Status of the order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:66](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L66)

___

### timestamp

• `Optional` **timestamp**: `string`

Timestamp this order was created

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:72](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L72)

___

### updated\_timestamp

• `Optional` **updated\_timestamp**: `string`

Updated timestamp of this order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:78](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L78)

___

### user

• `Optional` **user**: `string`

Ethereum address of the user who submitted the order

**`memberof`** Order

#### Defined in

[src/api/models/order.ts:84](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/order.ts#L84)
