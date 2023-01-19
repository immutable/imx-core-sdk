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
 * @interface Project
 */
export interface Project {
    /**
     * The current period expiry date for collection limit
     * @type {string}
     * @memberof Project
     */
    'collection_limit_expires_at': string;
    /**
     * The total monthly collection limit
     * @type {number}
     * @memberof Project
     */
    'collection_monthly_limit': number;
    /**
     * The number of collection remaining in the current period
     * @type {number}
     * @memberof Project
     */
    'collection_remaining': number;
    /**
     * The company name
     * @type {string}
     * @memberof Project
     */
    'company_name': string;
    /**
     * The project contact email (must be registered as a developer account with Immutable at https://hub.immutable.com)
     * @type {string}
     * @memberof Project
     */
    'contact_email': string;
    /**
     * The project ID
     * @type {number}
     * @memberof Project
     */
    'id': number;
    /**
     * The current period expiry date for mint operation limit
     * @type {string}
     * @memberof Project
     */
    'mint_limit_expires_at': string;
    /**
     * The total monthly mint operation limit
     * @type {number}
     * @memberof Project
     */
    'mint_monthly_limit': number;
    /**
     * The number of mint operation remaining in the current period
     * @type {number}
     * @memberof Project
     */
    'mint_remaining': number;
    /**
     * The project name
     * @type {string}
     * @memberof Project
     */
    'name': string;
}

