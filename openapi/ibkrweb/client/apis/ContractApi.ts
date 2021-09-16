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
  Contract,
  ContractFromJSON,
  ContractToJSON,
  InlineObject8,
  InlineObject8FromJSON,
  InlineObject8ToJSON,
  InlineObject9,
  InlineObject9FromJSON,
  InlineObject9ToJSON,
  InlineResponse20025,
  InlineResponse20025FromJSON,
  InlineResponse20025ToJSON,
  InlineResponse20026,
  InlineResponse20026FromJSON,
  InlineResponse20026ToJSON,
  InlineResponse20027,
  InlineResponse20027FromJSON,
  InlineResponse20027ToJSON,
  InlineResponse20028,
  InlineResponse20028FromJSON,
  InlineResponse20028ToJSON,
  InlineResponse20032,
  InlineResponse20032FromJSON,
  InlineResponse20032ToJSON,
  InlineResponse20033,
  InlineResponse20033FromJSON,
  InlineResponse20033ToJSON,
  InlineResponse20034,
  InlineResponse20034FromJSON,
  InlineResponse20034ToJSON,
  InlineResponse429,
  InlineResponse429FromJSON,
  InlineResponse429ToJSON,
} from "../models";

export interface IserverContractConidAlgosGetRequest {
  conid: string;
  algos?: string;
  addDescription?: string;
  addParams?: string;
}

export interface IserverContractConidInfoAndRulesGetRequest {
  conid: string;
  isBuy: boolean;
}

export interface IserverContractConidInfoGetRequest {
  conid: string;
}

export interface IserverSecdefInfoGetRequest {
  conid: string;
  sectype: string;
  month?: string;
  exchange?: string;
  strike?: string;
  right?: string;
}

export interface IserverSecdefSearchPostRequest {
  symbol: InlineObject8;
}

export interface IserverSecdefStrikesGetRequest {
  conid: string;
  sectype: string;
  month: string;
  exchange?: string;
}

export interface TrsrvFuturesGetRequest {
  symbols: string;
}

export interface TrsrvSecdefPostRequest {
  body: InlineObject9;
}

export interface TrsrvSecdefScheduleGetRequest {
  assetClass: string;
  symbol: string;
  exchange?: string;
  exchangeFilter?: string;
}

export interface TrsrvStocksGetRequest {
  symbols: string;
}

/**
 *
 */
export class ContractApi extends runtime.BaseAPI {
  /**
   * Returns supported IB Algos for contract. Must be called a second time to query the list of available parameters.
   * IB Algo Params
   */
  async iserverContractConidAlgosGetRaw(
    requestParameters: IserverContractConidAlgosGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<InlineResponse20027>>> {
    if (
      requestParameters.conid === null ||
      requestParameters.conid === undefined
    ) {
      throw new runtime.RequiredError(
        "conid",
        "Required parameter requestParameters.conid was null or undefined when calling iserverContractConidAlgosGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.algos !== undefined) {
      queryParameters["algos"] = requestParameters.algos;
    }

    if (requestParameters.addDescription !== undefined) {
      queryParameters["addDescription"] = requestParameters.addDescription;
    }

    if (requestParameters.addParams !== undefined) {
      queryParameters["addParams"] = requestParameters.addParams;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/contract/{conid}/algos`.replace(
          `{${"conid"}}`,
          encodeURIComponent(String(requestParameters.conid))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(InlineResponse20027FromJSON)
    );
  }

  /**
   * Returns supported IB Algos for contract. Must be called a second time to query the list of available parameters.
   * IB Algo Params
   */
  async iserverContractConidAlgosGet(
    requestParameters: IserverContractConidAlgosGetRequest,
    initOverrides?: RequestInit
  ): Promise<Array<InlineResponse20027>> {
    const response = await this.iserverContractConidAlgosGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns trading related rules and info for contract
   * Info and Rules
   */
  async iserverContractConidInfoAndRulesGetRaw(
    requestParameters: IserverContractConidInfoAndRulesGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20028>> {
    if (
      requestParameters.conid === null ||
      requestParameters.conid === undefined
    ) {
      throw new runtime.RequiredError(
        "conid",
        "Required parameter requestParameters.conid was null or undefined when calling iserverContractConidInfoAndRulesGet."
      );
    }

    if (
      requestParameters.isBuy === null ||
      requestParameters.isBuy === undefined
    ) {
      throw new runtime.RequiredError(
        "isBuy",
        "Required parameter requestParameters.isBuy was null or undefined when calling iserverContractConidInfoAndRulesGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.isBuy !== undefined) {
      queryParameters["isBuy"] = requestParameters.isBuy;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/contract/{conid}/info-and-rules`.replace(
          `{${"conid"}}`,
          encodeURIComponent(String(requestParameters.conid))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20028FromJSON(jsonValue)
    );
  }

  /**
   * Returns trading related rules and info for contract
   * Info and Rules
   */
  async iserverContractConidInfoAndRulesGet(
    requestParameters: IserverContractConidInfoAndRulesGetRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20028> {
    const response = await this.iserverContractConidInfoAndRulesGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Using the Contract Identifier get contract info. You can use this to prefill your order before you submit an order
   * Contract Details
   */
  async iserverContractConidInfoGetRaw(
    requestParameters: IserverContractConidInfoGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Contract>> {
    if (
      requestParameters.conid === null ||
      requestParameters.conid === undefined
    ) {
      throw new runtime.RequiredError(
        "conid",
        "Required parameter requestParameters.conid was null or undefined when calling iserverContractConidInfoGet."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/contract/{conid}/info`.replace(
          `{${"conid"}}`,
          encodeURIComponent(String(requestParameters.conid))
        ),
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      ContractFromJSON(jsonValue)
    );
  }

  /**
   * Using the Contract Identifier get contract info. You can use this to prefill your order before you submit an order
   * Contract Details
   */
  async iserverContractConidInfoGet(
    requestParameters: IserverContractConidInfoGetRequest,
    initOverrides?: RequestInit
  ): Promise<Contract> {
    const response = await this.iserverContractConidInfoGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Provides Contract Details of Futures, Options, Warrants, Cash and CFDs based on conid. To get the strike price for Options/Warrants use \"/iserver/secdef/strikes\" endpoint. Must call /secdef/search for the underlying contract first.
   * Secdef Info
   */
  async iserverSecdefInfoGetRaw(
    requestParameters: IserverSecdefInfoGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<object>> {
    if (
      requestParameters.conid === null ||
      requestParameters.conid === undefined
    ) {
      throw new runtime.RequiredError(
        "conid",
        "Required parameter requestParameters.conid was null or undefined when calling iserverSecdefInfoGet."
      );
    }

    if (
      requestParameters.sectype === null ||
      requestParameters.sectype === undefined
    ) {
      throw new runtime.RequiredError(
        "sectype",
        "Required parameter requestParameters.sectype was null or undefined when calling iserverSecdefInfoGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.conid !== undefined) {
      queryParameters["conid"] = requestParameters.conid;
    }

    if (requestParameters.sectype !== undefined) {
      queryParameters["sectype"] = requestParameters.sectype;
    }

    if (requestParameters.month !== undefined) {
      queryParameters["month"] = requestParameters.month;
    }

    if (requestParameters.exchange !== undefined) {
      queryParameters["exchange"] = requestParameters.exchange;
    }

    if (requestParameters.strike !== undefined) {
      queryParameters["strike"] = requestParameters.strike;
    }

    if (requestParameters.right !== undefined) {
      queryParameters["right"] = requestParameters.right;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/secdef/info`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Provides Contract Details of Futures, Options, Warrants, Cash and CFDs based on conid. To get the strike price for Options/Warrants use \"/iserver/secdef/strikes\" endpoint. Must call /secdef/search for the underlying contract first.
   * Secdef Info
   */
  async iserverSecdefInfoGet(
    requestParameters: IserverSecdefInfoGetRequest,
    initOverrides?: RequestInit
  ): Promise<object> {
    const response = await this.iserverSecdefInfoGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Search by underlying symbol or company name. Relays back what derivative contract(s) it has. This endpoint must be called before using /secdef/info. If company name is specified will only receive limited response: conid, companyName, companyHeader and symbol.
   * Search by Symbol or Name
   */
  async iserverSecdefSearchPostRaw(
    requestParameters: IserverSecdefSearchPostRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<InlineResponse20025>>> {
    if (
      requestParameters.symbol === null ||
      requestParameters.symbol === undefined
    ) {
      throw new runtime.RequiredError(
        "symbol",
        "Required parameter requestParameters.symbol was null or undefined when calling iserverSecdefSearchPost."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/iserver/secdef/search`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: InlineObject8ToJSON(requestParameters.symbol),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      jsonValue.map(InlineResponse20025FromJSON)
    );
  }

  /**
   * Search by underlying symbol or company name. Relays back what derivative contract(s) it has. This endpoint must be called before using /secdef/info. If company name is specified will only receive limited response: conid, companyName, companyHeader and symbol.
   * Search by Symbol or Name
   */
  async iserverSecdefSearchPost(
    requestParameters: IserverSecdefSearchPostRequest,
    initOverrides?: RequestInit
  ): Promise<Array<InlineResponse20025>> {
    const response = await this.iserverSecdefSearchPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Query strikes for Options/Warrants. For the conid of the underlying contract, available contract months and exchanges use \"/iserver/secdef/search\"
   * Search Strikes
   */
  async iserverSecdefStrikesGetRaw(
    requestParameters: IserverSecdefStrikesGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20026>> {
    if (
      requestParameters.conid === null ||
      requestParameters.conid === undefined
    ) {
      throw new runtime.RequiredError(
        "conid",
        "Required parameter requestParameters.conid was null or undefined when calling iserverSecdefStrikesGet."
      );
    }

    if (
      requestParameters.sectype === null ||
      requestParameters.sectype === undefined
    ) {
      throw new runtime.RequiredError(
        "sectype",
        "Required parameter requestParameters.sectype was null or undefined when calling iserverSecdefStrikesGet."
      );
    }

    if (
      requestParameters.month === null ||
      requestParameters.month === undefined
    ) {
      throw new runtime.RequiredError(
        "month",
        "Required parameter requestParameters.month was null or undefined when calling iserverSecdefStrikesGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.conid !== undefined) {
      queryParameters["conid"] = requestParameters.conid;
    }

    if (requestParameters.sectype !== undefined) {
      queryParameters["sectype"] = requestParameters.sectype;
    }

    if (requestParameters.month !== undefined) {
      queryParameters["month"] = requestParameters.month;
    }

    if (requestParameters.exchange !== undefined) {
      queryParameters["exchange"] = requestParameters.exchange;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/iserver/secdef/strikes`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20026FromJSON(jsonValue)
    );
  }

  /**
   * Query strikes for Options/Warrants. For the conid of the underlying contract, available contract months and exchanges use \"/iserver/secdef/search\"
   * Search Strikes
   */
  async iserverSecdefStrikesGet(
    requestParameters: IserverSecdefStrikesGetRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20026> {
    const response = await this.iserverSecdefStrikesGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns a list of non-expired future contracts for given symbol(s)
   * Security Futures by Symbol
   */
  async trsrvFuturesGetRaw(
    requestParameters: TrsrvFuturesGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20033>> {
    if (
      requestParameters.symbols === null ||
      requestParameters.symbols === undefined
    ) {
      throw new runtime.RequiredError(
        "symbols",
        "Required parameter requestParameters.symbols was null or undefined when calling trsrvFuturesGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.symbols !== undefined) {
      queryParameters["symbols"] = requestParameters.symbols;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/trsrv/futures`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20033FromJSON(jsonValue)
    );
  }

  /**
   * Returns a list of non-expired future contracts for given symbol(s)
   * Security Futures by Symbol
   */
  async trsrvFuturesGet(
    requestParameters: TrsrvFuturesGetRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20033> {
    const response = await this.trsrvFuturesGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns a list of security definitions for the given conids
   * Secdef by Conid
   */
  async trsrvSecdefPostRaw(
    requestParameters: TrsrvSecdefPostRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<Array<object>>> {
    if (
      requestParameters.body === null ||
      requestParameters.body === undefined
    ) {
      throw new runtime.RequiredError(
        "body",
        "Required parameter requestParameters.body was null or undefined when calling trsrvSecdefPost."
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    const response = await this.request(
      {
        path: `/trsrv/secdef`,
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: InlineObject9ToJSON(requestParameters.body),
      },
      initOverrides
    );

    return new runtime.JSONApiResponse<any>(response);
  }

  /**
   * Returns a list of security definitions for the given conids
   * Secdef by Conid
   */
  async trsrvSecdefPost(
    requestParameters: TrsrvSecdefPostRequest,
    initOverrides?: RequestInit
  ): Promise<Array<object>> {
    const response = await this.trsrvSecdefPostRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns the trading schedule up to a month for the requested contract
   * Get trading schedule for symbol
   */
  async trsrvSecdefScheduleGetRaw(
    requestParameters: TrsrvSecdefScheduleGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20032>> {
    if (
      requestParameters.assetClass === null ||
      requestParameters.assetClass === undefined
    ) {
      throw new runtime.RequiredError(
        "assetClass",
        "Required parameter requestParameters.assetClass was null or undefined when calling trsrvSecdefScheduleGet."
      );
    }

    if (
      requestParameters.symbol === null ||
      requestParameters.symbol === undefined
    ) {
      throw new runtime.RequiredError(
        "symbol",
        "Required parameter requestParameters.symbol was null or undefined when calling trsrvSecdefScheduleGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.assetClass !== undefined) {
      queryParameters["assetClass"] = requestParameters.assetClass;
    }

    if (requestParameters.symbol !== undefined) {
      queryParameters["symbol"] = requestParameters.symbol;
    }

    if (requestParameters.exchange !== undefined) {
      queryParameters["exchange"] = requestParameters.exchange;
    }

    if (requestParameters.exchangeFilter !== undefined) {
      queryParameters["exchangeFilter"] = requestParameters.exchangeFilter;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/trsrv/secdef/schedule`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20032FromJSON(jsonValue)
    );
  }

  /**
   * Returns the trading schedule up to a month for the requested contract
   * Get trading schedule for symbol
   */
  async trsrvSecdefScheduleGet(
    requestParameters: TrsrvSecdefScheduleGetRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20032> {
    const response = await this.trsrvSecdefScheduleGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }

  /**
   * Returns an object contains all stock contracts for given symbol(s)
   * Security Stocks by Symbol
   */
  async trsrvStocksGetRaw(
    requestParameters: TrsrvStocksGetRequest,
    initOverrides?: RequestInit
  ): Promise<runtime.ApiResponse<InlineResponse20034>> {
    if (
      requestParameters.symbols === null ||
      requestParameters.symbols === undefined
    ) {
      throw new runtime.RequiredError(
        "symbols",
        "Required parameter requestParameters.symbols was null or undefined when calling trsrvStocksGet."
      );
    }

    const queryParameters: any = {};

    if (requestParameters.symbols !== undefined) {
      queryParameters["symbols"] = requestParameters.symbols;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/trsrv/stocks`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      InlineResponse20034FromJSON(jsonValue)
    );
  }

  /**
   * Returns an object contains all stock contracts for given symbol(s)
   * Security Stocks by Symbol
   */
  async trsrvStocksGet(
    requestParameters: TrsrvStocksGetRequest,
    initOverrides?: RequestInit
  ): Promise<InlineResponse20034> {
    const response = await this.trsrvStocksGetRaw(
      requestParameters,
      initOverrides
    );
    return await response.value();
  }
}
