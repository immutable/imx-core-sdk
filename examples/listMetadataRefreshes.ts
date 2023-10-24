import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('sepolia');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const collectionAddress = ''; // Collection address
  const pageSize = 200; // Page size of the result
  const cursor = ''; // Cursor used for pagination of results

  try {
    const listMetadataRefreshResponse = await imxClient.listMetadataRefreshes(
      walletConnection.ethSigner,
      collectionAddress,
      pageSize,
      cursor,
    );

    console.log('listMetadataRefreshResponse', listMetadataRefreshResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
