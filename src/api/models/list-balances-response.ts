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


import { Balance } from './balance';

/**
 * 
 * @export
 * @interface ListBalancesResponse
 */
export interface ListBalancesResponse {
    /**
     * Generated cursor returned by previous query
     * @type {string}
     * @memberof ListBalancesResponse
     */
    'cursor': string;
    /**
     * Dictionary of tokens
     * @type {Array<Balance>}
     * @memberof ListBalancesResponse
     */
    'result': Array<Balance>;
}

