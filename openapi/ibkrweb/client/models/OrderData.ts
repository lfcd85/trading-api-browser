/* tslint:disable */
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

import { exists, mapValues } from "../runtime";
import {
  OrderDataWarnings,
  OrderDataWarningsFromJSON,
  OrderDataWarningsFromJSONTyped,
  OrderDataWarningsToJSON,
} from "./";

/**
 *
 * @export
 * @interface OrderData
 */
export interface OrderData {
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  clientOrderId?: string;
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  execId?: string;
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  execType?: OrderDataExecTypeEnum;
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  orderType?: OrderDataOrderTypeEnum;
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  orderStatus?: OrderDataOrderStatusEnum;
  /**
   * Underlying symbol for contract
   * @type {string}
   * @memberof OrderData
   */
  symbol?: string;
  /**
   * Quantity of active order
   * @type {string}
   * @memberof OrderData
   */
  orderQty?: string;
  /**
   * Price of active order
   * @type {string}
   * @memberof OrderData
   */
  price?: string;
  /**
   * Quantity of the last partial fill
   * @type {string}
   * @memberof OrderData
   */
  lastShares?: string;
  /**
   * Price of the last partial fill
   * @type {string}
   * @memberof OrderData
   */
  lastPrice?: string;
  /**
   * Cumulative fill quantity
   * @type {string}
   * @memberof OrderData
   */
  cumQty?: string;
  /**
   * Remaining quantity to be filled
   * @type {string}
   * @memberof OrderData
   */
  leavesQty?: string;
  /**
   * Average fill price
   * @type {string}
   * @memberof OrderData
   */
  avgPrice?: string;
  /**
   *
   * @type {string}
   * @memberof OrderData
   */
  side?: OrderDataSideEnum;
  /**
   * Order identifier
   * @type {string}
   * @memberof OrderData
   */
  orderId?: string;
  /**
   * Account number
   * @type {string}
   * @memberof OrderData
   */
  account?: string;
  /**
   * Contracts asset class
   * @type {string}
   * @memberof OrderData
   */
  secType?: OrderDataSecTypeEnum;
  /**
   * Time of transaction in GMT, format YYYYMMDD-hh:m:ss
   * @type {string}
   * @memberof OrderData
   */
  txTime?: string;
  /**
   * Time of receipt in GMT, format YYYYMMDD-hh:mm:ss
   * @type {string}
   * @memberof OrderData
   */
  rcptTime?: string;
  /**
   * Time in Force
   * @type {string}
   * @memberof OrderData
   */
  tif?: OrderDataTifEnum;
  /**
   * Contract identifier from IBKR's database.
   * @type {string}
   * @memberof OrderData
   */
  conid?: string;
  /**
   * Trading currency
   * @type {string}
   * @memberof OrderData
   */
  currency?: string;
  /**
   * Exchange or venue
   * @type {string}
   * @memberof OrderData
   */
  exchange?: string;
  /**
   * Listing Exchange
   * @type {string}
   * @memberof OrderData
   */
  listingExchange?: string;
  /**
   * error message
   * @type {number}
   * @memberof OrderData
   */
  text?: number;
  /**
   *
   * @type {OrderDataWarnings}
   * @memberof OrderData
   */
  warnings?: OrderDataWarnings;
  /**
   * Commission currency
   * @type {string}
   * @memberof OrderData
   */
  commCurr?: string;
  /**
   * Commissions
   * @type {string}
   * @memberof OrderData
   */
  comms?: string;
  /**
   * Realized PnL
   * @type {string}
   * @memberof OrderData
   */
  realizedPnl?: string;
}

/**
 * @export
 * @enum {string}
 */
export enum OrderDataExecTypeEnum {
  _1Invalid = '-1 "Invalid"',
  _0New = '0 "New"',
  _1PartiallyFilled = '1 "Partially Filled"',
  _2Filled = '2 "Filled"',
  _3DoneForTheDay = '3 "Done for the Day"',
  _4Canceled = '4 "Canceled"',
  _5Replaced = '5 "Replaced"',
  _6PendingCancel = '6 "Pending Cancel"',
  _7Stopped = '7 "Stopped"',
  _8Rejected = '8 "Rejected"',
  _9Suspended = '9 "Suspended"',
  APendingNew = 'A "Pending New"',
  BCalculated = 'B "Calculated"',
  CExpired = 'C "Expired"',
  DRestated = 'D "Restated"',
  EPendingReplace = 'E "Pending Replace"',
  FTrade = 'F "Trade"',
  GTradeCorrect = 'G "Trade Correct"',
  HTradeCancel = 'H "Trade Cancel"',
  IOrderStatus = 'I "Order Status"',
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDataOrderTypeEnum {
  _1Market = '1 "Market"',
  _2Limit = '2 "Limit"',
  _3Stop = '3 "Stop"',
  _4StopLimit = '4 "Stop Limit"',
  _5MarketOnClose = '5 "Market on Close"',
  _6WithOrWithout = '6 "With or Without"',
  _7LimitOrBetter = '7 "Limit or Better"',
  _8LimitWithOrWithout = '8 "Limit With or Without"',
  _9OnBasis = '9 "On Basis"',
  AOnClose = 'A "On Close"',
  BLimitOnClose = 'B "Limit On Close"',
  CForexMarket = 'C "Forex Market"',
  DPreviouslyQuoted = 'D "Previously Quoted"',
  EPreviouslyIndicated = 'E "Previously Indicated"',
  FForexLimit = 'F "Forex Limit"',
  GForexSwap = 'G "Forex Swap"',
  HForexPreviouslyQuoted = 'H "Forex Previously Quoted"',
  IFunari = 'I "Funari"',
  KMarketToLimit = 'K "Market To Limit"',
  PPegged = 'P "Pegged"',
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDataOrderStatusEnum {
  _1InvalidOrderStatus = '-1 "Invalid Order Status"',
  _0New = '0 "New"',
  _1PartiallyFilled = '1 "Partially Filled"',
  _2Filled = '2 "Filled"',
  _3DoneForTheDay = '3 "Done for the Day"',
  _4Canceled = '4 "Canceled"',
  _5Replaced = '5 "Replaced"',
  _6PendingCancel = '6 "Pending Cancel"',
  _7Stopped = '7 "Stopped"',
  _8Rejected = '8 "Rejected"',
  _9Suspended = '9 "Suspended"',
  APendingNew = 'A "Pending New"',
  BCalculated = 'B "Calculated"',
  CExpired = 'C "Expired"',
  DRestated = 'D "Restated"',
  EPendingReplace = 'E "Pending Replace"',
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDataSideEnum {
  _1Buy = '1 "Buy"',
  _2Sell = '2 "Sell"',
  _3BuyMinus = '3 "Buy Minus"',
  _4SellPlus = '4 "Sell Plus"',
  _5SellShort = '5 "Sell Short"',
  _6SellShortExempt = '6 "Sell Short Exempt"',
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDataSecTypeEnum {
  CsStock = 'CS "Stock"',
  CashForex = 'CASH "Forex"',
  CfdContractForDifference = 'CFD "Contract for Difference"',
  FutFuture = 'FUT "Future"',
  OptOption = 'OPT "Option"',
}
/**
 * @export
 * @enum {string}
 */
export enum OrderDataTifEnum {
  _0Day = '0 "Day"',
  _1Gtc = '1 "GTC"',
  _2AtTheOpening = '2 "At the Opening"',
}

export function OrderDataFromJSON(json: any): OrderData {
  return OrderDataFromJSONTyped(json, false);
}

export function OrderDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    clientOrderId: !exists(json, "clientOrderId")
      ? undefined
      : json["clientOrderId"],
    execId: !exists(json, "execId") ? undefined : json["execId"],
    execType: !exists(json, "execType") ? undefined : json["execType"],
    orderType: !exists(json, "orderType") ? undefined : json["orderType"],
    orderStatus: !exists(json, "orderStatus") ? undefined : json["orderStatus"],
    symbol: !exists(json, "symbol") ? undefined : json["symbol"],
    orderQty: !exists(json, "orderQty") ? undefined : json["orderQty"],
    price: !exists(json, "price") ? undefined : json["price"],
    lastShares: !exists(json, "lastShares") ? undefined : json["lastShares"],
    lastPrice: !exists(json, "lastPrice") ? undefined : json["lastPrice"],
    cumQty: !exists(json, "cumQty") ? undefined : json["cumQty"],
    leavesQty: !exists(json, "leavesQty") ? undefined : json["leavesQty"],
    avgPrice: !exists(json, "avgPrice") ? undefined : json["avgPrice"],
    side: !exists(json, "side") ? undefined : json["side"],
    orderId: !exists(json, "orderId") ? undefined : json["orderId"],
    account: !exists(json, "account") ? undefined : json["account"],
    secType: !exists(json, "secType") ? undefined : json["secType"],
    txTime: !exists(json, "txTime") ? undefined : json["txTime"],
    rcptTime: !exists(json, "rcptTime") ? undefined : json["rcptTime"],
    tif: !exists(json, "tif") ? undefined : json["tif"],
    conid: !exists(json, "conid") ? undefined : json["conid"],
    currency: !exists(json, "currency") ? undefined : json["currency"],
    exchange: !exists(json, "exchange") ? undefined : json["exchange"],
    listingExchange: !exists(json, "listingExchange")
      ? undefined
      : json["listingExchange"],
    text: !exists(json, "text") ? undefined : json["text"],
    warnings: !exists(json, "warnings")
      ? undefined
      : OrderDataWarningsFromJSON(json["warnings"]),
    commCurr: !exists(json, "commCurr") ? undefined : json["commCurr"],
    comms: !exists(json, "comms") ? undefined : json["comms"],
    realizedPnl: !exists(json, "realizedPnl") ? undefined : json["realizedPnl"],
  };
}

export function OrderDataToJSON(value?: OrderData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    clientOrderId: value.clientOrderId,
    execId: value.execId,
    execType: value.execType,
    orderType: value.orderType,
    orderStatus: value.orderStatus,
    symbol: value.symbol,
    orderQty: value.orderQty,
    price: value.price,
    lastShares: value.lastShares,
    lastPrice: value.lastPrice,
    cumQty: value.cumQty,
    leavesQty: value.leavesQty,
    avgPrice: value.avgPrice,
    side: value.side,
    orderId: value.orderId,
    account: value.account,
    secType: value.secType,
    txTime: value.txTime,
    rcptTime: value.rcptTime,
    tif: value.tif,
    conid: value.conid,
    currency: value.currency,
    exchange: value.exchange,
    listingExchange: value.listingExchange,
    text: value.text,
    warnings: OrderDataWarningsToJSON(value.warnings),
    commCurr: value.commCurr,
    comms: value.comms,
    realizedPnl: value.realizedPnl,
  };
}