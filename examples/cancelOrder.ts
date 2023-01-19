import { ImmutableX, Config, GetSignableCancelOrderRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const orderParams: GetSignableCancelOrderRequest = {
    order_id: 12345, // fill in order id
  };

  try {
    const cancelOrderResponse = await imxClient.cancelOrder(
      walletConnection,
      orderParams,
    );

    console.log('cancelOrderResponse', cancelOrderResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();