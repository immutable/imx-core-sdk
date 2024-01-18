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
 * @interface GetPrimarySaleNotFoundBodyAllOf1
 */
export interface GetPrimarySaleNotFoundBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof GetPrimarySaleNotFoundBodyAllOf1
     */
    'code': GetPrimarySaleNotFoundBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof GetPrimarySaleNotFoundBodyAllOf1
     */
    'details': object | null;
}

export const GetPrimarySaleNotFoundBodyAllOf1CodeEnum = {
    ResourceNotFound: 'RESOURCE_NOT_FOUND'
} as const;

export type GetPrimarySaleNotFoundBodyAllOf1CodeEnum = typeof GetPrimarySaleNotFoundBodyAllOf1CodeEnum[keyof typeof GetPrimarySaleNotFoundBodyAllOf1CodeEnum];


