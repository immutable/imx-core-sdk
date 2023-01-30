import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get a list of tokens
    const listTokensResponse = await client.listTokens({
      orderBy: 'symbol',
      symbols: "IMX,ETH"
    });

    console.log('listTokensResponse', JSON.stringify(listTokensResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();