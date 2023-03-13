/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface ApiRegisterPassportUserRequest
 */
export interface ApiRegisterPassportUserRequest {
    /**
     * Eth signature
     * @type {string}
     * @memberof ApiRegisterPassportUserRequest
     */
    'eth_signature': string;
    /**
     * The ether key of the user
     * @type {string}
     * @memberof ApiRegisterPassportUserRequest
     */
    'ether_key': string;
    /**
     * Public stark key of the user
     * @type {string}
     * @memberof ApiRegisterPassportUserRequest
     */
    'stark_key': string;
    /**
     * Payload signature
     * @type {string}
     * @memberof ApiRegisterPassportUserRequest
     */
    'stark_signature': string;
}
