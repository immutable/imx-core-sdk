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
 * @interface CreatePrimarySaleNotImplementedBodyAllOf1
 */
export interface CreatePrimarySaleNotImplementedBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof CreatePrimarySaleNotImplementedBodyAllOf1
     */
    'code': CreatePrimarySaleNotImplementedBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof CreatePrimarySaleNotImplementedBodyAllOf1
     */
    'details': object | null;
}

export const CreatePrimarySaleNotImplementedBodyAllOf1CodeEnum = {
    NotImplementedError: 'NOT_IMPLEMENTED_ERROR'
} as const;

export type CreatePrimarySaleNotImplementedBodyAllOf1CodeEnum = typeof CreatePrimarySaleNotImplementedBodyAllOf1CodeEnum[keyof typeof CreatePrimarySaleNotImplementedBodyAllOf1CodeEnum];


