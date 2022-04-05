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


import { SignableTransferDetails } from './signable-transfer-details';

/**
 * 
 * @export
 * @interface GetSignableTransferRequest
 */
export interface GetSignableTransferRequest {
    /**
     * Ethereum address of the transferring user
     * @type {string}
     * @memberof GetSignableTransferRequest
     */
    'sender_ether_key': string;
    /**
     * List of signable transfer details
     * @type {Array<SignableTransferDetails>}
     * @memberof GetSignableTransferRequest
     */
    'signable_requests': Array<SignableTransferDetails>;
}

