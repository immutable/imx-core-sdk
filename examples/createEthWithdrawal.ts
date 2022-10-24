import { Config, ImmutableX, TokenAmount } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    const client = new ImmutableX(Config.SANDBOX);

    const tokenAmount: TokenAmount = {
      type: 'ETH',
      amount: '',
    };

    const createWithdrawalResponse = await client.prepareWithdrawal(
      walletConnection,
      tokenAmount,
    );

    console.log('createWithdrawalResponse', createWithdrawalResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
