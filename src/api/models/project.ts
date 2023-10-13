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
     * The project ChainType
     * @type {string}
     * @memberof Project
     */
    'chain_type'?: string;
    /**
     * The project group ID
     * @type {string}
     * @memberof Project
     */
    'id': string;
    /**
     * The project group name
     * @type {string}
     * @memberof Project
     */
    'name': string;
    /**
     * The organisation ID that the project belongs to
     * @type {string}
     * @memberof Project
     */
    'org_id'?: string;
}

