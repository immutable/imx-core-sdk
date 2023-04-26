import { Config, ImmutableX, UnsignedOrderRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const listingParams: UnsignedOrderRequest = {
    buy: {
      type: 'ETH',
      amount: '',
    },
    sell: {
      type: 'ERC721',
      tokenAddress: '',
      tokenId: '',
    },
  };

  // When creating a bid, the buy and sell token and amount is reversed.
  // For example:
  // const bidParams: UnsignedOrderRequest = {
  //   buy: {
  //     type: 'ERC721',
  //     tokenAddress: '',
  //     tokenId: '',
  //   },
  //   sell: {
  //     type: 'ETH',
  //     amount: '',
  //   },
  // };

  try {
    const orderResponse = await imxClient.createOrder(
      walletConnection,
      listingParams,
    );

    console.log('orderResponse', orderResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
