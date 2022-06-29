[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / SignableTransferResponseDetails

# Interface: SignableTransferResponseDetails

**`export`** 

**`interface`** SignableTransferResponseDetails

## Table of contents

### Properties

- [amount](SignableTransferResponseDetails.md#amount)
- [asset\_id](SignableTransferResponseDetails.md#asset_id)
- [expiration\_timestamp](SignableTransferResponseDetails.md#expiration_timestamp)
- [nonce](SignableTransferResponseDetails.md#nonce)
- [payload\_hash](SignableTransferResponseDetails.md#payload_hash)
- [receiver\_stark\_key](SignableTransferResponseDetails.md#receiver_stark_key)
- [receiver\_vault\_id](SignableTransferResponseDetails.md#receiver_vault_id)
- [sender\_vault\_id](SignableTransferResponseDetails.md#sender_vault_id)
- [token](SignableTransferResponseDetails.md#token)

## Properties

### amount

• `Optional` **amount**: `string`

Amount of the asset being transferred

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L29)

___

### asset\_id

• `Optional` **asset\_id**: `string`

ID of the asset being transferred

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L35)

___

### expiration\_timestamp

• `Optional` **expiration\_timestamp**: `number`

Timestamp when this transfer will expire

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L41)

___

### nonce

• `Optional` **nonce**: `number`

Nonce of the transfer

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:47](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L47)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Hash of the payload to be signed for transfer

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:53](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L53)

___

### receiver\_stark\_key

• `Optional` **receiver\_stark\_key**: `string`

Receiver of the transfer

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:59](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L59)

___

### receiver\_vault\_id

• `Optional` **receiver\_vault\_id**: `number`

ID of the vault being transferred to

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:65](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L65)

___

### sender\_vault\_id

• `Optional` **sender\_vault\_id**: `number`

ID of the vault being transferred from

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:71](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L71)

___

### token

• `Optional` **token**: [`SignableToken`](SignableToken.md)

**`memberof`** SignableTransferResponseDetails

#### Defined in

[src/api/models/signable-transfer-response-details.ts:77](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/signable-transfer-response-details.ts#L77)
