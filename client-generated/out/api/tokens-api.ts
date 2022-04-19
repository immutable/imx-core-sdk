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
import { ListTokensResponse } from '../models';
// @ts-ignore
import { TokenDetails } from '../models';
/**
 * TokensApi - axios parameter creator
 * @export
 */
export const TokensApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get details of a token
         * @summary Get details of a token
         * @param {string} address Token Contract Address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken: async (address: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'address' is not null or undefined
            assertParamExists('getToken', 'address', address)
            const localVarPath = `/v1/tokens/{address}`
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
         * Get a list of tokens
         * @summary Get a list of tokens
         * @param {string} [address] Contract address of the token
         * @param {string} [symbols] Token symbols for the token, e.g. ?symbols&#x3D;IMX,ETH
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens: async (address?: string, symbols?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/tokens`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (address !== undefined) {
                localVarQueryParameter['address'] = address;
            }

            if (symbols !== undefined) {
                localVarQueryParameter['symbols'] = symbols;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TokensApi - functional programming interface
 * @export
 */
export const TokensApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TokensApiAxiosParamCreator(configuration)
    return {
        /**
         * Get details of a token
         * @summary Get details of a token
         * @param {string} address Token Contract Address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getToken(address: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TokenDetails>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getToken(address, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Get a list of tokens
         * @summary Get a list of tokens
         * @param {string} [address] Contract address of the token
         * @param {string} [symbols] Token symbols for the token, e.g. ?symbols&#x3D;IMX,ETH
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTokens(address?: string, symbols?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTokensResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTokens(address, symbols, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TokensApi - factory interface
 * @export
 */
export const TokensApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TokensApiFp(configuration)
    return {
        /**
         * Get details of a token
         * @summary Get details of a token
         * @param {string} address Token Contract Address
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getToken(address: string, options?: any): AxiosPromise<TokenDetails> {
            return localVarFp.getToken(address, options).then((request) => request(axios, basePath));
        },
        /**
         * Get a list of tokens
         * @summary Get a list of tokens
         * @param {string} [address] Contract address of the token
         * @param {string} [symbols] Token symbols for the token, e.g. ?symbols&#x3D;IMX,ETH
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTokens(address?: string, symbols?: string, options?: any): AxiosPromise<ListTokensResponse> {
            return localVarFp.listTokens(address, symbols, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * TokensApi - object-oriented interface
 * @export
 * @class TokensApi
 * @extends {BaseAPI}
 */
export class TokensApi extends BaseAPI {
    /**
     * Get details of a token
     * @summary Get details of a token
     * @param {string} address Token Contract Address
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public getToken(address: string, options?: AxiosRequestConfig) {
        return TokensApiFp(this.configuration).getToken(address, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get a list of tokens
     * @summary Get a list of tokens
     * @param {string} [address] Contract address of the token
     * @param {string} [symbols] Token symbols for the token, e.g. ?symbols&#x3D;IMX,ETH
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TokensApi
     */
    public listTokens(address?: string, symbols?: string, options?: AxiosRequestConfig) {
        return TokensApiFp(this.configuration).listTokens(address, symbols, options).then((request) => request(this.axios, this.basePath));
    }
}
