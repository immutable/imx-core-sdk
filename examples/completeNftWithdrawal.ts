import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('sepolia');

    const client = new ImmutableX(Config.SANDBOX);

    const completeWithdrawalResponse = await client.completeWithdrawal(
      walletConnection,
      {
        type: 'ERC721',
        tokenAddress: '',
        tokenId: '',
      },
    );

    console.log('completeWithdrawalResponse', completeWithdrawalResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
