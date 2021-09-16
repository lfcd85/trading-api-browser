import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Position } from '@master-chief/alpaca'

import { useAlpacaApi } from '~/hooks/useAlpacaApi'
import { convertSnakeCaseToCapitalizedCase } from '~/utils'
import { DataGrid, GridColDef, GridRowData } from '@mui/x-data-grid'

const AlpacaPositions: NextPage = () => {
  const { alpacaApi } = useAlpacaApi()
  const [positions, setPositions] = React.useState<Position[]>()
  const [columns, setColumns] = React.useState<GridColDef[]>([])
  const [rows, setRows] = React.useState<GridRowData[]>([])

  React.useEffect(() => {
    if (!positions) {
      alpacaApi.getPositions().then((response) => setPositions(response))
    }
  }, [alpacaApi, positions])

  React.useEffect(() => {
    if (positions && positions.length > 0) {
      setColumns(
        Object.keys(positions[0])
          .filter((key) => key !== 'raw')
          .map((key) => ({
            field: key,
            headerName: convertSnakeCaseToCapitalizedCase(key),
            width: Math.max(
              key.length * 14,
              (positions[0] as any)[key].toString().length * 10
            ),
            minWidth: 150,
          }))
      )

      setRows(
        positions.map((position) => {
          const { raw, ...row } = position
          return row
        })
      )
    }
  }, [positions])

  return (
    <>
      <Head>
        <title>Account - Alpaca</title>
      </Head>

      <main className="p-16 h-full">
        <div className="w-full h-full">
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={(row) => row.asset_id}
            pageSize={20}
            rowsPerPageOptions={[20]}
          />
        </div>
      </main>
    </>
  )
}

export default AlpacaPositions
