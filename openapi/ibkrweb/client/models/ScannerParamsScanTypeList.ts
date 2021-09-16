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
  ScannerParamsScanTypeListScanType,
  ScannerParamsScanTypeListScanTypeFromJSON,
  ScannerParamsScanTypeListScanTypeFromJSONTyped,
  ScannerParamsScanTypeListScanTypeToJSON,
} from "./";

/**
 * Contains list of scan types for which scanner can be ran
 * @export
 * @interface ScannerParamsScanTypeList
 */
export interface ScannerParamsScanTypeList {
  /**
   *
   * @type {Array<ScannerParamsScanTypeListScanType>}
   * @memberof ScannerParamsScanTypeList
   */
  scanType?: Array<ScannerParamsScanTypeListScanType>;
}

export function ScannerParamsScanTypeListFromJSON(
  json: any
): ScannerParamsScanTypeList {
  return ScannerParamsScanTypeListFromJSONTyped(json, false);
}

export function ScannerParamsScanTypeListFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScannerParamsScanTypeList {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    scanType: !exists(json, "ScanType")
      ? undefined
      : (json["ScanType"] as Array<any>).map(
          ScannerParamsScanTypeListScanTypeFromJSON
        ),
  };
}

export function ScannerParamsScanTypeListToJSON(
  value?: ScannerParamsScanTypeList | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ScanType:
      value.scanType === undefined
        ? undefined
        : (value.scanType as Array<any>).map(
            ScannerParamsScanTypeListScanTypeToJSON
          ),
  };
}
