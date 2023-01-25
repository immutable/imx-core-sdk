import { Config, ImmutableX, WithdrawalsApiListWithdrawalsRequest} from '@imtbl/core-sdk';

(async () => {
    try {
      const client = new ImmutableX(Config.SANDBOX);
  
      const withdrawalRequest : WithdrawalsApiListWithdrawalsRequest = {
        withdrawnToWallet: true, // true or false
        rollupStatus: "", // confirmed
        pageSize: 200, // max page size is 200
        tokenType:"", // ERC20, ERC721, Eth
        cursor:"", // cursor
        direction: "", //asc or desc
        user: "", // eth address of user who submittedd withdrawal request
        status: "", // success / failure
        tokenAddress: "", // contract address of token
        tokenId: "", // token ID of NFT if applicable 
        orderBy: "" // transaction_id, updated_at, created_at

    
    };
  
      const withdrawalResponse = await client.listWithdrawals(withdrawalRequest);
  
      console.log('withdrawalResponse', JSON.stringify(withdrawalResponse, null, 4));
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();