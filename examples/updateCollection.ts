import { Config, ImmutableX, UpdateCollectionRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    const walletConnection = await generateWalletConnection('goerli');

    const collectionAddress = ''; // collection address
    
    const collectionUpdateRequest: UpdateCollectionRequest = {
        collection_image_url: '', // must be valid url or request will fail
        description: '', // string
        icon_url: '', // must be valid url or request will fail
        metadata_api_url: '', // must be valid url or request will fail
        name : '' // string
    };
    
    const collectionUpdateResponse = await client.updateCollection(walletConnection.ethSigner, collectionAddress, collectionUpdateRequest);

    console.log('collectionUpdateResponse', JSON.stringify(collectionUpdateResponse, null, 4));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
