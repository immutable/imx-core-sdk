<div align="center">
  <a href="https://www.immutable.com">
    <img width="150" src="https://assets-global.website-files.com/5f7eec37ff782e797edabe11/5f8d36771ffcf8c91b03e7f4_dark.svg">
  </a>
  <br>
  <br>
</div>

---

# Examples
This folder contains code examples on usage of `@imtbl/core-sdk`

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

Update [deposit-eth.ts](./deposit-eth.ts#L14) with your deposit amount then run

```sh
yarn deposit-eth
```

## Prepare Eth Withdrawal

Update [create-eth-withdrawal.ts](./create-eth-withdrawal.ts#L12) with your withdrawal amount then run

```sh
yarn create-eth-withdrawal
```


## Complete Eth Withdrawal

Check [complete-eth-withdrawal.ts](./complete-eth-withdrawal.ts#L12) then run

```sh
yarn complete-eth-withdrawal
```

## Create project

Update [create-project.ts](./create-project.ts#L9) with your project details then run

```sh
yarn create-project
```

## Create collection

Update [create-collection.ts](./create-collection.ts#L15) with your collection details then run

```sh
yarn create-collection
```

## Mint

Update [mint.ts](./mint.ts#L9) with your minting details then run

```sh
yarn mint
```

## Create order

Update [create-order.ts](./create-order.ts#L9) with your order details then run

```sh
yarn create-order
```

## Create trade

Update [create-trade.ts](./create-trade.ts#L9) with your trade details then run

```sh
yarn create-trade
```

## Transfer Nfts

Update [transfer-nfts.ts](./transfer-nfts.ts#L13) with your transfer details then run

```sh
yarn transfer-nfts
```

## Transfer Eth

Update [transfer-eth.ts](./transfer-eth.ts#L12) with your transfer details then run

```sh
yarn transfer-eth
```

## Transfer ERC20

Update [transfer-erc20.ts](./transfer-erc20.ts#L12) with your transfer details then run

```sh
yarn transfer-erc20
```

