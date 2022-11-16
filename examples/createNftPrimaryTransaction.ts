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
    const nftPrimaryTxnResponse = await imxClient.createNftPrimary(nftPrimaryTxnParams)

    console.log('nftPrimaryTxnResponse', nftPrimaryTxnResponse);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
