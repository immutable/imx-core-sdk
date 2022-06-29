[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Withdrawal

# Interface: Withdrawal

**`export`** 

**`interface`** Withdrawal

## Table of contents

### Properties

- [rollup\_status](Withdrawal.md#rollup_status)
- [sender](Withdrawal.md#sender)
- [status](Withdrawal.md#status)
- [timestamp](Withdrawal.md#timestamp)
- [token](Withdrawal.md#token)
- [transaction\_id](Withdrawal.md#transaction_id)
- [withdrawn\_to\_wallet](Withdrawal.md#withdrawn_to_wallet)

## Properties

### rollup\_status

• `Optional` **rollup\_status**: `string`

Status of the on-chain batch confirmation for this withdrawal

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L29)

___

### sender

• `Optional` **sender**: `string`

Ethereum address of the user who requested this withdrawal

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L35)

___

### status

• `Optional` **status**: `string`

Status of this withdrawal

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L41)

___

### timestamp

• `Optional` **timestamp**: `string`

Time when this withdrawal was initiated

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L47)

___

### token

• `Optional` **token**: [`Token`](Token.md)

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L53)

___

### transaction\_id

• `Optional` **transaction\_id**: `number`

Sequential ID of this transaction

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L59)

___

### withdrawn\_to\_wallet

• `Optional` **withdrawn\_to\_wallet**: `boolean`

Withdrawal has been transferred to user\'s Layer 1 wallet

**`memberof`** Withdrawal

#### Defined in

[src/api/models/withdrawal.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/withdrawal.ts#L65)
