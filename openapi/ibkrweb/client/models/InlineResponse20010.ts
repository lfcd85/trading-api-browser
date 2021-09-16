/* tslint:disable */
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

import { exists, mapValues } from "../runtime";
import {
  OrderData,
  OrderDataFromJSON,
  OrderDataFromJSONTyped,
  OrderDataToJSON,
} from "./";

/**
 *
 * @export
 * @interface InlineResponse20010
 */
export interface InlineResponse20010 {
  /**
   *
   * @type {Array<OrderData>}
   * @memberof InlineResponse20010
   */
  orders?: Array<OrderData>;
}

export function InlineResponse20010FromJSON(json: any): InlineResponse20010 {
  return InlineResponse20010FromJSONTyped(json, false);
}

export function InlineResponse20010FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20010 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    orders: !exists(json, "orders")
      ? undefined
      : (json["orders"] as Array<any>).map(OrderDataFromJSON),
  };
}

export function InlineResponse20010ToJSON(
  value?: InlineResponse20010 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    orders:
      value.orders === undefined
        ? undefined
        : (value.orders as Array<any>).map(OrderDataToJSON),
  };
}