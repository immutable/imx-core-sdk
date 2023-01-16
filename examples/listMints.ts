import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Get a list of mints
    const listMintsResponse = await client.listMints({
      //pageSize: 100,
      //cursor: '',
      //orderBy: '',
      //direction: '', 
      //user: '',
      //status: '',
      //minTimestamp: '',
      //maxTimestamp: '',
      //tokenType: '',
      //tokenId: '',
      //assetId: '',
      //tokenName: '',
      //tokenAddress: '',
      //minQuantity: '',
      //maxQuantity: '',
      //metadata: ''
    });

    console.log('listMintsResponse', JSON.stringify(listMintsResponse));
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();