import {
  Config,
  ImmutableX,
  BalancesApiListBalancesRequest,
} from '@imtbl/core-sdk';

(async () => {
  try {
    const client = new ImmutableX(Config.SANDBOX);

    const balanceRequest: BalancesApiListBalancesRequest = {
      owner: '', //  wallet address of user
    };

    const balances = await client.listBalances(balanceRequest);

    console.log('balanceResponse', balances);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
