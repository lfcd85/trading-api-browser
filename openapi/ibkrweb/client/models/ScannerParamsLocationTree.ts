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

import { exists, mapValues } from '../runtime'
import {
  ScannerParamsLocationTreeLocation,
  ScannerParamsLocationTreeLocationFromJSON,
  ScannerParamsLocationTreeLocationFromJSONTyped,
  ScannerParamsLocationTreeLocationToJSON,
} from './'

/**
 * Contains list of instruments for which scanner can be ran
 * @export
 * @interface ScannerParamsLocationTree
 */
export interface ScannerParamsLocationTree {
  /**
   * Contains information like name, supported filters, etc. for an instrument. A location can contain more locations forming a tree-like structure which allows user to control the lcoation at more granular level. locationCode has to be used to specify lcoations while querying a scanner.
   * @type {Array<ScannerParamsLocationTreeLocation>}
   * @memberof ScannerParamsLocationTree
   */
  location?: Array<ScannerParamsLocationTreeLocation>
}

export function ScannerParamsLocationTreeFromJSON(
  json: any
): ScannerParamsLocationTree {
  return ScannerParamsLocationTreeFromJSONTyped(json, false)
}

export function ScannerParamsLocationTreeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ScannerParamsLocationTree {
  if (json === undefined || json === null) {
    return json
  }
  return {
    location: !exists(json, 'Location')
      ? undefined
      : (json['Location'] as Array<any>).map(
          ScannerParamsLocationTreeLocationFromJSON
        ),
  }
}

export function ScannerParamsLocationTreeToJSON(
  value?: ScannerParamsLocationTree | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    Location:
      value.location === undefined
        ? undefined
        : (value.location as Array<any>).map(
            ScannerParamsLocationTreeLocationToJSON
          ),
  }
}
