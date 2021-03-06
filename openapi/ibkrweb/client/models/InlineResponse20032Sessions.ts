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
 * If the LIQUID hours differs from the total trading day then a separate 'session' tag is returned.
 * @export
 * @interface InlineResponse20032Sessions
 */
export interface InlineResponse20032Sessions {
  /**
   *
   * @type {number}
   * @memberof InlineResponse20032Sessions
   */
  openingTime?: number
  /**
   *
   * @type {number}
   * @memberof InlineResponse20032Sessions
   */
  closingTime?: number
  /**
   * If the whole trading day is considered LIQUID then the value 'LIQUID' is returned.
   * @type {string}
   * @memberof InlineResponse20032Sessions
   */
  prop?: string
}

export function InlineResponse20032SessionsFromJSON(
  json: any
): InlineResponse20032Sessions {
  return InlineResponse20032SessionsFromJSONTyped(json, false)
}

export function InlineResponse20032SessionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20032Sessions {
  if (json === undefined || json === null) {
    return json
  }
  return {
    openingTime: !exists(json, 'openingTime') ? undefined : json['openingTime'],
    closingTime: !exists(json, 'closingTime') ? undefined : json['closingTime'],
    prop: !exists(json, 'prop') ? undefined : json['prop'],
  }
}

export function InlineResponse20032SessionsToJSON(
  value?: InlineResponse20032Sessions | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    openingTime: value.openingTime,
    closingTime: value.closingTime,
    prop: value.prop,
  }
}
