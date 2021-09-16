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
 * @interface InlineResponse20026
 */
export interface InlineResponse20026 {
  /**
   *
   * @type {Array<string>}
   * @memberof InlineResponse20026
   */
  call?: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof InlineResponse20026
   */
  put?: Array<string>
}

export function InlineResponse20026FromJSON(json: any): InlineResponse20026 {
  return InlineResponse20026FromJSONTyped(json, false)
}

export function InlineResponse20026FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20026 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    call: !exists(json, 'call') ? undefined : json['call'],
    put: !exists(json, 'put') ? undefined : json['put'],
  }
}

export function InlineResponse20026ToJSON(
  value?: InlineResponse20026 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    call: value.call,
    put: value.put,
  }
}
