[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListWithdrawalsResponse

# Interface: ListWithdrawalsResponse

**`export`** 

**`interface`** ListWithdrawalsResponse

## Table of contents

### Properties

- [cursor](ListWithdrawalsResponse.md#cursor)
- [remaining](ListWithdrawalsResponse.md#remaining)
- [result](ListWithdrawalsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListWithdrawalsResponse

#### Defined in

[src/api/models/list-withdrawals-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-withdrawals-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListWithdrawalsResponse

#### Defined in

[src/api/models/list-withdrawals-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-withdrawals-response.ts#L35)

___

### result

• `Optional` **result**: [`Withdrawal`](Withdrawal.md)[]

Withdrawals matching query parameters

**`memberof`** ListWithdrawalsResponse

#### Defined in

[src/api/models/list-withdrawals-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-withdrawals-response.ts#L41)
