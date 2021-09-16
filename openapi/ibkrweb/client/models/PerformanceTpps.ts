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
import {
  PerformanceCpsData,
  PerformanceCpsDataFromJSON,
  PerformanceCpsDataFromJSONTyped,
  PerformanceCpsDataToJSON,
} from './'

/**
 * Time period performance data
 * @export
 * @interface PerformanceTpps
 */
export interface PerformanceTpps {
  /**
   * array of dates, the length should be same as the length of returns inside data.
   * @type {Array<string>}
   * @memberof PerformanceTpps
   */
  dates?: Array<string>
  /**
   * M means Month
   * @type {string}
   * @memberof PerformanceTpps
   */
  freq?: string
  /**
   *
   * @type {Array<PerformanceCpsData>}
   * @memberof PerformanceTpps
   */
  data?: Array<PerformanceCpsData>
}

export function PerformanceTppsFromJSON(json: any): PerformanceTpps {
  return PerformanceTppsFromJSONTyped(json, false)
}

export function PerformanceTppsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PerformanceTpps {
  if (json === undefined || json === null) {
    return json
  }
  return {
    dates: !exists(json, 'dates') ? undefined : json['dates'],
    freq: !exists(json, 'freq') ? undefined : json['freq'],
    data: !exists(json, 'data')
      ? undefined
      : (json['data'] as Array<any>).map(PerformanceCpsDataFromJSON),
  }
}

export function PerformanceTppsToJSON(value?: PerformanceTpps | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    dates: value.dates,
    freq: value.freq,
    data:
      value.data === undefined
        ? undefined
        : (value.data as Array<any>).map(PerformanceCpsDataToJSON),
  }
}
