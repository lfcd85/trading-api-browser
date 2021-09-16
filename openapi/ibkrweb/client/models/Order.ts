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
 * contains all the order related info
 * @export
 * @interface Order
 */
export interface Order {
  /**
   * account id
   * @type {string}
   * @memberof Order
   */
  acct?: string;
  /**
   *
   * @type {number}
   * @memberof Order
   */
  conid?: number;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  orderDesc?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  description1?: string;
  /**
   * for example FB
   * @type {string}
   * @memberof Order
   */
  ticker?: string;
  /**
   * for example STK
   * @type {string}
   * @memberof Order
   */
  secType?: string;
  /**
   * for example NASDAQ.NMS
   * @type {string}
   * @memberof Order
   */
  listingExchange?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  remainingQuantity?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  filledQuantity?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  companyName?: string;
  /**
   * * PendingSubmit - Indicates the order was sent, but confirmation has not been received that it has been received by the destination.
   *                   Occurs most commonly if an exchange is closed.
   * * PendingCancel - Indicates that a request has been sent to cancel an order but confirmation has not been received of its cancellation. * PreSubmitted - Indicates that a simulated order type has been accepted by the IBKR system and that this order has yet to be elected.
   *                  The order is held in the IBKR system until the election criteria are met. At that time the order is transmitted to the order destination as specified.
   * * Submitted - Indicates that the order has been accepted at the order destination and is working. * Cancelled - Indicates that the balance of the order has been confirmed cancelled by the IB system.
   *               This could occur unexpectedly when IB or the destination has rejected the order.
   * * Filled - Indicates that the order has been completely filled. * Inactive - Indicates the order is not working, for instance if the order was invalid and triggered an error message,
   *              or if the order was to short a security and shares have not yet been located.
   * @type {string}
   * @memberof Order
   */
  status?: string;
  /**
   * for example Limit
   * @type {string}
   * @memberof Order
   */
  origOrderType?: string;
  /**
   * BUY or SELL
   * @type {string}
   * @memberof Order
   */
  side?: string;
  /**
   *
   * @type {number}
   * @memberof Order
   */
  price?: number;
  /**
   * back-ground color
   * @type {string}
   * @memberof Order
   */
  bgColor?: string;
  /**
   *
   * @type {string}
   * @memberof Order
   */
  fgColor?: string;
  /**
   *
   * @type {number}
   * @memberof Order
   */
  orderId?: number;
  /**
   * Only exists in child order of bracket
   * @type {number}
   * @memberof Order
   */
  parentId?: number;
  /**
   * User defined string used to identify the order. Value is set using "cOID" field while placing an order.
   * @type {string}
   * @memberof Order
   */
  orderRef?: string;
}

export function OrderFromJSON(json: any): Order {
  return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Order {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    acct: !exists(json, "acct") ? undefined : json["acct"],
    conid: !exists(json, "conid") ? undefined : json["conid"],
    orderDesc: !exists(json, "orderDesc") ? undefined : json["orderDesc"],
    description1: !exists(json, "description1")
      ? undefined
      : json["description1"],
    ticker: !exists(json, "ticker") ? undefined : json["ticker"],
    secType: !exists(json, "secType") ? undefined : json["secType"],
    listingExchange: !exists(json, "listingExchange")
      ? undefined
      : json["listingExchange"],
    remainingQuantity: !exists(json, "remainingQuantity")
      ? undefined
      : json["remainingQuantity"],
    filledQuantity: !exists(json, "filledQuantity")
      ? undefined
      : json["filledQuantity"],
    companyName: !exists(json, "companyName") ? undefined : json["companyName"],
    status: !exists(json, "status") ? undefined : json["status"],
    origOrderType: !exists(json, "origOrderType")
      ? undefined
      : json["origOrderType"],
    side: !exists(json, "side") ? undefined : json["side"],
    price: !exists(json, "price") ? undefined : json["price"],
    bgColor: !exists(json, "bgColor") ? undefined : json["bgColor"],
    fgColor: !exists(json, "fgColor") ? undefined : json["fgColor"],
    orderId: !exists(json, "orderId") ? undefined : json["orderId"],
    parentId: !exists(json, "parentId") ? undefined : json["parentId"],
    orderRef: !exists(json, "order_ref") ? undefined : json["order_ref"],
  };
}

export function OrderToJSON(value?: Order | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    acct: value.acct,
    conid: value.conid,
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
    side: value.side,
    price: value.price,
    bgColor: value.bgColor,
    fgColor: value.fgColor,
    orderId: value.orderId,
    parentId: value.parentId,
    order_ref: value.orderRef,
  };
}