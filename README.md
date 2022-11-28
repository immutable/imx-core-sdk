<div align="center">
  <p align="center">
    <a  href="https://docs.x.immutable.com/docs">
      <img src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif" width="280"/>
    </a>
  </p>
</div>

---

# Immutable Core SDK in Typescript

[![npm version](https://badge.fury.io/js/@imtbl%2Fcore-sdk.svg)](https://www.npmjs.com/package/@imtbl/core-sdk) [![Maintainability](https://api.codeclimate.com/v1/badges/219466ee5269620167e5/maintainability)](https://codeclimate.com/repos/62848fd8d4420d01b6002210/maintainability)

The Immutable Core SDK provides convenient access to Immutable's APIs and smart contracts to help projects build better web3 games and marketplaces.

Currently, our SDK supports interactions with our application-specific rollup based on StarkWare's StarkEx. In future, we'll be adding StarkNet support across our platform.

## Documentation

See our [developer documentation](https://docs.x.immutable.com) for information on building on Immutable X.

See our [API reference](https://docs.x.immutable.com/reference) for more information on our APIs.

## Installation

```sh
npm install @imtbl/core-sdk --save
# or
yarn add @imtbl/core-sdk
```

## Initialization

Initialize the Core SDK client with the network on which you want your application to run (see [all networks available](./src/config/config.ts)):
| Param | Description |
| -- | -- |
| `Config.SANDBOX` | The default test network (currently, it is Goërli) |
| `Config.PRODUCTION` | Ethereum network |

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';

const config = Config.SANDBOX; // Or PRODUCTION
const client = new ImmutableX(config);
```

## Get data (on assets, orders, past transactions, etc.)

These methods allow you to read data about events, transactions or current state on Immutable X (layer 2). They do not require any user authentication because no state is being changed.

Examples of the types of data that are typically retrieved include:

- Assets or details of a particular asset
- Token balances for a particular user
- Orders or details about a particular order
- Historical trades and transfers

### Examples

#### Get all collections and get assets from a particular collection:

```ts
const listCollectionsResponse = await client.listCollections({
  pageSize: 2,
});

const collection = listCollectionsResponse.result[0];

const collectionAssetsResponse = await client.listAssets({
  collection: collection.address,
  pageSize: 10,
});
```

## Operations requiring user signatures

There are two types of operations requiring user signatures:

1. Transactions that update blockchain state
2. Operations that Immutable X require authorization for

In order to get user signatures, applications need to [generate "signers"](#how-do-applications-generate-and-use-signers).

#### What are transactions that update blockchain state?

A common transaction type is the transfer of asset ownership from one user to another (ie. asset sale). These operations require users to sign (approve) them to prove that they are valid.

#### What are operations that require authorization?

These operations add to or update data in Immutable's databases and typically require the authorization of an object's owner (ie. a user creating a project on Immutable X).

### How do applications generate and use signers?

Signers are abstractions of user accounts that can be used to sign transactions. A user's private key is required to generate them.

There are two ways to get signers in your application:

1. [Generate your own by obtaining and using the user's private keys](#1-generate-your-own-signers)
2. [Use our Wallet SDK to connect to a user's wallet application](#2-generate-signers-using-the-wallet-sdk)

The first option, where an application obtains a user's private key directly, is risky because these keys allow anyone in possession of them full control of an account.

The second option provides an application with an interface to the user's account by prompting the user to connect with their wallet application (ie. mobile or browser wallet). Once connected the app can begin asking the user to sign transactions and messages without having to reveal their private key.

As Immutable X enables applications to execute signed transactions on both Ethereum (layer 1) and StarkEx (layer 2), signers are required for both these layers.

### 1. Generate your own signers

The Core SDK provides functionality for applications to generate Stark (L2) [private keys](/src/utils/stark/starkCurve.ts#L108) and [signers](/src/utils/stark/starkSigner.ts#L60).

#### 🚨🚨🚨 Warning 🚨🚨🚨
> If you generate your own Stark private key, you will have to persist it. The key is [randomly generated](/src/utils/stark/starkCurve.ts#L108) so **_cannot_** be deterministically re-generated.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { generateStarkPrivateKey, createStarkSigner } from '@imtbl/core-sdk';

// Create Ethereum signer
const ethNetwork = 'goerli'; // Or 'mainnet'
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const ethSigner = new Wallet(YOUR_PRIVATE_ETH_KEY).connect(provider);

// Create Stark signer
const starkPrivateKey = generateStarkPrivateKey(); // Or retrieve previously generated key
const starkSigner = createStarkSigner(starkPrivateKey);
```

### 2. Generate signers using the Wallet SDK

The [Wallet SDK Web](https://docs.x.immutable.com/sdk-docs/wallet-sdk-web/overview) provides connections to Metamask and WalletConnect browser wallets.

See [this guide](https://docs.x.immutable.com/sdk-docs/wallet-sdk-web/quickstart) for how to set this up.

### Examples

#### Create a project (requires an Ethereum layer 1 signer)

```ts
const createProjectResponse = await client.createProject(ethSigner, {
  company_name: 'My Company',
  contact_email: 'project@company.com',
  name: 'Project name',
});

const projectId = createProjectResponse.id.toString();

const getProjectResponse = await client.getProject(ethSigner, projectId);
```

#### Deposit tokens from L1 to L2 (requires an Ethereum layer 1 signer)

```ts
const depositResponse = await client.deposit(ethSigner, {
  type: 'ETH',
  amount: '500000000000000000', // Amount in wei
});
```

#### Create an order (requires an Ethereum layer 1 and StarkEx layer 2 signer)

```ts
const signers = { ethSigner, starkSigner };

const orderResponse = await client.createOrder(signers, {
  buy: {
    type: 'ETH',
    amount: '1230000000000000000', // Sale price in wei
  },
  sell: {
    type: 'ERC721',
    tokenAddress: '0x0fb969a08c7c39ba99c1628b59c0b7e5611bd396',
    tokenId: '5',
  },
});
```

## Contract requests

Immutable X is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on Immutable X, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the Immutable X platform.

[See all smart contracts available in the Core SDK](#smart-contract-autogeneration).

```ts
import { Contracts, Config } from '@imtbl/core-sdk';

const config = Config.SANDBOX;

// Get instance of core contract
const contract = Contracts.Core.connect(
  config.ethConfiguration.coreContractAddress,
  ethSigner,
);

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

## Smart contract autogeneration

The Immutable solidity contracts can be found under `contracts` folder. Contract bindings in typescript is generated using [hardhat](https://hardhat.org/guides/compile-contracts.html).

### Core

The Core contract is Immutable's main interface with the Ethereum blockchain, based on [StarkEx](https://docs.starkware.co/starkex-v4).

[View contract](contracts/Core.sol)

### Registration

The Registration contract is a proxy smart contract for the Core contract that combines transactions related to onchain registration, deposits and withdrawals. When a user who is not registered onchain attempts to perform a deposit or a withdrawal, the Registration combines requests to the Core contract in order to register the user first. Users who are not registered onchain are not able to perform a deposit or withdrawal.

For example, instead of making subsequent transaction requests to the Core contract, i.e. `registerUser` and `depositNft`, a single transaction request can be made to the proxy Registration contract - `registerAndWithdrawNft`.

[View contract](contracts/Registration.sol)

### IERC20

Standard interface for interacting with ERC20 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#IERC20).

### IERC721

Standard interface for interacting with ERC721 contracts, taken from [OpenZeppelin](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721).

## Contributing

### Set up local developer environment

```sh
# Install dependencies
yarn install

yarn build

# Run tests
yarn test
```

Check out how the [Release process](https://github.com/immutable/imx-core-sdk/#release-process) works

### API autogenerated code

We use OpenAPI (formally known as Swagger) to auto-generate the API clients that connect to the [public APIs](https://docs.x.immutable.com/reference). The OpenAPI spec is retrieved from https://api.x.immutable.com/openapi and also saved in the repo.

To re-generate the API client, run:

```make
make generate-openapi-prod
```

### Changelog management

This repository is using [release-it](https://github.com/release-it/release-it) to manage the CHANGELOG.md.

The following headings should be used as appropriate

- **Added**
- **Changed**
- **Deprecated**
- **Removed**
- **Fixed**

This is an example with all the change headings. For actual usage, use only the one heading that is relevant. This goes at the top of the CHANGELOG.md above the most recent release.

```markdown
...

## [Unreleased]

### Added

For new features.

### Changed

For changes in existing functionality.

### Deprecated

For soon-to-be removed features.

### Removed

For now removed features.

### Fixed

For any bug fixes.

...
```

The `package.json` will contain the value of the previous release:

```json

"version": "0.3.0",

```

### Release process

#### Main release:

1. Merge your changes
2. Check and update your local main branch
3. Run `yarn release`
   - Choose release type (patch|minor|major)
   - Choose `yes` to use changelog and `package.json`
   - Add a tag if required \* this step can be skipped by replying `no`
   - Push to remote by using `yes`

#### Alpha/Beta release:

1. Go to https://github.com/immutable/imx-core-sdk/actions/workflows/publish.yaml and find the "Run workflow" button on the left.
2. Click the button and select the branch from dropdown.
3. Add a tag that is greater than last published main tag and append with `-alpha.x` or `-beta.x`. The `x` is the version for this particular release. For example, if the last published is `1.2.0`, use `1.2.1-alpha.1` or `1.3.0-alpha.1` depending on type of your changes.
4. Click "run workflow" button. This will trigger a "NPM Publish" action for alpha or beta release 🎉

## Getting help

Immutable X is open to all to build on, with no approvals required. If you want to talk to us to learn more, or apply for developer grants, click below:

[Contact us](https://www.immutable.com/contact)

### Project support

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
