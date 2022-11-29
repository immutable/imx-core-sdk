import { ImmutableX, Config,CreateMetadataRefreshRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const metadataRefreshParams: CreateMetadataRefreshRequest = {
    collection_address: "0x07f68c5cda94347bf1c34ce398330aa42c0842b7",
    token_ids:["1","2","3","4","5","6"] 
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