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
 * @interface ScannerParamsScanTypeListScanType
 */
export interface ScannerParamsScanTypeListScanType {
  /**
   * Instrument types separated by a comma which are supported for this scan type
   * @type {string}
   * @memberof ScannerParamsScanTypeListScanType
   */
  instruments?: string;
  /**
   *
   * @type {string}
   * @memberof ScannerParamsScanTypeListScanType
   */
  displayName?: string;
  /**
   * scan code which ahs to be provided while querying scanner with this scan type
   * @type {string}
   * @memberof ScannerParamsScanTypeListScanType
   */
  scanCode?: string;
}

export function ScannerParamsScanTypeListScanTypeFromJSON(
  json: any
): ScannerParamsScanTypeListScanType {
  return ScannerParamsScanTypeListScanTypeFromJSONTyped(json, false);
}

export function ScannerParamsScanTypeListScanTypeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScannerParamsScanTypeListScanType {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    instruments: !exists(json, "instruments") ? undefined : json["instruments"],
    displayName: !exists(json, "displayName") ? undefined : json["displayName"],
    scanCode: !exists(json, "scanCode") ? undefined : json["scanCode"],
  };
}

export function ScannerParamsScanTypeListScanTypeToJSON(
  value?: ScannerParamsScanTypeListScanType | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    instruments: value.instruments,
    displayName: value.displayName,
    scanCode: value.scanCode,
  };
}
