import {
  AcceptPrimarySaleBadRequestBody,
  AcceptPrimarySaleForbiddenBody,
  AcceptPrimarySaleNotFoundBody,
  AcceptPrimarySaleOKBody,
  AcceptPrimarySaleUnauthorizedBody,
  CreatePrimarySaleBadRequestBody,
  CreatePrimarySaleCreatedBody,
  CreatePrimarySaleForbiddenBody,
  CreatePrimarySaleNotFoundBody,
  CreatePrimarySaleUnauthorizedBody,
  PrimarySalesApi,
  PrimarySalesApiCreatePrimarySaleRequest,
  PrimarySalesApiSignableCreatePrimarySaleRequest,
} from '../api';
import { EthSigner, WalletConnection } from '../types';
import { signRaw } from '../utils';

type CreatePrimarySaleWorkflowParams = WalletConnection & {
  request: PrimarySalesApiSignableCreatePrimarySaleRequest;
  primarySalesApi: PrimarySalesApi;
};

type AcceptPrimarySaleWorkflowParams = {
  ethSigner: EthSigner;
  primarySaleId: number;
  primarySalesApi: PrimarySalesApi;
};

type CreatePrimarySaleResponse =
  | CreatePrimarySaleBadRequestBody
  | CreatePrimarySaleCreatedBody
  | CreatePrimarySaleForbiddenBody
  | CreatePrimarySaleUnauthorizedBody
  | CreatePrimarySaleNotFoundBody;

type AcceptPrimarySaleResponse =
  | AcceptPrimarySaleOKBody
  | AcceptPrimarySaleBadRequestBody
  | AcceptPrimarySaleForbiddenBody
  | AcceptPrimarySaleNotFoundBody
  | AcceptPrimarySaleUnauthorizedBody;

export async function CreatePrimarySaleWorkflow({
  ethSigner,
  starkSigner,
  request,
  primarySalesApi,
}: CreatePrimarySaleWorkflowParams): Promise<CreatePrimarySaleResponse> {
  const ethAddress = await ethSigner.getAddress();

  const signablePrimarySaleResponse =
    await primarySalesApi.signableCreatePrimarySale(request);

  const { signable_message: signableMessage, payload_hash: payloadHash } =
    signablePrimarySaleResponse.data;

  const ethSignature = await signRaw(signableMessage, ethSigner);

  const starkSignature = await starkSigner.signMessage(payloadHash);

  const resp = signablePrimarySaleResponse.data;

  const primarySaleParams: PrimarySalesApiCreatePrimarySaleRequest = {
    body: {
      buyer_ether_key: resp.buyer_ether_key,
      buyer_stark_key: resp.buyer_stark_key,
      buyer_vault_id: resp.buyer_vault_id,
      studio_ether_key: resp.studio_ether_key,
      studio_data: resp.studio_data,
      payment_amount: resp.payment_amount,
      payment_asset_id: resp.payment_asset_id,
      payment_recipient_ether_key: resp.payment_recipient_ether_key,
      payment_recipient_stark_key: resp.payment_recipient_stark_key,
      payment_recipient_vault_id: resp.payment_recipient_vault_id,
      items_recipient_ether_key: resp.items_recipient_ether_key,
      expiration_timestamp: resp.expiration_timestamp,
      fees: resp.fees,
      nonce: resp.nonce,
      stark_signature: starkSignature,
    },
  };

  const createPrimarySaleResp = await primarySalesApi.createPrimarySale(
    primarySaleParams,
    {
      headers: {
        'x-imx-eth-address': ethAddress,
        'x-imx-eth-signature': ethSignature,
      },
    },
  );

  return {
    ...createPrimarySaleResp.data,
  };
}

export async function AcceptPrimarySalesWorkflow({
  ethSigner,
  primarySalesApi,
  primarySaleId,
}: AcceptPrimarySaleWorkflowParams): Promise<AcceptPrimarySaleResponse> {
  const signableAcceptPrimarySaleResult =
    await primarySalesApi.signableAcceptPrimarySale({
      id: primarySaleId,
    });

  const signableMessage = signableAcceptPrimarySaleResult.data.signable_message;

  const signature = await signRaw(signableMessage, ethSigner);

  const acceptPrimarySaleResp = await primarySalesApi.acceptPrimarySale(
    {
      id: primarySaleId,
    },
    {
      headers: {
        'x-imx-eth-address': await ethSigner.getAddress(),
        'x-imx-eth-signature': signature,
      },
    },
  );

  return {
    ...acceptPrimarySaleResp.data,
  };
}
