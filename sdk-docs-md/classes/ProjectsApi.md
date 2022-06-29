[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / ProjectsApi

# Class: ProjectsApi

ProjectsApi - object-oriented interface

**`export`** 

## Hierarchy

- `BaseAPI`

  ↳ **`ProjectsApi`**

## Table of contents

### Constructors

- [constructor](ProjectsApi.md#constructor)

### Properties

- [axios](ProjectsApi.md#axios)
- [basePath](ProjectsApi.md#basepath)
- [configuration](ProjectsApi.md#configuration)

### Methods

- [createProject](ProjectsApi.md#createproject)
- [getProject](ProjectsApi.md#getproject)
- [getProjects](ProjectsApi.md#getprojects)

## Constructors

### constructor

• **new ProjectsApi**(`configuration?`, `basePath?`, `axios?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `configuration?` | [`Configuration`](Configuration.md) | `undefined` |
| `basePath` | `string` | `BASE_PATH` |
| `axios` | `AxiosInstance` | `globalAxios` |

#### Inherited from

BaseAPI.constructor

## Properties

### axios

• `Protected` **axios**: `AxiosInstance` = `globalAxios`

#### Inherited from

BaseAPI.axios

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### basePath

• `Protected` **basePath**: `string` = `BASE_PATH`

#### Inherited from

BaseAPI.basePath

#### Defined in

[src/api/base.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L52)

___

### configuration

• `Protected` **configuration**: `undefined` \| [`Configuration`](Configuration.md)

#### Inherited from

BaseAPI.configuration

#### Defined in

[src/api/base.ts:50](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/base.ts#L50)

## Methods

### createProject

▸ **createProject**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`CreateProjectResponse`](../interfaces/CreateProjectResponse.md), `any`\>\>

Create a project

**`summary`** Create a project

**`throws`** 

**`memberof`** ProjectsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ProjectsApiCreateProjectRequest`](../interfaces/ProjectsApiCreateProjectRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`CreateProjectResponse`](../interfaces/CreateProjectResponse.md), `any`\>\>

___

### getProject

▸ **getProject**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`Project`](../interfaces/Project.md), `any`\>\>

Get a project

**`summary`** Get a project

**`throws`** 

**`memberof`** ProjectsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ProjectsApiGetProjectRequest`](../interfaces/ProjectsApiGetProjectRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`Project`](../interfaces/Project.md), `any`\>\>

___

### getProjects

▸ **getProjects**(`requestParameters`, `options?`): `Promise`<`AxiosResponse`<[`GetProjectsResponse`](../interfaces/GetProjectsResponse.md), `any`\>\>

Get projects

**`summary`** Get projects

**`throws`** 

**`memberof`** ProjectsApi

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `requestParameters` | [`ProjectsApiGetProjectsRequest`](../interfaces/ProjectsApiGetProjectsRequest.md) | Request parameters. |
| `options?` | `AxiosRequestConfig`<`any`\> | Override http request option. |

#### Returns

`Promise`<`AxiosResponse`<[`GetProjectsResponse`](../interfaces/GetProjectsResponse.md), `any`\>\>
