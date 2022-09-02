import { FeeEntry } from '../api';
import { AnyToken, ERC721Token } from './signable-token';

// These custom interfaces are used because API.SignableToken is not yet a union type due to OAS 2.0 spec not supporting `OneOf`
// As well as the fact that SignableToken has an extra `data` object which we would like to flatten
// SignableToken is replaced with AnyToken

export interface UnsignedOrderRequest {
  /**
   * Fee-exclusive amount to buy the asset
   * @type {string}
   * @memberof UnsignedOrderRequest
   */
  amount_buy: string;
  /**
   * Amount to sell (quantity)
   * @type {string}
   * @memberof UnsignedOrderRequest
   */
  amount_sell: string;
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
  /**
   *
   * @type {AnyToken}
   * @memberof UnsignedOrderRequest
   */
  token_buy: AnyToken;
  /**
   *
   * @type {AnyToken}
   * @memberof UnsignedOrderRequest
   */
  token_sell: AnyToken;
  /**
   * Ethereum address of the submitting user
   * @type {string}
   * @memberof UnsignedOrderRequest
   */
  user: string;
}

export interface UnsignedTransferRequest {
  /**
   * Amount of the token to transfer
   * @type {string}
   * @memberof UnsignedTransferRequest
   */
  amount: string;
  /**
   * Ethereum address of the receiving user
   * @type {string}
   * @memberof UnsignedTransferRequest
   */
  receiver: string;
  /**
   * Ethereum address of the transferring user
   * @type {string}
   * @memberof UnsignedTransferRequest
   */
  sender: string;
  /**
   *
   * @type {AnyToken}
   * @memberof UnsignedTransferRequest
   */
  token: AnyToken;
}

export interface UnsignedBatchNftTransferRequest {
    /**
     * Ethereum address of the transferring user
     * @type {string}
     * @memberof UnsignedBatchNftTransferRequest
     */
    'sender_ether_key': string;
    /**
     * List of signable transfer details
     * @type {Array<NftTransferDetails>}
     * @memberof UnsignedBatchNftTransferRequest
     */
    'signable_requests': Array<NftTransferDetails>;
}

export interface NftTransferDetails {
    /**
     * Ethereum address of the receiving user
     * @type {string}
     * @memberof NftTransferDetails
     */
    'receiver': string;
    /**
     *
     * @type {ERC721Token}
     * @memberof NftTransferDetails
     */
    'token': ERC721Token;
}