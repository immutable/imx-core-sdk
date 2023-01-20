import { ImmutableX, Config, MetadataApiGetMetadataSchemaRequest } from '@imtbl/core-sdk';

(async () => {
  const imxClient = new ImmutableX(Config.SANDBOX);

  const metadataSchemaParams: MetadataApiGetMetadataSchemaRequest = {
    address: '' // Collection contract address
  };

  try {
    const metadataSchemaResponse = await imxClient.getMetadataSchema(
      metadataSchemaParams
    )


    console.log('metadataSchemaResponse', metadataSchemaResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();