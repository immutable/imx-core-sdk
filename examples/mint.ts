import { ImmutableX, Config, UnsignedMintRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const mintParams: UnsignedMintRequest = {
    contract_address: '',
    users: [
      {
        tokens: [{ id: '', blueprint: '{onchain-metadata}' }],
        user: '',
      },
    ],
  };

  try {
    const mintResponse = await imxClient.mint(
      walletConnection,
      mintParams,
    );

    console.log('mintResponse', JSON.stringify(mintResponse));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
