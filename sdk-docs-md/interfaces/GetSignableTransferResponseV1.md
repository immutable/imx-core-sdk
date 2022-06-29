[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableTransferResponseV1

# Interface: GetSignableTransferResponseV1

**`export`** 

**`interface`** GetSignableTransferResponseV1

## Table of contents

### Properties

- [amount](GetSignableTransferResponseV1.md#amount)
- [asset\_id](GetSignableTransferResponseV1.md#asset_id)
- [expiration\_timestamp](GetSignableTransferResponseV1.md#expiration_timestamp)
- [nonce](GetSignableTransferResponseV1.md#nonce)
- [payload\_hash](GetSignableTransferResponseV1.md#payload_hash)
- [receiver\_stark\_key](GetSignableTransferResponseV1.md#receiver_stark_key)
- [receiver\_vault\_id](GetSignableTransferResponseV1.md#receiver_vault_id)
- [sender\_stark\_key](GetSignableTransferResponseV1.md#sender_stark_key)
- [sender\_vault\_id](GetSignableTransferResponseV1.md#sender_vault_id)
- [signable\_message](GetSignableTransferResponseV1.md#signable_message)

## Properties

### amount

• `Optional` **amount**: `string`

Amount of the asset being transferred

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L28)

___

### asset\_id

• `Optional` **asset\_id**: `string`

ID of the asset being transferred

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L34)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

Token in request to match in SDK implementation

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L40)

___

### nonce

• `Optional` **nonce**: `number`

Nonce of the transfer

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L46)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Hash of the payload

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L52)

___

### receiver\_stark\_key

• `Optional` **receiver\_stark\_key**: `string`

Receiver of the transfer

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L58)

___

### receiver\_vault\_id

• `Optional` **receiver\_vault\_id**: `number`

ID of the vault being transferred to

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:64](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L64)

___

### sender\_stark\_key

• `Optional` **sender\_stark\_key**: `string`

Sender of the transfer

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:70](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L70)

___

### sender\_vault\_id

• `Optional` **sender\_vault\_id**: `number`

ID of the vault being transferred from

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:76](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L76)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign with L1 wallet to confirm transfer request

**`memberof`** GetSignableTransferResponseV1

#### Defined in

[src/api/models/get-signable-transfer-response-v1.ts:82](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response-v1.ts#L82)
