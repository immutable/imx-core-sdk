import { Config, ImmutableX, TokenAmount } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('sepolia');

    const client = new ImmutableX(Config.SANDBOX);

    const tokenAmount: TokenAmount = {
      type: 'ERC721',
      tokenAddress: '', // contract address of token
      tokenId: '', // token ID
    };

    const createWithdrawalResponse = await client.prepareWithdrawal(
      walletConnection,
      tokenAmount,
    );

    console.log('WithdrawalResponse', createWithdrawalResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
