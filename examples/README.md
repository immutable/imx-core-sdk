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

## Deposit NFT

Update [depositNft.ts](./depositNft.ts#L14) with your token address and id then run

```sh
yarn deposit-nft
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

## List mints

Update [listMints.ts](./listMints.ts#L13) with your mint query details then run

```sh
yarn list-mints
```

## Get mint

Update [getMint.ts](./getMint.ts#L13) with your mint id then run

```sh
yarn get-mint
```

## Create order

Update [createOrder.ts](./createOrder.ts#L9) with your order details then run

```sh
yarn create-order
```

## List orders

Update [listOrders.ts](./listOrders.ts#L11) with your order query details then run

```sh
yarn list-orders
```

## Get order

Update [getOrder.ts](./getOrder.ts#L11) with your order id then run

```sh
yarn get-order
```

## Cancel order

Update [cancelOrder.ts](./cancelOrder.ts#L10) with your order id then run

```sh
yarn cancel-order
```

## Create trade

Update [createTrade.ts](./createTrade.ts#L9) with your trade details then run

```sh
yarn create-trade
```

## List trades

Update [listTrades.ts](./listTrades.ts#L10) with your trade query details then run

```sh
yarn list-trades
```

## Get trade

Update [getTrade.ts](./getTrade.ts#L10) with your trade id then run

```sh
yarn get-trade
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

## Create exchange transfer

Update [createExchangeTransfer.ts](./createExchangeTransfer.ts#L10) with your exchange transfer details then run

```sh
yarn create-exchange-transfer
```

## Create primary nft checkout with moonpay

Update [create-nft-primary-txn.ts](./create-nft-primary-txn.ts#L10) with your exchange transfer details then run

```sh
yarn create-nft-primary-txn
```

## List tokens

Update [listTokens.ts](./listTokens.ts#L10) with your token query details then run

```sh
yarn list-tokens
```

## Get token

Update [getToken.ts](./getToken.ts#L10) with the token contract address then run

```sh
yarn get-token
```