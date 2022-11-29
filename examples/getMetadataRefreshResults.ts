import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const refreshId: string = '7b6855ac-2431-4040-aff1-931d03d53643';

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