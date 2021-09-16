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

import * as runtime from '../runtime'

/**
 *
 */
export class StreamingApi extends runtime.BaseAPI {
  /**
   * The streaming API is documented under [Streaming WebSocket Data](https://interactivebrokers.github.io/cpwebapi/RealtimeSubscription.html) for details.
   * Websocket Endpoint
   */
  async wsPostRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/ws`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.VoidApiResponse(response)
  }

  /**
   * The streaming API is documented under [Streaming WebSocket Data](https://interactivebrokers.github.io/cpwebapi/RealtimeSubscription.html) for details.
   * Websocket Endpoint
   */
  async wsPost(initOverrides?: RequestInit): Promise<void> {
    await this.wsPostRaw(initOverrides)
  }
}
