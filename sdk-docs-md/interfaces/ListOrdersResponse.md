[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListOrdersResponse

# Interface: ListOrdersResponse

**`export`** 

**`interface`** ListOrdersResponse

## Table of contents

### Properties

- [cursor](ListOrdersResponse.md#cursor)
- [remaining](ListOrdersResponse.md#remaining)
- [result](ListOrdersResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListOrdersResponse

#### Defined in

[src/api/models/list-orders-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-orders-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListOrdersResponse

#### Defined in

[src/api/models/list-orders-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-orders-response.ts#L35)

___

### result

• `Optional` **result**: [`Order`](Order.md)[]

Orders matching query parameters

**`memberof`** ListOrdersResponse

#### Defined in

[src/api/models/list-orders-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-orders-response.ts#L41)
