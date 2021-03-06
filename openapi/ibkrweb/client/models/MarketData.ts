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
 * @interface MarketData
 */
export interface MarketData {
  /**
   * IBKR Contract ID
   * @type {number}
   * @memberof MarketData
   */
  conid?: number
  /**
   * Exchange
   * @type {string}
   * @memberof MarketData
   */
  exchange?: string
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  minTick?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  last?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  lastSize?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  bid?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  bidSize?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  ask?: number
  /**
   *
   * @type {number}
   * @memberof MarketData
   */
  askSize?: number
}

export function MarketDataFromJSON(json: any): MarketData {
  return MarketDataFromJSONTyped(json, false)
}

export function MarketDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): MarketData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    conid: !exists(json, 'Conid') ? undefined : json['Conid'],
    exchange: !exists(json, 'Exchange') ? undefined : json['Exchange'],
    minTick: !exists(json, 'minTick') ? undefined : json['minTick'],
    last: !exists(json, 'Last') ? undefined : json['Last'],
    lastSize: !exists(json, 'LastSize') ? undefined : json['LastSize'],
    bid: !exists(json, 'Bid') ? undefined : json['Bid'],
    bidSize: !exists(json, 'BidSize') ? undefined : json['BidSize'],
    ask: !exists(json, 'Ask') ? undefined : json['Ask'],
    askSize: !exists(json, 'AskSize') ? undefined : json['AskSize'],
  }
}

export function MarketDataToJSON(value?: MarketData | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    Conid: value.conid,
    Exchange: value.exchange,
    minTick: value.minTick,
    Last: value.last,
    LastSize: value.lastSize,
    Bid: value.bid,
    BidSize: value.bidSize,
    Ask: value.ask,
    AskSize: value.askSize,
  }
}
