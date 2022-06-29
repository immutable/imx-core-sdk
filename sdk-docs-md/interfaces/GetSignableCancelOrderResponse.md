[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableCancelOrderResponse

# Interface: GetSignableCancelOrderResponse

**`export`** 

**`interface`** GetSignableCancelOrderResponse

## Table of contents

### Properties

- [order\_id](GetSignableCancelOrderResponse.md#order_id)
- [payload\_hash](GetSignableCancelOrderResponse.md#payload_hash)
- [signable\_message](GetSignableCancelOrderResponse.md#signable_message)

## Properties

### order\_id

• `Optional` **order\_id**: `number`

ID of the order to be cancelled

**`memberof`** GetSignableCancelOrderResponse

#### Defined in

[src/api/models/get-signable-cancel-order-response.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-cancel-order-response.ts#L28)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Hash of the payload to be signed for cancel order

**`memberof`** GetSignableCancelOrderResponse

#### Defined in

[src/api/models/get-signable-cancel-order-response.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-cancel-order-response.ts#L34)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign from wallet to confirm cancel order

**`memberof`** GetSignableCancelOrderResponse

#### Defined in

[src/api/models/get-signable-cancel-order-response.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-cancel-order-response.ts#L40)
