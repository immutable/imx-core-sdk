[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Asset

# Interface: Asset

**`export`** 

**`interface`** Asset

## Table of contents

### Properties

- [collection](Asset.md#collection)
- [created\_at](Asset.md#created_at)
- [description](Asset.md#description)
- [fees](Asset.md#fees)
- [id](Asset.md#id)
- [image\_url](Asset.md#image_url)
- [metadata](Asset.md#metadata)
- [name](Asset.md#name)
- [orders](Asset.md#orders)
- [status](Asset.md#status)
- [token\_address](Asset.md#token_address)
- [token\_id](Asset.md#token_id)
- [updated\_at](Asset.md#updated_at)
- [uri](Asset.md#uri)
- [user](Asset.md#user)

## Properties

### collection

• `Optional` **collection**: [`CollectionDetails`](CollectionDetails.md)

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:31](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L31)

___

### created\_at

• `Optional` **created\_at**: `string`

Timestamp of when the asset was created

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:37](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L37)

___

### description

• `Optional` **description**: `string`

Description of this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:43](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L43)

___

### fees

• `Optional` **fees**: [`Fee`](Fee.md)[]

Royalties to pay on this asset operations

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:49](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L49)

___

### id

• `Optional` **id**: `string`

[DEPRECATED] Internal Immutable X Token ID

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:55](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L55)

___

### image\_url

• `Optional` **image\_url**: `string`

URL of the image which should be used for this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:61](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L61)

___

### metadata

• `Optional` **metadata**: `number`[]

Metadata of this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:67](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L67)

___

### name

• `Optional` **name**: `string`

Name of this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:73](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L73)

___

### orders

• `Optional` **orders**: [`OrderDetails`](OrderDetails.md)

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:79](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L79)

___

### status

• `Optional` **status**: `string`

Status of this asset (where it is in the system)

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:85](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L85)

___

### token\_address

• `Optional` **token\_address**: `string`

Address of the ERC721 contract

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:91](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L91)

___

### token\_id

• `Optional` **token\_id**: `string`

ERC721 Token ID of this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:97](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L97)

___

### updated\_at

• `Optional` **updated\_at**: `string`

Timestamp of when the asset was updated

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:103](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L103)

___

### uri

• `Optional` **uri**: `string`

URI to access this asset externally to Immutable X

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:109](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L109)

___

### user

• `Optional` **user**: `string`

Ethereum address of the user who owns this asset

**`memberof`** Asset

#### Defined in

[src/api/models/asset.ts:115](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/asset.ts#L115)
