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
/**
 *
 * @export
 * @interface InlineResponse20033
 */
export interface InlineResponse20033 {
  /**
   *
   * @type {Array<object>}
   * @memberof InlineResponse20033
   */
  symbol?: Array<object>;
}

export function InlineResponse20033FromJSON(json: any): InlineResponse20033 {
  return InlineResponse20033FromJSONTyped(json, false);
}

export function InlineResponse20033FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20033 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    symbol: !exists(json, "symbol") ? undefined : json["symbol"],
  };
}

export function InlineResponse20033ToJSON(
  value?: InlineResponse20033 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    symbol: value.symbol,
  };
}
