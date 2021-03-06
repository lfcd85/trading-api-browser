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
 * @interface SummaryExcludedAccounts
 */
export interface SummaryExcludedAccounts {
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  lastUpdateAttempt?: string
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  fiName?: string
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  acctTitle?: string
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  acctNumAtFI?: string
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  acctId?: string
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  lastUpdate?: string
  /**
   *
   * @type {number}
   * @memberof SummaryExcludedAccounts
   */
  harvestCode?: number
  /**
   *
   * @type {string}
   * @memberof SummaryExcludedAccounts
   */
  lastUpdateStatusCode?: string
  /**
   *
   * @type {number}
   * @memberof SummaryExcludedAccounts
   */
  rc?: number
}

export function SummaryExcludedAccountsFromJSON(
  json: any
): SummaryExcludedAccounts {
  return SummaryExcludedAccountsFromJSONTyped(json, false)
}

export function SummaryExcludedAccountsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): SummaryExcludedAccounts {
  if (json === undefined || json === null) {
    return json
  }
  return {
    lastUpdateAttempt: !exists(json, 'lastUpdateAttempt')
      ? undefined
      : json['lastUpdateAttempt'],
    fiName: !exists(json, 'fiName') ? undefined : json['fiName'],
    acctTitle: !exists(json, 'acctTitle') ? undefined : json['acctTitle'],
    acctNumAtFI: !exists(json, 'acctNumAtFI') ? undefined : json['acctNumAtFI'],
    acctId: !exists(json, 'acctId') ? undefined : json['acctId'],
    lastUpdate: !exists(json, 'lastUpdate') ? undefined : json['lastUpdate'],
    harvestCode: !exists(json, 'harvestCode') ? undefined : json['harvestCode'],
    lastUpdateStatusCode: !exists(json, 'lastUpdateStatusCode')
      ? undefined
      : json['lastUpdateStatusCode'],
    rc: !exists(json, 'rc') ? undefined : json['rc'],
  }
}

export function SummaryExcludedAccountsToJSON(
  value?: SummaryExcludedAccounts | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    lastUpdateAttempt: value.lastUpdateAttempt,
    fiName: value.fiName,
    acctTitle: value.acctTitle,
    acctNumAtFI: value.acctNumAtFI,
    acctId: value.acctId,
    lastUpdate: value.lastUpdate,
    harvestCode: value.harvestCode,
    lastUpdateStatusCode: value.lastUpdateStatusCode,
    rc: value.rc,
  }
}
