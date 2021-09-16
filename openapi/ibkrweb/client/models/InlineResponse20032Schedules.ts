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
  InlineResponse20032Sessions,
  InlineResponse20032SessionsFromJSON,
  InlineResponse20032SessionsFromJSONTyped,
  InlineResponse20032SessionsToJSON,
  InlineResponse20032TradingTimes,
  InlineResponse20032TradingTimesFromJSON,
  InlineResponse20032TradingTimesFromJSONTyped,
  InlineResponse20032TradingTimesToJSON,
} from "./";

/**
 *
 * @export
 * @interface InlineResponse20032Schedules
 */
export interface InlineResponse20032Schedules {
  /**
   *
   * @type {number}
   * @memberof InlineResponse20032Schedules
   */
  clearingCycleEndTime?: number;
  /**
   * 20000101 stands for any Sat, 20000102 stands for any Sun, ... 20000107 stands for any Fri. Any other date stands for itself.
   * @type {number}
   * @memberof InlineResponse20032Schedules
   */
  tradingScheduleDate?: number;
  /**
   *
   * @type {InlineResponse20032Sessions}
   * @memberof InlineResponse20032Schedules
   */
  sessions?: InlineResponse20032Sessions;
  /**
   *
   * @type {InlineResponse20032TradingTimes}
   * @memberof InlineResponse20032Schedules
   */
  tradingTimes?: InlineResponse20032TradingTimes;
}

export function InlineResponse20032SchedulesFromJSON(
  json: any
): InlineResponse20032Schedules {
  return InlineResponse20032SchedulesFromJSONTyped(json, false);
}

export function InlineResponse20032SchedulesFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20032Schedules {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    clearingCycleEndTime: !exists(json, "clearingCycleEndTime")
      ? undefined
      : json["clearingCycleEndTime"],
    tradingScheduleDate: !exists(json, "tradingScheduleDate")
      ? undefined
      : json["tradingScheduleDate"],
    sessions: !exists(json, "sessions")
      ? undefined
      : InlineResponse20032SessionsFromJSON(json["sessions"]),
    tradingTimes: !exists(json, "tradingTimes")
      ? undefined
      : InlineResponse20032TradingTimesFromJSON(json["tradingTimes"]),
  };
}

export function InlineResponse20032SchedulesToJSON(
  value?: InlineResponse20032Schedules | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    clearingCycleEndTime: value.clearingCycleEndTime,
    tradingScheduleDate: value.tradingScheduleDate,
    sessions: InlineResponse20032SessionsToJSON(value.sessions),
    tradingTimes: InlineResponse20032TradingTimesToJSON(value.tradingTimes),
  };
}