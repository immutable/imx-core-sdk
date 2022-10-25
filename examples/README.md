<div align="center">
  <a href="https://www.immutable.com">
    <img width="150" src="https://assets-global.website-files.com/5f7eec37ff782e797edabe11/5f8d36771ffcf8c91b03e7f4_dark.svg">
  </a>
  <br>
  <br>
</div>

---

# Examples
This folder contains code examples for usage of `@imtbl/core-sdk`

# How to run the sample code

```sh
git clone https://github.com/immutable/imx-core-sdk.git

cd imx-core-sdk/examples

yarn install
```

Create a `.env` file similar to [.env.example](./.env.example)

```sh
cp .env.example .env
```

Once you have saved the necessary values in your `.env` file, follow the instructions below to run.

## Deposit Eth

Update [depositEth.ts](./depositEth.ts#L14) with your deposit amount then run

```sh
yarn deposit-eth
```

## Prepare Eth Withdrawal

Update [createEthWithdrawal.ts](./createEthWithdrawal.ts#L12) with your withdrawal amount then run

```sh
yarn create-eth-withdrawal
```


## Complete Eth Withdrawal

Check [completeEthWithdrawal.ts](./completeEthWithdrawal.ts#L12) then run

```sh
yarn complete-eth-withdrawal
```

## Create project

Update [createProject.ts](./createProject.ts#L9) with your project details then run

```sh
yarn create-project
```

## Create collection

Update [createCollection.ts](./createCollection.ts#L15) with your collection details then run

```sh
yarn create-collection
```

## Mint

Update [mint.ts](./mint.ts#L9) with your minting details then run

```sh
yarn mint
```

## Create order

Update [createOrder.ts](./createOrder.ts#L9) with your order details then run

```sh
yarn create-order
```

## Create trade

Update [createTrade.ts](./createTrade.ts#L9) with your trade details then run

```sh
yarn create-trade
```

## Transfer Nfts

Update [transferNfts.ts](./transferNfts.ts#L13) with your transfer details then run

```sh
yarn transfer-nfts
```

## Transfer Eth

Update [transferEth.ts](./transferEth.ts#L10) with your transfer details then run

```sh
yarn transfer-eth
```

## Transfer ERC20

Update [transferErc20.ts](./transferErc20.ts#L10) with your transfer details then run

```sh
yarn transfer-erc20
```
