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



/**
 * 
 * @export
 * @interface CreateOrderResponse
 */
export interface CreateOrderResponse {
    /**
     * ID of the created order
     * @type {number}
     * @memberof CreateOrderResponse
     */
    'order_id'?: number;
    /**
     * Status of the created order
     * @type {string}
     * @memberof CreateOrderResponse
     */
    'status'?: string;
    /**
     * Timestamp of the created order
     * @type {number}
     * @memberof CreateOrderResponse
     */
    'time'?: number;
}

