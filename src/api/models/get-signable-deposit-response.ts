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
 * @interface GetSignableDepositResponse
 */
export interface GetSignableDepositResponse {
    /**
     * Amount this user is depositing
     * @type {string}
     * @memberof GetSignableDepositResponse
     */
    'amount'?: string;
    /**
     * ID of the asset this user is depositing
     * @type {string}
     * @memberof GetSignableDepositResponse
     */
    'asset_id'?: string;
    /**
     * Nonce of the deposit
     * @type {number}
     * @memberof GetSignableDepositResponse
     */
    'nonce'?: number;
    /**
     * Public stark key of the depositing user
     * @type {string}
     * @memberof GetSignableDepositResponse
     */
    'stark_key'?: string;
    /**
     * ID of the vault this user is depositing to
     * @type {number}
     * @memberof GetSignableDepositResponse
     */
    'vault_id'?: number;
}

