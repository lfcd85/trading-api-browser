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
  InlineResponse20028Rules,
  InlineResponse20028RulesFromJSON,
  InlineResponse20028RulesFromJSONTyped,
  InlineResponse20028RulesToJSON,
} from './'

/**
 *
 * @export
 * @interface InlineResponse20028
 */
export interface InlineResponse20028 {
  /**
   * Classification of Financial Instrument codes
   * @type {string}
   * @memberof InlineResponse20028
   */
  cfiCode?: string
  /**
   * Underlying symbol
   * @type {string}
   * @memberof InlineResponse20028
   */
  symbol?: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20028
   */
  cusip?: string
  /**
   * Expiration Date in the format YYYYMMDD
   * @type {number}
   * @memberof InlineResponse20028
   */
  expiryFull?: number
  /**
   * IBKRs contract identifier
   * @type {number}
   * @memberof InlineResponse20028
   */
  conId?: number
  /**
   * Date on which the underlying transaction settles if the option is exercised
   * @type {number}
   * @memberof InlineResponse20028
   */
  maturityDate?: number
  /**
   * Specific group of companies or businesses.
   * @type {string}
   * @memberof InlineResponse20028
   */
  industry?: string
  /**
   * Asset Class of the contract
   * @type {string}
   * @memberof InlineResponse20028
   */
  instrumentType?: string
  /**
   * Designation of the contract
   * @type {string}
   * @memberof InlineResponse20028
   */
  tradingClass?: string
  /**
   * Comma separated list of exchanges or trading venues
   * @type {string}
   * @memberof InlineResponse20028
   */
  validExchanges?: string
  /**
   * Allowed to sell shares that you own
   * @type {boolean}
   * @memberof InlineResponse20028
   */
  allowSellLong?: boolean
  /**
   * Supports zero commission trades
   * @type {boolean}
   * @memberof InlineResponse20028
   */
  isZeroCommissionSecurity?: boolean
  /**
   * Contracts symbol from primary exchange. For options it is the OCC symbol.
   * @type {string}
   * @memberof InlineResponse20028
   */
  localSymbol?: string
  /**
   *
   * @type {string}
   * @memberof InlineResponse20028
   */
  classifier?: string
  /**
   * Currency contract trades in
   * @type {string}
   * @memberof InlineResponse20028
   */
  currency?: string
  /**
   * Formatted contract parameters
   * @type {string}
   * @memberof InlineResponse20028
   */
  text?: string
  /**
   * IBKRs contract identifier for the underlying instrument
   * @type {number}
   * @memberof InlineResponse20028
   */
  underlyingConId?: number
  /**
   * Provides trading outside of Regular Trading Hours
   * @type {boolean}
   * @memberof InlineResponse20028
   */
  rTH?: boolean
  /**
   * numerical value of each point of price movement
   * @type {string}
   * @memberof InlineResponse20028
   */
  multiplier?: string
  /**
   * fixed price at which the owner of the option buys or sells the underlying
   * @type {string}
   * @memberof InlineResponse20028
   */
  strike?: string
  /**
   * Put or Call of the option
   * @type {string}
   * @memberof InlineResponse20028
   */
  right?: string
  /**
   * Legal entity for underlying contract
   * @type {string}
   * @memberof InlineResponse20028
   */
  underlyingIssuer?: string
  /**
   * Month the contract must be satisfied by making or accepting delivery
   * @type {string}
   * @memberof InlineResponse20028
   */
  contractMonth?: string
  /**
   * Contracts company name
   * @type {string}
   * @memberof InlineResponse20028
   */
  companyName?: string
  /**
   * Support IBKRs SMART routing
   * @type {boolean}
   * @memberof InlineResponse20028
   */
  smartAvailable?: boolean
  /**
   * Primary Exchange, Routing or Trading Venue
   * @type {string}
   * @memberof InlineResponse20028
   */
  exchange?: string
  /**
   *
   * @type {Array<InlineResponse20028Rules>}
   * @memberof InlineResponse20028
   */
  rules?: Array<InlineResponse20028Rules>
}

export function InlineResponse20028FromJSON(json: any): InlineResponse20028 {
  return InlineResponse20028FromJSONTyped(json, false)
}

export function InlineResponse20028FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20028 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    cfiCode: !exists(json, 'cfi_code') ? undefined : json['cfi_code'],
    symbol: !exists(json, 'symbol') ? undefined : json['symbol'],
    cusip: !exists(json, 'cusip') ? undefined : json['cusip'],
    expiryFull: !exists(json, 'expiry_full') ? undefined : json['expiry_full'],
    conId: !exists(json, 'con_id') ? undefined : json['con_id'],
    maturityDate: !exists(json, 'maturity_date')
      ? undefined
      : json['maturity_date'],
    industry: !exists(json, 'industry') ? undefined : json['industry'],
    instrumentType: !exists(json, 'instrument_type')
      ? undefined
      : json['instrument_type'],
    tradingClass: !exists(json, 'trading_class')
      ? undefined
      : json['trading_class'],
    validExchanges: !exists(json, 'valid_exchanges')
      ? undefined
      : json['valid_exchanges'],
    allowSellLong: !exists(json, 'allow_sell_long')
      ? undefined
      : json['allow_sell_long'],
    isZeroCommissionSecurity: !exists(json, 'is_zero_commission_security')
      ? undefined
      : json['is_zero_commission_security'],
    localSymbol: !exists(json, 'local_symbol')
      ? undefined
      : json['local_symbol'],
    classifier: !exists(json, 'classifier') ? undefined : json['classifier'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    text: !exists(json, 'text') ? undefined : json['text'],
    underlyingConId: !exists(json, 'underlying_con_id')
      ? undefined
      : json['underlying_con_id'],
    rTH: !exists(json, 'r_t_h') ? undefined : json['r_t_h'],
    multiplier: !exists(json, 'multiplier') ? undefined : json['multiplier'],
    strike: !exists(json, 'strike') ? undefined : json['strike'],
    right: !exists(json, 'right') ? undefined : json['right'],
    underlyingIssuer: !exists(json, 'underlying_issuer')
      ? undefined
      : json['underlying_issuer'],
    contractMonth: !exists(json, 'contract_month')
      ? undefined
      : json['contract_month'],
    companyName: !exists(json, 'company_name')
      ? undefined
      : json['company_name'],
    smartAvailable: !exists(json, 'smart_available')
      ? undefined
      : json['smart_available'],
    exchange: !exists(json, 'exchange') ? undefined : json['exchange'],
    rules: !exists(json, 'rules')
      ? undefined
      : (json['rules'] as Array<any>).map(InlineResponse20028RulesFromJSON),
  }
}

export function InlineResponse20028ToJSON(
  value?: InlineResponse20028 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    cfi_code: value.cfiCode,
    symbol: value.symbol,
    cusip: value.cusip,
    expiry_full: value.expiryFull,
    con_id: value.conId,
    maturity_date: value.maturityDate,
    industry: value.industry,
    instrument_type: value.instrumentType,
    trading_class: value.tradingClass,
    valid_exchanges: value.validExchanges,
    allow_sell_long: value.allowSellLong,
    is_zero_commission_security: value.isZeroCommissionSecurity,
    local_symbol: value.localSymbol,
    classifier: value.classifier,
    currency: value.currency,
    text: value.text,
    underlying_con_id: value.underlyingConId,
    r_t_h: value.rTH,
    multiplier: value.multiplier,
    strike: value.strike,
    right: value.right,
    underlying_issuer: value.underlyingIssuer,
    contract_month: value.contractMonth,
    company_name: value.companyName,
    smart_available: value.smartAvailable,
    exchange: value.exchange,
    rules:
      value.rules === undefined
        ? undefined
        : (value.rules as Array<any>).map(InlineResponse20028RulesToJSON),
  }
}
