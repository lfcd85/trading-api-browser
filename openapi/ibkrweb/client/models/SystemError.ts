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
 * @interface SystemError
 */
export interface SystemError {
  /**
   *
   * @type {string}
   * @memberof SystemError
   */
  error?: string;
}

export function SystemErrorFromJSON(json: any): SystemError {
  return SystemErrorFromJSONTyped(json, false);
}

export function SystemErrorFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SystemError {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    error: !exists(json, "error") ? undefined : json["error"],
  };
}

export function SystemErrorToJSON(value?: SystemError | null): any {
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
