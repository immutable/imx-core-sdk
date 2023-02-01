import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get a list of trades
    const listTradesResponse = await client.listTrades({
      partyBTokenAddress: '',
      partyBTokenId: ''
    });

    console.log('listTradesResponse', JSON.stringify(listTradesResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();