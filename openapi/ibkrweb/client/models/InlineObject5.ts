// @ts-nocheck
/* eslint-disable */
/**
 * Client Portal Web API
 * Client Poral Web API
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import {
  OrderRequest,
  OrderRequestFromJSON,
  OrderRequestFromJSONTyped,
  OrderRequestToJSON,
} from './'

/**
 *
 * @export
 * @interface InlineObject5
 */
export interface InlineObject5 {
  /**
   * Notes for bracket orders: 1. Children orders will not have its own "cOID", so please donot pass "cOID"
   * parameter in child order.Instead, they will have a "parentId" which must be equal to "cOID" of parent.
   * 2. When you cancel a parent order, it will cancel all bracket orders, when you cancel one child order,
   * it will also cancel its sibling order.
   * @type {Array<OrderRequest>}
   * @memberof InlineObject5
   */
  orders?: Array<OrderRequest>
}

export function InlineObject5FromJSON(json: any): InlineObject5 {
  return InlineObject5FromJSONTyped(json, false)
}

export function InlineObject5FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineObject5 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    orders: !exists(json, 'orders')
      ? undefined
      : (json['orders'] as Array<any>).map(OrderRequestFromJSON),
  }
}

export function InlineObject5ToJSON(value?: InlineObject5 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    orders:
      value.orders === undefined
        ? undefined
        : (value.orders as Array<any>).map(OrderRequestToJSON),
  }
}
