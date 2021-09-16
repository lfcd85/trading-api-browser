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
 * Returns tradingTime in exchange time zone.
 * @export
 * @interface InlineResponse20032TradingTimes
 */
export interface InlineResponse20032TradingTimes {
  /**
   *
   * @type {number}
   * @memberof InlineResponse20032TradingTimes
   */
  openingTime?: number;
  /**
   *
   * @type {number}
   * @memberof InlineResponse20032TradingTimes
   */
  closingTime?: number;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20032TradingTimes
   */
  cancelDayOrders?: string;
}

export function InlineResponse20032TradingTimesFromJSON(
  json: any
): InlineResponse20032TradingTimes {
  return InlineResponse20032TradingTimesFromJSONTyped(json, false);
}

export function InlineResponse20032TradingTimesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20032TradingTimes {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    openingTime: !exists(json, "openingTime") ? undefined : json["openingTime"],
    closingTime: !exists(json, "closingTime") ? undefined : json["closingTime"],
    cancelDayOrders: !exists(json, "cancelDayOrders")
      ? undefined
      : json["cancelDayOrders"],
  };
}

export function InlineResponse20032TradingTimesToJSON(
  value?: InlineResponse20032TradingTimes | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    openingTime: value.openingTime,
    closingTime: value.closingTime,
    cancelDayOrders: value.cancelDayOrders,
  };
}
