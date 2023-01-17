import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Deposit ETH
    const depositResponse = await client.deposit(walletConnection, {
      type: 'ETH',
      amount: '1000000000000000000', //amount is in units of Wei i.e. 1 ETH = 1000000000000000000 Wei
    });

    console.log('depositResponse', depositResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
