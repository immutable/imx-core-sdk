[@imtbl/core-sdk](../README.md) / [Exports](../modules.md) / CreateWithdrawalRequest

# Interface: CreateWithdrawalRequest

**`export`** 

**`interface`** CreateWithdrawalRequest

## Table of contents

### Properties

- [amount](CreateWithdrawalRequest.md#amount)
- [asset\_id](CreateWithdrawalRequest.md#asset_id)
- [nonce](CreateWithdrawalRequest.md#nonce)
- [stark\_key](CreateWithdrawalRequest.md#stark_key)
- [stark\_signature](CreateWithdrawalRequest.md#stark_signature)
- [vault\_id](CreateWithdrawalRequest.md#vault_id)

## Properties

### amount

• **amount**: `string`

Amount to withdraw

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:28](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L28)

___

### asset\_id

• **asset\_id**: `string`

The ID of asset the user is withdrawing

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:34](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L34)

___

### nonce

• **nonce**: `number`

Nonce of the withdrawal

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:40](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L40)

___

### stark\_key

• **stark\_key**: `string`

Public stark key of the withdrawing user

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:46](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L46)

___

### stark\_signature

• **stark\_signature**: `string`

Payload signature

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:52](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L52)

___

### vault\_id

• **vault\_id**: `number`

The ID of the vault the asset belong to

**`memberof`** CreateWithdrawalRequest

#### Defined in

[src/api/models/create-withdrawal-request.ts:58](https://github.com/immutable/imx-core-sdk/blob/7204457/src/api/models/create-withdrawal-request.ts#L58)
