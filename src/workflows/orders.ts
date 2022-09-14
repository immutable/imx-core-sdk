import {
  OrdersApi,
  GetSignableCancelOrderRequest,
  GetSignableOrderRequest,
} from '../api';
import {
  convertToSignableToken,
  UnsignedOrderRequest,
  WalletConnection,
} from '../types';
import { signRaw } from '../utils';

type CreateOrderWorkflowParams = WalletConnection & {
  request: UnsignedOrderRequest;
  ordersApi: OrdersApi;
};

type CancelOrderWorkflowParams = WalletConnection & {
  request: GetSignableCancelOrderRequest;
  ordersApi: OrdersApi;
};

export async function createOrderWorkflow({
  ethSigner,
  starkSigner,
  request,
  ordersApi,
}: CreateOrderWorkflowParams) {
  const ethAddress = await ethSigner.getAddress();

  const amountSell = request.sell.type === 'ERC721' ? '1' : request.sell.amount;
  const amountBuy = request.buy.type === 'ERC721' ? '1' : request.buy.amount;
  const getSignableOrderRequest: GetSignableOrderRequest = {
    user: ethAddress,
    amount_buy: amountBuy,
    token_buy: convertToSignableToken(request.buy),
    amount_sell: amountSell,
    token_sell: convertToSignableToken(request.sell),
    fees: request.fees,
    expiration_timestamp: request.expiration_timestamp,
  };

  const getSignableOrderResponse = await ordersApi.getSignableOrder(
    getSignableOrderRequest,
  );

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const resp = getSignableOrderResponse.data;

  const createOrderResponse = await ordersApi.createOrder(
    ethAddress,
    ethSignature,
    {
      amount_buy: resp.amount_buy,
      amount_sell: resp.amount_sell,
      asset_id_buy: resp.asset_id_buy,
      asset_id_sell: resp.asset_id_sell,
      expiration_timestamp: resp.expiration_timestamp,
      include_fees: true,
      fees: request.fees,
      nonce: resp.nonce,
      stark_key: resp.stark_key,
      stark_signature: starkSignature,
      vault_id_buy: resp.vault_id_buy,
      vault_id_sell: resp.vault_id_sell,
    },
  );

  return {
    ...createOrderResponse.data,
  };
}

export async function cancelOrderWorkflow({
  ethSigner,
  starkSigner,
  request,
  ordersApi,
}: CancelOrderWorkflowParams) {
  const getSignableCancelOrderResponse = await ordersApi.getSignableCancelOrder(
    {
      order_id: request.order_id,
    },
  );

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableCancelOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const ethAddress = await ethSigner.getAddress();

  const cancelOrderResponse = await ordersApi.cancelOrder(
    ethAddress,
    ethSignature,
    request.order_id.toString(),
    {
      order_id: request.order_id,
      stark_signature: starkSignature,
    },
  );

  return {
    order_id: cancelOrderResponse.data.order_id,
    status: cancelOrderResponse.data.status,
  };
}
