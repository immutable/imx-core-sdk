[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableTransferResponse

# Interface: GetSignableTransferResponse

**`export`** 

**`interface`** GetSignableTransferResponse

## Table of contents

### Properties

- [sender\_stark\_key](GetSignableTransferResponse.md#sender_stark_key)
- [signable\_message](GetSignableTransferResponse.md#signable_message)
- [signable\_responses](GetSignableTransferResponse.md#signable_responses)

## Properties

### sender\_stark\_key

• **sender\_stark\_key**: `string`

Sender of the transfer

**`memberof`** GetSignableTransferResponse

#### Defined in

[src/api/models/get-signable-transfer-response.ts:29](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response.ts#L29)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign with L1 wallet to confirm transfer request

**`memberof`** GetSignableTransferResponse

#### Defined in

[src/api/models/get-signable-transfer-response.ts:35](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response.ts#L35)

___

### signable\_responses

• `Optional` **signable\_responses**: [`SignableTransferResponseDetails`](SignableTransferResponseDetails.md)[]

List of transfer responses without the sender stark key

**`memberof`** GetSignableTransferResponse

#### Defined in

[src/api/models/get-signable-transfer-response.ts:41](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-transfer-response.ts#L41)
