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
 * @interface InlineResponse2007
 */
export interface InlineResponse2007 {
  /**
   * If sso authentication completed
   * @type {boolean}
   * @memberof InlineResponse2007
   */
  passed?: boolean
  /**
   * If connection is authenticated
   * @type {boolean}
   * @memberof InlineResponse2007
   */
  authenticated?: boolean
  /**
   * Connected to CCP session
   * @type {boolean}
   * @memberof InlineResponse2007
   */
  connected?: boolean
  /**
   * If user already has an existing brokerage session running.
   * @type {boolean}
   * @memberof InlineResponse2007
   */
  competing?: boolean
}

export function InlineResponse2007FromJSON(json: any): InlineResponse2007 {
  return InlineResponse2007FromJSONTyped(json, false)
}

export function InlineResponse2007FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse2007 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    passed: !exists(json, 'passed') ? undefined : json['passed'],
    authenticated: !exists(json, 'authenticated')
      ? undefined
      : json['authenticated'],
    connected: !exists(json, 'connected') ? undefined : json['connected'],
    competing: !exists(json, 'competing') ? undefined : json['competing'],
  }
}

export function InlineResponse2007ToJSON(
  value?: InlineResponse2007 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    passed: value.passed,
    authenticated: value.authenticated,
    connected: value.connected,
    competing: value.competing,
  }
}
