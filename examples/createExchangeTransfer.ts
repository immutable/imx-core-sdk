import { ImmutableX, Config, UnsignedExchangeTransferRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';

(async () => {
  const walletConnection = await generateWalletConnection('goerli');

  const imxClient = new ImmutableX(Config.SANDBOX);

  const exchangeTransferParams: UnsignedExchangeTransferRequest = {
    transactionID: '0',
    receiver: '',
  };

  try {
    const exchangeTransferResponse = await imxClient.exchangeTransfer(walletConnection, exchangeTransferParams)

    console.log('exchangeTransferResponse', exchangeTransferResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
