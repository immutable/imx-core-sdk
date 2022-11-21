import { ImmutableX, Config } from '@imtbl/core-sdk';

(async () => {
    const imxClient = new ImmutableX(Config.SANDBOX);

    try {
        const nftSecondaryTransaction = await imxClient.createNftSecondaryTransaction({
            createAPIRequest: {
                "provider": "moonpay",
                "user_wallet_address": "0x...",
                "order_id": 1,
            }
        });

        console.log('nftSecondaryTransaction', nftSecondaryTransaction);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
