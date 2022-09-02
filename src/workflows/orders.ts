import {
  OrdersApi,
  OrdersApiCreateOrderRequest,
  GetSignableCancelOrderRequest,
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
  const getSignableOrderResponse = await ordersApi.getSignableOrder({
    getSignableOrderRequestV3: {
      ...request,
      token_buy: convertToSignableToken(request.token_buy),
      token_sell: convertToSignableToken(request.token_sell),
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const ethAddress = await ethSigner.getAddress();

  const resp = getSignableOrderResponse.data;

  const orderParams: OrdersApiCreateOrderRequest = {
    createOrderRequest: {
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
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  };

  const createOrderResponse = await ordersApi.createOrder(orderParams);

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
      getSignableCancelOrderRequest: {
        order_id: request.order_id,
      },
    },
  );

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableCancelOrderResponse.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const ethAddress = await ethSigner.getAddress();

  const cancelOrderResponse = await ordersApi.cancelOrder({
    id: request.order_id.toString(),
    cancelOrderRequest: {
      order_id: request.order_id,
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return {
    order_id: cancelOrderResponse.data.order_id,
    status: cancelOrderResponse.data.status,
  };
}
