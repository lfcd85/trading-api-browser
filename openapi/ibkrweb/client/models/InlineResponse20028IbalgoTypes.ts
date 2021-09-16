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
 * @interface InlineResponse20028IbalgoTypes
 */
export interface InlineResponse20028IbalgoTypes {
  /**
   * order types that support IB Algos
   * @type {string}
   * @memberof InlineResponse20028IbalgoTypes
   */
  _0?: string;
}

export function InlineResponse20028IbalgoTypesFromJSON(
  json: any
): InlineResponse20028IbalgoTypes {
  return InlineResponse20028IbalgoTypesFromJSONTyped(json, false);
}

export function InlineResponse20028IbalgoTypesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20028IbalgoTypes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    _0: !exists(json, "0") ? undefined : json["0"],
  };
}

export function InlineResponse20028IbalgoTypesToJSON(
  value?: InlineResponse20028IbalgoTypes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    "0": value._0,
  };
}
