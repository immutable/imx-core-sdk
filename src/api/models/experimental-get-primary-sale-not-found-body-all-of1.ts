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
 * @interface ExperimentalGetPrimarySaleNotFoundBodyAllOf1
 */
export interface ExperimentalGetPrimarySaleNotFoundBodyAllOf1 {
    /**
     * Error Code
     * @type {string}
     * @memberof ExperimentalGetPrimarySaleNotFoundBodyAllOf1
     */
    'code': ExperimentalGetPrimarySaleNotFoundBodyAllOf1CodeEnum;
    /**
     * Additional details to help resolve the error
     * @type {object}
     * @memberof ExperimentalGetPrimarySaleNotFoundBodyAllOf1
     */
    'details': object | null;
}

export const ExperimentalGetPrimarySaleNotFoundBodyAllOf1CodeEnum = {
    ResourceNotFound: 'RESOURCE_NOT_FOUND'
} as const;

export type ExperimentalGetPrimarySaleNotFoundBodyAllOf1CodeEnum = typeof ExperimentalGetPrimarySaleNotFoundBodyAllOf1CodeEnum[keyof typeof ExperimentalGetPrimarySaleNotFoundBodyAllOf1CodeEnum];


