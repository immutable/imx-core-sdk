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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { Collection } from '../models';
// @ts-ignore
import { CollectionFilter } from '../models';
// @ts-ignore
import { CreateCollectionRequest } from '../models';
// @ts-ignore
import { ListCollectionsResponse } from '../models';
// @ts-ignore
import { UpdateCollectionRequest } from '../models';
/**
 * CollectionsApi - axios parameter creator
 * @export
 */
export const CollectionsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create collection
         * @summary Create collection
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateCollectionRequest} createCollectionRequest create a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection: async (iMXSignature: string, iMXTimestamp: string, createCollectionRequest: CreateCollectionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'iMXSignature' is not null or undefined
            assertParamExists('createCollection', 'iMXSignature', iMXSignature)
            // verify required parameter 'iMXTimestamp' is not null or undefined
            assertParamExists('createCollection', 'iMXTimestamp', iMXTimestamp)
            // verify required parameter 'createCollectionRequest' is not null or undefined
            assertParamExists('createCollection', 'createCollectionRequest', createCollectionRequest)
            const localVarPath = `/v1/collections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (iMXSignature !== undefined && iMXSignature !== null) {
                localVarHeaderParameter['IMX-Signature'] = String(iMXSignature);
            }

            if (iMXTimestamp !== undefined && iMXTimestamp !== null) {
                localVarHeaderParameter['IMX-Timestamp'] = String(iMXTimestamp);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createCollectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get details of a collection at the given address
         * @summary Get details of a collection at the given address
         * @param {string} address Collection contract address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection: async (address: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            assertParamExists('getCollection', 'address', address)
            const localVarPath = `/v1/collections/{address}`
                .replace(`{${"address"}}`, encodeURIComponent(String(address)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of collection filters
         * @summary Get a list of collection filters
         * @param {string} address Collection contract address
         * @param {number} [pageSize] Page size of the result
         * @param {string} [nextPageToken] Next page token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollectionFilters: async (address: string, pageSize?: number, nextPageToken?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            assertParamExists('listCollectionFilters', 'address', address)
            const localVarPath = `/v1/collections/{address}/filters`
                .replace(`{${"address"}}`, encodeURIComponent(String(address)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (nextPageToken !== undefined) {
                localVarQueryParameter['next_page_token'] = nextPageToken;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get a list of collections
         * @summary Get a list of collections
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [blacklist] List of collections not to be displayed, separated by commas
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollections: async (pageSize?: number, cursor?: string, orderBy?: string, direction?: string, blacklist?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/collections`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (orderBy !== undefined) {
                localVarQueryParameter['order_by'] = orderBy;
            }

            if (direction !== undefined) {
                localVarQueryParameter['direction'] = direction;
            }

            if (blacklist !== undefined) {
                localVarQueryParameter['blacklist'] = blacklist;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update collection
         * @summary Update collection
         * @param {string} address Collection contract address
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {UpdateCollectionRequest} updateCollectionRequest update a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCollection: async (address: string, iMXSignature: string, iMXTimestamp: string, updateCollectionRequest: UpdateCollectionRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            assertParamExists('updateCollection', 'address', address)
            // verify required parameter 'iMXSignature' is not null or undefined
            assertParamExists('updateCollection', 'iMXSignature', iMXSignature)
            // verify required parameter 'iMXTimestamp' is not null or undefined
            assertParamExists('updateCollection', 'iMXTimestamp', iMXTimestamp)
            // verify required parameter 'updateCollectionRequest' is not null or undefined
            assertParamExists('updateCollection', 'updateCollectionRequest', updateCollectionRequest)
            const localVarPath = `/v1/collections/{address}`
                .replace(`{${"address"}}`, encodeURIComponent(String(address)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (iMXSignature !== undefined && iMXSignature !== null) {
                localVarHeaderParameter['IMX-Signature'] = String(iMXSignature);
            }

            if (iMXTimestamp !== undefined && iMXTimestamp !== null) {
                localVarHeaderParameter['IMX-Timestamp'] = String(iMXTimestamp);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCollectionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CollectionsApi - functional programming interface
 * @export
 */
export const CollectionsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CollectionsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create collection
         * @summary Create collection
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateCollectionRequest} createCollectionRequest create a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCollection(iMXSignature: string, iMXTimestamp: string, createCollectionRequest: CreateCollectionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCollection(iMXSignature, iMXTimestamp, createCollectionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get details of a collection at the given address
         * @summary Get details of a collection at the given address
         * @param {string} address Collection contract address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCollection(address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCollection(address, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of collection filters
         * @summary Get a list of collection filters
         * @param {string} address Collection contract address
         * @param {number} [pageSize] Page size of the result
         * @param {string} [nextPageToken] Next page token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCollectionFilters(address: string, pageSize?: number, nextPageToken?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CollectionFilter>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCollectionFilters(address, pageSize, nextPageToken, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of collections
         * @summary Get a list of collections
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [blacklist] List of collections not to be displayed, separated by commas
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCollections(pageSize?: number, cursor?: string, orderBy?: string, direction?: string, blacklist?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListCollectionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCollections(pageSize, cursor, orderBy, direction, blacklist, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Update collection
         * @summary Update collection
         * @param {string} address Collection contract address
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {UpdateCollectionRequest} updateCollectionRequest update a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCollection(address: string, iMXSignature: string, iMXTimestamp: string, updateCollectionRequest: UpdateCollectionRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Collection>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCollection(address, iMXSignature, iMXTimestamp, updateCollectionRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CollectionsApi - factory interface
 * @export
 */
export const CollectionsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CollectionsApiFp(configuration)
    return {
        /**
         * Create collection
         * @summary Create collection
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {CreateCollectionRequest} createCollectionRequest create a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCollection(iMXSignature: string, iMXTimestamp: string, createCollectionRequest: CreateCollectionRequest, options?: any): AxiosPromise<Collection> {
            return localVarFp.createCollection(iMXSignature, iMXTimestamp, createCollectionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get details of a collection at the given address
         * @summary Get details of a collection at the given address
         * @param {string} address Collection contract address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCollection(address: string, options?: any): AxiosPromise<Collection> {
            return localVarFp.getCollection(address, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of collection filters
         * @summary Get a list of collection filters
         * @param {string} address Collection contract address
         * @param {number} [pageSize] Page size of the result
         * @param {string} [nextPageToken] Next page token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollectionFilters(address: string, pageSize?: number, nextPageToken?: string, options?: any): AxiosPromise<CollectionFilter> {
            return localVarFp.listCollectionFilters(address, pageSize, nextPageToken, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of collections
         * @summary Get a list of collections
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {string} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [blacklist] List of collections not to be displayed, separated by commas
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCollections(pageSize?: number, cursor?: string, orderBy?: string, direction?: string, blacklist?: string, options?: any): AxiosPromise<ListCollectionsResponse> {
            return localVarFp.listCollections(pageSize, cursor, orderBy, direction, blacklist, options).then((request) => request(axios, basePath));
        },
        /**
         * Update collection
         * @summary Update collection
         * @param {string} address Collection contract address
         * @param {string} iMXSignature String created by signing wallet address and timestamp
         * @param {string} iMXTimestamp Unix Epoc timestamp
         * @param {UpdateCollectionRequest} updateCollectionRequest update a collection
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCollection(address: string, iMXSignature: string, iMXTimestamp: string, updateCollectionRequest: UpdateCollectionRequest, options?: any): AxiosPromise<Collection> {
            return localVarFp.updateCollection(address, iMXSignature, iMXTimestamp, updateCollectionRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createCollection operation in CollectionsApi.
 * @export
 * @interface CollectionsApiCreateCollectionRequest
 */
export interface CollectionsApiCreateCollectionRequest {
    /**
     * String created by signing wallet address and timestamp
     * @type {string}
     * @memberof CollectionsApiCreateCollection
     */
    readonly iMXSignature: string

    /**
     * Unix Epoc timestamp
     * @type {string}
     * @memberof CollectionsApiCreateCollection
     */
    readonly iMXTimestamp: string

    /**
     * create a collection
     * @type {CreateCollectionRequest}
     * @memberof CollectionsApiCreateCollection
     */
    readonly createCollectionRequest: CreateCollectionRequest
}

/**
 * Request parameters for getCollection operation in CollectionsApi.
 * @export
 * @interface CollectionsApiGetCollectionRequest
 */
export interface CollectionsApiGetCollectionRequest {
    /**
     * Collection contract address
     * @type {string}
     * @memberof CollectionsApiGetCollection
     */
    readonly address: string
}

/**
 * Request parameters for listCollectionFilters operation in CollectionsApi.
 * @export
 * @interface CollectionsApiListCollectionFiltersRequest
 */
export interface CollectionsApiListCollectionFiltersRequest {
    /**
     * Collection contract address
     * @type {string}
     * @memberof CollectionsApiListCollectionFilters
     */
    readonly address: string

    /**
     * Page size of the result
     * @type {number}
     * @memberof CollectionsApiListCollectionFilters
     */
    readonly pageSize?: number

    /**
     * Next page token
     * @type {string}
     * @memberof CollectionsApiListCollectionFilters
     */
    readonly nextPageToken?: string
}

/**
 * Request parameters for listCollections operation in CollectionsApi.
 * @export
 * @interface CollectionsApiListCollectionsRequest
 */
export interface CollectionsApiListCollectionsRequest {
    /**
     * Page size of the result
     * @type {number}
     * @memberof CollectionsApiListCollections
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof CollectionsApiListCollections
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {string}
     * @memberof CollectionsApiListCollections
     */
    readonly orderBy?: string

    /**
     * Direction to sort (asc/desc)
     * @type {string}
     * @memberof CollectionsApiListCollections
     */
    readonly direction?: string

    /**
     * List of collections not to be displayed, separated by commas
     * @type {string}
     * @memberof CollectionsApiListCollections
     */
    readonly blacklist?: string
}

/**
 * Request parameters for updateCollection operation in CollectionsApi.
 * @export
 * @interface CollectionsApiUpdateCollectionRequest
 */
export interface CollectionsApiUpdateCollectionRequest {
    /**
     * Collection contract address
     * @type {string}
     * @memberof CollectionsApiUpdateCollection
     */
    readonly address: string

    /**
     * String created by signing wallet address and timestamp
     * @type {string}
     * @memberof CollectionsApiUpdateCollection
     */
    readonly iMXSignature: string

    /**
     * Unix Epoc timestamp
     * @type {string}
     * @memberof CollectionsApiUpdateCollection
     */
    readonly iMXTimestamp: string

    /**
     * update a collection
     * @type {UpdateCollectionRequest}
     * @memberof CollectionsApiUpdateCollection
     */
    readonly updateCollectionRequest: UpdateCollectionRequest
}

/**
 * CollectionsApi - object-oriented interface
 * @export
 * @class CollectionsApi
 * @extends {BaseAPI}
 */
export class CollectionsApi extends BaseAPI {
    /**
     * Create collection
     * @summary Create collection
     * @param {CollectionsApiCreateCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public createCollection(requestParameters: CollectionsApiCreateCollectionRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).createCollection(requestParameters.iMXSignature, requestParameters.iMXTimestamp, requestParameters.createCollectionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get details of a collection at the given address
     * @summary Get details of a collection at the given address
     * @param {CollectionsApiGetCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public getCollection(requestParameters: CollectionsApiGetCollectionRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).getCollection(requestParameters.address, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of collection filters
     * @summary Get a list of collection filters
     * @param {CollectionsApiListCollectionFiltersRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public listCollectionFilters(requestParameters: CollectionsApiListCollectionFiltersRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).listCollectionFilters(requestParameters.address, requestParameters.pageSize, requestParameters.nextPageToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of collections
     * @summary Get a list of collections
     * @param {CollectionsApiListCollectionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public listCollections(requestParameters: CollectionsApiListCollectionsRequest = {}, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).listCollections(requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.blacklist, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Update collection
     * @summary Update collection
     * @param {CollectionsApiUpdateCollectionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectionsApi
     */
    public updateCollection(requestParameters: CollectionsApiUpdateCollectionRequest, options?: AxiosRequestConfig) {
        return CollectionsApiFp(this.configuration).updateCollection(requestParameters.address, requestParameters.iMXSignature, requestParameters.iMXTimestamp, requestParameters.updateCollectionRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
