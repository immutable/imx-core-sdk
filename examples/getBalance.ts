import { Config, ImmutableX, BalancesApiGetBalanceRequest} from '@imtbl/core-sdk';

(async () => {
  try {
    const client = new ImmutableX(Config.SANDBOX);

    const balanceRequest : BalancesApiGetBalanceRequest = {
    owner: "", //  wallet address of user
    address: "" // Sandbox IMX address: 0x1facdd0165489f373255a90304650e15481b2c85, Sandbox FCT address: 0xb3dfd3dfb829b394f2467f4396f39ece7818d876
    // Prod token addresses: GODS token address: 0xccc8cb5229b0ac8069c51fd58367fd1e622afd97,
    // Prod IMX address 0xf57e7e7c23978c3caec3c3548e3d615c346e79ff
    }; 

    const balances = await client.getBalance(balanceRequest);

    console.log('balanceResponse', balances);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();