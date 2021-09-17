import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { ITickers } from '@polygon.io/client-js'
import { usePolygonIoApi } from '~/hooks/usePolygonIoApi'
import { convertToCapitalCase, sleep } from '~/utils'
import { DataGrid, GridColDef, GridRowData } from '@mui/x-data-grid'
import { camelCase } from 'change-case'
import camelcaseKeys from 'camelcase-keys'

const PolygonIoTickers: NextPage = () => {
  const { polygonIoApi, fetchWithApiKey } = usePolygonIoApi()
  const [tickers, setTickers] = React.useState<ITickers[]>([])
  const [nextUrl, setNextUrl] = React.useState<string>()
  const [columns, setColumns] = React.useState<GridColDef[]>([])
  const [rows, setRows] = React.useState<GridRowData[]>([])

  React.useEffect(() => {
    if (tickers.length === 0) {
      polygonIoApi.reference.tickers().then((response) => {
        const { nextUrl, results } = camelcaseKeys(response) as any
        setNextUrl(nextUrl)
        setTickers([...tickers, ...results])
      })
    }
  }, [polygonIoApi])

  React.useEffect(() => {
    if (nextUrl) {
      sleep(2000)
        .then(() => fetchWithApiKey(nextUrl))
        .then((response) => response.json())
        .then((data) => {
          const { nextUrl, results } = camelcaseKeys(data)
          setNextUrl(nextUrl)
          setTickers([...tickers, ...(results || [])])
        })
    }
  }, [nextUrl])

  React.useEffect(() => {
    if (tickers && tickers.length > 0) {
      setColumns(
        Object.keys(tickers[0]).map((key) => ({
          field: camelCase(key),
          headerName: convertToCapitalCase(key),
          width: Math.max(
            key.length * 14,
            (tickers[0] as any)[key]?.toString()?.length * 10 || 0
          ),
          minWidth: 150,
        }))
      )

      setRows(tickers)
    }
  }, [tickers])

  return (
    <>
      <Head>
        <title>Tickers - Poligon.io</title>
      </Head>

      <main className="p-16 h-full">
        <div className="w-full h-full">
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.ticker}
            pageSize={100}
            rowsPerPageOptions={[100]}
          />
        </div>
      </main>
    </>
  )
}

export default PolygonIoTickers
