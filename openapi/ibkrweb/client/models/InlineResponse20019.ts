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
  InlineResponse20019Amount,
  InlineResponse20019AmountFromJSON,
  InlineResponse20019AmountFromJSONTyped,
  InlineResponse20019AmountToJSON,
  InlineResponse20019Equity,
  InlineResponse20019EquityFromJSON,
  InlineResponse20019EquityFromJSONTyped,
  InlineResponse20019EquityToJSON,
} from "./";

/**
 *
 * @export
 * @interface InlineResponse20019
 */
export interface InlineResponse20019 {
  /**
   *
   * @type {InlineResponse20019Amount}
   * @memberof InlineResponse20019
   */
  amount?: InlineResponse20019Amount;
  /**
   *
   * @type {InlineResponse20019Equity}
   * @memberof InlineResponse20019
   */
  equity?: InlineResponse20019Equity;
  /**
   *
   * @type {InlineResponse20019Equity}
   * @memberof InlineResponse20019
   */
  initial?: InlineResponse20019Equity;
  /**
   *
   * @type {InlineResponse20019Equity}
   * @memberof InlineResponse20019
   */
  maintenance?: InlineResponse20019Equity;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20019
   */
  warn?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20019
   */
  error?: string;
}

export function InlineResponse20019FromJSON(json: any): InlineResponse20019 {
  return InlineResponse20019FromJSONTyped(json, false);
}

export function InlineResponse20019FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20019 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    amount: !exists(json, "amount")
      ? undefined
      : InlineResponse20019AmountFromJSON(json["amount"]),
    equity: !exists(json, "equity")
      ? undefined
      : InlineResponse20019EquityFromJSON(json["equity"]),
    initial: !exists(json, "initial")
      ? undefined
      : InlineResponse20019EquityFromJSON(json["initial"]),
    maintenance: !exists(json, "maintenance")
      ? undefined
      : InlineResponse20019EquityFromJSON(json["maintenance"]),
    warn: !exists(json, "warn") ? undefined : json["warn"],
    error: !exists(json, "error") ? undefined : json["error"],
  };
}

export function InlineResponse20019ToJSON(
  value?: InlineResponse20019 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    amount: InlineResponse20019AmountToJSON(value.amount),
    equity: InlineResponse20019EquityToJSON(value.equity),
    initial: InlineResponse20019EquityToJSON(value.initial),
    maintenance: InlineResponse20019EquityToJSON(value.maintenance),
    warn: value.warn,
    error: value.error,
  };
}