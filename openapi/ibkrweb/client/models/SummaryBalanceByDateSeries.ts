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
 * @interface SummaryBalanceByDateSeries
 */
export interface SummaryBalanceByDateSeries {
  /**
   *
   * @type {string}
   * @memberof SummaryBalanceByDateSeries
   */
  id?: string
  /**
   *
   * @type {string}
   * @memberof SummaryBalanceByDateSeries
   */
  groupId?: string
  /**
   *
   * @type {string}
   * @memberof SummaryBalanceByDateSeries
   */
  name?: string
  /**
   *
   * @type {Array<Array<number>>}
   * @memberof SummaryBalanceByDateSeries
   */
  date?: Array<Array<number>>
}

export function SummaryBalanceByDateSeriesFromJSON(
  json: any
): SummaryBalanceByDateSeries {
  return SummaryBalanceByDateSeriesFromJSONTyped(json, false)
}

export function SummaryBalanceByDateSeriesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SummaryBalanceByDateSeries {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    groupId: !exists(json, 'groupId') ? undefined : json['groupId'],
    name: !exists(json, 'name') ? undefined : json['name'],
    date: !exists(json, 'date') ? undefined : json['date'],
  }
}

export function SummaryBalanceByDateSeriesToJSON(
  value?: SummaryBalanceByDateSeries | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    groupId: value.groupId,
    name: value.name,
    date: value.date,
  }
}
