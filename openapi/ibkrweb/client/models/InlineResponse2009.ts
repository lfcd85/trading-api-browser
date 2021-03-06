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
  InlineResponse2009AcctList,
  InlineResponse2009AcctListFromJSON,
  InlineResponse2009AcctListFromJSONTyped,
  InlineResponse2009AcctListToJSON,
} from './'

/**
 *
 * @export
 * @interface InlineResponse2009
 */
export interface InlineResponse2009 {
  /**
   * The primary or parent account.
   * @type {string}
   * @memberof InlineResponse2009
   */
  mainAcct?: string
  /**
   * List of tradeable or Sub Accounts
   * @type {Array<InlineResponse2009AcctList>}
   * @memberof InlineResponse2009
   */
  acctList?: Array<InlineResponse2009AcctList>
}

export function InlineResponse2009FromJSON(json: any): InlineResponse2009 {
  return InlineResponse2009FromJSONTyped(json, false)
}

export function InlineResponse2009FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse2009 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    mainAcct: !exists(json, 'mainAcct') ? undefined : json['mainAcct'],
    acctList: !exists(json, 'acctList')
      ? undefined
      : (json['acctList'] as Array<any>).map(
          InlineResponse2009AcctListFromJSON
        ),
  }
}

export function InlineResponse2009ToJSON(
  value?: InlineResponse2009 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    mainAcct: value.mainAcct,
    acctList:
      value.acctList === undefined
        ? undefined
        : (value.acctList as Array<any>).map(InlineResponse2009AcctListToJSON),
  }
}
