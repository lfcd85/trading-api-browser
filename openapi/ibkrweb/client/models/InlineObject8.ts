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
 * @interface InlineObject8
 */
export interface InlineObject8 {
  /**
   * symbol or name to be searched
   * @type {string}
   * @memberof InlineObject8
   */
  symbol: string;
  /**
   * should be true if the search is to be performed by name. false by default.
   * @type {boolean}
   * @memberof InlineObject8
   */
  name?: boolean;
  /**
   * If search is done by name, only the assets provided in this field will be returned. Currently, only STK is supported.
   * @type {string}
   * @memberof InlineObject8
   */
  secType?: string;
}

export function InlineObject8FromJSON(json: any): InlineObject8 {
  return InlineObject8FromJSONTyped(json, false);
}

export function InlineObject8FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineObject8 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    symbol: json["symbol"],
    name: !exists(json, "name") ? undefined : json["name"],
    secType: !exists(json, "secType") ? undefined : json["secType"],
  };
}

export function InlineObject8ToJSON(value?: InlineObject8 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    symbol: value.symbol,
    name: value.name,
    secType: value.secType,
  };
}