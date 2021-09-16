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
 * @interface InlineResponse20029ScanTypeList
 */
export interface InlineResponse20029ScanTypeList {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20029ScanTypeList
   */
  displayName?: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20029ScanTypeList
   */
  code?: string
  /**
   *
   * @type {Array<string>}
   * @memberof InlineResponse20029ScanTypeList
   */
  instruments?: Array<string>
}

export function InlineResponse20029ScanTypeListFromJSON(
  json: any
): InlineResponse20029ScanTypeList {
  return InlineResponse20029ScanTypeListFromJSONTyped(json, false)
}

export function InlineResponse20029ScanTypeListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20029ScanTypeList {
  if (json === undefined || json === null) {
    return json
  }
  return {
    displayName: !exists(json, 'display_name')
      ? undefined
      : json['display_name'],
    code: !exists(json, 'code') ? undefined : json['code'],
    instruments: !exists(json, 'instruments') ? undefined : json['instruments'],
  }
}

export function InlineResponse20029ScanTypeListToJSON(
  value?: InlineResponse20029ScanTypeList | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    display_name: value.displayName,
    code: value.code,
    instruments: value.instruments,
  }
}
