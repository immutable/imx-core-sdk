import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const collectionAddress: string = '';
  const pageSize: number = 200;
  const cursor: string = '';


  try {
    const listMetadataRefreshResponse = await imxClient.listMetadataRefreshes(
      walletConnection.ethSigner,
      collectionAddress,
      pageSize,
      cursor
    );

    console.log('listMetadataRefreshResponse', listMetadataRefreshResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();