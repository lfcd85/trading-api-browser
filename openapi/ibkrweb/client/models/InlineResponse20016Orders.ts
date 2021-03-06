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
 * @interface InlineResponse20016Orders
 */
export interface InlineResponse20016Orders {
  /**
   * Account number
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  acct?: string
  /**
   * conid and exchange. Format supports conid or conid@exchange
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  conidex?: string
  /**
   * Contract identifier
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  conid?: number
  /**
   * Order identifier
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  orderId?: string
  /**
   * Cash currency
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  cashCcy?: string
  /**
   * Quantity outstanding and total quantity concatenated with forward slash separator
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  sizeAndFills?: number
  /**
   * Order description
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  orderDesc?: string
  /**
   * Formatted ticker description
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  description1?: string
  /**
   * Underlying symbol
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  ticker?: string
  /**
   * Asset class
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  secType?: string
  /**
   * Listing Exchange
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  listingExchange?: string
  /**
   * Quantity remaining
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  remainingQuantity?: number
  /**
   * Quantity filled
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  filledQuantity?: number
  /**
   * Company Name
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  companyName?: string
  /**
   * Status of the order
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  status?: string
  /**
   * Original order type
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  origOrderType?: string
  /**
   * Supports Tax Optimization with 0 for no and 1 for yes
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  supportsTaxOpt?: number
  /**
   * Last status update in format YYMMDDhhmms based in GMT
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  lastExecutionTime?: number
  /**
   * Last status update unix time in ms
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  lastExecutionTimeR?: number
  /**
   * Order type
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  orderType?: string
  /**
   * Order reference
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  orderRef?: string
  /**
   * The side of the market of the order.
   *  * BUY: Buy contract near posted ask price
   *  * SELL: Sell contract near posted bid price
   *  * ASSN: Option Assignment, if BUYSELL=BUY and OptionType=PUT or BUYSELL=SELL and OptionType=CALL
   *  * EXER: Option Exercise, if BUYSELL=SELL and OptionType=PUT or BUYSELL=BUY and OptionType=CALL
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  side?: InlineResponse20016OrdersSideEnum
  /**
   * Time in force
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  timeInForce?: string
  /**
   * Price of order
   * @type {number}
   * @memberof InlineResponse20016Orders
   */
  price?: number
  /**
   * Background color in hex format
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  bgColor?: string
  /**
   * Foreground color in hex format
   * @type {string}
   * @memberof InlineResponse20016Orders
   */
  fgColor?: string
}

/**
 * @export
 * @enum {string}
 */
export enum InlineResponse20016OrdersSideEnum {
  Buy = 'BUY',
  Sell = 'SELL',
  Assn = 'ASSN',
  Exer = 'EXER',
}

export function InlineResponse20016OrdersFromJSON(
  json: any
): InlineResponse20016Orders {
  return InlineResponse20016OrdersFromJSONTyped(json, false)
}

export function InlineResponse20016OrdersFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20016Orders {
  if (json === undefined || json === null) {
    return json
  }
  return {
    acct: !exists(json, 'acct') ? undefined : json['acct'],
    conidex: !exists(json, 'conidex') ? undefined : json['conidex'],
    conid: !exists(json, 'conid') ? undefined : json['conid'],
    orderId: !exists(json, 'orderId') ? undefined : json['orderId'],
    cashCcy: !exists(json, 'cashCcy') ? undefined : json['cashCcy'],
    sizeAndFills: !exists(json, 'sizeAndFills')
      ? undefined
      : json['sizeAndFills'],
    orderDesc: !exists(json, 'orderDesc') ? undefined : json['orderDesc'],
    description1: !exists(json, 'description1')
      ? undefined
      : json['description1'],
    ticker: !exists(json, 'ticker') ? undefined : json['ticker'],
    secType: !exists(json, 'secType') ? undefined : json['secType'],
    listingExchange: !exists(json, 'listingExchange')
      ? undefined
      : json['listingExchange'],
    remainingQuantity: !exists(json, 'remainingQuantity')
      ? undefined
      : json['remainingQuantity'],
    filledQuantity: !exists(json, 'filledQuantity')
      ? undefined
      : json['filledQuantity'],
    companyName: !exists(json, 'companyName') ? undefined : json['companyName'],
    status: !exists(json, 'status') ? undefined : json['status'],
    origOrderType: !exists(json, 'origOrderType')
      ? undefined
      : json['origOrderType'],
    supportsTaxOpt: !exists(json, 'supportsTaxOpt')
      ? undefined
      : json['supportsTaxOpt'],
    lastExecutionTime: !exists(json, 'lastExecutionTime')
      ? undefined
      : json['lastExecutionTime'],
    lastExecutionTimeR: !exists(json, 'lastExecutionTime_r')
      ? undefined
      : json['lastExecutionTime_r'],
    orderType: !exists(json, 'orderType') ? undefined : json['orderType'],
    orderRef: !exists(json, 'order_ref') ? undefined : json['order_ref'],
    side: !exists(json, 'side') ? undefined : json['side'],
    timeInForce: !exists(json, 'timeInForce') ? undefined : json['timeInForce'],
    price: !exists(json, 'price') ? undefined : json['price'],
    bgColor: !exists(json, 'bgColor') ? undefined : json['bgColor'],
    fgColor: !exists(json, 'fgColor') ? undefined : json['fgColor'],
  }
}

export function InlineResponse20016OrdersToJSON(
  value?: InlineResponse20016Orders | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    acct: value.acct,
    conidex: value.conidex,
    conid: value.conid,
    orderId: value.orderId,
    cashCcy: value.cashCcy,
    sizeAndFills: value.sizeAndFills,
    orderDesc: value.orderDesc,
    description1: value.description1,
    ticker: value.ticker,
    secType: value.secType,
    listingExchange: value.listingExchange,
    remainingQuantity: value.remainingQuantity,
    filledQuantity: value.filledQuantity,
    companyName: value.companyName,
    status: value.status,
    origOrderType: value.origOrderType,
    supportsTaxOpt: value.supportsTaxOpt,
    lastExecutionTime: value.lastExecutionTime,
    lastExecutionTime_r: value.lastExecutionTimeR,
    orderType: value.orderType,
    order_ref: value.orderRef,
    side: value.side,
    timeInForce: value.timeInForce,
    price: value.price,
    bgColor: value.bgColor,
    fgColor: value.fgColor,
  }
}
