import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    // Batch Transfer NFT
    const batchTransferResponse = await imxClient.batchNftTransfer(
      walletConnection,
      [
        {
          receiver: '',
          tokenId: '',
          tokenAddress: '',
        },
      ],
    );

    console.log('batchTransferResponse', batchTransferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
