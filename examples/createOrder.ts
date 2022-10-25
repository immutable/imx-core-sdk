import { ImmutableX, Config, UnsignedOrderRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const orderParams: UnsignedOrderRequest = {
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

  try {
    const orderResponse = await imxClient.createOrder(
      walletConnection,
      orderParams,
    );

    console.log('orderResponse', orderResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
