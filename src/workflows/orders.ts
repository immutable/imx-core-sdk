import { Signer } from '@ethersproject/abstract-signer';
import { StarkWallet } from '../types';
import {
  GetSignableCancelOrderRequest,
  GetSignableOrderRequest,
  OrdersApi,
  OrdersApiCreateOrderRequest,
} from '../api';
import { Errors } from './errors';
import { serializeSignature, sign, signRaw } from '../utils';

export async function createOrderWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableOrderRequest,
  ordersApi: OrdersApi,
) {
  const getSignableOrderResponse = await ordersApi.getSignableOrder({
    getSignableOrderRequestV3: request,
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableOrderResponse.data;

  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableOrderInvalidResponse);
  }

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign has with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Obtain Eth address from signer
  const ethAddress = (await signer.getAddress()).toLowerCase();

  const resp = getSignableOrderResponse.data;

  const orderParams: OrdersApiCreateOrderRequest = {
    createOrderRequest: {
      amount_buy: resp.amount_buy!,
      amount_sell: resp.amount_sell!,
      asset_id_buy: resp.asset_id_buy!,
      asset_id_sell: resp.asset_id_sell!,
      expiration_timestamp: resp.expiration_timestamp!,
      include_fees: true,
      fees: request.fees,
      nonce: resp.nonce!,
      stark_key: resp.stark_key!,
      stark_signature: starkSignature,
      vault_id_buy: resp.vault_id_buy!,
      vault_id_sell: resp.vault_id_sell!,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  };

  const createOrderResponse = await ordersApi.createOrder(orderParams);

  return {
    // order_id, status, time
    ...createOrderResponse.data,
  };
}

export async function cancelOrderWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableCancelOrderRequest,
  ordersApi: OrdersApi,
) {
  const getSignableCancelOrderResponse = await ordersApi.getSignableCancelOrder(
    {
      getSignableCancelOrderRequest: {
        order_id: request.order_id,
      },
    },
  );

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableCancelOrderResponse.data;

  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableCancelOrderInvalidResponse);
  }

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Obtain Ethereum Address from signer
  const ethAddress = await signer.getAddress();

  const cancelOrderResponse = await ordersApi.cancelOrder({
    id: request.order_id!.toString(),
    cancelOrderRequest: {
      order_id: request.order_id!,
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
