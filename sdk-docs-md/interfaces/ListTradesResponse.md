[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListTradesResponse

# Interface: ListTradesResponse

**`export`** 

**`interface`** ListTradesResponse

## Table of contents

### Properties

- [cursor](ListTradesResponse.md#cursor)
- [remaining](ListTradesResponse.md#remaining)
- [result](ListTradesResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListTradesResponse

#### Defined in

[src/api/models/list-trades-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-trades-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListTradesResponse

#### Defined in

[src/api/models/list-trades-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-trades-response.ts#L35)

___

### result

• `Optional` **result**: [`Trade`](Trade.md)[]

Trades matching query parameters

**`memberof`** ListTradesResponse

#### Defined in

[src/api/models/list-trades-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-trades-response.ts#L41)
