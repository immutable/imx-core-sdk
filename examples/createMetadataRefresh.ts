import { ImmutableX, Config,CreateMetadataRefreshRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const metadataRefreshParams: CreateMetadataRefreshRequest = {
    collection_address: '', // The collection contract address
    token_ids:[] // The tokens to refresh
  };

  try {
    const metadataRefreshResponse = await imxClient.createMetadataRefresh(
      walletConnection.ethSigner,
      metadataRefreshParams,
    );

    console.log('metadataRefreshResponse', metadataRefreshResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();