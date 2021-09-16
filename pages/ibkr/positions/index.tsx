import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useInteractiveBrokersWebApi } from '~/hooks/useInteractiveBrokersWebApi'
import { convertToCapitalCase } from '~/utils'
import { DataGrid, GridColDef, GridRowData } from '@mui/x-data-grid'

const InteractiveBrokersPositions: NextPage = () => {
  const { portfolioApi } = useInteractiveBrokersWebApi()
  const [positions, setPositions] = React.useState<object[]>()
  const [columns, setColumns] = React.useState<GridColDef[]>([])
  const [rows, setRows] = React.useState<GridRowData[]>([])

  React.useEffect(() => {
    if (!positions) {
      // TODO: enable to select the account and the page
      portfolioApi
        .portfolioAccountsGet()
        .then((accounts) => accounts[0].accountId || '')
        .then((accountId) =>
          portfolioApi.portfolioAccountIdPositionsPageIdGet({
            accountId,
            pageId: (0).toString(),
          })
        )
        .then((response) => setPositions(response))
    }
  }, [portfolioApi, positions])

  React.useEffect(() => {
    if (positions && positions.length > 0) {
      setColumns(
        Object.keys(positions[0]).map((key) => ({
          field: key,
          headerName: convertToCapitalCase(key),
          width: Math.max(
            key.length * 14,
            (positions[0] as any)[key]?.toString()?.length * 10 || 0
          ),
          minWidth: 150,
        }))
      )

      setRows(positions)
    }
  }, [positions])

  return (
    <>
      <Head>
        <title>Account - InteractiveBrokers</title>
      </Head>

      <main className="p-16 h-full">
        <div className="w-full h-full">
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.conid}
            pageSize={20}
            rowsPerPageOptions={[20]}
          />
        </div>
      </main>
    </>
  )
}

export default InteractiveBrokersPositions
