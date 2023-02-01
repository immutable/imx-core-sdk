import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const refreshId: string = ''; // The metadata refresh ID returned from creating a metadata refresh request

  try {
    const metadataRefreshResultResponse = await imxClient.getMetadataRefreshResults(
      walletConnection.ethSigner,
      refreshId,
    );

    console.log('metadataRefreshResultResponse', metadataRefreshResultResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();