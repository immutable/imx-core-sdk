<div align="center">
  <p align="center">
    <a  href="https://docs.x.immutable.com/docs">
      <img src="https://cdn.dribbble.com/users/1299339/screenshots/7133657/media/837237d447d36581ebd59ec36d30daea.gif" width="280"/>
    </a>
  </p>
</div>

---

# Immutable Core SDK

[![npm version](https://badge.fury.io/js/@imtbl%2Fcore-sdk.svg)](https://www.npmjs.com/package/@imtbl/core-sdk) [![Maintainability](https://api.codeclimate.com/v1/badges/219466ee5269620167e5/maintainability)](https://codeclimate.com/repos/62848fd8d4420d01b6002210/maintainability)

The Immutable Core SDK provides convenient access to Immutable's APIs and smart contracts to help projects build better web3 games and marketplaces.

Currently, our SDK supports interactions with our application-specific rollup based on StarkWare's StarkEx. In future, we'll be adding StarkNet support across our platform.

## Documentation

See the [developer guides](https://docs.x.immutable.com) for information on building on Immutable X.

See the [API reference documentation](https://docs.x.immutable.com/reference) for more information on our API's.

## Installation

```sh
npm install @imtbl/core-sdk --save
# or
yarn add @imtbl/core-sdk
```

## Quickstart

TODO: explain initialisation of the SDK.

```ts
import { ImmutableX, Config } from '@imtbl/core-sdk';

const config = Config.ROPSTEN; // or PRODUCTION
const client = new ImmutableX(config);

const listCollectionsResponse = await client.listCollections({
  pageSize: 2,
});
const firstCollection = listCollectionsResponse.data.result[0];

const collectionAssetsResponse = await client.listAssets({
  collection: collectionOne.address,
  pageSize: 10,
});
```

TODO: what other read only calls can be made? Segueway to transactions requiring user's signatures

## Transactions requiring user's signatures

In order to get user's signature eth and stark signers need to be created.
If you build a frontend app it's recommended to use Wallet/Link SDKs.

TODO: insert code reference to Wallet SDK.

Creating signers without Wallet/Link SDK.

###

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import { Utils, ImmutableX, Config } from '@imtbl/core-sdk';

// Setup a provider
const ethNetwork = 'ropsten'; // or mainnet;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);

// Create signers
const ethWallet = new Wallet(YOUR_PRIVATE_ETH_KEY);
const ethSigner = ethWallet.connect(provider);
const starkSigner = Utils.createStarkSigner(YOUR_PRIVATE_STARK_KEY);
```

Signers are used to authenticate certain IMX operations (e.g. create Project/Collection)

```ts
const createProjectResponse = await imxClient.createProject(ethSigner, {
  company_name: 'My Company',
  contact_email: 'project@company.com',
  name: 'Project name',
});

const projectId = createProjectResponse.data.id.toString();
const getProjectResponse = await imxClient.getProject(ethSigner, projectId);
```

Signers are also reuired to move assets between L1 and L2 (deposit/withdraw)

```ts
const depositResponse = await client.deposit(ethSigner, {
  type: 'ETH',
  amount: '500000000000000000', // amount in Wei
});
```

and to sign transaction that update ownership of assets

```ts
const signers = { ethSigner, starkSigner };
const orderResponse = await client.createOrder(signers, {
  buy: {
    type: 'ETH',
    amount: '1230000000000000000', // amount to buy the NFT (asset)
  },
  sell: {
    type: 'ERC721',
    tokenAddress: '0x0fb969a08c7c39ba99c1628b59c0b7e5611bd396',
    tokenId: '5',
  },
});
```

### Contract Requests

Immutable X is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on Immutable X, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the Immutable X platform.

[See all smart contract available in the Core SDK](#smart-contract-autogeneration)

```ts
import { Contracts } from '@imtbl/core-sdk';

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

## Contributing

### Setup local developer environment

```sh
# install dependencies
yarn install
yarn build
# run tests
yarn test
```

Check out how the [Release Process](https://github.com/immutable/imx-core-sdk/#release-process) works

### API Autogenerated Code

We use OpenAPI (formally known as Swagger) to auto-generate the API clients that connect to the [public APIs](https://docs.x.immutable.com/reference).
The OpenAPI spec is retrieved from https://api.x.immutable.com/openapi and also saved in the repo. To re-generate the API client run

```make
make generate-openapi-prod
```

### Changelog Management

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

### [Unreleased]

#### Added

for new features.

#### Changed

for changes in existing functionality.

#### Deprecated

for soon-to-be removed features.

#### Removed

for now removed features.

#### Fixed

for any bug fixes.

...
```

The package.json will hold the value of the previous release

```json

"version": "0.3.0",

```

### Release Process

#### Main Release

1. Merge your changes
2. Check and update your local main branch
3. Run `yarn release`
   - Choose release type (patch|minor|major)
   - Choose `yes` to use changelog and `package.json`
   - Add a tag if required - this step can be skipped by replying `no`
   - Push to remote by using `yes`

#### Alpha Release

1. Go to https://github.com/immutable/imx-core-sdk/actions/workflows/publish.yaml and find the "Run workflow" button on the left.
2. Click the button and select the branch from dropdown.
3. Add a tag that is greater than last published main tag and append with `-alpha.x`. The `x` is the version for this particular alpha release. For example, if the last published is `1.2.0`, use `1.2.1-alpha.1` or `1.3.0-alpha.1` depending on type of your changes.
4. Click "run workflow" button. This will trigger a "NPM Publish" action for alpha release 🎉
