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

import { exists, mapValues } from "../runtime";
import {
  InlineResponse20029Locations,
  InlineResponse20029LocationsFromJSON,
  InlineResponse20029LocationsFromJSONTyped,
  InlineResponse20029LocationsToJSON,
} from "./";

/**
 *
 * @export
 * @interface InlineResponse20029LocationTree
 */
export interface InlineResponse20029LocationTree {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20029LocationTree
   */
  displayName?: string;
  /**
   *
   * @type {string}
   * @memberof InlineResponse20029LocationTree
   */
  type?: string;
  /**
   *
   * @type {Array<InlineResponse20029Locations>}
   * @memberof InlineResponse20029LocationTree
   */
  locations?: Array<InlineResponse20029Locations>;
}

export function InlineResponse20029LocationTreeFromJSON(
  json: any
): InlineResponse20029LocationTree {
  return InlineResponse20029LocationTreeFromJSONTyped(json, false);
}

export function InlineResponse20029LocationTreeFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20029LocationTree {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    displayName: !exists(json, "display_name")
      ? undefined
      : json["display_name"],
    type: !exists(json, "type") ? undefined : json["type"],
    locations: !exists(json, "locations")
      ? undefined
      : (json["locations"] as Array<any>).map(
          InlineResponse20029LocationsFromJSON
        ),
  };
}

export function InlineResponse20029LocationTreeToJSON(
  value?: InlineResponse20029LocationTree | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    display_name: value.displayName,
    type: value.type,
    locations:
      value.locations === undefined
        ? undefined
        : (value.locations as Array<any>).map(
            InlineResponse20029LocationsToJSON
          ),
  };
}
