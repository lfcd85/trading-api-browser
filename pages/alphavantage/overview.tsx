import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAlphaVantageApi } from '~/hooks/useAlphaVantageApi'
import { convertToCapitalCase, sleep } from '~/utils'
import { Table, TableBody, TableCell, TableRow } from '@material-ui/core'

const AlphaVantageOverview: NextPage = () => {
  const { fetchAlphaVantageApi } = useAlphaVantageApi()
  const [overview, setOverview] = React.useState<object>()

  React.useEffect(() => {
    if (!overview) {
      fetchAlphaVantageApi({
        function: 'OVERVIEW',
        symbol: 'MRNA', // TODO: add search area
      })
        .then((response) => response.json())
        .then((data) => setOverview(data))
    }
  }, [fetchAlphaVantageApi])

  return (
    <>
      <Head>
        <title>Company Overview - Alpha Vantage</title>
      </Head>

      <main className="p-16 h-full">
        <div className="w-full h-full">
          {overview && (
            <Table>
              <TableBody>
                {Object.keys(overview).map((key) => (
                  <TableRow key={key}>
                    <TableCell component="th" scope="row">
                      {convertToCapitalCase(key)}
                    </TableCell>
                    <TableCell>{(overview as any)[key].toString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </main>
    </>
  )
}

export default AlphaVantageOverview
