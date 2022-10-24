import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/wallet-connection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    const transferResponse = await imxClient.transfer(
      walletConnection,
      {
        receiver: '',
        type: 'ETH',
        amount: '',
      },
    );

    console.log('transferResponse', transferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
