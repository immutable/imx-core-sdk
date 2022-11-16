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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CurrencyWithLimits } from '../models';
// @ts-ignore
import { LambdasAPIError } from '../models';
// @ts-ignore
import { NftprimarytransactionCreateAPIRequest } from '../models';
// @ts-ignore
import { NftprimarytransactionCreateResponse } from '../models';
// @ts-ignore
import { NftprimarytransactionGetResponse } from '../models';
// @ts-ignore
import { NftprimarytransactionListTransactionsResponse } from '../models';
// @ts-ignore
import { ProviderGetMintStatusResponse } from '../models';
/**
 * NftCheckoutPrimaryApi - axios parameter creator
 * @export
 */
export const NftCheckoutPrimaryApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * creates nft primary transaction
         * @summary Create nft primary transaction
         * @param {NftprimarytransactionCreateAPIRequest} createAPIRequest req
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNftPrimary: async (createAPIRequest: NftprimarytransactionCreateAPIRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createAPIRequest' is not null or undefined
            assertParamExists('createNftPrimary', 'createAPIRequest', createAPIRequest)
            const localVarPath = `/v2/nft/primary`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(createAPIRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of supported currencies and their limits
         * @summary Get currencies with limits
         * @param {'moonpay'} [provider] Provider name
         * @param {boolean} [includeLimits] Flag if limits should be included in the response or not
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrenciesNFTCheckoutPrimary: async (provider?: 'moonpay', includeLimits?: boolean, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/nft/primary/currencies`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            if (includeLimits !== undefined) {
                localVarQueryParameter['include_limits'] = includeLimits;
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
         * gets mint status by transaction ids
         * @summary Get mint status by transaction id
         * @param {'moonpay' | 'layerswap'} provider Provider name
         * @param {string} id transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMintStatusById: async (provider: 'moonpay' | 'layerswap', id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'provider' is not null or undefined
            assertParamExists('getMintStatusById', 'provider', provider)
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getMintStatusById', 'id', id)
            const localVarPath = `/v2/{provider}/transaction_status`
                .replace(`{${"provider"}}`, encodeURIComponent(String(provider)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (id !== undefined) {
                localVarQueryParameter['id'] = id;
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
         * gets nft primary transaction by transaction id
         * @summary Get nft primary transaction by id
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftPrimaryTransaction: async (transactionId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'transactionId' is not null or undefined
            assertParamExists('getNftPrimaryTransaction', 'transactionId', transactionId)
            const localVarPath = `/v2/nft/primary/{transaction_id}`
                .replace(`{${"transaction_id"}}`, encodeURIComponent(String(transactionId)));
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
         * Returns a list of NFT primary transactions
         * @summary Get a list of NFT primary transactions
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'status' | 'amount' | 'mint_id'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [transactionId] Transaction id
         * @param {string} [contractAddress] Contract address of the asset
         * @param {string} [sellerWalletAddress] Ethereum address of the seller
         * @param {string} [walletAddress] Ethereum address of the user who wants to create transaction
         * @param {string} [status] Transaction status
         * @param {'moonpay' | 'layerswap'} [provider] Provider name
         * @param {string} [mintId] Mint id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftPrimaryTransactions: async (pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'status' | 'amount' | 'mint_id', direction?: string, transactionId?: string, contractAddress?: string, sellerWalletAddress?: string, walletAddress?: string, status?: string, provider?: 'moonpay' | 'layerswap', mintId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/nft/primary`;
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

            if (transactionId !== undefined) {
                localVarQueryParameter['transaction_id'] = transactionId;
            }

            if (contractAddress !== undefined) {
                localVarQueryParameter['contract_address'] = contractAddress;
            }

            if (sellerWalletAddress !== undefined) {
                localVarQueryParameter['seller_wallet_address'] = sellerWalletAddress;
            }

            if (walletAddress !== undefined) {
                localVarQueryParameter['wallet_address'] = walletAddress;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (provider !== undefined) {
                localVarQueryParameter['provider'] = provider;
            }

            if (mintId !== undefined) {
                localVarQueryParameter['mint_id'] = mintId;
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
 * NftCheckoutPrimaryApi - functional programming interface
 * @export
 */
export const NftCheckoutPrimaryApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = NftCheckoutPrimaryApiAxiosParamCreator(configuration)
    return {
        /**
         * creates nft primary transaction
         * @summary Create nft primary transaction
         * @param {NftprimarytransactionCreateAPIRequest} createAPIRequest req
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createNftPrimary(createAPIRequest: NftprimarytransactionCreateAPIRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NftprimarytransactionCreateResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createNftPrimary(createAPIRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of supported currencies and their limits
         * @summary Get currencies with limits
         * @param {'moonpay'} [provider] Provider name
         * @param {boolean} [includeLimits] Flag if limits should be included in the response or not
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrenciesNFTCheckoutPrimary(provider?: 'moonpay', includeLimits?: boolean, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CurrencyWithLimits>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrenciesNFTCheckoutPrimary(provider, includeLimits, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * gets mint status by transaction ids
         * @summary Get mint status by transaction id
         * @param {'moonpay' | 'layerswap'} provider Provider name
         * @param {string} id transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getMintStatusById(provider: 'moonpay' | 'layerswap', id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ProviderGetMintStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getMintStatusById(provider, id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * gets nft primary transaction by transaction id
         * @summary Get nft primary transaction by id
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNftPrimaryTransaction(transactionId: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NftprimarytransactionGetResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNftPrimaryTransaction(transactionId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of NFT primary transactions
         * @summary Get a list of NFT primary transactions
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'status' | 'amount' | 'mint_id'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [transactionId] Transaction id
         * @param {string} [contractAddress] Contract address of the asset
         * @param {string} [sellerWalletAddress] Ethereum address of the seller
         * @param {string} [walletAddress] Ethereum address of the user who wants to create transaction
         * @param {string} [status] Transaction status
         * @param {'moonpay' | 'layerswap'} [provider] Provider name
         * @param {string} [mintId] Mint id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getNftPrimaryTransactions(pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'status' | 'amount' | 'mint_id', direction?: string, transactionId?: string, contractAddress?: string, sellerWalletAddress?: string, walletAddress?: string, status?: string, provider?: 'moonpay' | 'layerswap', mintId?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<NftprimarytransactionListTransactionsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getNftPrimaryTransactions(pageSize, cursor, orderBy, direction, transactionId, contractAddress, sellerWalletAddress, walletAddress, status, provider, mintId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * NftCheckoutPrimaryApi - factory interface
 * @export
 */
export const NftCheckoutPrimaryApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = NftCheckoutPrimaryApiFp(configuration)
    return {
        /**
         * creates nft primary transaction
         * @summary Create nft primary transaction
         * @param {NftprimarytransactionCreateAPIRequest} createAPIRequest req
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createNftPrimary(createAPIRequest: NftprimarytransactionCreateAPIRequest, options?: any): AxiosPromise<NftprimarytransactionCreateResponse> {
            return localVarFp.createNftPrimary(createAPIRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of supported currencies and their limits
         * @summary Get currencies with limits
         * @param {'moonpay'} [provider] Provider name
         * @param {boolean} [includeLimits] Flag if limits should be included in the response or not
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrenciesNFTCheckoutPrimary(provider?: 'moonpay', includeLimits?: boolean, options?: any): AxiosPromise<CurrencyWithLimits> {
            return localVarFp.getCurrenciesNFTCheckoutPrimary(provider, includeLimits, options).then((request) => request(axios, basePath));
        },
        /**
         * gets mint status by transaction ids
         * @summary Get mint status by transaction id
         * @param {'moonpay' | 'layerswap'} provider Provider name
         * @param {string} id transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getMintStatusById(provider: 'moonpay' | 'layerswap', id: string, options?: any): AxiosPromise<ProviderGetMintStatusResponse> {
            return localVarFp.getMintStatusById(provider, id, options).then((request) => request(axios, basePath));
        },
        /**
         * gets nft primary transaction by transaction id
         * @summary Get nft primary transaction by id
         * @param {string} transactionId Transaction id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftPrimaryTransaction(transactionId: string, options?: any): AxiosPromise<NftprimarytransactionGetResponse> {
            return localVarFp.getNftPrimaryTransaction(transactionId, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of NFT primary transactions
         * @summary Get a list of NFT primary transactions
         * @param {number} [pageSize] Page size of the result
         * @param {string} [cursor] Cursor
         * @param {'transaction_id' | 'status' | 'amount' | 'mint_id'} [orderBy] Property to sort by
         * @param {string} [direction] Direction to sort (asc/desc)
         * @param {string} [transactionId] Transaction id
         * @param {string} [contractAddress] Contract address of the asset
         * @param {string} [sellerWalletAddress] Ethereum address of the seller
         * @param {string} [walletAddress] Ethereum address of the user who wants to create transaction
         * @param {string} [status] Transaction status
         * @param {'moonpay' | 'layerswap'} [provider] Provider name
         * @param {string} [mintId] Mint id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getNftPrimaryTransactions(pageSize?: number, cursor?: string, orderBy?: 'transaction_id' | 'status' | 'amount' | 'mint_id', direction?: string, transactionId?: string, contractAddress?: string, sellerWalletAddress?: string, walletAddress?: string, status?: string, provider?: 'moonpay' | 'layerswap', mintId?: string, options?: any): AxiosPromise<NftprimarytransactionListTransactionsResponse> {
            return localVarFp.getNftPrimaryTransactions(pageSize, cursor, orderBy, direction, transactionId, contractAddress, sellerWalletAddress, walletAddress, status, provider, mintId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createNftPrimary operation in NftCheckoutPrimaryApi.
 * @export
 * @interface NftCheckoutPrimaryApiCreateNftPrimaryRequest
 */
export interface NftCheckoutPrimaryApiCreateNftPrimaryRequest {
    /**
     * req
     * @type {NftprimarytransactionCreateAPIRequest}
     * @memberof NftCheckoutPrimaryApiCreateNftPrimary
     */
    readonly createAPIRequest: NftprimarytransactionCreateAPIRequest
}

/**
 * Request parameters for getCurrenciesNFTCheckoutPrimary operation in NftCheckoutPrimaryApi.
 * @export
 * @interface NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest
 */
export interface NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest {
    /**
     * Provider name
     * @type {'moonpay'}
     * @memberof NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimary
     */
    readonly provider?: 'moonpay'

    /**
     * Flag if limits should be included in the response or not
     * @type {boolean}
     * @memberof NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimary
     */
    readonly includeLimits?: boolean
}

/**
 * Request parameters for getMintStatusById operation in NftCheckoutPrimaryApi.
 * @export
 * @interface NftCheckoutPrimaryApiGetMintStatusByIdRequest
 */
export interface NftCheckoutPrimaryApiGetMintStatusByIdRequest {
    /**
     * Provider name
     * @type {'moonpay' | 'layerswap'}
     * @memberof NftCheckoutPrimaryApiGetMintStatusById
     */
    readonly provider: 'moonpay' | 'layerswap'

    /**
     * transaction id
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetMintStatusById
     */
    readonly id: string
}

/**
 * Request parameters for getNftPrimaryTransaction operation in NftCheckoutPrimaryApi.
 * @export
 * @interface NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest
 */
export interface NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest {
    /**
     * Transaction id
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransaction
     */
    readonly transactionId: string
}

/**
 * Request parameters for getNftPrimaryTransactions operation in NftCheckoutPrimaryApi.
 * @export
 * @interface NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest
 */
export interface NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest {
    /**
     * Page size of the result
     * @type {number}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly pageSize?: number

    /**
     * Cursor
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly cursor?: string

    /**
     * Property to sort by
     * @type {'transaction_id' | 'status' | 'amount' | 'mint_id'}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly orderBy?: 'transaction_id' | 'status' | 'amount' | 'mint_id'

    /**
     * Direction to sort (asc/desc)
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly direction?: string

    /**
     * Transaction id
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly transactionId?: string

    /**
     * Contract address of the asset
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly contractAddress?: string

    /**
     * Ethereum address of the seller
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly sellerWalletAddress?: string

    /**
     * Ethereum address of the user who wants to create transaction
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly walletAddress?: string

    /**
     * Transaction status
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly status?: string

    /**
     * Provider name
     * @type {'moonpay' | 'layerswap'}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly provider?: 'moonpay' | 'layerswap'

    /**
     * Mint id
     * @type {string}
     * @memberof NftCheckoutPrimaryApiGetNftPrimaryTransactions
     */
    readonly mintId?: string
}

/**
 * NftCheckoutPrimaryApi - object-oriented interface
 * @export
 * @class NftCheckoutPrimaryApi
 * @extends {BaseAPI}
 */
export class NftCheckoutPrimaryApi extends BaseAPI {
    /**
     * creates nft primary transaction
     * @summary Create nft primary transaction
     * @param {NftCheckoutPrimaryApiCreateNftPrimaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NftCheckoutPrimaryApi
     */
    public createNftPrimary(requestParameters: NftCheckoutPrimaryApiCreateNftPrimaryRequest, options?: AxiosRequestConfig) {
        return NftCheckoutPrimaryApiFp(this.configuration).createNftPrimary(requestParameters.createAPIRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of supported currencies and their limits
     * @summary Get currencies with limits
     * @param {NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NftCheckoutPrimaryApi
     */
    public getCurrenciesNFTCheckoutPrimary(requestParameters: NftCheckoutPrimaryApiGetCurrenciesNFTCheckoutPrimaryRequest = {}, options?: AxiosRequestConfig) {
        return NftCheckoutPrimaryApiFp(this.configuration).getCurrenciesNFTCheckoutPrimary(requestParameters.provider, requestParameters.includeLimits, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * gets mint status by transaction ids
     * @summary Get mint status by transaction id
     * @param {NftCheckoutPrimaryApiGetMintStatusByIdRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NftCheckoutPrimaryApi
     */
    public getMintStatusById(requestParameters: NftCheckoutPrimaryApiGetMintStatusByIdRequest, options?: AxiosRequestConfig) {
        return NftCheckoutPrimaryApiFp(this.configuration).getMintStatusById(requestParameters.provider, requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * gets nft primary transaction by transaction id
     * @summary Get nft primary transaction by id
     * @param {NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NftCheckoutPrimaryApi
     */
    public getNftPrimaryTransaction(requestParameters: NftCheckoutPrimaryApiGetNftPrimaryTransactionRequest, options?: AxiosRequestConfig) {
        return NftCheckoutPrimaryApiFp(this.configuration).getNftPrimaryTransaction(requestParameters.transactionId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of NFT primary transactions
     * @summary Get a list of NFT primary transactions
     * @param {NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NftCheckoutPrimaryApi
     */
    public getNftPrimaryTransactions(requestParameters: NftCheckoutPrimaryApiGetNftPrimaryTransactionsRequest = {}, options?: AxiosRequestConfig) {
        return NftCheckoutPrimaryApiFp(this.configuration).getNftPrimaryTransactions(requestParameters.pageSize, requestParameters.cursor, requestParameters.orderBy, requestParameters.direction, requestParameters.transactionId, requestParameters.contractAddress, requestParameters.sellerWalletAddress, requestParameters.walletAddress, requestParameters.status, requestParameters.provider, requestParameters.mintId, options).then((request) => request(this.axios, this.basePath));
    }
}
