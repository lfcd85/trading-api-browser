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
 * @interface InlineResponse20037
 */
export interface InlineResponse20037 {
  /**
   *
   * @type {Array<object>}
   * @memberof InlineResponse20037
   */
  aCCTID?: Array<object>;
}

export function InlineResponse20037FromJSON(json: any): InlineResponse20037 {
  return InlineResponse20037FromJSONTyped(json, false);
}

export function InlineResponse20037FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20037 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    aCCTID: !exists(json, "ACCTID") ? undefined : json["ACCTID"],
  };
}

export function InlineResponse20037ToJSON(
  value?: InlineResponse20037 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    ACCTID: value.aCCTID,
  };
}
