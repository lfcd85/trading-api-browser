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
 * @interface CalendarRequestDate
 */
export interface CalendarRequestDate {
  /**
   * start date of a period. for example 20180808-0400
   * @type {string}
   * @memberof CalendarRequestDate
   */
  start?: string
  /**
   * end date of a period. for example 20180808-0400
   * @type {string}
   * @memberof CalendarRequestDate
   */
  end?: string
}

export function CalendarRequestDateFromJSON(json: any): CalendarRequestDate {
  return CalendarRequestDateFromJSONTyped(json, false)
}

export function CalendarRequestDateFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): CalendarRequestDate {
  if (json === undefined || json === null) {
    return json
  }
  return {
    start: !exists(json, 'start') ? undefined : json['start'],
    end: !exists(json, 'end') ? undefined : json['end'],
  }
}

export function CalendarRequestDateToJSON(
  value?: CalendarRequestDate | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    start: value.start,
    end: value.end,
  }
}
