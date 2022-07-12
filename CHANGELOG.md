# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2022-07-12

### Added

- Added `registerOffchainWithSigner` function to enable register offchain user with L2Signer

### Changed

- Changed `registerOffchainWorkflowWithSigner` to return a void promise and return early if wallet
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
