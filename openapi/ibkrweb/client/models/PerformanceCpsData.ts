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
 * @interface PerformanceCpsData
 */
export interface PerformanceCpsData {
  /**
   *
   * @type {string}
   * @memberof PerformanceCpsData
   */
  id?: string;
  /**
   * for example-- acctid
   * @type {string}
   * @memberof PerformanceCpsData
   */
  idType?: string;
  /**
   * start date-- yyyyMMdd
   * @type {string}
   * @memberof PerformanceCpsData
   */
  start?: string;
  /**
   *
   * @type {string}
   * @memberof PerformanceCpsData
   */
  baseCurrency?: string;
  /**
   * each value stands for price change percent of corresponding date in dates array
   * @type {Array<number>}
   * @memberof PerformanceCpsData
   */
  returns?: Array<number>;
  /**
   * end date-- yyyyMMdd
   * @type {string}
   * @memberof PerformanceCpsData
   */
  end?: string;
}

export function PerformanceCpsDataFromJSON(json: any): PerformanceCpsData {
  return PerformanceCpsDataFromJSONTyped(json, false);
}

export function PerformanceCpsDataFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): PerformanceCpsData {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, "id") ? undefined : json["id"],
    idType: !exists(json, "idType") ? undefined : json["idType"],
    start: !exists(json, "start") ? undefined : json["start"],
    baseCurrency: !exists(json, "baseCurrency")
      ? undefined
      : json["baseCurrency"],
    returns: !exists(json, "returns") ? undefined : json["returns"],
    end: !exists(json, "end") ? undefined : json["end"],
  };
}

export function PerformanceCpsDataToJSON(
  value?: PerformanceCpsData | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    idType: value.idType,
    start: value.start,
    baseCurrency: value.baseCurrency,
    returns: value.returns,
    end: value.end,
  };
}
