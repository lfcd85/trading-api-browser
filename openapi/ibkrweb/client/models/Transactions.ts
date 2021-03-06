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
  TransactionsTransactions,
  TransactionsTransactionsFromJSON,
  TransactionsTransactionsFromJSONTyped,
  TransactionsTransactionsToJSON,
} from './'

/**
 * account transactions
 * @export
 * @interface Transactions
 */
export interface Transactions {
  /**
   * will always be getTransactions
   * @type {string}
   * @memberof Transactions
   */
  id?: string
  /**
   * same as request
   * @type {string}
   * @memberof Transactions
   */
  currency?: string
  /**
   * Indicates whether current day and realtime data is included in the result
   * @type {boolean}
   * @memberof Transactions
   */
  includesRealTime?: boolean
  /**
   * Period start date. Epoch time, GMT
   * @type {number}
   * @memberof Transactions
   */
  from?: number
  /**
   * Period end date. Epoch time, GMT
   * @type {number}
   * @memberof Transactions
   */
  to?: number
  /**
   * Sorted by date descending
   * @type {Array<TransactionsTransactions>}
   * @memberof Transactions
   */
  transactions?: Array<TransactionsTransactions>
}

export function TransactionsFromJSON(json: any): Transactions {
  return TransactionsFromJSONTyped(json, false)
}

export function TransactionsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): Transactions {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    currency: !exists(json, 'currency') ? undefined : json['currency'],
    includesRealTime: !exists(json, 'includesRealTime')
      ? undefined
      : json['includesRealTime'],
    from: !exists(json, 'from') ? undefined : json['from'],
    to: !exists(json, 'to') ? undefined : json['to'],
    transactions: !exists(json, 'transactions')
      ? undefined
      : (json['transactions'] as Array<any>).map(
          TransactionsTransactionsFromJSON
        ),
  }
}

export function TransactionsToJSON(value?: Transactions | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
    currency: value.currency,
    includesRealTime: value.includesRealTime,
    from: value.from,
    to: value.to,
    transactions:
      value.transactions === undefined
        ? undefined
        : (value.transactions as Array<any>).map(
            TransactionsTransactionsToJSON
          ),
  }
}
