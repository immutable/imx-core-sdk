import { ImmutableX, Config, MetadataSchemaRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const collectionAddress: string = '';
  const name: string = '';
  const request: MetadataSchemaRequest = {
    filterable: false, // Sets the metadata as filterable
    name: '', // Name of the metadata key
    type:'text', // Type of the metadata. Values: "enum", "text", "boolean", "continuous", "discrete" | Default: "text". Src: https://docs.x.immutable.com/docs/asset-metadata#property-type-mapping 
  }

  try {
    const updateMetadataSchemaByNameResponse = await imxClient.updateMetadataSchemaByName(
      walletConnection.ethSigner,
      collectionAddress,
      name,
      request
    )

    console.log('updateMetadataSchemaByNameResponse', updateMetadataSchemaByNameResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();