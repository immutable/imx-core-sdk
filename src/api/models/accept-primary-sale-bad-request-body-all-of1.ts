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
 * @interface AcceptPrimarySaleBadRequestBodyAllOf1
 */
export interface AcceptPrimarySaleBadRequestBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof AcceptPrimarySaleBadRequestBodyAllOf1
     */
    'code': AcceptPrimarySaleBadRequestBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof AcceptPrimarySaleBadRequestBodyAllOf1
     */
    'details': object | null;
}

export const AcceptPrimarySaleBadRequestBodyAllOf1CodeEnum = {
    ValidationError: 'VALIDATION_ERROR'
} as const;

export type AcceptPrimarySaleBadRequestBodyAllOf1CodeEnum = typeof AcceptPrimarySaleBadRequestBodyAllOf1CodeEnum[keyof typeof AcceptPrimarySaleBadRequestBodyAllOf1CodeEnum];


