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
import {
  PerformanceCps,
  PerformanceCpsFromJSON,
  PerformanceCpsFromJSONTyped,
  PerformanceCpsToJSON,
  PerformanceNav,
  PerformanceNavFromJSON,
  PerformanceNavFromJSONTyped,
  PerformanceNavToJSON,
  PerformanceTpps,
  PerformanceTppsFromJSON,
  PerformanceTppsFromJSONTyped,
  PerformanceTppsToJSON,
} from "./";

/**
 *
 * @export
 * @interface Performance
 */
export interface Performance {
  /**
   *
   * @type {string}
   * @memberof Performance
   */
  id?: string;
  /**
   *
   * @type {PerformanceCps}
   * @memberof Performance
   */
  cps?: PerformanceCps;
  /**
   *
   * @type {PerformanceTpps}
   * @memberof Performance
   */
  tpps?: PerformanceTpps;
  /**
   *
   * @type {PerformanceNav}
   * @memberof Performance
   */
  nav?: PerformanceNav;
  /**
   *
   * @type {string}
   * @memberof Performance
   */
  pm?: string;
  /**
   *
   * @type {Array<string>}
   * @memberof Performance
   */
  included?: Array<string>;
  /**
   *
   * @type {string}
   * @memberof Performance
   */
  currencyType?: string;
  /**
   *
   * @type {number}
   * @memberof Performance
   */
  rc?: number;
}

export function PerformanceFromJSON(json: any): Performance {
  return PerformanceFromJSONTyped(json, false);
}

export function PerformanceFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Performance {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    cps: !exists(json, "cps") ? undefined : PerformanceCpsFromJSON(json["cps"]),
    tpps: !exists(json, "tpps")
      ? undefined
      : PerformanceTppsFromJSON(json["tpps"]),
    nav: !exists(json, "nav") ? undefined : PerformanceNavFromJSON(json["nav"]),
    pm: !exists(json, "pm") ? undefined : json["pm"],
    included: !exists(json, "included") ? undefined : json["included"],
    currencyType: !exists(json, "currencyType")
      ? undefined
      : json["currencyType"],
    rc: !exists(json, "rc") ? undefined : json["rc"],
  };
}

export function PerformanceToJSON(value?: Performance | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    cps: PerformanceCpsToJSON(value.cps),
    tpps: PerformanceTppsToJSON(value.tpps),
    nav: PerformanceNavToJSON(value.nav),
    pm: value.pm,
    included: value.included,
    currencyType: value.currencyType,
    rc: value.rc,
  };
}
