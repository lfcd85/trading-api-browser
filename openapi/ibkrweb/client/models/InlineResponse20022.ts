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
 * @interface InlineResponse20022
 */
export interface InlineResponse20022 {
  /**
   *
   * @type {string}
   * @memberof InlineResponse20022
   */
  serverId?: string
  /**
   *
   * @type {number}
   * @memberof InlineResponse20022
   */
  conid?: number
  /**
   *
   * @type {number}
   * @memberof InlineResponse20022
   */
  updated?: number
  /**
   * Last Price - The last price at which the contract traded. "C" identifies this price as the previous day's closing price. "H" means that the trading is halted.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _31?: string
  /**
   * Symbol
   * @type {string}
   * @memberof InlineResponse20022
   */
  _55?: string
  /**
   * Text
   * @type {string}
   * @memberof InlineResponse20022
   */
  _58?: string
  /**
   * High - Current day high price
   * @type {string}
   * @memberof InlineResponse20022
   */
  _70?: string
  /**
   * Low - Current day low price
   * @type {string}
   * @memberof InlineResponse20022
   */
  _71?: string
  /**
   * Position - The current aggregate position for the specified account or group.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _72?: string
  /**
   * Market Value - The current market value of  your position in the security. Market Value is calculated with realtime market data (even when not subscribed to market data).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _73?: string
  /**
   * Avg Price - The average price of the position.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _74?: string
  /**
   * Unrealized PnL - Unrealized profit or loss. Unrealized PnL is calculated with realtime market data (even when not subscribed to market data).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _75?: string
  /**
   * Formatted position
   * @type {string}
   * @memberof InlineResponse20022
   */
  _76?: string
  /**
   * Formatted Unrealized PnL
   * @type {string}
   * @memberof InlineResponse20022
   */
  _77?: string
  /**
   * Daily PnL - Your profit or loss of the day since prior close. Daily PnL is calculated with realtime market data (even when not subscribed to market data).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _78?: string
  /**
   * Change - The difference between the last price and the close on the previous trading day
   * @type {string}
   * @memberof InlineResponse20022
   */
  _82?: string
  /**
   * Change % - The difference between the last price and the close on the previous trading day in percentage.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _83?: string
  /**
   * Bid Price - The highest-priced bid on the contract.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _84?: string
  /**
   * Ask Size - The number of contracts or shares offered at the ask price. For US stocks, the number displayed is divided by 100.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _85?: string
  /**
   * Ask Price - The lowest-priced offer on the contract.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _86?: string
  /**
   * Volume - Volume for the day, formatted with 'K' for thousands or 'M' for millions. For higher precision volume refer to field 7762.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _87?: string
  /**
   * Raw Volume - Volume for the day, provided in long form without formatted with K/M. This field value is deprecated, for high precision volume refer to field 7762.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _87rawDeprecated?: string
  /**
   * Bid Size - The number of contracts or shares bid for at the bid price. For US stocks, the number displayed is divided by 100.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _88?: string
  /**
   * Exchange
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6004?: string
  /**
   * Conid - Contract identifier from IBKR's database.
   * @type {number}
   * @memberof InlineResponse20022
   */
  _6008?: number
  /**
   * SecType - The asset class of the instrument.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6070?: string
  /**
   * Months
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6072?: string
  /**
   * Regular Expiry
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6073?: string
  /**
   * Marker for market data delivery method (similar to request id)
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6119?: string
  /**
   * Underlying Conid. Use /trsrv/secdef to get more information about the security
   * @type {number}
   * @memberof InlineResponse20022
   */
  _6457?: number
  /**
   * Market Data Availability. The field may contain two chars. The first char is the primary code: R = Realtime, D = Delayed,
   * Z = Frozen, Y = Frozen Delayed. The second char is the secondary code: P = Snapshot Available, p = Consolidated.
   * The third char defines: B = Book
   * @type {string}
   * @memberof InlineResponse20022
   */
  _6509?: string
  /**
   * Company name
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7051?: string
  /**
   * Ask Exch - Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7057?: string
  /**
   * Last Exch - Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7058?: string
  /**
   * Last Size - The number of unites traded at the last price
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7059?: string
  /**
   * Bid Exch - Displays the exchange(s) offering the SMART price. A=AMEX, C=CBOE, I=ISE, X=PHLX, N=PSE, B=BOX, Q=NASDAQOM, Z=BATS, W=CBOE2, T=NASDAQBX, M=MIAX, H=GEMINI, E=EDGX, J=MERCURY
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7068?: string
  /**
   * Implied Vol./Hist. Vol % - The ratio of the implied volatility over the historical volatility, expressed as a percentage.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7084?: string
  /**
   * Put/Call Interest - Put option open interest/call option open interest for the trading day.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7085?: string
  /**
   * Put/Call Volume - Put option volume/call option volume for the trading day.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7086?: string
  /**
   * Hist. Vol. % - 30-day real-time historical volatility.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7087?: string
  /**
   * Hist. Vol. Close % - Shows the historical volatility based on previous close price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7088?: string
  /**
   * Opt. Volume - Option Volume
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7089?: string
  /**
   * Conid + Exchange
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7094?: string
  /**
   * canBeTraded - If contract is a trade-able instrument. Returns 1(true) or 0(false).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7184?: string
  /**
   * Contract Description
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7219?: string
  /**
   * Contract Description
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7220?: string
  /**
   * Listing Exchange
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7221?: string
  /**
   * Industry - Displays the type of industry under which the underlying company can be categorized.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7280?: string
  /**
   * Category - Displays a more detailed level of description within the industry under which the underlying company can be categorized.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7281?: string
  /**
   * Average Volume - The average daily trading volume over 90 days.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7282?: string
  /**
   * Option Implied Vol. % - A prediction of how volatile an underlying will be in the future.
   * At the market volatility estimated for a maturity thirty calendar days forward of the current trading day, and based on option prices from two consecutive expiration months.
   * To query the Implied Vol. % of a specific strike refer to field 7633.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7283?: string
  /**
   * Historic Volume (30d)
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7284?: string
  /**
   * Put/Call Ratio
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7285?: string
  /**
   * Dividend Amount - Displays the amount of the next dividend.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7286?: string
  /**
   * Dividend Yield % - This value is the toal of the expected dividend payments over the next twelve months per share divided by the Current Price and is expressed as a percentage.
   * For derivatives, this displays the total of the expected dividend payments over the expiry date.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7287?: string
  /**
   * Ex-date of the dividend
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7288?: string
  /**
   * Market Cap
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7289?: string
  /**
   * P/E
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7290?: string
  /**
   * EPS
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7291?: string
  /**
   * Cost Basis - Your current position in this security multiplied by the average price and multiplier.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7292?: string
  /**
   * 52 Week High - The highest price for the past 52 weeks.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7293?: string
  /**
   * 52 Week Low - The lowest price for the past 52 weeks.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7294?: string
  /**
   * Open - Today's opening price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7295?: string
  /**
   * Close - Today's closing price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7296?: string
  /**
   * Delta - The ratio of the change in the price of the option to the corresponding change in the price of the underlying.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7308?: string
  /**
   * Gamma - The rate of change for the delta with respect to the underlying asset's price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7309?: string
  /**
   * Theta - A measure of the rate of decline the value of an option due to the passage of time.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7310?: string
  /**
   * Vega - The amount that the price of an option changes compared to a 1% change in the volatility.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7311?: string
  /**
   * Opt. Volume Change % - Today's option volume as a percentage of the average option volume.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7607?: string
  /**
   * Implied Vol. % - The implied volatility for the specific strike of the option in percentage. To query the Option Implied Vol. % from the underlying refer to field 7283.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7633?: string
  /**
   * Mark - The mark price is, the ask price if ask is less than last price, the bid price if bid is more than the last price, otherwise it's equal to last price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7635?: string
  /**
   * Shortable Shares - Number of shares available for shorting.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7636?: string
  /**
   * Fee Rate - Interest rate charged on borrowed shares.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7637?: string
  /**
   * Option Open Interest
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7638?: string
  /**
   * % of Mark Value - Displays the market value of the contract as a percentage of the total market value of the account.
   * Daily PnL is calculated with realtime market data (even when not subscribed to market data).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7639?: string
  /**
   * Shortable - Describes the level of difficulty with which the security can be sold short.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7644?: string
  /**
   * Morningstar Rating - Displays Morningstar Rating provided value. Requires [Morningstar](https://www.interactivebrokers.com/en/index.php?f=14262) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7655?: string
  /**
   * Dividends - This value is the total of the expected dividend payments over the next twelve months per share.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7671?: string
  /**
   * Dividends TTM - This value is the total of the expected dividend payments over the last twelve months per share.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7672?: string
  /**
   * EMA(200) - Exponential moving average (N=200).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7674?: string
  /**
   * EMA(100) - Exponential moving average (N=100).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7675?: string
  /**
   * EMA(50) - Exponential moving average (N=50).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7676?: string
  /**
   * EMA(20) - Exponential moving average (N=20).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7677?: string
  /**
   * Price/EMA(200) - Price to Exponential moving average (N=200) ratio -1, displayed in percents.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7678?: string
  /**
   * Price/EMA(100) - Price to Exponential moving average (N=100) ratio -1, displayed in percents.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7679?: string
  /**
   * Price/EMA(50) - Price to Exponential moving average (N=50) ratio -1, displayed in percents.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7680?: string
  /**
   * Price/EMA(20) - Price to Exponential moving average (N=20) ratio -1, displayed in percents.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7681?: string
  /**
   * Change Since Open - The difference between the last price and the open price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7682?: string
  /**
   * Upcoming Event - Shows the next major company event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7683?: string
  /**
   * Upcoming Event Date - The date of the next major company event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7684?: string
  /**
   * Upcoming Analyst Meeting - The date and time of the next scheduled analyst meeting. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7685?: string
  /**
   * Upcoming Earnings - The date and time of the next scheduled earnings/earnings call event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7686?: string
  /**
   * Upcoming Misc Event - The date and time of the next shareholder meeting, presentation or other event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7687?: string
  /**
   * Recent Analyst Meeting - The date and time of the most recent analyst meeting. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7688?: string
  /**
   * Recent Earnings - The date and time of the most recent earnings/earning call event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7689?: string
  /**
   * Recent Misc Event - The date and time of the most recent shareholder meeting, presentation or other event. Requires [Wall Street Horizon](https://www.interactivebrokers.com/en/index.php?f=24674) subscription.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7690?: string
  /**
   * Probability of Max Return - Customer implied probability of maximum potential gain.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7694?: string
  /**
   * Break Even - Break even points
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7695?: string
  /**
   * SPX Delta - Beta Weighted Delta is calculated using the formula; Delta x dollar adjusted beta, where adjusted beta is adjusted by the ratio of the close price.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7696?: string
  /**
   * Futures Open Interest - Total number of outstanding futures contracts
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7697?: string
  /**
   * Last Yield - Implied yield of the bond if it is purchased at the current last price. Last yield is calculated using the Last price on all possible call dates.
   * It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates.
   * The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7698?: string
  /**
   * Bid Yield - Implied yield of the bond if it is purchased at the current bid price. Bid yield is calculated using the Ask on all possible call dates.
   * It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates.
   * The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7699?: string
  /**
   * Probability of Max Return - Customer implied probability of maximum potential gain.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7700?: string
  /**
   * Probability of Max Loss - Customer implied probability of maximum potential loss.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7702?: string
  /**
   * Profit Probability - Customer implied probability of any gain.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7703?: string
  /**
   * Organization Type
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7704?: string
  /**
   * Debt Class
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7705?: string
  /**
   * Ratings - Ratings issued for bond contract.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7706?: string
  /**
   * Bond State Code
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7707?: string
  /**
   * Bond Type
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7708?: string
  /**
   * Last Trading Date
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7714?: string
  /**
   * Issue Date
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7715?: string
  /**
   * Beta - Beta is against standard index.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7718?: string
  /**
   * Ask Yield - Implied yield of the bond if it is purchased at the current offer. Ask yield is calculated using the Bid on all possible call dates.
   * It is assumed that prepayment occurs if the bond has call or put provisions and the issuer can offer a lower coupon rate based on current market rates.
   * The yield to worst will be the lowest of the yield to maturity or yield to call (if the bond has prepayment provisions). Yield to worse may be the same as yield to maturity but never higher.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7720?: string
  /**
   * Prior Close - Yesterday's closing price
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7741?: string
  /**
   * Volume Long - High precision volume for the day. For formatted volume refer to field 87.
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7762?: string
  /**
   * hasTradingPermissions - if user has trading permissions for specified contract. Returns 1(true) or 0(false).
   * @type {string}
   * @memberof InlineResponse20022
   */
  _7768?: string
}

export function InlineResponse20022FromJSON(json: any): InlineResponse20022 {
  return InlineResponse20022FromJSONTyped(json, false)
}

export function InlineResponse20022FromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): InlineResponse20022 {
  if (json === undefined || json === null) {
    return json
  }
  return {
    serverId: !exists(json, 'server_id') ? undefined : json['server_id'],
    conid: !exists(json, 'conid') ? undefined : json['conid'],
    updated: !exists(json, '_updated') ? undefined : json['_updated'],
    _31: !exists(json, '31') ? undefined : json['31'],
    _55: !exists(json, '55') ? undefined : json['55'],
    _58: !exists(json, '58') ? undefined : json['58'],
    _70: !exists(json, '70') ? undefined : json['70'],
    _71: !exists(json, '71') ? undefined : json['71'],
    _72: !exists(json, '72') ? undefined : json['72'],
    _73: !exists(json, '73') ? undefined : json['73'],
    _74: !exists(json, '74') ? undefined : json['74'],
    _75: !exists(json, '75') ? undefined : json['75'],
    _76: !exists(json, '76') ? undefined : json['76'],
    _77: !exists(json, '77') ? undefined : json['77'],
    _78: !exists(json, '78') ? undefined : json['78'],
    _82: !exists(json, '82') ? undefined : json['82'],
    _83: !exists(json, '83') ? undefined : json['83'],
    _84: !exists(json, '84') ? undefined : json['84'],
    _85: !exists(json, '85') ? undefined : json['85'],
    _86: !exists(json, '86') ? undefined : json['86'],
    _87: !exists(json, '87') ? undefined : json['87'],
    _87rawDeprecated: !exists(json, '87_raw (deprecated)')
      ? undefined
      : json['87_raw (deprecated)'],
    _88: !exists(json, '88') ? undefined : json['88'],
    _6004: !exists(json, '6004') ? undefined : json['6004'],
    _6008: !exists(json, '6008') ? undefined : json['6008'],
    _6070: !exists(json, '6070') ? undefined : json['6070'],
    _6072: !exists(json, '6072') ? undefined : json['6072'],
    _6073: !exists(json, '6073') ? undefined : json['6073'],
    _6119: !exists(json, '6119') ? undefined : json['6119'],
    _6457: !exists(json, '6457') ? undefined : json['6457'],
    _6509: !exists(json, '6509') ? undefined : json['6509'],
    _7051: !exists(json, '7051') ? undefined : json['7051'],
    _7057: !exists(json, '7057') ? undefined : json['7057'],
    _7058: !exists(json, '7058') ? undefined : json['7058'],
    _7059: !exists(json, '7059') ? undefined : json['7059'],
    _7068: !exists(json, '7068') ? undefined : json['7068'],
    _7084: !exists(json, '7084') ? undefined : json['7084'],
    _7085: !exists(json, '7085') ? undefined : json['7085'],
    _7086: !exists(json, '7086') ? undefined : json['7086'],
    _7087: !exists(json, '7087') ? undefined : json['7087'],
    _7088: !exists(json, '7088') ? undefined : json['7088'],
    _7089: !exists(json, '7089') ? undefined : json['7089'],
    _7094: !exists(json, '7094') ? undefined : json['7094'],
    _7184: !exists(json, '7184') ? undefined : json['7184'],
    _7219: !exists(json, '7219') ? undefined : json['7219'],
    _7220: !exists(json, '7220') ? undefined : json['7220'],
    _7221: !exists(json, '7221') ? undefined : json['7221'],
    _7280: !exists(json, '7280') ? undefined : json['7280'],
    _7281: !exists(json, '7281') ? undefined : json['7281'],
    _7282: !exists(json, '7282') ? undefined : json['7282'],
    _7283: !exists(json, '7283') ? undefined : json['7283'],
    _7284: !exists(json, '7284') ? undefined : json['7284'],
    _7285: !exists(json, '7285') ? undefined : json['7285'],
    _7286: !exists(json, '7286') ? undefined : json['7286'],
    _7287: !exists(json, '7287') ? undefined : json['7287'],
    _7288: !exists(json, '7288') ? undefined : json['7288'],
    _7289: !exists(json, '7289') ? undefined : json['7289'],
    _7290: !exists(json, '7290') ? undefined : json['7290'],
    _7291: !exists(json, '7291') ? undefined : json['7291'],
    _7292: !exists(json, '7292') ? undefined : json['7292'],
    _7293: !exists(json, '7293') ? undefined : json['7293'],
    _7294: !exists(json, '7294') ? undefined : json['7294'],
    _7295: !exists(json, '7295') ? undefined : json['7295'],
    _7296: !exists(json, '7296') ? undefined : json['7296'],
    _7308: !exists(json, '7308') ? undefined : json['7308'],
    _7309: !exists(json, '7309') ? undefined : json['7309'],
    _7310: !exists(json, '7310') ? undefined : json['7310'],
    _7311: !exists(json, '7311') ? undefined : json['7311'],
    _7607: !exists(json, '7607') ? undefined : json['7607'],
    _7633: !exists(json, '7633') ? undefined : json['7633'],
    _7635: !exists(json, '7635') ? undefined : json['7635'],
    _7636: !exists(json, '7636') ? undefined : json['7636'],
    _7637: !exists(json, '7637') ? undefined : json['7637'],
    _7638: !exists(json, '7638') ? undefined : json['7638'],
    _7639: !exists(json, '7639') ? undefined : json['7639'],
    _7644: !exists(json, '7644') ? undefined : json['7644'],
    _7655: !exists(json, '7655') ? undefined : json['7655'],
    _7671: !exists(json, '7671') ? undefined : json['7671'],
    _7672: !exists(json, '7672') ? undefined : json['7672'],
    _7674: !exists(json, '7674') ? undefined : json['7674'],
    _7675: !exists(json, '7675') ? undefined : json['7675'],
    _7676: !exists(json, '7676') ? undefined : json['7676'],
    _7677: !exists(json, '7677') ? undefined : json['7677'],
    _7678: !exists(json, '7678') ? undefined : json['7678'],
    _7679: !exists(json, '7679') ? undefined : json['7679'],
    _7680: !exists(json, '7680') ? undefined : json['7680'],
    _7681: !exists(json, '7681') ? undefined : json['7681'],
    _7682: !exists(json, '7682') ? undefined : json['7682'],
    _7683: !exists(json, '7683') ? undefined : json['7683'],
    _7684: !exists(json, '7684') ? undefined : json['7684'],
    _7685: !exists(json, '7685') ? undefined : json['7685'],
    _7686: !exists(json, '7686') ? undefined : json['7686'],
    _7687: !exists(json, '7687') ? undefined : json['7687'],
    _7688: !exists(json, '7688') ? undefined : json['7688'],
    _7689: !exists(json, '7689') ? undefined : json['7689'],
    _7690: !exists(json, '7690') ? undefined : json['7690'],
    _7694: !exists(json, '7694') ? undefined : json['7694'],
    _7695: !exists(json, '7695') ? undefined : json['7695'],
    _7696: !exists(json, '7696') ? undefined : json['7696'],
    _7697: !exists(json, '7697') ? undefined : json['7697'],
    _7698: !exists(json, '7698') ? undefined : json['7698'],
    _7699: !exists(json, '7699') ? undefined : json['7699'],
    _7700: !exists(json, '7700') ? undefined : json['7700'],
    _7702: !exists(json, '7702') ? undefined : json['7702'],
    _7703: !exists(json, '7703') ? undefined : json['7703'],
    _7704: !exists(json, '7704') ? undefined : json['7704'],
    _7705: !exists(json, '7705') ? undefined : json['7705'],
    _7706: !exists(json, '7706') ? undefined : json['7706'],
    _7707: !exists(json, '7707') ? undefined : json['7707'],
    _7708: !exists(json, '7708') ? undefined : json['7708'],
    _7714: !exists(json, '7714') ? undefined : json['7714'],
    _7715: !exists(json, '7715') ? undefined : json['7715'],
    _7718: !exists(json, '7718') ? undefined : json['7718'],
    _7720: !exists(json, '7720') ? undefined : json['7720'],
    _7741: !exists(json, '7741') ? undefined : json['7741'],
    _7762: !exists(json, '7762') ? undefined : json['7762'],
    _7768: !exists(json, '7768') ? undefined : json['7768'],
  }
}

export function InlineResponse20022ToJSON(
  value?: InlineResponse20022 | null
): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    server_id: value.serverId,
    conid: value.conid,
    _updated: value.updated,
    '31': value._31,
    '55': value._55,
    '58': value._58,
    '70': value._70,
    '71': value._71,
    '72': value._72,
    '73': value._73,
    '74': value._74,
    '75': value._75,
    '76': value._76,
    '77': value._77,
    '78': value._78,
    '82': value._82,
    '83': value._83,
    '84': value._84,
    '85': value._85,
    '86': value._86,
    '87': value._87,
    '87_raw (deprecated)': value._87rawDeprecated,
    '88': value._88,
    '6004': value._6004,
    '6008': value._6008,
    '6070': value._6070,
    '6072': value._6072,
    '6073': value._6073,
    '6119': value._6119,
    '6457': value._6457,
    '6509': value._6509,
    '7051': value._7051,
    '7057': value._7057,
    '7058': value._7058,
    '7059': value._7059,
    '7068': value._7068,
    '7084': value._7084,
    '7085': value._7085,
    '7086': value._7086,
    '7087': value._7087,
    '7088': value._7088,
    '7089': value._7089,
    '7094': value._7094,
    '7184': value._7184,
    '7219': value._7219,
    '7220': value._7220,
    '7221': value._7221,
    '7280': value._7280,
    '7281': value._7281,
    '7282': value._7282,
    '7283': value._7283,
    '7284': value._7284,
    '7285': value._7285,
    '7286': value._7286,
    '7287': value._7287,
    '7288': value._7288,
    '7289': value._7289,
    '7290': value._7290,
    '7291': value._7291,
    '7292': value._7292,
    '7293': value._7293,
    '7294': value._7294,
    '7295': value._7295,
    '7296': value._7296,
    '7308': value._7308,
    '7309': value._7309,
    '7310': value._7310,
    '7311': value._7311,
    '7607': value._7607,
    '7633': value._7633,
    '7635': value._7635,
    '7636': value._7636,
    '7637': value._7637,
    '7638': value._7638,
    '7639': value._7639,
    '7644': value._7644,
    '7655': value._7655,
    '7671': value._7671,
    '7672': value._7672,
    '7674': value._7674,
    '7675': value._7675,
    '7676': value._7676,
    '7677': value._7677,
    '7678': value._7678,
    '7679': value._7679,
    '7680': value._7680,
    '7681': value._7681,
    '7682': value._7682,
    '7683': value._7683,
    '7684': value._7684,
    '7685': value._7685,
    '7686': value._7686,
    '7687': value._7687,
    '7688': value._7688,
    '7689': value._7689,
    '7690': value._7690,
    '7694': value._7694,
    '7695': value._7695,
    '7696': value._7696,
    '7697': value._7697,
    '7698': value._7698,
    '7699': value._7699,
    '7700': value._7700,
    '7702': value._7702,
    '7703': value._7703,
    '7704': value._7704,
    '7705': value._7705,
    '7706': value._7706,
    '7707': value._7707,
    '7708': value._7708,
    '7714': value._7714,
    '7715': value._7715,
    '7718': value._7718,
    '7720': value._7720,
    '7741': value._7741,
    '7762': value._7762,
    '7768': value._7768,
  }
}
