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
/**
 *
 * @export
 * @interface OrderDataWarnings
 */
export interface OrderDataWarnings {
  /**
   *
   * @type {string}
   * @memberof OrderDataWarnings
   */
  pRICECAP?: string
  /**
   *
   * @type {string}
   * @memberof OrderDataWarnings
   */
  tIME?: string
}

export function OrderDataWarningsFromJSON(json: any): OrderDataWarnings {
  return OrderDataWarningsFromJSONTyped(json, false)
}

export function OrderDataWarningsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): OrderDataWarnings {
  if (json === undefined || json === null) {
    return json
  }
  return {
    pRICECAP: !exists(json, 'PRICECAP') ? undefined : json['PRICECAP'],
    tIME: !exists(json, 'TIME') ? undefined : json['TIME'],
  }
}

export function OrderDataWarningsToJSON(value?: OrderDataWarnings | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    PRICECAP: value.pRICECAP,
    TIME: value.tIME,
  }
}
