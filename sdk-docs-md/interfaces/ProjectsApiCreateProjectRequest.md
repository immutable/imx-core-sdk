[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ProjectsApiCreateProjectRequest

# Interface: ProjectsApiCreateProjectRequest

Request parameters for createProject operation in ProjectsApi.

**`export`** 

**`interface`** ProjectsApiCreateProjectRequest

## Table of contents

### Properties

- [createProjectRequest](ProjectsApiCreateProjectRequest.md#createprojectrequest)
- [iMXSignature](ProjectsApiCreateProjectRequest.md#imxsignature)
- [iMXTimestamp](ProjectsApiCreateProjectRequest.md#imxtimestamp)

## Properties

### createProjectRequest

• `Readonly` **createProjectRequest**: [`CreateProjectRequest`](CreateProjectRequest.md)

create a project

**`memberof`** ProjectsApiCreateProject

#### Defined in

[src/api/domain/projects-api.ts:328](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L328)

___

### iMXSignature

• `Readonly` **iMXSignature**: `string`

String created by signing wallet address and timestamp

**`memberof`** ProjectsApiCreateProject

#### Defined in

[src/api/domain/projects-api.ts:314](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L314)

___

### iMXTimestamp

• `Readonly` **iMXTimestamp**: `string`

Unix Epoc timestamp

**`memberof`** ProjectsApiCreateProject

#### Defined in

[src/api/domain/projects-api.ts:321](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/projects-api.ts#L321)
