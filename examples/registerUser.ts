import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    await imxClient.registerOffchain(walletConnection);
    console.log('Successfully registered user.');

    const ethAddress = await walletConnection.ethSigner.getAddress();
    const response = await imxClient.getUser(ethAddress);

    console.log('User account:', response);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
