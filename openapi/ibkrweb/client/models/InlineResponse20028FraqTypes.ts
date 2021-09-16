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

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface InlineResponse20028FraqTypes
 */
export interface InlineResponse20028FraqTypes {
  /**
   * order types that support fractional trades
   * @type {string}
   * @memberof InlineResponse20028FraqTypes
   */
  _0?: string
}

export function InlineResponse20028FraqTypesFromJSON(
  json: any
): InlineResponse20028FraqTypes {
  return InlineResponse20028FraqTypesFromJSONTyped(json, false)
}

export function InlineResponse20028FraqTypesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20028FraqTypes {
  if (json === undefined || json === null) {
    return json
  }
  return {
    _0: !exists(json, '0') ? undefined : json['0'],
  }
}

export function InlineResponse20028FraqTypesToJSON(
  value?: InlineResponse20028FraqTypes | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    '0': value._0,
  }
}
