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


import { Fee } from './fee';
import { Token } from './token';

/**
 * 
 * @export
 * @interface Mint
 */
export interface Mint {
    /**
     * Fee details
     * @type {Array<Fee>}
     * @memberof Mint
     */
    'fees'?: Array<Fee>;
    /**
     * Status of this mint
     * @type {string}
     * @memberof Mint
     */
    'status'?: string;
    /**
     * Timestamp this mint was initiated
     * @type {string}
     * @memberof Mint
     */
    'timestamp'?: string;
    /**
     * 
     * @type {Token}
     * @memberof Mint
     */
    'token'?: Token;
    /**
     * Sequential ID of transaction in Immutable X
     * @type {number}
     * @memberof Mint
     */
    'transaction_id'?: number;
    /**
     * Ethereum address of the user to whom the asset has been minted
     * @type {string}
     * @memberof Mint
     */
    'user'?: string;
}

