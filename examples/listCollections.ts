import {
  Config,
  ImmutableX,
  CollectionsApiListCollectionsRequest,
} from '@imtbl/core-sdk';

(async () => {
  try {
    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    const collectionListRequest: CollectionsApiListCollectionsRequest = {
      pageSize: 200,
      orderBy: 'name', //'name' | 'address' | 'project_id' | 'created_at' | 'updated_at'
      direction: 'asc', // asc | desc
      blacklist: '', // list of collections to be excluded seperated by comma
      whitelist: '', // list of collections to be included seperated by comma
      keyword: '', // word to search for in description and collection name
      cursor: '', // cursor
    };

    const collectionListResponse = await client.listCollections(
      collectionListRequest,
    );

    console.log(
      'collectionListResponse',
      JSON.stringify(collectionListResponse, null, 4),
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
