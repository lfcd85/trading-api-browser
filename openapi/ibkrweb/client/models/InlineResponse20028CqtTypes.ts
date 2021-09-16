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
 * @interface InlineResponse20028CqtTypes
 */
export interface InlineResponse20028CqtTypes {
  /**
   * order types that support cqt trades
   * @type {string}
   * @memberof InlineResponse20028CqtTypes
   */
  _0?: string
}

export function InlineResponse20028CqtTypesFromJSON(
  json: any
): InlineResponse20028CqtTypes {
  return InlineResponse20028CqtTypesFromJSONTyped(json, false)
}

export function InlineResponse20028CqtTypesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20028CqtTypes {
  if (json === undefined || json === null) {
    return json
  }
  return {
    _0: !exists(json, '0') ? undefined : json['0'],
  }
}

export function InlineResponse20028CqtTypesToJSON(
  value?: InlineResponse20028CqtTypes | null
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
