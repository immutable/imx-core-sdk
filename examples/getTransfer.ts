import { Config, ImmutableX, TransfersApiGetTransferRequest } from '@imtbl/core-sdk';

(async () => {
    try {
      const client = new ImmutableX(Config.SANDBOX);
  
      const transferRequest: TransfersApiGetTransferRequest = {
        id: "" // transaction ID 
      };
      const transferResponse = await client.getTransfer(transferRequest);
  
      console.log('transferResponse', transferResponse);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();