import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import { useAlpacaApi } from '~/hooks/useAlpacaApi'
import { convertToCapitalCase } from '~/utils'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'
import { Account } from 'openapi/ibkrweb/client'

const AlpacaAccount: NextPage = () => {
  const { alpacaApi } = useAlpacaApi()
  const [account, setAccount] = React.useState<Account>()

  React.useEffect(() => {
    if (!account) {
      alpacaApi.getAccount().then((response) => setAccount(response as Account))
    }
  }, [alpacaApi, account])

  return (
    <>
      <Head>
        <title>Account - Alpaca</title>
      </Head>

      <main className="p-16">
        {account && (
          <Table>
            <TableBody>
              {Object.keys(account).map(
                (key) =>
                  key !== 'raw' && (
                    <TableRow key={key}>
                      <TableCell component="th" scope="row">
                        {convertToCapitalCase(key)}
                      </TableCell>
                      <TableCell>{(account as any)[key].toString()}</TableCell>
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        )}
      </main>
    </>
  )
}

export default AlpacaAccount
