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
 * @interface TransactionsTransactions
 */
export interface TransactionsTransactions {
  /**
   *
   * @type {string}
   * @memberof TransactionsTransactions
   */
  acctid?: string;
  /**
   *
   * @type {number}
   * @memberof TransactionsTransactions
   */
  conid?: number;
  /**
   * currency code
   * @type {string}
   * @memberof TransactionsTransactions
   */
  cur?: string;
  /**
   * Conversion rate from asset currency to response currency
   * @type {number}
   * @memberof TransactionsTransactions
   */
  fxRate?: number;
  /**
   * Transaction description
   * @type {string}
   * @memberof TransactionsTransactions
   */
  desc?: string;
  /**
   * Date of transaction.  Epoch time, GMT
   * @type {string}
   * @memberof TransactionsTransactions
   */
  date?: string;
  /**
   * Transaction Type Name: Examples: "Sell", "Buy", "Corporate Action",
   * "Dividend Payment", "Transfer", "Payment in Lieu"
   * Dividends and Transfers do not have price and quantity in response
   * @type {string}
   * @memberof TransactionsTransactions
   */
  type?: string;
  /**
   * Not applicable for all transaction types
   * @type {number}
   * @memberof TransactionsTransactions
   */
  qty?: number;
  /**
   * In asset currency. Not be applicable for all transaction types.
   * @type {number}
   * @memberof TransactionsTransactions
   */
  pr?: number;
  /**
   * Raw value, no formatting. Transaction amount. For trades does not include commission.
   * In asset currency
   * @type {number}
   * @memberof TransactionsTransactions
   */
  amt?: number;
}

export function TransactionsTransactionsFromJSON(
  json: any
): TransactionsTransactions {
  return TransactionsTransactionsFromJSONTyped(json, false);
}

export function TransactionsTransactionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): TransactionsTransactions {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    acctid: !exists(json, "acctid") ? undefined : json["acctid"],
    conid: !exists(json, "conid") ? undefined : json["conid"],
    cur: !exists(json, "cur") ? undefined : json["cur"],
    fxRate: !exists(json, "fxRate") ? undefined : json["fxRate"],
    desc: !exists(json, "desc") ? undefined : json["desc"],
    date: !exists(json, "date") ? undefined : json["date"],
    type: !exists(json, "type") ? undefined : json["type"],
    qty: !exists(json, "qty") ? undefined : json["qty"],
    pr: !exists(json, "pr") ? undefined : json["pr"],
    amt: !exists(json, "amt") ? undefined : json["amt"],
  };
}

export function TransactionsTransactionsToJSON(
  value?: TransactionsTransactions | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    acctid: value.acctid,
    conid: value.conid,
    cur: value.cur,
    fxRate: value.fxRate,
    desc: value.desc,
    date: value.date,
    type: value.type,
    qty: value.qty,
    pr: value.pr,
    amt: value.amt,
  };
}
