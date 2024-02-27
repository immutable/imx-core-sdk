# About

Contracts in this directory are for interacting with StarkEx contracts with version >= 4.0.

- `Core.sol` - wrapper for StarkEx V4 contract.
- `Registration.sol` - Version 2 of the registration wrapper contract, which adds helper functions like `withdrawAll` and `registerAndWithdrawAll`, which can be used in edge cases where a user has prepared withdrawals in StarkEx v3 and v4 contract, and wishes to withdraw both in one transaction. It is named RegistrationV4 because it is designed to interact with StarkEx V4 contract.
