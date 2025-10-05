import { useMemo } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_TableOptions,
} from 'material-react-table'
import MasterTableContextProvider from './context/MasterTableProvider'
import type {
  MasterTableData,
  MasterTablePropAction,
  MasterTablePropBuilkAction,
  MasterTablePropColumn,
  MasterTablePropItem,
  MasterTablePropOptions,
} from './MasterTableTypings'

export type MasterTableMainProps = {
  items: MasterTablePropItem[]
  columns: MasterTablePropColumn[]
  options: MasterTablePropOptions
  onAction: MasterTablePropAction
  onBuilkAction: MasterTablePropBuilkAction
}

export default function MasterTableMain() {
  const columns = useMemo<MRT_ColumnDef<MasterTableData>[]>(
    () => [
      {
        accessorKey: 'name.firstName', //access nested data with dot notation
        header: 'First Name',
        size: 150,
      },
      {
        accessorKey: 'name.lastName',
        header: 'Last Name',
        size: 150,
      },
      {
        accessorKey: 'address', //normal accessorKey
        header: 'Address',
        size: 200,
      },
      {
        accessorKey: 'city',
        header: 'City',
        size: 150,
      },
      {
        accessorKey: 'state',
        header: 'State',
        size: 150,
      },
    ],
    [],
  )

  const options = useMemo<MRT_TableOptions<MasterTableData>>(() => {
    return {} as MRT_TableOptions<MasterTableData>
  }, [])

  const table = useMaterialReactTable({
    ...options,
    columns,
    data: [],
  })

  return (
    <MasterTableContextProvider>
      <MaterialReactTable table={table} />
    </MasterTableContextProvider>
  )
}
