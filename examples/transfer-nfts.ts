import { ImmutableX, Config } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/wallet-connection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  try {
    // Batch Transfer NFT
    const batchTransferResponse = await imxClient.batchNftTransfer(
      walletConnection,
      [
        {
          receiver: '0x84b58977513e340f6e51736d952ebc3b96760424',
          tokenId: '6',
          tokenAddress: '0x0fb969a08c7c39ba99c1628b59c0b7e5611bd396',
        },
        {
          receiver: '0x84b58977513e340f6e51736d952ebc3b96760424',
          tokenId: '7',
          tokenAddress: '0x0fb969a08c7c39ba99c1628b59c0b7e5611bd396',
        },
      ],
    );

    console.log('batchTransferResponse', batchTransferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
