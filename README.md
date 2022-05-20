<div align="center">
  <br>
  <br>
  <a  href="https://docs.x.immutable.com/docs">
    <img src="images/imx-logo.png">
  </a>
  <br>
  <br>
</div>

---

# Immutable Core SDK

The Immutable Core SDK provides convenient access to the Immutable API's and Ethereum contract methods for applications written on the Immutable X platform.

## Documentation

See the [developer guides](https://docs.x.immutable.com/docs) for information on building on Immutable X.

See the [API reference documentation](https://docs.x.immutable.com/reference) for more information on our API's.

## Installation

Install the package with:

```sh
npm install @imtbl/core-sdk --save
# or
yarn add @imtbl/core-sdk
```

## Usage

### Configuration

A configuration object is required to be passed into Core SDK requests. This can be obtained by using the `getConfig` function available within the Core SDK. You are required to select the Ethereum network. The Immutable X platform currently supports `ropsten` for testing and `mainnet` for production.

```ts
import { AlchemyProvider } from '@ethersproject/providers';
import { getConfig } from '@imtbl/core-sdk';

const ethNetwork = 'ropsten'; // or mainnet;

// Use the helper function to get the config
const config = getConfig(ethNetwork);

// Setup a provider and signer
const privateKey = YOUR_PRIVATE_KEY;
const provider = new AlchemyProvider(ethNetwork, YOUR_ALCHEMY_API_KEY);
const signer = new Wallet(privateKey).connect(provider);
```

### Standard API Requests

The Core SDK includes classes that interact with the Immutable X APIs.

```ts
// Standard API request example usage
import { getConfig, AssetsApi } from '@imtbl/core-sdk';

const getYourAsset = async (tokenAddress: string, tokenId: string) => {
  const config = getConfig('ropsten');
  const assetsApi = new AssetsApi(config.api);

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

### L1 Signing

[TODO]

### Contract Requests

Immutable X is built as a ZK-rollup in partnership with StarkWare. We chose the ZK-rollups because it is the only solution capable of scale without compromise. This means whenever you mint or trade an NFT on Immutable X, you pay zero gas, and the validity of all transactions are directly enforced by Ethereum’s security using zero-knowledge proofs -- the first “layer 2” for NFTs on Ethereum.

The Core SDK provides interfaces for all smart contracts required to interact with the Immutable X platform.

[See all smart contract available in the Core SDK](#smart-contract-autogeneration)

```ts
import { Core__factory } from '@imtbl/core-sdk';

// Get instance of core contract
const contract = Core__factory.connect(config.starkContractAddress, signer);

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
import { getConfig, Workflows } from '@imtbl/core-sdk';

const alchemyApiKey = YOUR_ALCHEMY_API_KEY;
const ethNetwork = 'ropsten';

// Setup provider and signer
const provider = new AlchemyProvider(ethNetwork, alchemyApiKey);
const signer = new Wallet(privateKey).connect(provider);

// Configure Core SDK Workflow class
const config = getConfig(ethNetwork);
const workflows = new Workflows(config);

const registerUser = async () => {
  const response = await workflows.registerOffchain(signer);
  console.log(response);
};
```

The workflow can be found in the [workflows directory](src/workflows/).

### Available Workflows

The current workflow methods exposed from the `Workflow` class.

- batchNftTransfer
- burn
- deposit
- depositERC20
- depositERC721
- depositEth
- getBurn
- isRegisteredOnchain
- mint
- registerOffchain
- transfer

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

Fore example, instead of making subsequent transaction requests to the Core contract, i.e. `registerUser` and `depositNft`, a single transaction request can be made to the proxy Registration contract - `registerAndWithdrawNft`.

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
...
"version": "0.3.0",
...
```

When PR is ready for review, the submitter should run:

`yarn release [patch | major | minor]`

- Choose release type (patch|minor|major)
- Choose yes to use changelog and package.json
- Add a tag if required - this step can be skipped by replying `no`
- Push to remote by using yes

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
