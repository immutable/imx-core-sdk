[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListTransfersResponse

# Interface: ListTransfersResponse

**`export`** 

**`interface`** ListTransfersResponse

## Table of contents

### Properties

- [cursor](ListTransfersResponse.md#cursor)
- [remaining](ListTransfersResponse.md#remaining)
- [result](ListTransfersResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListTransfersResponse

#### Defined in

[src/api/models/list-transfers-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-transfers-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListTransfersResponse

#### Defined in

[src/api/models/list-transfers-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-transfers-response.ts#L35)

___

### result

• `Optional` **result**: [`Transfer`](Transfer.md)[]

Transfers matching query parameters

**`memberof`** ListTransfersResponse

#### Defined in

[src/api/models/list-transfers-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-transfers-response.ts#L41)
