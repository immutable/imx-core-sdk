[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / GetSignableWithdrawalResponse

# Interface: GetSignableWithdrawalResponse

**`export`** 

**`interface`** GetSignableWithdrawalResponse

## Table of contents

### Properties

- [amount](GetSignableWithdrawalResponse.md#amount)
- [asset\_id](GetSignableWithdrawalResponse.md#asset_id)
- [nonce](GetSignableWithdrawalResponse.md#nonce)
- [payload\_hash](GetSignableWithdrawalResponse.md#payload_hash)
- [signable\_message](GetSignableWithdrawalResponse.md#signable_message)
- [stark\_key](GetSignableWithdrawalResponse.md#stark_key)
- [vault\_id](GetSignableWithdrawalResponse.md#vault_id)

## Properties

### amount

• `Optional` **amount**: `string`

Amount of the token we are withdrawing

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L28)

___

### asset\_id

• `Optional` **asset\_id**: `string`

ID of the asset to be withdrawn

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L34)

___

### nonce

• `Optional` **nonce**: `number`

Nonce of this transaction

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L40)

___

### payload\_hash

• `Optional` **payload\_hash**: `string`

Encoded payload hash

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L46)

___

### signable\_message

• `Optional` **signable\_message**: `string`

Message to sign with L1 wallet to verity withdrawal request

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L52)

___

### stark\_key

• `Optional` **stark\_key**: `string`

Public stark key of this user

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L58)

___

### vault\_id

• `Optional` **vault\_id**: `number`

ID of the vault we are withdrawing from

**`memberof`** GetSignableWithdrawalResponse

#### Defined in

[src/api/models/get-signable-withdrawal-response.ts:64](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/get-signable-withdrawal-response.ts#L64)
