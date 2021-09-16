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
 * @interface InlineResponse429
 */
export interface InlineResponse429 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse429
   */
  error?: string;
}

export function InlineResponse429FromJSON(json: any): InlineResponse429 {
  return InlineResponse429FromJSONTyped(json, false);
}

export function InlineResponse429FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse429 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, "error") ? undefined : json["error"],
  };
}

export function InlineResponse429ToJSON(value?: InlineResponse429 | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    error: value.error,
  };
}