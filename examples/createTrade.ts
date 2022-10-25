import { ImmutableX, Config, GetSignableTradeRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const tradeParams: GetSignableTradeRequest = {
    order_id: 0,
    user: '',
  };

  try {
    const tradeResponse = await imxClient.createTrade(
      walletConnection,
      tradeParams,
    );

    console.log('tradeResponse', tradeResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
