# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
- Fix for bug in generateLegacyStarkPrivateKey for some wallets, see https://github.com/immutable/imx-core-sdk/pull/334 for details.

## [2.0.0] - 2023-04-26
- Updated getOrder, listOrders, cancelOrder and listTrades to use thew new upgraded v3 endpoints

## [1.0.1] - 2023-02-01

## [1.1.0] - 2023-04-18
- Added support for listings & bids for the upgraded v3 endpoints of orders and trades

### Added

- Added examples for following endpoints
  - Get token
  - List tokens
  - Get balance
  - List balances
  - List orders
  - Get projects
  - Get transfer
  - List transfers
  - Get trade
  - List trades
  - Get user
  - Deposit nft
  - Add metadata schema to collection
  - Create metadata refresh
  - Get metadata refresh errors
  - Get metadata refresh results
  - List metadata refreshes
  - Get metadata schema
  - Get withdrawal
  - List withdrawals
  - Create nft withdrawal
  - Complete nft withdrawal
  - Complete erc20 withdrawal
  - Create erc20 withdrawal

### Fixed

- Fixed bug in stark grindkey logic to work when there is a leading zero in ethereum wallet private key.
- Readme bug fixes

### Removed

- Removed unused parameter from `listMints` interface
- Removed `getMintStatus`

## [1.0.0] - 2022-11-29

### Added

- Added Exchange transfers
- Added Moonpay primary nft checkout
- Method to generate deterministic stark key

### Changed

- ImmutableX class now exposes apis for users who need access outside of basic workflows

### Fixed

- formatError to handle undefined error.response.data
- Deposit workflow for register and deposit NFT

## [1.0.0-beta.3] - 2022-10-18

### Fixed

- Correct the x-sdk-version header value

## [1.0.0-beta.2] - 2022-09-28

### Added

- Added methods from MetadataRefreshesApi

### Changed

- Expose fewer public methods to make it easier for us to maintain the SDK.
- Introduced a [single entry point](https://github.com/immutable/imx-core-sdk/blob/34629c169f2c0fc6e38e73ec75a814f36b680620/src/ImmutableX.ts#L64) for the SDK to improve discoverability
- Clear response and error types, no more Axios wrappers
- Simplified complex types required for creating trades, orders and transfers, no more SignableToken in the interface
- Make the deposit method on SDK consistent with the API and industry norms.
- SDK now handles L1 signature-protected APIs; no need to generate imx-signature separately for authentication headers
- Removed wallet-specific logic
- Removed the `ethereumjs-wallet` dependency.

## [0.7.0] - 2022-08-03

### Added

- Added on all workflow methods a chain check comparing the current connected wallet chain versus the chain informed on setup phase

### Changed

- [listMints](https://docs.x.immutable.com/reference#/operations/listMints) endpoint accepts `max_timestamp`, `min_timestamp` instead of `updated_max_timestamp`, `updated_min_timestamp` respectively
- [BREAKING CHANGE] `x-imx-eth-address`, and `x-imx-eth-signature` headers are now required for [createOrder](https://docs.x.immutable.com/reference#/operations/createOrder), [cancelOrder](https://docs.x.immutable.com/reference#/operations/cancelOrder), [createTransfer](https://docs.x.immutable.com/reference#/operations/createTransfer), [createTransferV1](https://docs.x.immutable.com/reference#/operations/createTransferV1), [createWithdrawal](https://docs.x.immutable.com/reference#/operations/createWithdrawal), and [createTrade](https://docs.x.immutable.com/reference#/operations/createTrade) endpoints.
- [BREAKING CHANGE] Removed the `getKeyPairFromPrivateKey` function
- [BREAKING CHANGE] Removed the `getStarkPublicKey` function
- [BREAKING CHANGE] `getConfig` method now requires environment parameters and returns the new [ImmutableXConfiguration](https://github.com/immutable/imx-core-sdk/blob/cf33110d1dc6503c1e747dfced4fff0ec57bb536/src/types/index.ts#L35)
- [BREAKING CHANGE] Renamed the `registerOffchainWithSigner` method to `registerOffchain`
- [BREAKING CHANGE] Renamed the `isRegisteredOnchainWithSigner` method to `isRegisteredOnchain`
- [BREAKING CHANGE] Renamed the `transferWithSigner` method to `transfer`
- [BREAKING CHANGE] Renamed the `batchNftTransferWithSigner` method to `batchNftTransfer`
- [BREAKING CHANGE] Renamed the `burnWithSigner` method to `burn`
- [BREAKING CHANGE] Renamed the `prepareWithdrawalWithSigner` method to `prepareWithdrawal`
- [BREAKING CHANGE] Renamed the `createOrderWithSigner` method to `createOrder`
- [BREAKING CHANGE] Renamed the `cancelOrderWithSigner` method to `cancelOrder`
- [BREAKING CHANGE] Renamed the `createTradeWithSigner` method to `createTrade`

- Changed the `getAddress` method from the `L2Signer` interface to be able to return both `string` or async `Promise<string>`

### Removed

- [BREAKING CHANGE] Removed the deprecated `registerOffchain` method
- [BREAKING CHANGE] Removed the deprecated `isRegisteredOnchain` method
- [BREAKING CHANGE] Removed the deprecated `transfer` method
- [BREAKING CHANGE] Removed the deprecated `batchNftTransfer` method
- [BREAKING CHANGE] Removed the deprecated `burn` method
- [BREAKING CHANGE] Removed the deprecated `prepareWithdrawal` method
- [BREAKING CHANGE] Removed the deprecated `createOrder` method
- [BREAKING CHANGE] Removed the deprecated `cancelOrder` method
- [BREAKING CHANGE] Removed the deprecated `createTrade` method

## [0.6.0] - 2022-07-18

### Added

- Added `createOrderWithSigner` function to enable create order with l2signer
- Added `cancelOrderWithSigner` function to enable cancel order with l2signer
- Added `WalletConnection` type
- Added `transferWithSigner` function to enable transfer with l2signer
- Added `batchNftTransferWithSigner` function to enable batch transfer with l2signer
- Added `prepareWithdrawalWorkflowWithSigner` function to enable prepare withdrawal with l2signer
- Added `burnWithSigner` function to enable burn with l2signer
- Added `getStarkPublicKeyWithXCoordinate` method to get the same public key as the `generateStarkWallet` returns

### Deprecated

- `createOrder`, use `createOrderWithSigner` instead
- `cancelOrder`, use `cancelOrderWithSigner` instead
- `transfer`, use `transferWithSigner` instead
- `batchNftTransfer`, use `batchNftTransferWithSigner` instead
- `prepareWithdrawalWorkflow`, use `prepareWithdrawalWorkflowWithSigner` instead
- `burn`, use `burnWithSigner` instead
- `getStarkPublicKey`, use BaseSigner's `getAddress` instead

## [0.5.0] - 2022-07-12

### Added

- Added `registerOffchainWithSigner` function to enable register offchain user with L2Signer

### Changed

- Changed `registerOffchainWorkflowWithSigner` to return a void promise and return early if wallet is already registered
- RegisterUserRequest `email` property added
- [BREAKING CHANGE] `Transfer` and `ListTransfersResponse` objects swapped `data` and `type` properties with `token`

### Deprecated

- `registerOffchain`, use `registerOffchainWithSigner` instead

### Fixed

- `getAddress` method from BaseSigner
- Mark `project_id` as required on `CreateCollectionRequest`
- Updated list orders OpenAPI spec to document the `include_fees` query param

## [0.4.0] - 2022-07-05

### Added

- Added `BaseSigner`, a default implementation of the Stark L2Signer interface
- Added `createTradeWithSigner` function to enable creating trade workflow with l2signer

### Changed

- Mark `createTrade` as deprecated

## [0.3.1] - 2022-07-01

### Fixed

- Include ethers as a dependency
- Resolved dependabot alerts https://github.com/immutable/imx-core-sdk/security/dependabot/3

## [0.3.0] - 2022-06-21

### Added

- Added `generateStarkWalletFromSignedMessage` function to generate stark keys from EthAddress and Signature
- Added `L2Signer` type

### Changed

- Added `project_owner_address` property to collection objects returned from `GET` `/v1/collections` public API endpoints.
- Exported `L1Signer` and `L2Signer`

## [0.2.2] - 2022-06-02

### Fixed

- Correctly exported type definitions with the published package.

## [0.2.1] - 2022-05-30

### Fixed

- Updated the auto-generated API clients

## [0.2.0] - 2022-05-27

### Added

- Added Workflows
  - `createOrder`
  - `cancelOrder`
  - `createTrade`
- Added SDK version headers
- Removed requirements for lowercase ETH addresses

### Fixed

- Regenerated clients to correctly indicate `nullable` fields.
- Correct the response type fields which were indicated as possible undefined.

## [0.1.0] - 2022-05-25

### Added

- Added Workflows
  - `registerOffchain`
  - `isRegisteredOnchain`
  - `mint`
  - `transfer`
  - `batchNftTransfer`
  - `burn`
  - `getBurn`
  - `deposit`
  - `depositEth`
  - `depositERC20`
  - `depositERC721`
  - `prepareWithdrawal`
  - `completeEthWithdrawal`
  - `completeERC20Withdrawal`
  - `completeERC721Withdrawal`
  - `completeWithdrawal`
  - `cancelOrder`

## [0.0.2] - 2022-05-19

### Added

- Changelog and changelog management tool (release-it)

## [0.0.1] - 2022-05-05

### Added

- Initial release
