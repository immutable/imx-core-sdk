[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / WithdrawalsApiListWithdrawalsRequest

# Interface: WithdrawalsApiListWithdrawalsRequest

Request parameters for listWithdrawals operation in WithdrawalsApi.

**`export`** 

**`interface`** WithdrawalsApiListWithdrawalsRequest

## Table of contents

### Properties

- [assetId](WithdrawalsApiListWithdrawalsRequest.md#assetid)
- [cursor](WithdrawalsApiListWithdrawalsRequest.md#cursor)
- [direction](WithdrawalsApiListWithdrawalsRequest.md#direction)
- [maxQuantity](WithdrawalsApiListWithdrawalsRequest.md#maxquantity)
- [maxTimestamp](WithdrawalsApiListWithdrawalsRequest.md#maxtimestamp)
- [metadata](WithdrawalsApiListWithdrawalsRequest.md#metadata)
- [minQuantity](WithdrawalsApiListWithdrawalsRequest.md#minquantity)
- [minTimestamp](WithdrawalsApiListWithdrawalsRequest.md#mintimestamp)
- [orderBy](WithdrawalsApiListWithdrawalsRequest.md#orderby)
- [pageSize](WithdrawalsApiListWithdrawalsRequest.md#pagesize)
- [rollupStatus](WithdrawalsApiListWithdrawalsRequest.md#rollupstatus)
- [status](WithdrawalsApiListWithdrawalsRequest.md#status)
- [tokenAddress](WithdrawalsApiListWithdrawalsRequest.md#tokenaddress)
- [tokenId](WithdrawalsApiListWithdrawalsRequest.md#tokenid)
- [tokenName](WithdrawalsApiListWithdrawalsRequest.md#tokenname)
- [tokenType](WithdrawalsApiListWithdrawalsRequest.md#tokentype)
- [user](WithdrawalsApiListWithdrawalsRequest.md#user)
- [withdrawnToWallet](WithdrawalsApiListWithdrawalsRequest.md#withdrawntowallet)

## Properties

### assetId

• `Optional` `Readonly` **assetId**: `string`

Internal IMX ID of the minted asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:573](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L573)

___

### cursor

• `Optional` `Readonly` **cursor**: `string`

Cursor

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:510](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L510)

___

### direction

• `Optional` `Readonly` **direction**: `string`

Direction to sort (asc/desc)

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:524](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L524)

___

### maxQuantity

• `Optional` `Readonly` **maxQuantity**: `string`

Max quantity for the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:601](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L601)

___

### maxTimestamp

• `Optional` `Readonly` **maxTimestamp**: `string`

Maximum timestamp for this deposit

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:552](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L552)

___

### metadata

• `Optional` `Readonly` **metadata**: `string`

JSON-encoded metadata filters for the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:608](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L608)

___

### minQuantity

• `Optional` `Readonly` **minQuantity**: `string`

Min quantity for the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:594](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L594)

___

### minTimestamp

• `Optional` `Readonly` **minTimestamp**: `string`

Minimum timestamp for this deposit

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:545](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L545)

___

### orderBy

• `Optional` `Readonly` **orderBy**: `string`

Property to sort by

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:517](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L517)

___

### pageSize

• `Optional` `Readonly` **pageSize**: `number`

Page size of the result

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:503](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L503)

___

### rollupStatus

• `Optional` `Readonly` **rollupStatus**: `string`

Status of the on-chain batch confirmation for this withdrawal

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:496](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L496)

___

### status

• `Optional` `Readonly` **status**: `string`

Status of this withdrawal

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:538](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L538)

___

### tokenAddress

• `Optional` `Readonly` **tokenAddress**: `string`

Token address of the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:580](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L580)

___

### tokenId

• `Optional` `Readonly` **tokenId**: `string`

ERC721 Token ID of the minted asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:566](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L566)

___

### tokenName

• `Optional` `Readonly` **tokenName**: `string`

Token name of the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:587](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L587)

___

### tokenType

• `Optional` `Readonly` **tokenType**: `string`

Token type of the withdrawn asset

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:559](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L559)

___

### user

• `Optional` `Readonly` **user**: `string`

Ethereum address of the user who submitted this withdrawal

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:531](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L531)

___

### withdrawnToWallet

• `Optional` `Readonly` **withdrawnToWallet**: `boolean`

Withdrawal has been transferred to user\&#39;s Layer 1 wallet

**`memberof`** WithdrawalsApiListWithdrawals

#### Defined in

[src/api/domain/withdrawals-api.ts:489](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/domain/withdrawals-api.ts#L489)
