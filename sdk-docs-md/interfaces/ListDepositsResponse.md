[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListDepositsResponse

# Interface: ListDepositsResponse

**`export`** 

**`interface`** ListDepositsResponse

## Table of contents

### Properties

- [cursor](ListDepositsResponse.md#cursor)
- [remaining](ListDepositsResponse.md#remaining)
- [result](ListDepositsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListDepositsResponse

#### Defined in

[src/api/models/list-deposits-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-deposits-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListDepositsResponse

#### Defined in

[src/api/models/list-deposits-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-deposits-response.ts#L35)

___

### result

• `Optional` **result**: [`Deposit`](Deposit.md)[]

Deposits matching query parameters

**`memberof`** ListDepositsResponse

#### Defined in

[src/api/models/list-deposits-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-deposits-response.ts#L41)
