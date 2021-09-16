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
 * @interface InlineResponse20011
 */
export interface InlineResponse20011 {
  /**
   * Unique account id
   * @type {Array<string>}
   * @memberof InlineResponse20011
   */
  accounts?: Array<string>;
  /**
   * Account Id and its alias
   * @type {object}
   * @memberof InlineResponse20011
   */
  aliases?: object;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20011
   */
  selectedAccount?: string;
}

export function InlineResponse20011FromJSON(json: any): InlineResponse20011 {
  return InlineResponse20011FromJSONTyped(json, false);
}

export function InlineResponse20011FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20011 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    accounts: !exists(json, "accounts") ? undefined : json["accounts"],
    aliases: !exists(json, "aliases") ? undefined : json["aliases"],
    selectedAccount: !exists(json, "selectedAccount")
      ? undefined
      : json["selectedAccount"],
  };
}

export function InlineResponse20011ToJSON(
  value?: InlineResponse20011 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    accounts: value.accounts,
    aliases: value.aliases,
    selectedAccount: value.selectedAccount,
  };
}
