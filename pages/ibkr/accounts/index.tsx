import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { useInteractiveBrokersWebApi } from '~/hooks/useInteractiveBrokersWebApi'
import { Account } from 'openapi/ibkrweb/client'
import { convertCamelCaseToCapitalizedCase } from '~/utils'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'

const InteractiveBrokersAccounts: NextPage = () => {
  const { portfolioApi } = useInteractiveBrokersWebApi()
  const [accounts, setAccounts] = React.useState<Array<Account>>()

  React.useEffect(() => {
    if (!accounts) {
      portfolioApi
        .portfolioAccountsGet()
        .then((response) => setAccounts(response))
    }
  }, [portfolioApi, accounts])

  return (
    <>
      <Head>
        <title>Accounts - Interactive Brokers</title>
      </Head>

      <main className="p-16">
        {accounts && (
          <Table>
            <TableBody>
              {accounts.map((account) =>
                Object.keys(account).map((key) => {
                  const value = (account as any)[key]
                  const getValue = () => {
                    if (typeof value === 'object') {
                      const object = value
                      return (
                        <Table>
                          <TableBody>
                            {Object.keys(object).map((objectKey) => (
                              <TableRow key={objectKey}>
                                <TableCell component="th" scope="row">
                                  {convertCamelCaseToCapitalizedCase(objectKey)}
                                </TableCell>
                                <TableCell>
                                  {(object as any)[objectKey]?.toString()}
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      )
                    }
                    return value?.toString()
                  }

                  return (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {convertCamelCaseToCapitalizedCase(key)}
                      </TableCell>
                      <TableCell>{getValue()}</TableCell>
                    </TableRow>
                  )
                })
              )}
            </TableBody>
          </Table>
        )}
      </main>
    </>
  )
}

export default InteractiveBrokersAccounts
