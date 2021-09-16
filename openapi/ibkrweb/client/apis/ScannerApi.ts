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

import * as runtime from "../runtime";
import {
  InlineResponse20029,
  InlineResponse20029FromJSON,
  InlineResponse20029ToJSON,
  InlineResponse20030,
  InlineResponse20030FromJSON,
  InlineResponse20030ToJSON,
  ScannerParams,
  ScannerParamsFromJSON,
  ScannerParamsToJSON,
} from "../models";

export interface IserverScannerRunPostRequest {
  body: ScannerParams;
}

/**
 *
 */
export class ScannerApi extends runtime.BaseAPI {
  /**
   * Returns an object contains four lists contain all parameters for scanners
   * Scanner Parameters
   */
  async iserverScannerParamsGetRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20029>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/scanner/params`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20029FromJSON(jsonValue)
    );
  }

  /**
   * Returns an object contains four lists contain all parameters for scanners
   * Scanner Parameters
   */
  async iserverScannerParamsGet(
    initOverrides?: RequestInit
  ): Promise<InlineResponse20029> {
    const response = await this.iserverScannerParamsGetRaw(initOverrides);
    return await response.value();
  }

  /**
   * run scanner to get a list of contracts
   */
  async iserverScannerRunPostRaw(
    requestParameters: IserverScannerRunPostRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<InlineResponse20030>>> {
    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        "body",
        "Required parameter requestParameters.body was null or undefined when calling iserverScannerRunPost."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/iserver/scanner/run`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: ScannerParamsToJSON(requestParameters.body),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(InlineResponse20030FromJSON)
    );
  }

  /**
   * run scanner to get a list of contracts
   */
  async iserverScannerRunPost(
    requestParameters: IserverScannerRunPostRequest,
    initOverrides?: RequestInit
  ): Promise<Array<InlineResponse20030>> {
    const response = await this.iserverScannerRunPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}