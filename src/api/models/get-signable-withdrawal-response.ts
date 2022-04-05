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



/**
 * 
 * @export
 * @interface GetSignableWithdrawalResponse
 */
export interface GetSignableWithdrawalResponse {
    /**
     * Amount of the token we are withdrawing
     * @type {string}
     * @memberof GetSignableWithdrawalResponse
     */
    'amount': string;
    /**
     * ID of the asset to be withdrawn
     * @type {string}
     * @memberof GetSignableWithdrawalResponse
     */
    'asset_id': string;
    /**
     * Nonce of this transaction
     * @type {number}
     * @memberof GetSignableWithdrawalResponse
     */
    'nonce': number;
    /**
     * Encoded payload hash
     * @type {string}
     * @memberof GetSignableWithdrawalResponse
     */
    'payload_hash': string;
    /**
     * Message to sign with L1 wallet to verity withdrawal request
     * @type {string}
     * @memberof GetSignableWithdrawalResponse
     */
    'signable_message': string;
    /**
     * Public stark key of this user
     * @type {string}
     * @memberof GetSignableWithdrawalResponse
     */
    'stark_key': string;
    /**
     * ID of the vault we are withdrawing from
     * @type {number}
     * @memberof GetSignableWithdrawalResponse
     */
    'vault_id': number;
}

