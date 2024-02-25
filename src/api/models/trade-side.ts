/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * Immutable X API
 *
 * The version of the OpenAPI document: 3.0.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TradeSide
 */
export interface TradeSide {
    /**
     * The ID of the order involved in the trade
     * @type {number}
     * @memberof TradeSide
     */
    'order_id': number;
    /**
     * The amount of that order\'s asset this trade sold
     * @type {string}
     * @memberof TradeSide
     */
    'sold': string;
    /**
     * The contract address of the token that this trade sold
     * @type {string}
     * @memberof TradeSide
     */
    'token_address'?: string;
    /**
     * The ID of the token that this trade sold
     * @type {string}
     * @memberof TradeSide
     */
    'token_id'?: string;
    /**
     * The type of the token that this trade sold
     * @type {string}
     * @memberof TradeSide
     */
    'token_type': string;
}

