import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get details of a mint with the mint ID (transaction_id returned from listMints)
    const getMintResponse = await client.getMint({
      id: '',
    });

    // getMintResponse will be an array containing only one result
    const mintResult = getMintResponse[0];

    console.log('getMintResponse', JSON.stringify(mintResult));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
