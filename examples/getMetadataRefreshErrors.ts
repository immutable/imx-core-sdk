import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const refreshId: string = '';
  const pageSize: number = 200;
  const cursor: string = '';

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