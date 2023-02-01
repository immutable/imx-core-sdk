import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get a list of orders
    const listOrdersResponse = await client.listOrders({
      buyTokenId: '',
      buyTokenAddress: '',
    });

    console.log('listOrdersResponse', JSON.stringify(listOrdersResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
