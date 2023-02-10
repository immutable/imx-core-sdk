import {
  TradesApi,
  GetSignableTradeRequest,
  CreateTradeResponse,
} from '../api';
import { ResolvedSigners } from '../types';
import { signRaw } from '../utils';

type createTradeWorkflowParams = {
  signers: ResolvedSigners;
  request: GetSignableTradeRequest;
  tradesApi: TradesApi;
};

export async function createTradeWorkflow({
  signers: { ethSigner, starkExSigner },
  request,
  tradesApi,
}: createTradeWorkflowParams): Promise<CreateTradeResponse> {
  const ethAddress = await ethSigner.getAddress();

  const signableResult = await tradesApi.getSignableTrade({
    getSignableTradeRequest: {
      user: ethAddress,
      order_id: request.order_id,
      fees: request.fees,
    },
  });

  const {
    signable_message: signableMessage,
    payload_hash: payloadHash,
    readable_transaction: readableTransaction,
    verification_signature: verificationSignature,
  } = signableResult.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkExSigner.signMessage({
    message: payloadHash,
    payload: readableTransaction,
    signature: verificationSignature,
  });

  const createTradeResponse = await tradesApi.createTrade({
    createTradeRequest: {
      amount_buy: signableResult.data.amount_buy,
      amount_sell: signableResult.data.amount_sell,
      asset_id_buy: signableResult.data.asset_id_buy,
      asset_id_sell: signableResult.data.asset_id_sell,
      expiration_timestamp: signableResult.data.expiration_timestamp,
      fee_info: signableResult.data.fee_info,
      fees: request.fees,
      include_fees: true,
      nonce: signableResult.data.nonce,
      order_id: request.order_id,
      stark_key: signableResult.data.stark_key,
      vault_id_buy: signableResult.data.vault_id_buy,
      vault_id_sell: signableResult.data.vault_id_sell,
      stark_signature: starkSignature,
    },
    xImxEthAddress: ethAddress,
    xImxEthSignature: ethSignature,
  });

  return createTradeResponse.data;
}
