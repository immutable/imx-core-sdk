[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetProjectsResponse

# Interface: GetProjectsResponse

**`export`** 

**`interface`** GetProjectsResponse

## Table of contents

### Properties

- [cursor](GetProjectsResponse.md#cursor)
- [remaining](GetProjectsResponse.md#remaining)
- [result](GetProjectsResponse.md#result)

## Properties

### cursor

• `Optional` **cursor**: `string`

Generated cursor returned by previous query

**`memberof`** GetProjectsResponse

#### Defined in

[src/api/models/get-projects-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-projects-response.ts#L29)

___

### remaining

• `Optional` **remaining**: `number`

Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results

**`memberof`** GetProjectsResponse

#### Defined in

[src/api/models/get-projects-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-projects-response.ts#L35)

___

### result

• `Optional` **result**: [`Project`](Project.md)[]

Projects matching query parameters

**`memberof`** GetProjectsResponse

#### Defined in

[src/api/models/get-projects-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-projects-response.ts#L41)
