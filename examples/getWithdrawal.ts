import { Config, ImmutableX, WithdrawalsApiGetWithdrawalRequest} from '@imtbl/core-sdk';

(async () => {
    try {
      const client = new ImmutableX(Config.SANDBOX);
  
      const withdrawal: WithdrawalsApiGetWithdrawalRequest = {
        id: "" //  transaction id of withdrawal
      };
      const withdrawalResponse = await client.getWithdrawal(withdrawal);
  
      console.log('withdrawalResponse', withdrawalResponse);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();