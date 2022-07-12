/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { FeeEntry } from './fee-entry';
import { SignableToken } from './signable-token';

/**
 * 
 * @export
 * @interface GetSignableOrderRequest
 */
export interface GetSignableOrderRequest {
    /**
     * Fee-exclusive amount to buy the asset
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'amount_buy': string;
    /**
     * Amount to sell (quantity)
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'amount_sell': string;
    /**
     * ExpirationTimestamp in Unix time. Note: will be rounded down to the nearest hour
     * @type {number}
     * @memberof GetSignableOrderRequest
     */
    'expiration_timestamp'?: number;
    /**
     * Inclusion of either maker or taker fees
     * @type {Array<FeeEntry>}
     * @memberof GetSignableOrderRequest
     */
    'fees'?: Array<FeeEntry>;
    /**
     * 
     * @type {SignableToken}
     * @memberof GetSignableOrderRequest
     */
    'token_buy': SignableToken;
    /**
     * 
     * @type {SignableToken}
     * @memberof GetSignableOrderRequest
     */
    'token_sell': SignableToken;
    /**
     * Ethereum address of the submitting user
     * @type {string}
     * @memberof GetSignableOrderRequest
     */
    'user': string;
}

