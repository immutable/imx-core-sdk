import { Config, ImmutableX } from '@imtbl/core-sdk';

(async () => {
  try {
    const client = new ImmutableX(Config.SANDBOX);

    const ethAddress = ''; // ethereum wallet address
    const user = await client.getUser(ethAddress);

    console.log('user', user);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
