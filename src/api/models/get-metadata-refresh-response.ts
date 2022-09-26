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


// May contain unused imports in some cases
// @ts-ignore
import { MetadataRefreshSummary } from './metadata-refresh-summary';

/**
 * 
 * @export
 * @interface GetMetadataRefreshResponse
 */
export interface GetMetadataRefreshResponse {
    /**
     * The collection address
     * @type {string}
     * @memberof GetMetadataRefreshResponse
     */
    'collection_address': string;
    /**
     * When the metadata refresh completed
     * @type {string}
     * @memberof GetMetadataRefreshResponse
     */
    'completed_at'?: string | null;
    /**
     * The metadata refresh ID
     * @type {string}
     * @memberof GetMetadataRefreshResponse
     */
    'refresh_id': string;
    /**
     * When the metadata refresh started
     * @type {string}
     * @memberof GetMetadataRefreshResponse
     */
    'started_at': string;
    /**
     * The metadata refresh status
     * @type {string}
     * @memberof GetMetadataRefreshResponse
     */
    'status': GetMetadataRefreshResponseStatusEnum;
    /**
     * The current metadata refresh summary. The summary continue to update until metadata refresh is completed
     * @type {Array<MetadataRefreshSummary>}
     * @memberof GetMetadataRefreshResponse
     */
    'summary': Array<MetadataRefreshSummary>;
}

export const GetMetadataRefreshResponseStatusEnum = {
    Queued: 'queued',
    InProgress: 'in_progress',
    Completed: 'completed'
} as const;

export type GetMetadataRefreshResponseStatusEnum = typeof GetMetadataRefreshResponseStatusEnum[keyof typeof GetMetadataRefreshResponseStatusEnum];


