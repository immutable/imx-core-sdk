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
 * Fee required to be paid for a primary sale
 * @export
 * @interface ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems
 */
export interface ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems {
    /**
     * Ethereum address of the fee recipient
     * @type {string}
     * @memberof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems
     */
    'address': string;
    /**
     * Fee amount
     * @type {string}
     * @memberof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems
     */
    'amount': string;
    /**
     * Fee percentage in basis points (e.g. 200 for 2%)
     * @type {number}
     * @memberof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems
     */
    'percentage': number;
    /**
     * Fee type
     * @type {string}
     * @memberof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItems
     */
    'type': ExperimentalCreatePrimarySaleCreatedBodyResultFeesItemsTypeEnum;
}

export const ExperimentalCreatePrimarySaleCreatedBodyResultFeesItemsTypeEnum = {
    Ecosystem: 'ECOSYSTEM',
    Protocol: 'PROTOCOL'
} as const;

export type ExperimentalCreatePrimarySaleCreatedBodyResultFeesItemsTypeEnum = typeof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItemsTypeEnum[keyof typeof ExperimentalCreatePrimarySaleCreatedBodyResultFeesItemsTypeEnum];


