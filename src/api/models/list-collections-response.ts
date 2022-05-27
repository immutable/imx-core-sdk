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


import { Collection } from './collection';

/**
 * 
 * @export
 * @interface ListCollectionsResponse
 */
export interface ListCollectionsResponse {
    /**
     * Generated cursor returned by previous query
     * @type {string}
     * @memberof ListCollectionsResponse
     */
    'cursor': string;
    /**
     * Remaining results flag. 1: there are remaining results matching this query, 0: no remaining results
     * @type {number}
     * @memberof ListCollectionsResponse
     */
    'remaining': number;
    /**
     * Collections matching query parameters
     * @type {Array<Collection>}
     * @memberof ListCollectionsResponse
     */
    'result': Array<Collection>;
}

