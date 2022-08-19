import { AlchemyProvider } from '@ethersproject/providers';
import { Wallet } from '@ethersproject/wallet';
import {
  Utils,
  IMXClientClass,
  WalletConnection,
  ETHDeposit,
  TokenType,

  // SDK v0.7.0
  // generateStarkWallet,
  // BaseSigner,
  // getConfig,
  BalancesApi,
  OrdersApi,
  Workflows,
} from '@imtbl/core-sdk';

/**
 * Generate a ethSigner/starkSigner object from a private key.
 */
const generateWalletConnection = async (
  ethNetwork: string,
  alchemyKey: string,
  privateKey: string
): Promise<WalletConnection> => {
  if (!ethNetwork || !alchemyKey || !privateKey) {
    throw new Error('ethNetwork, alchemyKey, and privateKey required!');
  }
  // connect provider
  const provider = new AlchemyProvider(ethNetwork, alchemyKey);

  // L1 credentials
  const ethSigner = new Wallet(privateKey).connect(provider);

  // L2 credentials
  const starkWallet = await Utils.generateStarkWallet(ethSigner);
  const starkSigner = new Utils.BaseSigner(starkWallet.starkKeyPair);

  return {
    ethSigner,
    starkSigner,
  };
};

(async () => {
  try {
    const userPrivateKey = process.env.IMX_APP_USER_WALLET_PRIVATE_KEY;
    const alchemyKey = process.env.IMX_APP_ALCHEMY_API_KEY || '';

    if (!userPrivateKey) {
      console.error('Private key required');
      process.exit(1);
    }

    const walletConnection = await generateWalletConnection(
      'ropsten',
      alchemyKey,
      userPrivateKey
    );
    // console.log('walletConnection', walletConnection);

    const userEthAddress = (await walletConnection.ethSigner.getAddress()).toLowerCase();
    // console.log('userEthAddress', userEthAddress);

    const config = Utils.Config.sandbox;
    // console.log('config', config);

    // IMX class client
    const classClient = new IMXClientClass(config);

    // Test client works
    // const collections = await classClient.listCollections();
    // console.group('Collections');
    // console.log(collections.data.result.slice(0, 5));
    // console.groupEnd();

    // Deposit ETH
    // const depositResponse = await classClient.deposit(walletConnection.ethSigner, {
    //   type: TokenType.ETH,
    //   amount: '1',
    // });
    // console.log('depositResponse', depositResponse);

    // Check Balances
    // const balances = await classClient.listBalances({
    //   owner: await walletConnection.ethSigner.getAddress(),
    // });
    // console.log('balances', balances.data.result);

    // View orders
    const orders = await classClient.listOrders({
      sellTokenAddress: '0xf9ee15aab7cc2cbe5d1cb06bbbef9824d24f85d3',
      status: 'active',
    });
    console.log('orders', JSON.stringify(orders.data.result, null, 2));

    // Sell NFT
    // const orderResponse = await classClient.createOrder(walletConnection, {
    //   amount_buy: '1230000000000000000', // amount to buy the NFT (asset)
    //   amount_sell: '1', // amount (quantity) to sell
    //   token_buy: { // currency/token used to buy the asset
    //     type: 'ETH',
    //     data: {
    //       decimals: 18
    //     },
    //   },
    //   token_sell: { // asset to be sold 
    //     type: 'ERC721',
    //     data: {
    //       token_address: '0xf9ee15aab7cc2cbe5d1cb06bbbef9824d24f85d3',
    //       token_id: '10'
    //     }
    //   },
    //   user: userEthAddress // user selling the asset
    // });
    // console.log('orderResponse', orderResponse);
    // orderResponse { order_id: 145209, status: '', time: 0 }

    // Buy NFT
    // const tradeResponse = await classClient.createTrade(walletConnection, {
    //   order_id: 111246,
    //   user: userEthAddress
    // });
    // console.log('tradeResponse', tradeResponse);

    // Check Assets
    const assets = await classClient.listAsset({
      user: await walletConnection.ethSigner.getAddress(),
    });
    // console.log('assets', assets.data.result);

    // Transfer NFT
    // const transferResponse = await classClient.transfer(walletConnection, {
    //   amount: '1',
    //   receiver: '0xe157F4e1808E1Ca179dF68DEf0394C18E5005d59'.toLowerCase(),
    //   sender: '0xAB48A6DCDbC0F38B286D4b6f3573d91096d64C5d'.toLowerCase(),
    //   token: {
    //     type: 'ERC721',
    //     data: {
    //       token_address: '0xf9ee15aab7cc2cbe5d1cb06bbbef9824d24f85d3',
    //       token_id: '10'
    //     }
    //   }
    // });
    // console.log('transferResponse', transferResponse);

    // const transferIdResponse = await classClient.getTransfer({ id: '5433335' });
    // console.log('transferIdResponse', JSON.stringify(transferIdResponse.data, null, 2));

    // SDK v0.7.0
    // const config = getConfig({
    //   coreContractAddress: '0x4527BE8f31E2ebFbEF4fCADDb5a17447B27d2aef',
    //   registrationContractAddress: '0x6C21EC8DE44AE44D0992ec3e2d9f1aBb6207D864',
    //   chainID: 3,
    //   basePath:  'https://api.ropsten.x.immutable.com',
    //   headers: { 'x-api-custom-header': '...' } // headers are optional unless specified otherwise
    // });

    // const balancesApi = new BalancesApi(config.apiConfiguration);
    // const balances = await balancesApi.listBalances({
    //   owner: await walletConnection.l1Signer.getAddress()
    // });
    // console.log('balances', balances.data.result);

    // const ordersApi = new OrdersApi(config.apiConfiguration);
    // const orders = await ordersApi.listOrders({
    //   sellTokenAddress: '0xf9ee15aab7cc2cbe5d1cb06bbbef9824d24f85d3',
    //   status: 'active'
    // });
    // console.log('orders', JSON.stringify(orders.data.result, null, 2));

    // const workflows = new Workflows(config);
    // const tradeResponse = await workflows.createTrade(walletConnection, {
    //   order_id: 111246,
    //   user: await walletConnection.l1Signer.getAddress()
    // });
    // console.log('tradeResponse', tradeResponse);

  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    process.exit(0);
  }
})();
