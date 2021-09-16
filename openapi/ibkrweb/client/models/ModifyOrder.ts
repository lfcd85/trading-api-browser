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
/**
 *
 * @export
 * @interface ModifyOrder
 */
export interface ModifyOrder {
  /**
   *
   * @type {string}
   * @memberof ModifyOrder
   */
  acctId?: string;
  /**
   *
   * @type {number}
   * @memberof ModifyOrder
   */
  conid?: number;
  /**
   * for example LMT
   * @type {string}
   * @memberof ModifyOrder
   */
  orderType?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModifyOrder
   */
  outsideRTH?: boolean;
  /**
   *
   * @type {number}
   * @memberof ModifyOrder
   */
  price?: number;
  /**
   *
   * @type {number}
   * @memberof ModifyOrder
   */
  auxPrice?: number;
  /**
   * SELL or BUY
   * @type {string}
   * @memberof ModifyOrder
   */
  side?: string;
  /**
   * optional, not required
   * @type {string}
   * @memberof ModifyOrder
   */
  listingExchange?: string;
  /**
   * The ticker symbol of the original place order
   * @type {string}
   * @memberof ModifyOrder
   */
  ticker?: string;
  /**
   * Specify a time in force to change how long your order will continue to work in the market
   * @type {string}
   * @memberof ModifyOrder
   */
  tif?: string;
  /**
   * usually integer, for some special cases can be float numbers
   * @type {number}
   * @memberof ModifyOrder
   */
  quantity?: number;
  /**
   * Set to true if you want to pause a working order.
   * For details refer to the [TWS Users' Guide:](https://guides.interactivebrokers.com/tws/twsguide.html#usersguidebook/getstarted/pause_execution.htm)
   * @type {boolean}
   * @memberof ModifyOrder
   */
  deactivated?: boolean;
}

export function ModifyOrderFromJSON(json: any): ModifyOrder {
  return ModifyOrderFromJSONTyped(json, false);
}

export function ModifyOrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ModifyOrder {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    acctId: !exists(json, "acctId") ? undefined : json["acctId"],
    conid: !exists(json, "conid") ? undefined : json["conid"],
    orderType: !exists(json, "orderType") ? undefined : json["orderType"],
    outsideRTH: !exists(json, "outsideRTH") ? undefined : json["outsideRTH"],
    price: !exists(json, "price") ? undefined : json["price"],
    auxPrice: !exists(json, "auxPrice") ? undefined : json["auxPrice"],
    side: !exists(json, "side") ? undefined : json["side"],
    listingExchange: !exists(json, "listingExchange")
      ? undefined
      : json["listingExchange"],
    ticker: !exists(json, "ticker") ? undefined : json["ticker"],
    tif: !exists(json, "tif") ? undefined : json["tif"],
    quantity: !exists(json, "quantity") ? undefined : json["quantity"],
    deactivated: !exists(json, "deactivated") ? undefined : json["deactivated"],
  };
}

export function ModifyOrderToJSON(value?: ModifyOrder | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    acctId: value.acctId,
    conid: value.conid,
    orderType: value.orderType,
    outsideRTH: value.outsideRTH,
    price: value.price,
    auxPrice: value.auxPrice,
    side: value.side,
    listingExchange: value.listingExchange,
    ticker: value.ticker,
    tif: value.tif,
    quantity: value.quantity,
    deactivated: value.deactivated,
  };
}
