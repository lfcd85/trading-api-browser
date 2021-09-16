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
 * @interface InlineObject2
 */
export interface InlineObject2 {
  /**
   *
   * @type {string}
   * @memberof InlineObject2
   */
  response?: string;
}

export function InlineObject2FromJSON(json: any): InlineObject2 {
  return InlineObject2FromJSONTyped(json, false);
}

export function InlineObject2FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineObject2 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    response: !exists(json, "response") ? undefined : json["response"],
  };
}

export function InlineObject2ToJSON(value?: InlineObject2 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    response: value.response,
  };
}
