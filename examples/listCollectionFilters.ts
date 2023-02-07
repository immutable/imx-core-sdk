import {
  Config,
  ImmutableX,
  CollectionsApiListCollectionFiltersRequest,
} from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.PRODUCTION);

    const collectionListFiltersRequest: CollectionsApiListCollectionFiltersRequest =
      {
        pageSize: 200, // max size 200
        address: '', // collection address
        nextPageToken: '', // cursor
      };

    const collectionListFiltersResponse = await client.listCollectionFilters(
      collectionListFiltersRequest,
    );

    console.log(
      'collectionListFiltersResponse',
      JSON.stringify(collectionListFiltersResponse, null, 4),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
