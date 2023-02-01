import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    // IMX class client
    const client = new ImmutableX(Config.SANDBOX);

    // Deposit ERC721
    const depositResponse = await client.deposit(walletConnection.ethSigner, {
      type: 'ERC721',
      tokenId: '', // TOKEN_ID
      tokenAddress: '', // COLLECTION_CONTRACT_ADDRESS
    });

    console.log('depositResponse', depositResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
