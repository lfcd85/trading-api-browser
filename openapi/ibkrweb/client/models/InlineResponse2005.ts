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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface InlineResponse2005
 */
export interface InlineResponse2005 {
  /**
   *
   * @type {number}
   * @memberof InlineResponse2005
   */
  t?: number;
  /**
   *
   * @type {number}
   * @memberof InlineResponse2005
   */
  v?: number;
}

export function InlineResponse2005FromJSON(json: any): InlineResponse2005 {
  return InlineResponse2005FromJSONTyped(json, false);
}

export function InlineResponse2005FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse2005 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    t: !exists(json, "T") ? undefined : json["T"],
    v: !exists(json, "V") ? undefined : json["V"],
  };
}

export function InlineResponse2005ToJSON(
  value?: InlineResponse2005 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    T: value.t,
    V: value.v,
  };
}
