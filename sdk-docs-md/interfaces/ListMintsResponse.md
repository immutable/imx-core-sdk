[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListMintsResponse

# Interface: ListMintsResponse

**`export`** 

**`interface`** ListMintsResponse

## Table of contents

### Properties

- [cursor](ListMintsResponse.md#cursor)
- [remaining](ListMintsResponse.md#remaining)
- [result](ListMintsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListMintsResponse

#### Defined in

[src/api/models/list-mints-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-mints-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListMintsResponse

#### Defined in

[src/api/models/list-mints-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-mints-response.ts#L35)

___

### result

• `Optional` **result**: [`Mint`](Mint.md)[]

Mints matching query parameters

**`memberof`** ListMintsResponse

#### Defined in

[src/api/models/list-mints-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-mints-response.ts#L41)
