import { GetSignableOrderRequest, GetSignableTransferRequestV1 } from '../api';
import { AnyToken, ERC721Token } from './signable-token';

// These custom interfaces are used because API.SignableToken is not yet a union type due to OAS 2.0 spec not supporting `OneOf`
// As well as the fact that SignableToken has an extra `data` object which we would like to flatten
// SignableToken is replaced with AnyToken

export interface UnsignedOrderRequest
  extends Omit<GetSignableOrderRequest, 'token_buy' | 'token_sell'> {
  token_buy: AnyToken;
  token_sell: AnyToken;
}

export interface UnsignedTransferRequest
  extends Omit<GetSignableTransferRequestV1, 'token'> {
  token: AnyToken;
}

// UnsignedBatchNftTransferRequest overrides GetSignableTransferRequestV1
export interface UnsignedBatchNftTransferRequest {
  /**
   * Ethereum address of the transferring user
   * @type {string}
   * @memberof UnsignedBatchNftTransferRequest
   */
  sender_ether_key: string;
  /**
   * List of signable transfer details
   * @type {Array<NftTransferDetails>}
   * @memberof UnsignedBatchNftTransferRequest
   */
  signable_requests: Array<NftTransferDetails>;
}

export interface NftTransferDetails extends Omit<ERC721Token, 'type'> {
  /**
   * Ethereum address of the receiving user
   * @type {string}
   * @memberof NftTransferDetails
   */
  receiver: string;
}
