[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListCollectionsResponse

# Interface: ListCollectionsResponse

**`export`** 

**`interface`** ListCollectionsResponse

## Table of contents

### Properties

- [cursor](ListCollectionsResponse.md#cursor)
- [remaining](ListCollectionsResponse.md#remaining)
- [result](ListCollectionsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListCollectionsResponse

#### Defined in

[src/api/models/list-collections-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-collections-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListCollectionsResponse

#### Defined in

[src/api/models/list-collections-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-collections-response.ts#L35)

___

### result

• `Optional` **result**: [`Collection`](Collection.md)[]

Collections matching query parameters

**`memberof`** ListCollectionsResponse

#### Defined in

[src/api/models/list-collections-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-collections-response.ts#L41)
