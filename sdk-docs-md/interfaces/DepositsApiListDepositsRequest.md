[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / DepositsApiListDepositsRequest

# Interface: DepositsApiListDepositsRequest

Request parameters for listDeposits operation in DepositsApi.

**`export`** 

**`interface`** DepositsApiListDepositsRequest

## Table of contents

### Properties

- [assetId](DepositsApiListDepositsRequest.md#assetid)
- [cursor](DepositsApiListDepositsRequest.md#cursor)
- [direction](DepositsApiListDepositsRequest.md#direction)
- [maxQuantity](DepositsApiListDepositsRequest.md#maxquantity)
- [maxTimestamp](DepositsApiListDepositsRequest.md#maxtimestamp)
- [metadata](DepositsApiListDepositsRequest.md#metadata)
- [minQuantity](DepositsApiListDepositsRequest.md#minquantity)
- [minTimestamp](DepositsApiListDepositsRequest.md#mintimestamp)
- [orderBy](DepositsApiListDepositsRequest.md#orderby)
- [pageSize](DepositsApiListDepositsRequest.md#pagesize)
- [status](DepositsApiListDepositsRequest.md#status)
- [tokenAddress](DepositsApiListDepositsRequest.md#tokenaddress)
- [tokenId](DepositsApiListDepositsRequest.md#tokenid)
- [tokenName](DepositsApiListDepositsRequest.md#tokenname)
- [tokenType](DepositsApiListDepositsRequest.md#tokentype)
- [user](DepositsApiListDepositsRequest.md#user)

## Properties

### assetId

• `Optional` `Readonly` **assetId**: `string`

Internal IMX ID of the minted asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:442](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L442)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:379](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L379)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:393](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L393)

___

### maxQuantity

• `Optional` `Readonly` **maxQuantity**: `string`

Max quantity for the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:470](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L470)

___

### maxTimestamp

• `Optional` `Readonly` **maxTimestamp**: `string`

Maximum timestamp for this deposit

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:421](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L421)

___

### metadata

• `Optional` `Readonly` **metadata**: `string`

JSON-encoded metadata filters for the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:477](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L477)

___

### minQuantity

• `Optional` `Readonly` **minQuantity**: `string`

Min quantity for the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:463](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L463)

___

### minTimestamp

• `Optional` `Readonly` **minTimestamp**: `string`

Minimum timestamp for this deposit

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:414](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L414)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:386](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L386)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:372](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L372)

___

### status

• `Optional` `Readonly` **status**: `string`

Status of this deposit

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:407](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L407)

___

### tokenAddress

• `Optional` `Readonly` **tokenAddress**: `string`

Token address of the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:449](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L449)

___

### tokenId

• `Optional` `Readonly` **tokenId**: `string`

ERC721 Token ID of the minted asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:435](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L435)

___

### tokenName

• `Optional` `Readonly` **tokenName**: `string`

Token name of the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:456](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L456)

___

### tokenType

• `Optional` `Readonly` **tokenType**: `string`

Token type of the deposited asset

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:428](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L428)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who submitted this deposit

**`memberof`** DepositsApiListDeposits

#### Defined in

[src/api/domain/deposits-api.ts:400](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/deposits-api.ts#L400)
