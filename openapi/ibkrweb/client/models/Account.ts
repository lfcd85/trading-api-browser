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
  AccountParent,
  AccountParentFromJSON,
  AccountParentFromJSONTyped,
  AccountParentToJSON,
} from './'

/**
 * account information
 * @export
 * @interface Account
 */
export interface Account {
  /**
   * The account identification value
   * @type {string}
   * @memberof Account
   */
  id?: string
  /**
   * The account number
   * @type {string}
   * @memberof Account
   */
  accountId?: string
  /**
   * The accountAlias
   * @type {string}
   * @memberof Account
   */
  accountVan?: string
  /**
   * Title of the account
   * @type {string}
   * @memberof Account
   */
  accountTitle?: string
  /**
   * Whichever value is not null in this priority
   * @type {string}
   * @memberof Account
   */
  displayName?: AccountDisplayNameEnum
  /**
   * User customizable account alias. Refer to [Configure Account Alias](https://guides.interactivebrokers.com/cp/cp.htm#am/settings/accountalias.htm) for details.
   * @type {string}
   * @memberof Account
   */
  accountAlias?: string
  /**
   * When the account was opened in unix time.
   * @type {number}
   * @memberof Account
   */
  accountStatus?: number
  /**
   * Base currency of the account.
   * @type {string}
   * @memberof Account
   */
  currency?: AccountCurrencyEnum
  /**
   * Account Type
   * @type {string}
   * @memberof Account
   */
  type?: AccountTypeEnum
  /**
   * UNI - Deprecated property
   * @type {string}
   * @memberof Account
   */
  tradingType?: string
  /**
   * If an account is a sub-account to a Financial Advisor.
   * @type {boolean}
   * @memberof Account
   */
  faclient?: boolean
  /**
   * Status of the Account
   *   * O = Open
   *   * P or N = Pending
   *   * A = Abandoned
   *   * R = Rejected
   *   * C = Closed
   * @type {string}
   * @memberof Account
   */
  clearingStatus?: AccountClearingStatusEnum
  /**
   * Is a Covestor Account
   * @type {boolean}
   * @memberof Account
   */
  covestor?: boolean
  /**
   *
   * @type {AccountParent}
   * @memberof Account
   */
  parent?: AccountParent
  /**
   * Formatted "accountId - accountAlias"
   * @type {string}
   * @memberof Account
   */
  desc?: string
}

/**
 * @export
 * @enum {string}
 */
export enum AccountDisplayNameEnum {
  AccountTitle = 'accountTitle',
  AccountVan = 'accountVan',
  AccountId = 'accountId',
}
/**
 * @export
 * @enum {string}
 */
export enum AccountCurrencyEnum {
  Aud = 'AUD',
  Gbp = 'GBP',
  Cad = 'CAD',
  Cnh = 'CNH',
  Czk = 'CZK',
  Dkk = 'DKK',
  Eur = 'EUR',
  Hkd = 'HKD',
  Huf = 'HUF',
  Inr = 'INR',
  Ils = 'ILS',
  Jpy = 'JPY',
  Mxn = 'MXN',
  Nok = 'NOK',
  Nzd = 'NZD',
  Pln = 'PLN',
  Rub = 'RUB',
  Sgd = 'SGD',
  Sek = 'SEK',
  Chf = 'CHF',
  Usd = 'USD',
}
/**
 * @export
 * @enum {string}
 */
export enum AccountTypeEnum {
  Individual = 'INDIVIDUAL',
  Joint = 'JOINT',
  Org = 'ORG',
  Trust = 'TRUST',
  Demo = 'DEMO',
}
/**
 * @export
 * @enum {string}
 */
export enum AccountClearingStatusEnum {
  O = 'O',
  P = 'P',
  N = 'N',
  A = 'A',
  R = 'R',
  C = 'C',
}

export function AccountFromJSON(json: any): Account {
  return AccountFromJSONTyped(json, false)
}

export function AccountFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Account {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    accountId: !exists(json, 'accountId') ? undefined : json['accountId'],
    accountVan: !exists(json, 'accountVan') ? undefined : json['accountVan'],
    accountTitle: !exists(json, 'accountTitle')
      ? undefined
      : json['accountTitle'],
    displayName: !exists(json, 'displayName') ? undefined : json['displayName'],
    accountAlias: !exists(json, 'accountAlias')
      ? undefined
      : json['accountAlias'],
    accountStatus: !exists(json, 'accountStatus')
      ? undefined
      : json['accountStatus'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    type: !exists(json, 'type') ? undefined : json['type'],
    tradingType: !exists(json, 'tradingType') ? undefined : json['tradingType'],
    faclient: !exists(json, 'faclient') ? undefined : json['faclient'],
    clearingStatus: !exists(json, 'clearingStatus')
      ? undefined
      : json['clearingStatus'],
    covestor: !exists(json, 'covestor') ? undefined : json['covestor'],
    parent: !exists(json, 'parent')
      ? undefined
      : AccountParentFromJSON(json['parent']),
    desc: !exists(json, 'desc') ? undefined : json['desc'],
  }
}

export function AccountToJSON(value?: Account | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    accountId: value.accountId,
    accountVan: value.accountVan,
    accountTitle: value.accountTitle,
    displayName: value.displayName,
    accountAlias: value.accountAlias,
    accountStatus: value.accountStatus,
    currency: value.currency,
    type: value.type,
    tradingType: value.tradingType,
    faclient: value.faclient,
    clearingStatus: value.clearingStatus,
    covestor: value.covestor,
    parent: AccountParentToJSON(value.parent),
    desc: value.desc,
  }
}
