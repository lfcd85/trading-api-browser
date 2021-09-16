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
 * @interface HistoryDataData
 */
export interface HistoryDataData {
  /**
   * open price
   * @type {number}
   * @memberof HistoryDataData
   */
  o?: number;
  /**
   * close price
   * @type {number}
   * @memberof HistoryDataData
   */
  c?: number;
  /**
   * high price
   * @type {number}
   * @memberof HistoryDataData
   */
  h?: number;
  /**
   * low price
   * @type {number}
   * @memberof HistoryDataData
   */
  l?: number;
  /**
   * volume
   * @type {number}
   * @memberof HistoryDataData
   */
  v?: number;
  /**
   * unix time stamp
   * @type {number}
   * @memberof HistoryDataData
   */
  t?: number;
}

export function HistoryDataDataFromJSON(json: any): HistoryDataData {
  return HistoryDataDataFromJSONTyped(json, false);
}

export function HistoryDataDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): HistoryDataData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    o: !exists(json, "o") ? undefined : json["o"],
    c: !exists(json, "c") ? undefined : json["c"],
    h: !exists(json, "h") ? undefined : json["h"],
    l: !exists(json, "l") ? undefined : json["l"],
    v: !exists(json, "v") ? undefined : json["v"],
    t: !exists(json, "t") ? undefined : json["t"],
  };
}

export function HistoryDataDataToJSON(value?: HistoryDataData | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    o: value.o,
    c: value.c,
    h: value.h,
    l: value.l,
    v: value.v,
    t: value.t,
  };
}