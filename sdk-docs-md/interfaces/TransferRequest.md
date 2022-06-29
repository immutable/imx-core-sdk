[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / TransferRequest

# Interface: TransferRequest

**`export`** 

**`interface`** TransferRequest

## Table of contents

### Properties

- [amount](TransferRequest.md#amount)
- [asset\_id](TransferRequest.md#asset_id)
- [expiration\_timestamp](TransferRequest.md#expiration_timestamp)
- [nonce](TransferRequest.md#nonce)
- [receiver\_stark\_key](TransferRequest.md#receiver_stark_key)
- [receiver\_vault\_id](TransferRequest.md#receiver_vault_id)
- [sender\_vault\_id](TransferRequest.md#sender_vault_id)
- [stark\_signature](TransferRequest.md#stark_signature)

## Properties

### amount

• **amount**: `string`

Amount to transfer

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L28)

___

### asset\_id

• **asset\_id**: `string`

ID of the asset to transfer

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L34)

___

### expiration\_timestamp

• **expiration\_timestamp**: `number`

Expiration timestamp for this transfer

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L40)

___

### nonce

• **nonce**: `number`

Nonce of the transfer

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L46)

___

### receiver\_stark\_key

• **receiver\_stark\_key**: `string`

Public stark key of the user receiving the transfer

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L52)

___

### receiver\_vault\_id

• **receiver\_vault\_id**: `number`

ID of the vault into which the asset will be transferred to

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L58)

___

### sender\_vault\_id

• **sender\_vault\_id**: `number`

ID of the vault into which the asset is from

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:64](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L64)

___

### stark\_signature

• **stark\_signature**: `string`

Transfer payload signature

**`memberof`** TransferRequest

#### Defined in

[src/api/models/transfer-request.ts:70](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/transfer-request.ts#L70)
