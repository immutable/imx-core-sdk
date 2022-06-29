[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ListAssetsResponse

# Interface: ListAssetsResponse

**`export`** 

**`interface`** ListAssetsResponse

## Table of contents

### Properties

- [cursor](ListAssetsResponse.md#cursor)
- [remaining](ListAssetsResponse.md#remaining)
- [result](ListAssetsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** ListAssetsResponse

#### Defined in

[src/api/models/list-assets-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-assets-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** ListAssetsResponse

#### Defined in

[src/api/models/list-assets-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-assets-response.ts#L35)

___

### result

• `Optional` **result**: [`Asset`](Asset.md)[]

Assets matching query parameters

**`memberof`** ListAssetsResponse

#### Defined in

[src/api/models/list-assets-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/list-assets-response.ts#L41)
