/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * Immutable X API
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
 * @interface CreateWithdrawalRequestV2
 */
export interface CreateWithdrawalRequestV2 {
    /**
     * Amount to withdraw
     * @type {string}
     * @memberof CreateWithdrawalRequestV2
     */
    'amount': string;
    /**
     * ID of the asset to withdraw
     * @type {string}
     * @memberof CreateWithdrawalRequestV2
     */
    'asset_id': string;
    /**
     * Expiration timestamp for this withdrawal
     * @type {number}
     * @memberof CreateWithdrawalRequestV2
     */
    'expiration_timestamp': number;
    /**
     * Nonce of the withdrawal
     * @type {number}
     * @memberof CreateWithdrawalRequestV2
     */
    'nonce': number;
    /**
     * Public stark key of the user receiving the withdrawal
     * @type {string}
     * @memberof CreateWithdrawalRequestV2
     */
    'receiver_stark_key': string;
    /**
     * ID of the vault into which the asset will be withdrawn
     * @type {number}
     * @memberof CreateWithdrawalRequestV2
     */
    'receiver_vault_id'?: number;
    /**
     * Public stark key of the withdrawing user
     * @type {string}
     * @memberof CreateWithdrawalRequestV2
     */
    'sender_stark_key': string;
    /**
     * ID of the vault into which the asset is from
     * @type {number}
     * @memberof CreateWithdrawalRequestV2
     */
    'sender_vault_id': number;
    /**
     * Withdrawal payload signature
     * @type {string}
     * @memberof CreateWithdrawalRequestV2
     */
    'stark_signature': string;
}

