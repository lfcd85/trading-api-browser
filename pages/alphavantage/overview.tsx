import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAlphaVantageApi } from '~/hooks/useAlphaVantageApi'
import { convertToCapitalCase } from '~/utils'
import {
  Paper,
  InputBase,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

const AlphaVantageOverview: NextPage = () => {
  const { fetchAlphaVantageApi } = useAlphaVantageApi()
  const [symbol, setSymbol] = React.useState<string>()
  const [overview, setOverview] = React.useState<object>()

  const onSearch = () => {
    fetchAlphaVantageApi({
      function: 'OVERVIEW',
      symbol,
    })
      .then((response) => response.json())
      .then((data) => setOverview(data))
  }

  return (
    <>
      <Head>
        <title>Company Overview - Alpha Vantage</title>
      </Head>

      <main className="p-16 h-full">
        <div className="w-full h-full">
          <Paper variant="outlined" className="w-80 flex justify-between mb-8">
            <InputBase
              placeholder="Search Symbol"
              inputProps={{ 'aria-label': 'search symbol' }}
              className="flex-grow pl-4"
              onChange={(e) => setSymbol(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  onSearch()
                }
              }}
            />
            <IconButton aria-label="search" onClick={() => onSearch()}>
              <SearchIcon />
            </IconButton>
          </Paper>

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
