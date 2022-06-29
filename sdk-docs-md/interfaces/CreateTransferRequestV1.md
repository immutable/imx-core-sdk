[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CreateTransferRequestV1

# Interface: CreateTransferRequestV1

**`export`** 

**`interface`** CreateTransferRequestV1

## Table of contents

### Properties

- [amount](CreateTransferRequestV1.md#amount)
- [asset\_id](CreateTransferRequestV1.md#asset_id)
- [expiration\_timestamp](CreateTransferRequestV1.md#expiration_timestamp)
- [nonce](CreateTransferRequestV1.md#nonce)
- [receiver\_stark\_key](CreateTransferRequestV1.md#receiver_stark_key)
- [receiver\_vault\_id](CreateTransferRequestV1.md#receiver_vault_id)
- [sender\_stark\_key](CreateTransferRequestV1.md#sender_stark_key)
- [sender\_vault\_id](CreateTransferRequestV1.md#sender_vault_id)
- [stark\_signature](CreateTransferRequestV1.md#stark_signature)

## Properties

### amount

• **amount**: `string`

Amount to transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L28)

___

### asset\_id

• **asset\_id**: `string`

ID of the asset to transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L34)

___

### expiration\_timestamp

• **expiration\_timestamp**: `number`

Expiration timestamp for this transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L40)

___

### nonce

• **nonce**: `number`

Nonce of the transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L46)

___

### receiver\_stark\_key

• **receiver\_stark\_key**: `string`

Public stark key of the user receiving the transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L52)

___

### receiver\_vault\_id

• **receiver\_vault\_id**: `number`

ID of the vault into which the asset will be transferred to

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L58)

___

### sender\_stark\_key

• **sender\_stark\_key**: `string`

Public stark key of the user sending the transfer

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:64](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L64)

___

### sender\_vault\_id

• **sender\_vault\_id**: `number`

ID of the vault into which the asset is from

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:70](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L70)

___

### stark\_signature

• **stark\_signature**: `string`

Transfer payload signature

**`memberof`** CreateTransferRequestV1

#### Defined in

[src/api/models/create-transfer-request-v1.ts:76](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-transfer-request-v1.ts#L76)
