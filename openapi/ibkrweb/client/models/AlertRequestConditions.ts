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
 * @interface AlertRequestConditions
 */
export interface AlertRequestConditions {
  /**
   * Types: 1-Price, 3-Time, 4-Margin, 5-Trade, 6-Volume, 7: MTA market 8: MTA Position, 9: MTA Acc. Daily PN&
   * @type {number}
   * @memberof AlertRequestConditions
   */
  type?: number
  /**
   * conid and exchange. Format supports conid or conid@exchange
   * @type {string}
   * @memberof AlertRequestConditions
   */
  conidex?: string
  /**
   * optional, operator for the current condition, can be >= or <=
   * @type {string}
   * @memberof AlertRequestConditions
   */
  operator?: string
  /**
   * optional, only some type of conditions have triggerMethod
   * @type {string}
   * @memberof AlertRequestConditions
   */
  triggerMethod?: string
  /**
   * can not be empty, can pass default value "*"
   * @type {string}
   * @memberof AlertRequestConditions
   */
  value?: string
  /**
   * "a" means "AND", "o" means "OR", "n" means "END",
   * the last one condition in the condition array should "n"
   * @type {string}
   * @memberof AlertRequestConditions
   */
  logicBind?: string
  /**
   * only needed for some MTA alert condition
   * @type {string}
   * @memberof AlertRequestConditions
   */
  timeZone?: string
}

export function AlertRequestConditionsFromJSON(
  json: any
): AlertRequestConditions {
  return AlertRequestConditionsFromJSONTyped(json, false)
}

export function AlertRequestConditionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AlertRequestConditions {
  if (json === undefined || json === null) {
    return json
  }
  return {
    type: !exists(json, 'type') ? undefined : json['type'],
    conidex: !exists(json, 'conidex') ? undefined : json['conidex'],
    operator: !exists(json, 'operator') ? undefined : json['operator'],
    triggerMethod: !exists(json, 'triggerMethod')
      ? undefined
      : json['triggerMethod'],
    value: !exists(json, 'value') ? undefined : json['value'],
    logicBind: !exists(json, 'logicBind') ? undefined : json['logicBind'],
    timeZone: !exists(json, 'timeZone') ? undefined : json['timeZone'],
  }
}

export function AlertRequestConditionsToJSON(
  value?: AlertRequestConditions | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    type: value.type,
    conidex: value.conidex,
    operator: value.operator,
    triggerMethod: value.triggerMethod,
    value: value.value,
    logicBind: value.logicBind,
    timeZone: value.timeZone,
  }
}
