import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const refreshId: string = ''; // The metadata refresh ID returned from creating a metadata refresh request
  const pageSize: number = 200; // Page size of the result
  const cursor: string = ''; // Cursor used for pagination of results

  try {
    const getMetadataRefreshErrorsResponse = await imxClient.getMetadataRefreshErrors(
      walletConnection.ethSigner,
      refreshId,
      pageSize,
      cursor
    );

    console.log('getMetadataRefreshErrorsResponse', getMetadataRefreshErrorsResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();