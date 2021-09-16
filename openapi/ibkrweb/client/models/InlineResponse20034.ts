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
 * @interface InlineResponse20034
 */
export interface InlineResponse20034 {
  /**
   * This is an array of object(s), there could be multiple results under same symbol
   * @type {Array<object>}
   * @memberof InlineResponse20034
   */
  symbol?: Array<object>;
}

export function InlineResponse20034FromJSON(json: any): InlineResponse20034 {
  return InlineResponse20034FromJSONTyped(json, false);
}

export function InlineResponse20034FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20034 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    symbol: !exists(json, "symbol") ? undefined : json["symbol"],
  };
}

export function InlineResponse20034ToJSON(
  value?: InlineResponse20034 | null
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
