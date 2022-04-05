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
import { EncodeAssetRequest } from '../models';
// @ts-ignore
import { EncodeAssetResponse } from '../models';
/**
 * EncodingApi - axios parameter creator
 * @export
 */
export const EncodingApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the Starkex Encoded format for a given asset so that it can be used as parameter for Starkex smart contracts
         * @summary Retrieves the Starkex Encoded format for a given asset
         * @param {string} assetType Asset type to be encoded. (asset/mintable-asset)
         * @param {EncodeAssetRequest} encodeAssetRequest Encode Asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        encodeAsset: async (assetType: string, encodeAssetRequest: EncodeAssetRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'assetType' is not null or undefined
            assertParamExists('encodeAsset', 'assetType', assetType)
            // verify required parameter 'encodeAssetRequest' is not null or undefined
            assertParamExists('encodeAsset', 'encodeAssetRequest', encodeAssetRequest)
            const localVarPath = `/v1/encode/{assetType}`
                .replace(`{${"assetType"}}`, encodeURIComponent(String(assetType)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(encodeAssetRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EncodingApi - functional programming interface
 * @export
 */
export const EncodingApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EncodingApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the Starkex Encoded format for a given asset so that it can be used as parameter for Starkex smart contracts
         * @summary Retrieves the Starkex Encoded format for a given asset
         * @param {string} assetType Asset type to be encoded. (asset/mintable-asset)
         * @param {EncodeAssetRequest} encodeAssetRequest Encode Asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async encodeAsset(assetType: string, encodeAssetRequest: EncodeAssetRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EncodeAssetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.encodeAsset(assetType, encodeAssetRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * EncodingApi - factory interface
 * @export
 */
export const EncodingApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EncodingApiFp(configuration)
    return {
        /**
         * Retrieves the Starkex Encoded format for a given asset so that it can be used as parameter for Starkex smart contracts
         * @summary Retrieves the Starkex Encoded format for a given asset
         * @param {string} assetType Asset type to be encoded. (asset/mintable-asset)
         * @param {EncodeAssetRequest} encodeAssetRequest Encode Asset
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        encodeAsset(assetType: string, encodeAssetRequest: EncodeAssetRequest, options?: any): AxiosPromise<EncodeAssetResponse> {
            return localVarFp.encodeAsset(assetType, encodeAssetRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for encodeAsset operation in EncodingApi.
 * @export
 * @interface EncodingApiEncodeAssetRequest
 */
export interface EncodingApiEncodeAssetRequest {
    /**
     * Asset type to be encoded. (asset/mintable-asset)
     * @type {string}
     * @memberof EncodingApiEncodeAsset
     */
    readonly assetType: string

    /**
     * Encode Asset
     * @type {EncodeAssetRequest}
     * @memberof EncodingApiEncodeAsset
     */
    readonly encodeAssetRequest: EncodeAssetRequest
}

/**
 * EncodingApi - object-oriented interface
 * @export
 * @class EncodingApi
 * @extends {BaseAPI}
 */
export class EncodingApi extends BaseAPI {
    /**
     * Retrieves the Starkex Encoded format for a given asset so that it can be used as parameter for Starkex smart contracts
     * @summary Retrieves the Starkex Encoded format for a given asset
     * @param {EncodingApiEncodeAssetRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EncodingApi
     */
    public encodeAsset(requestParameters: EncodingApiEncodeAssetRequest, options?: AxiosRequestConfig) {
        return EncodingApiFp(this.configuration).encodeAsset(requestParameters.assetType, requestParameters.encodeAssetRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
