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

See our [developer documentation](https://docs.x.immutable.com) for information on building on ImmutableX.

See our [API reference](https://docs.x.immutable.com/reference) for more information on our APIs.

### Examples
* **Sample code** - see the [examples](./examples/) folder for sample code for key SDK functionality.

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

These methods allow you to read data about events, transactions or current state on ImmutableX StarkEx Layer 2. They do not require any user authentication because no state is being changed.

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

### Generating Stark (Layer 2) keys

Stark keys are required to transact on ImmutableX's StarkEx Layer 2. They are the equivalent of Ethereum keys on L1 and allow users to sign transactions like trade, transfer, etc.

#### Key registration

On ImmutableX, the goal of generating a Stark key is to [register](https://docs.x.immutable.com/docs/how-to-register-users/) a mapping between the Stark public key and the user's Ethereum public key so that transactions requiring both L1 and L2 signers can be executed by users.

#### How to generate Stark keys on ImmutableX

ImmutableX provides two Stark key generation methods:
| Type of Stark key generated: | User connection methods: | When to use this method: | ImmutableX tools: |
| --- | --- | --- | --- |
| [Deterministic](#generating-or-retrieving-a-deterministic-key) - generated using the user's Ethereum key as a seed (which means that the same Ethereum key will always generate the same Stark key) | Users connect with their L1 wallet (ie. Metamask), as the L2 key can simply be obtained from the L1 key. | ***User experience*** - users don't have to store or remember Stark keys.<br/><br/> ***Interoperability*** - when generating Stark keys for a user, think about how else they will use these keys. If they will be connecting to other applications and those applications connect to users' Stark keys (L2 wallets) via an L1 wallet, then it is best that their Stark keys are generated using this method.  | [Link SDK](https://docs.x.immutable.com/docs/link-setup)<br/><br/>Core SDK's [`generateLegacyStarkPrivateKey()`](https://github.com/immutable/imx-core-sdk/blob/main/src/utils/stark/starkCurve.ts#L152) method |
| [Random and non-reproducible](#generating-a-random-non-deterministic-key) - not generated from a user's Ethereum key | Once this Stark key is [registered](#) on ImmutableX (mapped to an Ethereum key), the Stark key owner needs to know and input this.<br/><br/>**🚨 NOTE:** If this key isn't persisted and stored by the user, it cannot be recovered and a new key cannot be re-registered. | ***Security*** - a Stark key generated using this method is completely independent of an Ethereum key, so the compromise of an Ethereum key does not compromise a user's corresponding Stark key.<br/><br/>***Isolated use-case*** - this method is ideal for keys that are only used for one particular function, ie. in the backend of an application that allows tokens to be minted from a collection registered with this key. | <br/><br/>Core SDK's [`generateStarkPrivateKey()`](https://github.com/immutable/imx-core-sdk/blob/main/src/utils/stark/starkCurve.ts#L108) method |

#### Generating or retrieving a deterministic key

If your user has a Stark key that was generated using the deterministic method, the Core SDK provides a way for you to retrieve this key using the [generateLegacyStarkPrivateKey()](https://github.com/immutable/imx-core-sdk/blob/83f800956f541f338b3267ec7cb16e039182dfa6/src/utils/stark/starkCurve.ts#L152) method:
```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { generateLegacyStarkPrivateKey } from '@imtbl/core-sdk';

// Create Ethereum signer
const ethNetwork = 'goerli'; // Or 'mainnet'
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const ethSigner = new Wallet(YOUR_PRIVATE_ETH_KEY).connect(provider);

// Get the legacy Stark private key
const starkPrivateKey = await generateLegacyStarkPrivateKey(ethSigner);
```

#### Generating a random, non-deterministic key

The Core SDK also provides a way to generate a random, non-reproducible key using the [generateStarkPrivateKey()](/src/utils/stark/starkCurve.ts#L108) method:

#### 🚨🚨🚨 Warning 🚨🚨🚨
> If you generate your own Stark private key, you will have to persist it. The key is [randomly generated](/src/utils/stark/starkCurve.ts#L108) so **_cannot_** be deterministically re-generated.

```ts
import { generateStarkPrivateKey } from '@imtbl/core-sdk';

const starkPrivateKey = generateStarkPrivateKey();
```

## Operations requiring user signatures

As ImmutableX enables applications to execute signed transactions on both Ethereum (Layer 1) and StarkEx (Layer 2), signers are required for both these layers. In order to generate an Ethereum or Stark signer, a user's Ethereum or Stark private key is required.

There are two types of operations requiring user signatures:

1. Transactions that update blockchain state
2. Operations that ImmutableX require authorization for

In order to get user signatures, applications need to [generate "signers"](#how-do-applications-generate-and-use-signers).

#### What are transactions that update blockchain state?

A common transaction type is the transfer of asset ownership from one user to another (ie. asset sale). These operations require users to sign (approve) them to prove that they are valid.

#### What are operations that require authorization?

These operations add to or update data in Immutable's databases and typically require the authorization of an object's owner (ie. a user creating a project on ImmutableX).

### How do applications generate and use signers?

Signers are abstractions of user accounts that can be used to sign transactions. A user's private key is required to generate them.

There are two ways to get signers in your application:
1. [Generate your own by obtaining and using the user's private keys](#1-generate-your-own-signers)
2. [Use our Wallet SDK to connect to a user's wallet application](#2-generate-signers-using-the-wallet-sdk)

The first option, where an application obtains a user's private key directly, is risky because these keys allow anyone in possession of them full control of an account.

The second option provides an application with an interface to the user's account by prompting the user to connect with their wallet application (ie. mobile or browser wallet). Once connected the app can begin asking the user to sign transactions and messages without having to reveal their private key.

### 1. Generate L1 and L2 signers

The Core SDK provides functionality for applications to generate Stark (L2) [signers](/src/utils/stark/starkSigner.ts#L60).

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { createStarkSigner } from '@imtbl/core-sdk';

// Create Ethereum signer
const ethNetwork = 'goerli'; // Or 'mainnet'
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const ethSigner = new Wallet(YOUR_PRIVATE_ETH_KEY).connect(provider);

// Create Stark signer
const starkSigner = createStarkSigner(YOUR_STARK_PRIVATE_KEY);
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

ImmutableX is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on ImmutableX, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the ImmutableX platform.

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

ImmutableX is open to all to build on, with no approvals required. If you want to talk to us to learn more, or apply for developer grants, click below:

[Contact us](https://www.immutable.com/contact)

### Project support

To get help from other developers, discuss ideas, and stay up-to-date on what's happening, become a part of our community on Discord.

[Join us on Discord](https://discord.gg/TkVumkJ9D6)

You can also join the conversation, connect with other projects, and ask questions in our ImmutableX Discourse forum.

[Visit the forum](https://forum.immutable.com/)

#### Still need help?

You can also apply for marketing support for your project. Or, if you need help with an issue related to what you're building with ImmutableX, click below to submit an issue. Select _I have a question_ or _issue related to building on ImmutableX_ as your issue type.

[Contact support](https://support.immutable.com/hc/en-us/requests/new)

## Webpack 5

Webpack 5 no longer uses NodeJS polyfills, such as `crypto`, which in turn breaks the Core SDK resulting in errors such as
`Module not found: Error: Can't resolve 'crypto'`.

To fix this, you can use a webpack polyfill plugin like [node-polyfill-webpack-plugin](https://www.npmjs.com/package/node-polyfill-webpack-plugin), or if you're using `create-react-app` in your project which hides the Webpack config, [this blog post](https://alchemy.com/blog/how-to-polyfill-node-core-modules-in-webpack-5) explains how to add polyfills to your CRA project.
