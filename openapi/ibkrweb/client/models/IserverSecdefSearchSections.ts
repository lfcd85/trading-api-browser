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
 * @interface IserverSecdefSearchSections
 */
export interface IserverSecdefSearchSections {
  /**
   * Asset Class
   * @type {string}
   * @memberof IserverSecdefSearchSections
   */
  secType?: string
  /**
   * List of expiration month(s) and year(s) in MMMYY format separated by semicolon
   * @type {string}
   * @memberof IserverSecdefSearchSections
   */
  months?: string
  /**
   * Underlying symbol
   * @type {string}
   * @memberof IserverSecdefSearchSections
   */
  symbol?: string
  /**
   * Listing Exchange
   * @type {string}
   * @memberof IserverSecdefSearchSections
   */
  exchange?: string
  /**
   * For combo's defines the asset class for each leg
   * @type {string}
   * @memberof IserverSecdefSearchSections
   */
  legSecType?: string
}

export function IserverSecdefSearchSectionsFromJSON(
  json: any
): IserverSecdefSearchSections {
  return IserverSecdefSearchSectionsFromJSONTyped(json, false)
}

export function IserverSecdefSearchSectionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): IserverSecdefSearchSections {
  if (json === undefined || json === null) {
    return json
  }
  return {
    secType: !exists(json, 'secType') ? undefined : json['secType'],
    months: !exists(json, 'months') ? undefined : json['months'],
    symbol: !exists(json, 'symbol') ? undefined : json['symbol'],
    exchange: !exists(json, 'exchange') ? undefined : json['exchange'],
    legSecType: !exists(json, 'legSecType') ? undefined : json['legSecType'],
  }
}

export function IserverSecdefSearchSectionsToJSON(
  value?: IserverSecdefSearchSections | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    secType: value.secType,
    months: value.months,
    symbol: value.symbol,
    exchange: value.exchange,
    legSecType: value.legSecType,
  }
}
