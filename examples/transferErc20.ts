import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('sepolia');

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    const transferResponse = await imxClient.transfer(walletConnection, {
      receiver: '',
      type: 'ERC20',
      tokenAddress: '',
      amount: '',
    });

    console.log('transferResponse', transferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
