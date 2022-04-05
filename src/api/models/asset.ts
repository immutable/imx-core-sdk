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


import { CollectionDetails } from './collection-details';
import { Fee } from './fee';
import { OrderDetails } from './order-details';

/**
 * 
 * @export
 * @interface Asset
 */
export interface Asset {
    /**
     * 
     * @type {CollectionDetails}
     * @memberof Asset
     */
    'collection': CollectionDetails;
    /**
     * Timestamp of when the asset was created
     * @type {string}
     * @memberof Asset
     */
    'created_at': string | null;
    /**
     * Description of this asset
     * @type {string}
     * @memberof Asset
     */
    'description': string | null;
    /**
     * Royalties to pay on this asset operations
     * @type {Array<Fee>}
     * @memberof Asset
     */
    'fees'?: Array<Fee>;
    /**
     * [DEPRECATED] Internal Immutable X Token ID
     * @type {string}
     * @memberof Asset
     */
    'id'?: string;
    /**
     * URL of the image which should be used for this asset
     * @type {string}
     * @memberof Asset
     */
    'image_url': string | null;
    /**
     * Metadata of this asset
     * @type {object}
     * @memberof Asset
     */
    'metadata': object | null;
    /**
     * Name of this asset
     * @type {string}
     * @memberof Asset
     */
    'name': string | null;
    /**
     * 
     * @type {OrderDetails}
     * @memberof Asset
     */
    'orders'?: OrderDetails;
    /**
     * Status of this asset (where it is in the system)
     * @type {string}
     * @memberof Asset
     */
    'status': string;
    /**
     * Address of the ERC721 contract
     * @type {string}
     * @memberof Asset
     */
    'token_address': string;
    /**
     * ERC721 Token ID of this asset
     * @type {string}
     * @memberof Asset
     */
    'token_id': string;
    /**
     * Timestamp of when the asset was updated
     * @type {string}
     * @memberof Asset
     */
    'updated_at': string | null;
    /**
     * URI to access this asset externally to Immutable X
     * @type {string}
     * @memberof Asset
     */
    'uri': string | null;
    /**
     * Ethereum address of the user who owns this asset
     * @type {string}
     * @memberof Asset
     */
    'user': string;
}

