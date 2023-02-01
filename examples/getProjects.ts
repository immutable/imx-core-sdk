import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const client = new ImmutableX(Config.SANDBOX);
    const wallet = await generateWalletConnection('goerli');
    const pageSize = 200;
    const projects = await client.getProjects(wallet.ethSigner, pageSize);

    console.log('projects', projects);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
