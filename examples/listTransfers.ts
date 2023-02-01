import {
  Config,
  ImmutableX,
  TransfersApiListTransfersRequest,
} from '@imtbl/core-sdk';

// Parameters that have been commented out cannot be left empty.
// If you want to use them, uncomment and add values so the request doesn't fail

(async () => {
  try {
    const client = new ImmutableX(Config.SANDBOX);

    const transferRequest: TransfersApiListTransfersRequest = {
      pageSize: 200, // max page size is 200
      tokenType: '', // ERC20, ERC721, Eth
      cursor: '', // cursor
      direction: '', //asc or desc
      user: '', // eth address of user who submittedd withdrawal request
      tokenAddress: '', // contract address of token
      tokenId: '', // token ID of NFT if applicable
      orderBy: 'transaction_id', // transaction_id, updated_at, created_at
      receiver: '', // wallet address of receiver
      status: 'success', // failure / success
      // metadata: '%7B%22god%22%3A%5B%22magic%22%5D%7D',
      // maxQuantity: '', // max quantity of asset transferred
      // minQuantity: '', // min quantity of asset transferred
      // maxTimestamp: '', // Maximum timestamp for this transfer, in ISO 8601 UTC format. Example: &#39;2022-05-27T00:10:22Z&#39
      // minTimestamp: '' //Minimum timestamp for this transfer, in ISO 8601 UTC format. Example: &#39;2022-05-27T00:10:22Z&#39
    };
    const transferResponse = await client.listTransfers(transferRequest);

    console.log('transferResponse', JSON.stringify(transferResponse, null, 4));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
