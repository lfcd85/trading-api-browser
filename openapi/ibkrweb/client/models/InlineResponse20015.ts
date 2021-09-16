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
 * @interface InlineResponse20015
 */
export interface InlineResponse20015 {
  /**
   *
   * @type {number}
   * @memberof InlineResponse20015
   */
  requestId?: number;
  /**
   *
   * @type {number}
   * @memberof InlineResponse20015
   */
  orderId?: number;
  /**
   *
   * @type {boolean}
   * @memberof InlineResponse20015
   */
  success?: boolean;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20015
   */
  text?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20015
   */
  orderStatus?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20015
   */
  failureList?: string;
}

export function InlineResponse20015FromJSON(json: any): InlineResponse20015 {
  return InlineResponse20015FromJSONTyped(json, false);
}

export function InlineResponse20015FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20015 {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    requestId: !exists(json, "request_id") ? undefined : json["request_id"],
    orderId: !exists(json, "order_id") ? undefined : json["order_id"],
    success: !exists(json, "success") ? undefined : json["success"],
    text: !exists(json, "text") ? undefined : json["text"],
    orderStatus: !exists(json, "order_status")
      ? undefined
      : json["order_status"],
    failureList: !exists(json, "failure_list")
      ? undefined
      : json["failure_list"],
  };
}

export function InlineResponse20015ToJSON(
  value?: InlineResponse20015 | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    request_id: value.requestId,
    order_id: value.orderId,
    success: value.success,
    text: value.text,
    order_status: value.orderStatus,
    failure_list: value.failureList,
  };
}
