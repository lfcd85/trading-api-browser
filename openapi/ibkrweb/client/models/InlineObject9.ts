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
 * @interface InlineObject9
 */
export interface InlineObject9 {
  /**
   *
   * @type {Array<number>}
   * @memberof InlineObject9
   */
  conids?: Array<number>
}

export function InlineObject9FromJSON(json: any): InlineObject9 {
  return InlineObject9FromJSONTyped(json, false)
}

export function InlineObject9FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineObject9 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    conids: !exists(json, 'conids') ? undefined : json['conids'],
  }
}

export function InlineObject9ToJSON(value?: InlineObject9 | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    conids: value.conids,
  }
}
