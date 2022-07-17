import { WalletConnection, StarkWallet } from '../types';
import { GetSignableTradeRequest, TradesApi } from '../api';
import { serializeSignature, sign, signRaw } from '../utils';
import { Signer } from 'ethers';

export async function createTradeWorkflow(
  signer: Signer,
  starkWallet: StarkWallet,
  request: GetSignableTradeRequest,
  tradesApi: TradesApi,
) {
  // Obtain Ethereum Address from signer
  const ethAddress = await signer.getAddress();

  const signableResult = await tradesApi.getSignableTrade({
    getSignableTradeRequest: {
      user: ethAddress,
      order_id: request.order_id,
      fees: request.fees,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  // Sign message with L1 credentials
  const ethSignature = await signRaw(signableMessage, signer);

  // Sign hash with L2 credentials
  const starkSignature = serializeSignature(
    sign(starkWallet.starkKeyPair, payloadHash),
  );

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

export async function createTradeWorkflowWithSigner(
  walletConnection: WalletConnection,
  request: GetSignableTradeRequest,
  tradesApi: TradesApi,
) {
  const ethAddress = await walletConnection.l1Signer.getAddress();

  const signableResult = await tradesApi.getSignableTrade({
    getSignableTradeRequest: {
      user: ethAddress,
      order_id: request.order_id,
      fees: request.fees,
    },
  });

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signableResult.data;

  const ethSignature = await signRaw(signableMessage, walletConnection.l1Signer);

  const starkSignature = await walletConnection.l2Signer.signMessage(payloadHash);

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
