import { ImmutableX, Config, AddMetadataSchemaToCollectionRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const collectionAddress: string = '';
  const request: AddMetadataSchemaToCollectionRequest = {
    contract_address: collectionAddress,
    metadata:[
      {
        filterable: false, // Sets the metadata as filterable
        name: '', // Name of the metadata key
        type:'text', // Type of the metadata. Values: "enum", "text", "boolean", "continuous", "discrete" | Default: "text". Src: https://docs.x.immutable.com/docs/asset-metadata#property-type-mapping
      }
    ]
  }

  try {
    const addMetadataSchemaToCollectionResponse = await imxClient.addMetadataSchemaToCollection(
      walletConnection.ethSigner,
      collectionAddress,
      request
    )

    console.log('addMetadataSchemaToCollectionResponse', addMetadataSchemaToCollectionResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();