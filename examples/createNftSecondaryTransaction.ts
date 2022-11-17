import { ImmutableX, Config } from '@imtbl/core-sdk';

(async () => {
    const imxClient = new ImmutableX(Config.SANDBOX);

    try {
        const exchangeTransferResponse = await imxClient.createNftSecondaryTransaction({
            createAPIRequest: {
                "provider": "moonpay",
                "user_wallet_address": "0x...",
                "order_id": 1,
            }
        });

        console.log('exchangeTransferResponse', exchangeTransferResponse);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
})();
