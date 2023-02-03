import { ImmutableX, Config, AssetsApiGetAssetRequest } from '@imtbl/core-sdk';

(async () => {
  const imxClient = new ImmutableX(Config.SANDBOX);

  const assetParams: AssetsApiGetAssetRequest = {
    tokenAddress: '', //Address of the ERC721 contract
    tokenId: '', //Either ERC721 token ID or internal IMX ID
    includeFees: false //Set flag to include fees associated with the asset
  };

  try {
    const assetResponse = await imxClient.getAsset(
      assetParams
    );

    console.log('assetResponse', assetResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();