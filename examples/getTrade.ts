import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get details of a trade with the trade ID
    const getTradeResponse = await client.getTrade({
      id: ''
    });

    console.log('getTradeResponse', JSON.stringify(getTradeResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();