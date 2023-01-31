import { Config, ImmutableX } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  try {
    const walletConnection = await generateWalletConnection('goerli');

    const client = new ImmutableX(Config.SANDBOX);

    const starkPublicKey = await walletConnection.starkSigner.getAddress();

    const completeWithdrawalResponse = await client.completeWithdrawal(
      walletConnection.ethSigner,
      starkPublicKey,
      {
        type: 'ERC20',
        tokenAddress: ''    
      },
    );

    console.log('completeWithdrawalResponse', completeWithdrawalResponse);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
