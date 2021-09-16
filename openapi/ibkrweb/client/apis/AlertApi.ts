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
import {
  AlertRequest,
  AlertRequestFromJSON,
  AlertRequestToJSON,
  AlertResponse,
  AlertResponseFromJSON,
  AlertResponseToJSON,
  InlineObject3,
  InlineObject3FromJSON,
  InlineObject3ToJSON,
  InlineResponse20013,
  InlineResponse20013FromJSON,
  InlineResponse20013ToJSON,
  InlineResponse20014,
  InlineResponse20014FromJSON,
  InlineResponse20014ToJSON,
  InlineResponse20015,
  InlineResponse20015FromJSON,
  InlineResponse20015ToJSON,
} from '../models'

export interface IserverAccountAccountIdAlertActivatePostRequest {
  accountId: string
  body: InlineObject3
}

export interface IserverAccountAccountIdAlertAlertIdDeleteRequest {
  accountId: string
  alertId: string
}

export interface IserverAccountAccountIdAlertPostRequest {
  accountId: string
  body: AlertRequest
}

export interface IserverAccountAccountIdAlertsGetRequest {
  accountId: string
}

export interface IserverAccountAlertIdGetRequest {
  id: string
}

/**
 *
 */
export class AlertApi extends runtime.BaseAPI {
  /**
   * Please note, if alertId is 0, it will activate/deactivate all alerts
   * Activate or deactivate an alert
   */
  async iserverAccountAccountIdAlertActivatePostRaw(
    requestParameters: IserverAccountAccountIdAlertActivatePostRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20015>> {
    if (
      requestParameters.accountId === null ||
      requestParameters.accountId === undefined
    ) {
      throw new runtime.RequiredError(
        'accountId',
        'Required parameter requestParameters.accountId was null or undefined when calling iserverAccountAccountIdAlertActivatePost.'
      )
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling iserverAccountAccountIdAlertActivatePost.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/iserver/account/:accountId/alert/activate`.replace(
          `{${'accountId'}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: InlineObject3ToJSON(requestParameters.body),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20015FromJSON(jsonValue)
    )
  }

  /**
   * Please note, if alertId is 0, it will activate/deactivate all alerts
   * Activate or deactivate an alert
   */
  async iserverAccountAccountIdAlertActivatePost(
    requestParameters: IserverAccountAccountIdAlertActivatePostRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20015> {
    const response = await this.iserverAccountAccountIdAlertActivatePostRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   * Please be careful, if alertId is 0, it will delete all alerts
   * Delete an alert
   */
  async iserverAccountAccountIdAlertAlertIdDeleteRaw(
    requestParameters: IserverAccountAccountIdAlertAlertIdDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20015>> {
    if (
      requestParameters.accountId === null ||
      requestParameters.accountId === undefined
    ) {
      throw new runtime.RequiredError(
        'accountId',
        'Required parameter requestParameters.accountId was null or undefined when calling iserverAccountAccountIdAlertAlertIdDelete.'
      )
    }

    if (
      requestParameters.alertId === null ||
      requestParameters.alertId === undefined
    ) {
      throw new runtime.RequiredError(
        'alertId',
        'Required parameter requestParameters.alertId was null or undefined when calling iserverAccountAccountIdAlertAlertIdDelete.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/iserver/account/:accountId/alert/:alertId`
          .replace(
            `{${'accountId'}}`,
            encodeURIComponent(String(requestParameters.accountId))
          )
          .replace(
            `{${'alertId'}}`,
            encodeURIComponent(String(requestParameters.alertId))
          ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20015FromJSON(jsonValue)
    )
  }

  /**
   * Please be careful, if alertId is 0, it will delete all alerts
   * Delete an alert
   */
  async iserverAccountAccountIdAlertAlertIdDelete(
    requestParameters: IserverAccountAccountIdAlertAlertIdDeleteRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20015> {
    const response = await this.iserverAccountAccountIdAlertAlertIdDeleteRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   * Please note here, DO NOT pass orderId when creating a new alert, toolId is only required for MTA alert
   * Create or modify alert
   */
  async iserverAccountAccountIdAlertPostRaw(
    requestParameters: IserverAccountAccountIdAlertPostRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20013>> {
    if (
      requestParameters.accountId === null ||
      requestParameters.accountId === undefined
    ) {
      throw new runtime.RequiredError(
        'accountId',
        'Required parameter requestParameters.accountId was null or undefined when calling iserverAccountAccountIdAlertPost.'
      )
    }

    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling iserverAccountAccountIdAlertPost.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/iserver/account/{accountId}/alert`.replace(
          `{${'accountId'}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: AlertRequestToJSON(requestParameters.body),
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20013FromJSON(jsonValue)
    )
  }

  /**
   * Please note here, DO NOT pass orderId when creating a new alert, toolId is only required for MTA alert
   * Create or modify alert
   */
  async iserverAccountAccountIdAlertPost(
    requestParameters: IserverAccountAccountIdAlertPostRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20013> {
    const response = await this.iserverAccountAccountIdAlertPostRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   * The response will contain both active and inactive alerts, but it won\'t have MTA alert
   * Get a list of available alerts
   */
  async iserverAccountAccountIdAlertsGetRaw(
    requestParameters: IserverAccountAccountIdAlertsGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<InlineResponse20014>>> {
    if (
      requestParameters.accountId === null ||
      requestParameters.accountId === undefined
    ) {
      throw new runtime.RequiredError(
        'accountId',
        'Required parameter requestParameters.accountId was null or undefined when calling iserverAccountAccountIdAlertsGet.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/iserver/account/:accountId/alerts`.replace(
          `{${'accountId'}}`,
          encodeURIComponent(String(requestParameters.accountId))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(InlineResponse20014FromJSON)
    )
  }

  /**
   * The response will contain both active and inactive alerts, but it won\'t have MTA alert
   * Get a list of available alerts
   */
  async iserverAccountAccountIdAlertsGet(
    requestParameters: IserverAccountAccountIdAlertsGetRequest,
    initOverrides?: RequestInit
  ): Promise<Array<InlineResponse20014>> {
    const response = await this.iserverAccountAccountIdAlertsGetRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   * Use the endpoint /iserver/account/:accountId/alerts to receive the alert id. The order_id in the response is the alert id.
   * Get details of an alert
   */
  async iserverAccountAlertIdGetRaw(
    requestParameters: IserverAccountAlertIdGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AlertResponse>> {
    if (requestParameters.id === null || requestParameters.id === undefined) {
      throw new runtime.RequiredError(
        'id',
        'Required parameter requestParameters.id was null or undefined when calling iserverAccountAlertIdGet.'
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/iserver/account/alert/:id`.replace(
          `{${'id'}}`,
          encodeURIComponent(String(requestParameters.id))
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AlertResponseFromJSON(jsonValue)
    )
  }

  /**
   * Use the endpoint /iserver/account/:accountId/alerts to receive the alert id. The order_id in the response is the alert id.
   * Get details of an alert
   */
  async iserverAccountAlertIdGet(
    requestParameters: IserverAccountAlertIdGetRequest,
    initOverrides?: RequestInit
  ): Promise<AlertResponse> {
    const response = await this.iserverAccountAlertIdGetRaw(
      requestParameters,
      initOverrides
    )
    return await response.value()
  }

  /**
   * Each login user only has one mobile trading assistant (MTA) alert with it\'s own unique tool id. The tool id cannot be changed. When modified a new order Id is generated. MTA alerts can not be created or deleted. If you call delete /iserver/account/:accountId/alert/:alertId, it will reset MTA to default. See [here](https://www.interactivebrokers.com/en/software/mobileiphonemobile/mobileiphone.htm#monitor/trading-assistant.htm) for more information on MTA alerts.
   * Get MTA alert
   */
  async iserverAccountMtaGetRaw(
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<AlertResponse>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    const response = await this.request(
      {
        path: `/iserver/account/mta`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    )

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      AlertResponseFromJSON(jsonValue)
    )
  }

  /**
   * Each login user only has one mobile trading assistant (MTA) alert with it\'s own unique tool id. The tool id cannot be changed. When modified a new order Id is generated. MTA alerts can not be created or deleted. If you call delete /iserver/account/:accountId/alert/:alertId, it will reset MTA to default. See [here](https://www.interactivebrokers.com/en/software/mobileiphonemobile/mobileiphone.htm#monitor/trading-assistant.htm) for more information on MTA alerts.
   * Get MTA alert
   */
  async iserverAccountMtaGet(
    initOverrides?: RequestInit
  ): Promise<AlertResponse> {
    const response = await this.iserverAccountMtaGetRaw(initOverrides)
    return await response.value()
  }
}
