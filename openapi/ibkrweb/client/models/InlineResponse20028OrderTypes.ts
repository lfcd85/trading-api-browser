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
 * @interface InlineResponse20028OrderTypes
 */
export interface InlineResponse20028OrderTypes {
  /**
   * list of available order types
   * @type {string}
   * @memberof InlineResponse20028OrderTypes
   */
  _0?: string;
}

export function InlineResponse20028OrderTypesFromJSON(
  json: any
): InlineResponse20028OrderTypes {
  return InlineResponse20028OrderTypesFromJSONTyped(json, false);
}

export function InlineResponse20028OrderTypesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20028OrderTypes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    _0: !exists(json, "0") ? undefined : json["0"],
  };
}

export function InlineResponse20028OrderTypesToJSON(
  value?: InlineResponse20028OrderTypes | null
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
