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


// May contain unused imports in some cases
// @ts-ignore
import { GetPrimarySaleOKBodyResultFeesItems } from './get-primary-sale-okbody-result-fees-items';

/**
 * 
 * @export
 * @interface GetPrimarySaleOKBodyResult
 */
export interface GetPrimarySaleOKBodyResult {
    /**
     * Ethereum address of the buyer
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'buyer_ether_key': string;
    /**
     * Time the primary sale was created
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'created_at': string;
    /**
     * Time the primary sale expires
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'expires_at': string;
    /**
     * 
     * @type {Array<GetPrimarySaleOKBodyResultFeesItems>}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'fees'?: Array<GetPrimarySaleOKBodyResultFeesItems>;
    /**
     * Global Primary Sale identifier
     * @type {number}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'id': number;
    /**
     * Ethereum address of the items receiver
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'items_recipient_ether_key': string;
    /**
     * Fee inclusive amount of the transfer
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'payment_amount': string;
    /**
     * Ethereum address of the payment receiver
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'payment_recipient_ether_key': string;
    /**
     * 
     * @type {object}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'payment_token': object;
    /**
     * The primary sale status
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'status': GetPrimarySaleOKBodyResultStatusEnum;
    /**
     * Arbitrary data defined by the selling party (e.g. game studio) to identify the primary sale. We suggest signing this payload to verify authenticity when processing.
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'studio_data': string;
    /**
     * Ethereum address of the studio operating the primary sale, will be used to verify in completion
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'studio_ether_key': string;
    /**
     * Time the primary sale was updated
     * @type {string}
     * @memberof GetPrimarySaleOKBodyResult
     */
    'updated_at': string;
}

export const GetPrimarySaleOKBodyResultStatusEnum = {
    Pending: 'PENDING',
    Active: 'ACTIVE',
    Invalid: 'INVALID',
    InProgress: 'IN_PROGRESS',
    Accepted: 'ACCEPTED',
    Failed: 'FAILED',
    Rejected: 'REJECTED',
    Expired: 'EXPIRED'
} as const;

export type GetPrimarySaleOKBodyResultStatusEnum = typeof GetPrimarySaleOKBodyResultStatusEnum[keyof typeof GetPrimarySaleOKBodyResultStatusEnum];


