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
 * @interface InlineResponse20019Equity
 */
export interface InlineResponse20019Equity {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20019Equity
   */
  current?: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20019Equity
   */
  change?: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20019Equity
   */
  after?: string
}

export function InlineResponse20019EquityFromJSON(
  json: any
): InlineResponse20019Equity {
  return InlineResponse20019EquityFromJSONTyped(json, false)
}

export function InlineResponse20019EquityFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20019Equity {
  if (json === undefined || json === null) {
    return json
  }
  return {
    current: !exists(json, 'current') ? undefined : json['current'],
    change: !exists(json, 'change') ? undefined : json['change'],
    after: !exists(json, 'after') ? undefined : json['after'],
  }
}

export function InlineResponse20019EquityToJSON(
  value?: InlineResponse20019Equity | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    current: value.current,
    change: value.change,
    after: value.after,
  }
}
