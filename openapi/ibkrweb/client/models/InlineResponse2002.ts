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
 * @interface InlineResponse2002
 */
export interface InlineResponse2002 {
  /**
   * unread number
   * @type {number}
   * @memberof InlineResponse2002
   */
  bN?: number
}

export function InlineResponse2002FromJSON(json: any): InlineResponse2002 {
  return InlineResponse2002FromJSONTyped(json, false)
}

export function InlineResponse2002FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse2002 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    bN: !exists(json, 'BN') ? undefined : json['BN'],
  }
}

export function InlineResponse2002ToJSON(
  value?: InlineResponse2002 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    BN: value.bN,
  }
}
