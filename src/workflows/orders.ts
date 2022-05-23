import { Signer } from '@ethersproject/abstract-signer';
import { StarkWallet } from '../types';
import {
  GetSignableCancelOrderRequest,
  OrdersApi,
} from '../api';
import { Errors } from './errors';
import { serializeSignature, sign, signRaw } from '../utils';

export async function cancelOrderWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableCancelOrderRequest,
  ordersApi: OrdersApi,
) {
  const getSignableCancelOrderResponse = await ordersApi.getSignableCancelOrder({
    getSignableCancelOrderRequest: {
      order_id: request.order_id,
    },
  })

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    getSignableCancelOrderResponse.data;

  if (signableMessage === undefined || payloadHash === undefined) {
    throw new Error(Errors.SignableTransferV1InvalidResponse);
  }

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

  // Obtain Ethereum Address from signer
  const ethAddress = (await signer.getAddress()).toLowerCase();

  const cancelOrderResponse = await ordersApi.cancelOrder({
    id: request.order_id!.toString(),
    cancelOrderRequest: {
      order_id: request.order_id!,
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  })

  return {
    order_id: cancelOrderResponse.data.order_id,
    status: cancelOrderResponse.data.status,
  }
}