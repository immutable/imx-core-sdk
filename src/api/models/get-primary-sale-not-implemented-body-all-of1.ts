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
 * @interface GetPrimarySaleNotImplementedBodyAllOf1
 */
export interface GetPrimarySaleNotImplementedBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof GetPrimarySaleNotImplementedBodyAllOf1
     */
    'code': GetPrimarySaleNotImplementedBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof GetPrimarySaleNotImplementedBodyAllOf1
     */
    'details': object | null;
}

export const GetPrimarySaleNotImplementedBodyAllOf1CodeEnum = {
    NotImplementedError: 'NOT_IMPLEMENTED_ERROR'
} as const;

export type GetPrimarySaleNotImplementedBodyAllOf1CodeEnum = typeof GetPrimarySaleNotImplementedBodyAllOf1CodeEnum[keyof typeof GetPrimarySaleNotImplementedBodyAllOf1CodeEnum];

