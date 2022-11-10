import { TokenAmount, ExchangeTokenAmount } from './tokens';
import { FeeEntry, MintRequest } from '../api';

// These custom request interfaces are used because API.SignableToken is not yet a union type due to OAS 2.0 spec not supporting `OneOf`
// As well as the fact that SignableToken has an extra `data` object which we would like to flatten
// SignableToken is replaced with AnyToken

/**
 * Parameter required to create an Order
 */
export interface UnsignedOrderRequest {
  /**
   * The amount of tokens that will be bought for this order
   */
  buy: TokenAmount;
  /**
   * The amount of tokens that will be sold for this order
   */
  sell: TokenAmount;
  /**
   * ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour
   */
  expiration_timestamp?: number;
  /**
   * Inclusion of either maker or taker fees
   */
  fees?: Array<FeeEntry>;
}

/**
 * Parameter required to create a Transfer
 */
export type UnsignedTransferRequest = TokenAmount & {
  /**
   * Ethereum address of the receiving user
   */
  receiver: string;
};

/**
 * Parameter required to Mint tokens
 */
export type UnsignedMintRequest = Omit<MintRequest, 'auth_signature'>;

/**
 * Parameter required to create a Transfer
 */
export type UnsignedExchangeTransferRequest = ExchangeTokenAmount & {
  /**
   * Ethereum address of the receiving user
   */
  receiver: string;

  /**
   * Exchange transaction ID
   */
  transactionID: string;
};
