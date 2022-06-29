[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / Transfer

# Interface: Transfer

**`export`** 

**`interface`** Transfer

## Table of contents

### Properties

- [data](Transfer.md#data)
- [receiver](Transfer.md#receiver)
- [status](Transfer.md#status)
- [timestamp](Transfer.md#timestamp)
- [transaction\_id](Transfer.md#transaction_id)
- [type](Transfer.md#type)
- [user](Transfer.md#user)

## Properties

### data

• `Optional` **data**: [`TokenData`](TokenData.md)

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L29)

___

### receiver

• `Optional` **receiver**: `string`

Ethereum address of the user who received this transfer

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L35)

___

### status

• `Optional` **status**: `string`

Status of the transaction

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L41)

___

### timestamp

• `Optional` **timestamp**: `string`

Timestamp of the transfer

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L47)

___

### transaction\_id

• `Optional` **transaction\_id**: `number`

Sequential transaction ID

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L53)

___

### type

• `Optional` **type**: `string`

Type of this asset (ETH/ERC20/ERC721)

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L59)

___

### user

• `Optional` **user**: `string`

Ethereum address of the user  who submitted this transfer

**`memberof`** Transfer

#### Defined in

[src/api/models/transfer.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer.ts#L65)
