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

import { exists, mapValues } from "../runtime";
/**
 *
 * @export
 * @interface InlineResponse20030
 */
export interface InlineResponse20030 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20030
   */
  serverId?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20030
   */
  columnName?: string;
  /**
   * Underlying symbol
   * @type {string}
   * @memberof InlineResponse20030
   */
  symbol?: string;
  /**
   * conid and exchange. Format supports conid or conid@exchange
   * @type {string}
   * @memberof InlineResponse20030
   */
  conidex?: string;
  /**
   *
   * @type {number}
   * @memberof InlineResponse20030
   */
  conId?: number;
  /**
   * List of available chart periods
   * @type {string}
   * @memberof InlineResponse20030
   */
  availableChartPeriods?: string;
  /**
   * Contracts company name
   * @type {string}
   * @memberof InlineResponse20030
   */
  companyName?: string;
  /**
   * Format contract name
   * @type {string}
   * @memberof InlineResponse20030
   */
  contractDescription1?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20030
   */
  listingExchange?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20030
   */
  secType?: string;
}

export function InlineResponse20030FromJSON(json: any): InlineResponse20030 {
  return InlineResponse20030FromJSONTyped(json, false);
}

export function InlineResponse20030FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20030 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    serverId: !exists(json, "server_id") ? undefined : json["server_id"],
    columnName: !exists(json, "column_name") ? undefined : json["column_name"],
    symbol: !exists(json, "symbol") ? undefined : json["symbol"],
    conidex: !exists(json, "conidex") ? undefined : json["conidex"],
    conId: !exists(json, "con_id") ? undefined : json["con_id"],
    availableChartPeriods: !exists(json, "available_chart_periods")
      ? undefined
      : json["available_chart_periods"],
    companyName: !exists(json, "company_name")
      ? undefined
      : json["company_name"],
    contractDescription1: !exists(json, "contract_description_1")
      ? undefined
      : json["contract_description_1"],
    listingExchange: !exists(json, "listing_exchange")
      ? undefined
      : json["listing_exchange"],
    secType: !exists(json, "sec_type") ? undefined : json["sec_type"],
  };
}

export function InlineResponse20030ToJSON(
  value?: InlineResponse20030 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    server_id: value.serverId,
    column_name: value.columnName,
    symbol: value.symbol,
    conidex: value.conidex,
    con_id: value.conId,
    available_chart_periods: value.availableChartPeriods,
    company_name: value.companyName,
    contract_description_1: value.contractDescription1,
    listing_exchange: value.listingExchange,
    sec_type: value.secType,
  };
}
