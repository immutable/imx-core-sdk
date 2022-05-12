import { SignableToken } from '../api';

/**
 *
 * @export
 * @interface GetSignableBurnRequest
 */
export interface GetSignableBurnRequest {
  /**
   * Amount of the token to transfer
   * @type {string}
   * @memberof GetSignableBurnRequest
   */
  'amount': string;
  /**
   * Ethereum address of the receiving user
   * @type {string}
   * @memberof GetSignableBurnRequest
   */
  'sender': string;
  /**
   *
   * @type {SignableToken}
   * @memberof GetSignableBurnRequest
   */
  'token': SignableToken;
}