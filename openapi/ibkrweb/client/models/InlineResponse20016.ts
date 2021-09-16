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
  InlineResponse20016Orders,
  InlineResponse20016OrdersFromJSON,
  InlineResponse20016OrdersFromJSONTyped,
  InlineResponse20016OrdersToJSON,
} from "./";

/**
 *
 * @export
 * @interface InlineResponse20016
 */
export interface InlineResponse20016 {
  /**
   *
   * @type {Array<InlineResponse20016Orders>}
   * @memberof InlineResponse20016
   */
  orders?: Array<InlineResponse20016Orders>;
  /**
   * If live order update is a snapshot
   * @type {boolean}
   * @memberof InlineResponse20016
   */
  snapshot?: boolean;
}

export function InlineResponse20016FromJSON(json: any): InlineResponse20016 {
  return InlineResponse20016FromJSONTyped(json, false);
}

export function InlineResponse20016FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20016 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    orders: !exists(json, "orders")
      ? undefined
      : (json["orders"] as Array<any>).map(InlineResponse20016OrdersFromJSON),
    snapshot: !exists(json, "snapshot") ? undefined : json["snapshot"],
  };
}

export function InlineResponse20016ToJSON(
  value?: InlineResponse20016 | null
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
        : (value.orders as Array<any>).map(InlineResponse20016OrdersToJSON),
    snapshot: value.snapshot,
  };
}