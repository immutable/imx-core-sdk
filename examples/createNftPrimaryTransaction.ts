import { ImmutableX, Config, UnsignedExchangeTransferRequest } from '@imtbl/core-sdk';
import { generateWalletConnection } from './libs/walletConnection';
import {NftCheckoutPrimaryApiCreateNftPrimaryRequest} from "../src/api";

(async () => {
  const imxClient = new ImmutableX(Config.SANDBOX);

  const nftPrimaryTxnParams: NftCheckoutPrimaryApiCreateNftPrimaryRequest = {
    createAPIRequest:{
      contract_address:'',
      provider:'',
      offer_id:'',
      user_wallet_address:'',
      widget:{theme:''}
    }};

  try {
    // 1. Create nft primary transaction
    const nftPrimaryTxnParams: NftCheckoutPrimaryApiCreateNftPrimaryRequest = {
      createAPIRequest:{
        contract_address:'0x5d...',
        provider:'moonpay',
        offer_id:'20111212',
        user_wallet_address:'0xqw2...',
        widget:{theme:'dark'}
      }};
    const nftPrimaryTxnResponse = await imxClient.createNftPrimary(nftPrimaryTxnParams)
    console.log('nftPrimaryTxnResponse', JSON.stringify(nftPrimaryTxnResponse));

    // 2. Check status of created nft primary transaction by transaction id
    const getNftPrimaryTransactionResponse = await imxClient.getNftPrimaryTransaction({
      transactionId: nftPrimaryTxnResponse.data.transaction_id
    });
    console.log('getNftPrimaryTransactionResponse', JSON.stringify(getNftPrimaryTransactionResponse));

    //3. Pay and mint asset using Moonpay widget url (nftPrimaryTxnResponse.url)

    // 4. Fetch mint status by transaction id
    const getMintStatus = await imxClient.getMintStatusById({
      id: nftPrimaryTxnResponse.data.transaction_id,
      provider: "moonpay"
    });
    console.log('getMintStatusResponse', JSON.stringify(getMintStatus));


  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
