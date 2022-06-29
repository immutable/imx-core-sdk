[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / AssetsApiGetAssetRequest

# Interface: AssetsApiGetAssetRequest

Request parameters for getAsset operation in AssetsApi.

**`export`** 

**`interface`** AssetsApiGetAssetRequest

## Table of contents

### Properties

- [includeFees](AssetsApiGetAssetRequest.md#includefees)
- [tokenAddress](AssetsApiGetAssetRequest.md#tokenaddress)
- [tokenId](AssetsApiGetAssetRequest.md#tokenid)

## Properties

### includeFees

• `Optional` `Readonly` **includeFees**: `boolean`

Set flag to include fees associated with the asset

**`memberof`** AssetsApiGetAsset

#### Defined in

[src/api/domain/assets-api.ts:310](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L310)

___

### tokenAddress

• `Readonly` **tokenAddress**: `string`

Address of the ERC721 contract

**`memberof`** AssetsApiGetAsset

#### Defined in

[src/api/domain/assets-api.ts:296](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L296)

___

### tokenId

• `Readonly` **tokenId**: `string`

Either ERC721 token ID or internal IMX ID

**`memberof`** AssetsApiGetAsset

#### Defined in

[src/api/domain/assets-api.ts:303](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/assets-api.ts#L303)
