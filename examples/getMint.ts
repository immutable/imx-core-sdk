import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get details of a mint with the mint ID (transaction_id returned from listMints)
    const getMintResponse = await client.getMint({
      id: ''
    });

    console.log('getMintResponse', JSON.stringify(getMintResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();