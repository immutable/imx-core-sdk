[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ProjectsApiGetProjectsRequest

# Interface: ProjectsApiGetProjectsRequest

Request parameters for getProjects operation in ProjectsApi.

**`export`** 

**`interface`** ProjectsApiGetProjectsRequest

## Table of contents

### Properties

- [cursor](ProjectsApiGetProjectsRequest.md#cursor)
- [direction](ProjectsApiGetProjectsRequest.md#direction)
- [iMXSignature](ProjectsApiGetProjectsRequest.md#imxsignature)
- [iMXTimestamp](ProjectsApiGetProjectsRequest.md#imxtimestamp)
- [orderBy](ProjectsApiGetProjectsRequest.md#orderby)
- [pageSize](ProjectsApiGetProjectsRequest.md#pagesize)

## Properties

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:391](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L391)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:405](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L405)

___

### iMXSignature

• `Readonly` **iMXSignature**: `string`

String created by signing wallet address and timestamp

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:370](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L370)

___

### iMXTimestamp

• `Readonly` **iMXTimestamp**: `string`

Unix Epoc timestamp

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:377](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L377)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:398](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L398)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** ProjectsApiGetProjects

#### Defined in

[src/api/domain/projects-api.ts:384](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L384)
