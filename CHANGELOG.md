# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

Workflow for Transfer, BatchTransfer, Burn
```ts
const workflows = new Workflows(configuration)
const transferResponse = await workflows.transfer(sender.wallet, getSignableTransferRequest);
const batchTransferResponse = await workflows.batchNftTransfer(sender.wallet, getSignableTransferRequestV2);
const burnResponse = await workflows.burn(user.wallet, burnRequest);
```

Changelog and changelog management tool (release-it)

## [0.0.1] - 2022-05-05

### Added

- Initial release