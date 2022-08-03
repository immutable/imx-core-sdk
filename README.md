<div align="center">
  <p align="center">
    <a  href="https://docs.x.immutable.com/docs">
      <img src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif" width="280"/>
    </a>
  </p>
</div>

---

**The Core TypeScript SDK Interface is under active development and hasn't hit v1.0 yet.**

Its public interface shouldn't be considered final, and we may need to release breaking changes as we push towards v1.0.

# Immutable Core SDK

[![npm version](https://badge.fury.io/js/@imtbl%2Fcore-sdk.svg)](https://www.npmjs.com/package/@imtbl/core-sdk) [![Maintainability](https://api.codeclimate.com/v1/badges/219466ee5269620167e5/maintainability)](https://codeclimate.com/repos/62848fd8d4420d01b6002210/maintainability)

The Immutable Core SDK provides convenient access to Immutable's APIs and smart contracts to help projects build better web3 games and marketplaces.

Currently, our SDK supports interactions with our application-specific rollup based on StarkWare's StarkEx. In future, we'll be adding StarkNet support across our platform.

## Documentation

See the [developer guides](https://docs.x.immutable.com) for information on building on Immutable X.

See the [API reference documentation](https://docs.x.immutable.com/reference) for more information on our API's.

## Installation

## Add this NPM package to your project

```sh
npm install @imtbl/core-sdk --save
# or
yarn add @imtbl/core-sdk
```

## Setup local developer environment

```sh
# install dependencies
yarn install
yarn build
# run tests
yarn test
```
Check out how the [Release Process](https://github.com/immutable/imx-core-sdk/#release-process) works

## Usage

### Configuration

A configuration object is required to be passed into Core SDK requests. This can be obtained by using the `getConfig` function available within the Core SDK. You are required to provide the correct contract addresses, Chain ID, and api base path of the network you wish to use. The Immutable X platform currently supports `ropsten` for testing and `mainnet` for production.

| Network   | Chain ID | API Base Path                       | Core Contract Address                        | Registration Contract Address                |
|-----------|----------|-------------------------------------|----------------------------------------------|----------------------------------------------|
| `ropsten` | 3        | https://api.ropsten.x.immutable.com | `0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef` | `0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864` |
| `mainnet` | 1        | https://api.x.immutable.com         | `0x5FDCCA53617f4d2b9134B29090C87D01058e27e9` | `0x72a06bf2a1CE5e39cBA06c0CAb824960B587d64c` |


```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig({
  coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
  registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
  chainID: 3,
  basePath:  'https://api.ropsten.x.immutable.com',
  headers: { 'x-api-custom-header': '...' } // headers are optional unless specified otherwise
});

// Setup a provider and a signer
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const signer = new Wallet(privateKey).connect(provider);
```

#### WalletConnection

WalletConnection is a top level connector which contains all the required resources (eg. L1 and L2 signers) to enable usage of the Core SDK workflows.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { WalletConnection, generateStarkWallet, BaseSigner } from '@imtbl/core-sdk';

// Generate your own WalletConnection
const generateWalletConnection = async (provider: AlchemyProvider) : Promise<WalletConnection> => {
  // L1 credentials
  const l1Signer = Wallet.createRandom().connect(provider);

  // L2 credentials
  const starkWallet = await generateStarkWallet(l1Signer);
  const l2Signer = new BaseSigner(starkWallet.starkKeyPair);

  return {
    l1Signer,
    l2Signer,
  };
};
```

### Standard API Requests

The Core SDK includes classes that interact with the Immutable X APIs.

```ts
// Standard API request example usage
import { getConfig, AssetsApi } from '@imtbl/core-sdk';

const getYourAsset = async (tokenAddress: string, tokenId: string) => {
  const config = getConfig({
    coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    chainID: 3,
    basePath:  'https://api.ropsten.x.immutable.com',
  });
  const assetsApi = new AssetsApi(config.apiConfiguration);

  const response = await assetsApi.getAsset({
    tokenAddress,
    tokenId,
  });

  return response;
};
```

View the [OpenAPI spec](openapi.json) for a full list of API requests available in the Core SDK.

### Authorised project owner requests

Some methods require authorisation by the project owner, which consists of a Unix epoch timestamp signed with your ETH key and included in the request header.

On project and collection methods that require authorisation, this signed timestamp string can typically be passed as the `iMXSignature` and `iMXTimestamp` parameters.

```ts
// Example method to generate authorisation headers
const getProjectOwnerAuthorisationHeaders = async (signer: Signer) => {
  const timestamp = Math.floor(Date.now() / 1000).toString();
  const signature = await signRaw(timestamp, signer);

  return {
    timestamp,
    signature,
  };
};

// Using generated authorisation headers
const createProject = async (
  name: string,
  company_name: string,
  contact_email: string,
) => {
  const api = new ProjectsApi(this.config.api);
  const { timestamp, signature } = getProjectOwnerAuthorisationHeaders(signer);

  return await api.createProject({
    createProjectRequest: {
      name,
      company_name,
      contact_email,
    },
    iMXSignature: signature,
    iMXTimestamp: timestamp,
  });
};
```

The following methods require project owner authorisation:

**Projects**

- createProject
- getProject
- getProjects

**Collections**

- createCollection
- updateCollection

**Metadata**

- addMetadataSchemaToCollection
- updateMetadataSchemaByName

### Contract Requests

Immutable X is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on Immutable X, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the Immutable X platform.

[See all smart contract available in the Core SDK](#smart-contract-autogeneration)

```ts
import { Core__factory } from '@imtbl/core-sdk';

// Get instance of core contract
const contract = Core__factory.connect(config.coreContractAddress, signer);

// Obtain necessary parameters...

// Populate and send transaction
const populatedTransaction = await contract.populateTransaction.depositNft(
  starkPublicKey,
  assetType,
  vaultId,
  tokenId,
);

const transactionResponse = await signer.sendTransaction(populatedTransaction);
```

### Workflows

A workflow is a combination of API and contract calls required for more complicated functionality.

```ts
// User registration workflow example
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { 
  Workflows, 
  BaseSigner, 
  getConfig, 
  generateStarkWallet,
} from '@imtbl/core-sdk';

const ethNetwork = 'ropsten';

// Sets up the provider
const alchemyApiKey = 'UPDATE WITH THE ALCHEMY API KEY HERE';
const alchemyProvider = new AlchemyProvider(ethNetwork, alchemyApiKey);

// Sets up the L1Signer
const privateKey = 'UPDATE WITH THE PRIVATE KEY HERE';
const l1Wallet = new Wallet(privateKey);
const l1Signer = l1Wallet.connect(alchemyProvider);

// Sets up the L2Signer
const l2Wallet = await generateStarkWallet(l1Signer);
const l2Signer = new BaseSigner(l2Wallet.starkKeyPair);

// Sets up the Core SDK workflows
const coreSdkConfig = getConfig({
  coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
  registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
  chainID: 3,
  basePath:  'https://api.ropsten.x.immutable.com',
});
const coreSdkWorkflows = new Workflows(coreSdkConfig);

// Registers the user
const walletConnection = { l1Signer, l2Signer };
await coreSdkWorkflows.registerOffchain(walletConnection);
```

The workflow can be found in the [workflows directory](src/workflows/).

### Available Workflows

The current workflow methods exposed from the `Workflow` class.

| Workflow                   | Description                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `registerOffchain`         | Register L2 wallet.                                                          |
| `isRegisteredOnchain`      | Check wallet registered on L1.                                               |
| `mint`                     | Mint tokens on L2.                                                           |
| `transfer`                 | Transfer tokens to another wallet.                                           |
| `batchNftTransfer`         | Batch transfer tokens.                                                       |
| `burn`                     | Burn tokens.                                                                 |
| `getBurn`                  | Verify burn/transfer details.                                                |
| `deposit`                  | Helper method around the other deposit methods. Deposit based on token type. |
| `depositEth`               | Deposit ETH to L2 wallet.                                                    |
| `depositERC20`             | Deposit ERC20 token to L2 wallet.                                            |
| `depositERC721`            | Deposit ERC721 NFT to L2 wallet.                                             |
| `prepareWithdrawal`        | Prepare token for withdrawal.                                                |
| `completeEthWithdrawal`    | withdraw ETH to L1.                                                          |
| `completeERC20Withdrawal`  | withdraw ERC20 to L1.                                                        |
| `completeERC721Withdrawal` | withdraw ERC721 to L1.                                                       |
| `completeWithdrawal`       | Helper method around withdrawal methods. Withdraw based on token type.       |
| `createOrder`              | Create an order to sell an asset.                                            |
| `cancelOrder`              | Cancel an order.                                                             |
| `createTrade`              | Create a trade to buy an asset.                                              |

## Autogenerated Code

Parts of the Core SDK are automagically generated.

### API Autogenerated Code

We use OpenAPI (formally known as Swagger) to auto-generate the API clients that connect to the public APIs.
The OpenAPI spec is retrieved from https://api.x.immutable.com/openapi and also saved in the repo.

### Smart contract autogeneration

The Immutable solidity contracts can be found under `contracts` folder. Contract bindings in typescript is generated using [hardhat](https://hardhat.org/guides/compile-contracts.html).

#### Core

The Core contract is Immutable's main interface with the Ethereum blockchain, based on [StarkEx](https://docs.starkware.co/starkex-v4).

[View contract](contracts/Core.sol)

#### Registration

The Registration contract is a proxy smart contract for the Core contract that combines transactions related to onchain registration, deposits and withdrawals. When a user who is not registered onchain attempts to perform a deposit or a withdrawal, the Registration combines requests to the Core contract in order to register the user first. - users who are not registered onchain are not able to perform a deposit or withdrawal.

For example, instead of making subsequent transaction requests to the Core contract, i.e. `registerUser` and `depositNft`, a single transaction request can be made to the proxy Registration contract - `registerAndWithdrawNft`.

[View contract](contracts/Registration.sol)

#### IERC20

Standard interface for interacting with ERC20 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20).

#### IERC721

Standard interface for interacting with ERC721 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721).

## Changelog Management

This repository is using release-it to manage the CHANGELOG.md

The following headings should be used as appropriate

- Added
- Changed
- Deprecated
- Removed
- Fixed

What follows is an example with all the change headings, for real world use only use headings when appropriate.
This goes at the top of the CHANGELOG.md above the most recent release.

```markdown
...

## [Unreleased]

### Added

for new features.

### Changed

for changes in existing functionality.

### Deprecated

for soon-to-be removed features.

### Removed

for now removed features.

### Fixed

for any bug fixes.

...
```

The package.json will hold the value of the previous release

```json

"version": "0.3.0",

```

## Release Process

### Main Release

1. Merge your changes
2. Check and update your local main branch
3. Run `yarn release`
   - Choose release type (patch|minor|major)
   - Choose `yes` to use changelog and `package.json`
   - Add a tag if required - this step can be skipped by replying `no`
   - Push to remote by using `yes`

### Alpha Release

1. Go to https://github.com/immutable/imx-core-sdk/actions/workflows/publish.yaml and find the "Run workflow" button on the left.
2. Click the button and select the branch from dropdown. 
3. Add a tag that is greater than last published main tag and append with `-alpha.x`. The `x` is the version for this particular alpha release. For example, if the last published is `1.2.0`, use `1.2.1-alpha.1` or `1.3.0-alpha.1` depending on type of your changes. 
4. Click "run workflow" button. This will trigger a "NPM Publish" action for alpha release 🎉

## Getting Help

Immutable X is open to all to build on, with no approvals required. If you want to talk to us to learn more, or apply for developer grants, click below:

[Contact us](https://www.immutable.com/contact)

### Project Support

To get help from other developers, discuss ideas, and stay up-to-date on what's happening, become a part of our community on Discord.

[Join us on Discord](https://discord.gg/TkVumkJ9D6)

You can also join the conversation, connect with other projects, and ask questions in our Immutable X Discourse forum.

[Visit the forum](https://forum.immutable.com/)

#### Still need help?

You can also apply for marketing support for your project. Or, if you need help with an issue related to what you're building with Immutable X, click below to submit an issue. Select _I have a question_ or _issue related to building on Immutable X_ as your issue type.

[Contact support](https://support.immutable.com/hc/en-us/requests/new)

## Webpack 5

Webpack 5 no longer uses NodeJS polyfills, such as `crypto`, which in turn breaks the Core SDK resulting in errors such as
`Module not found: Error: Can't resolve 'crypto'`.

To fix this, you can use a webpack polyfill plugin like [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin), or if you're using `create-react-app` in your project which hides the Webpack config, [this blog post](https://alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5) explains how to add polyfills to your CRA project.
