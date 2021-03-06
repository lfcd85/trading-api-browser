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
  AlertResponseConditions,
  AlertResponseConditionsFromJSON,
  AlertResponseConditionsFromJSONTyped,
  AlertResponseConditionsToJSON,
} from './'

/**
 *
 * @export
 * @interface AlertResponse
 */
export interface AlertResponse {
  /**
   * account id
   * @type {string}
   * @memberof AlertResponse
   */
  account?: string
  /**
   *
   * @type {number}
   * @memberof AlertResponse
   */
  orderId?: number
  /**
   * name of alert
   * @type {string}
   * @memberof AlertResponse
   */
  alertName?: string
  /**
   * The message you want to receive via email or text message
   * @type {string}
   * @memberof AlertResponse
   */
  alertMessage?: string
  /**
   * whether alert is active or not, so value can only be 0 or 1
   * @type {number}
   * @memberof AlertResponse
   */
  alertActive?: number
  /**
   * whether alert is repeatable or not, so value can only be 0 or 1
   * @type {number}
   * @memberof AlertResponse
   */
  alertRepeatable?: number
  /**
   * email address to receive alert
   * @type {string}
   * @memberof AlertResponse
   */
  alertEmail?: string
  /**
   * whether allowing to send email or not, so value can only be 0 or 1,
   * @type {number}
   * @memberof AlertResponse
   */
  alertSendMessage?: number
  /**
   * time in force, can only be GTC or GTD
   * @type {string}
   * @memberof AlertResponse
   */
  tif?: string
  /**
   * format, YYYYMMDD-HH:mm:ss
   * @type {string}
   * @memberof AlertResponse
   */
  expireTime?: string
  /**
   * status of alert
   * @type {string}
   * @memberof AlertResponse
   */
  orderStatus?: string
  /**
   * value can only be 0 or 1, set to 1 if the alert can be triggered outside regular trading hours.
   * @type {number}
   * @memberof AlertResponse
   */
  outsideRth?: number
  /**
   * value can only be 0 or 1, set to 1 to enable the alert only in IBKR mobile
   * @type {number}
   * @memberof AlertResponse
   */
  itwsOrdersOnly?: number
  /**
   * value can only be 0 or 1, set to 1 to allow to show alert in pop-ups
   * @type {number}
   * @memberof AlertResponse
   */
  alertShowPopup?: number
  /**
   * whether the alert has been triggered
   * @type {boolean}
   * @memberof AlertResponse
   */
  alertTriggered?: boolean
  /**
   * whether the alert can be edited
   * @type {boolean}
   * @memberof AlertResponse
   */
  orderNotEditable?: boolean
  /**
   * for MTA alert only, each user has a unique toolId and it will stay the same, do not send for normal alert
   * @type {number}
   * @memberof AlertResponse
   */
  toolId?: number
  /**
   * audio message to play when alert is triggered
   * @type {string}
   * @memberof AlertResponse
   */
  alertPlayAudio?: string
  /**
   * MTA alert only
   * @type {string}
   * @memberof AlertResponse
   */
  alertMtaCurrency?: string
  /**
   * MTA alert only
   * @type {string}
   * @memberof AlertResponse
   */
  alertMtaDefaults?: string
  /**
   * MTA alert only
   * @type {string}
   * @memberof AlertResponse
   */
  timeZone?: string
  /**
   * MTA alert only
   * @type {string}
   * @memberof AlertResponse
   */
  alertDefaultType?: string
  /**
   * size of conditions array
   * @type {number}
   * @memberof AlertResponse
   */
  conditionSize?: number
  /**
   * whether allowing the condition can be triggered outside of regular trading hours, 1 means allow
   * @type {number}
   * @memberof AlertResponse
   */
  conditionOutsideRth?: number
  /**
   *
   * @type {Array<AlertResponseConditions>}
   * @memberof AlertResponse
   */
  conditions?: Array<AlertResponseConditions>
}

export function AlertResponseFromJSON(json: any): AlertResponse {
  return AlertResponseFromJSONTyped(json, false)
}

export function AlertResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): AlertResponse {
  if (json === undefined || json === null) {
    return json
  }
  return {
    account: !exists(json, 'account') ? undefined : json['account'],
    orderId: !exists(json, 'order_id') ? undefined : json['order_id'],
    alertName: !exists(json, 'alert_name') ? undefined : json['alert_name'],
    alertMessage: !exists(json, 'alert_message')
      ? undefined
      : json['alert_message'],
    alertActive: !exists(json, 'alert_active')
      ? undefined
      : json['alert_active'],
    alertRepeatable: !exists(json, 'alert_repeatable')
      ? undefined
      : json['alert_repeatable'],
    alertEmail: !exists(json, 'alert_email') ? undefined : json['alert_email'],
    alertSendMessage: !exists(json, 'alert_send_message')
      ? undefined
      : json['alert_send_message'],
    tif: !exists(json, 'tif') ? undefined : json['tif'],
    expireTime: !exists(json, 'expire_time') ? undefined : json['expire_time'],
    orderStatus: !exists(json, 'order_status')
      ? undefined
      : json['order_status'],
    outsideRth: !exists(json, 'outsideRth') ? undefined : json['outsideRth'],
    itwsOrdersOnly: !exists(json, 'itws_orders_only')
      ? undefined
      : json['itws_orders_only'],
    alertShowPopup: !exists(json, 'alert_show_popup')
      ? undefined
      : json['alert_show_popup'],
    alertTriggered: !exists(json, 'alert_triggered')
      ? undefined
      : json['alert_triggered'],
    orderNotEditable: !exists(json, 'order_not_editable')
      ? undefined
      : json['order_not_editable'],
    toolId: !exists(json, 'tool_id') ? undefined : json['tool_id'],
    alertPlayAudio: !exists(json, 'alert_play_audio')
      ? undefined
      : json['alert_play_audio'],
    alertMtaCurrency: !exists(json, 'alert_mta_currency')
      ? undefined
      : json['alert_mta_currency'],
    alertMtaDefaults: !exists(json, 'alert_mta_defaults')
      ? undefined
      : json['alert_mta_defaults'],
    timeZone: !exists(json, 'time_zone') ? undefined : json['time_zone'],
    alertDefaultType: !exists(json, 'alert_default_type')
      ? undefined
      : json['alert_default_type'],
    conditionSize: !exists(json, 'condition_size')
      ? undefined
      : json['condition_size'],
    conditionOutsideRth: !exists(json, 'condition_outside_rth')
      ? undefined
      : json['condition_outside_rth'],
    conditions: !exists(json, 'conditions')
      ? undefined
      : (json['conditions'] as Array<any>).map(AlertResponseConditionsFromJSON),
  }
}

export function AlertResponseToJSON(value?: AlertResponse | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    account: value.account,
    order_id: value.orderId,
    alert_name: value.alertName,
    alert_message: value.alertMessage,
    alert_active: value.alertActive,
    alert_repeatable: value.alertRepeatable,
    alert_email: value.alertEmail,
    alert_send_message: value.alertSendMessage,
    tif: value.tif,
    expire_time: value.expireTime,
    order_status: value.orderStatus,
    outsideRth: value.outsideRth,
    itws_orders_only: value.itwsOrdersOnly,
    alert_show_popup: value.alertShowPopup,
    alert_triggered: value.alertTriggered,
    order_not_editable: value.orderNotEditable,
    tool_id: value.toolId,
    alert_play_audio: value.alertPlayAudio,
    alert_mta_currency: value.alertMtaCurrency,
    alert_mta_defaults: value.alertMtaDefaults,
    time_zone: value.timeZone,
    alert_default_type: value.alertDefaultType,
    condition_size: value.conditionSize,
    condition_outside_rth: value.conditionOutsideRth,
    conditions:
      value.conditions === undefined
        ? undefined
        : (value.conditions as Array<any>).map(AlertResponseConditionsToJSON),
  }
}
