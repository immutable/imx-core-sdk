import {
  ImmutableX,
  Config,
  AssetsApiListAssetsRequest,
} from '@imtbl/core-sdk';

(async () => {
  const imxClient = new ImmutableX(Config.SANDBOX);

  const assetParams: AssetsApiListAssetsRequest = {
    collection: '', // Collection contract address,
    name: '', // Name of the asset to search
    user: '', // Ethereum address of the user who owns these assets
    pageSize: 200, // Page size of the result
    auxiliaryFeePercentages: '', // Comma separated string of fee percentages that are to be paired with auxiliary_fee_recipients
    auxiliaryFeeRecipients: '', // Comma separated string of fee recipients that are to be paired with auxiliary_fee_percentages
    buyOrders: false, //Set flag to true to fetch an array of buy order details with accepted status associated with the asset
    cursor: '', // Cursor for pagination
    direction: '', // Direction to sort (asc/desc)
    includeFees: false, // Set flag to include fees associated with the asset
    metadata: '', // URL JSON-encoded metadata filters for these assets. Javascript example: encodeURI(JSON.stringify({'proto':['1147'],'quality':['Meteorite']}))
    orderBy: 'name', // Property to sort by | Allowed values: updated_at, name
    sellOrders: false, // Set flag to true to fetch an array of sell order details with accepted status associated with the asset
    status: 'imx', // Status of these assets | Allowed values: eth, imx, preparing_withdrawal, withdrawable, burned
    updatedMaxTimestamp: '', // Maximum timestamp for when these assets were last updated, in ISO 8601 UTC format. Example: '2022-05-27T00:10:22Z'
    updatedMinTimestamp: '', // Minimum timestamp for when these assets were last updated, in ISO 8601 UTC format. Example: '2022-05-27T00:10:22Z'
  };

  try {
    const assetResponse = await imxClient.listAssets(assetParams);

    console.log('assetResponse', assetResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
