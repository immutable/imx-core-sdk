import { TokenAmount } from './signable-token';
import { FeeEntry } from '../api';

// These custom interfaces are used because API.SignableToken is not yet a union type due to OAS 2.0 spec not supporting `OneOf`
// As well as the fact that SignableToken has an extra `data` object which we would like to flatten
// SignableToken is replaced with AnyToken

export interface UnsignedOrderRequest {
  buy: TokenAmount;
  sell: TokenAmount;
  /**
   * ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour
   * @type {number}
   * @memberof UnsignedOrderRequest
   */
  expiration_timestamp?: number;
  /**
   * Inclusion of either maker or taker fees
   * @type {Array<FeeEntry>}
   * @memberof UnsignedOrderRequest
   */
  fees?: Array<FeeEntry>;
}

export type UnsignedTransferRequest = TokenAmount & {
  /**
   * Ethereum address of the receiving user
   * @type {string}
   * @memberof UnsignedTransferRequest
   */
  receiver: string;
};

export interface NftTransferDetails {
  /**
   * Ethereum address of the receiving user
   * @type {string}
   * @memberof NftTransferDetails
   */
  receiver: string;
  tokenId: string;
  tokenAddress: string;
}
