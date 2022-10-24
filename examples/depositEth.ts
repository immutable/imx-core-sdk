import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Deposit ETH
    const depositResponse = await client.deposit(walletConnection.ethSigner, {
      type: 'ETH',
      amount: '',
    });

    console.log('depositResponse', depositResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
