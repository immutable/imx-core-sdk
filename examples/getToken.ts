import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get details of a token with the token contract address
    const getTokenResponse = await client.getToken({
      address: '0x1facdd0165489f373255a90304650e15481b2c85'
    });

    console.log('getTokenResponse', JSON.stringify(getTokenResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();