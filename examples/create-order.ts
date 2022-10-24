import { ImmutableX, Config, UnsignedOrderRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/wallet-connection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const orderParams: UnsignedOrderRequest = {
    buy: {
      type: 'ETH',
      amount: '', // amount to buy the NFT (asset)
    },
    sell: {
      type: 'ERC721',
      tokenAddress: '',
      tokenId: '',
    },
  };

  try {
    // Sell NFT
    const orderResponse = await imxClient.createOrder(walletConnection, orderParams);

    console.log('orderResponse', orderResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
