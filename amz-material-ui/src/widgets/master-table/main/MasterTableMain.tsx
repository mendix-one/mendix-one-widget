import { useMemo } from 'react'
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
  type MRT_RowData,
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

export default function MasterTableMain(props: MasterTableMainProps) {
  const data = useMemo<MasterTableData[]>(() => {
    return props.items as MasterTableData[]
  }, [props.items])

  const columns = useMemo<MRT_ColumnDef<MasterTableData>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
      },
      {
        accessorKey: 'name',
        header: 'Name',
      },
      {
        accessorKey: 'category',
        header: 'Category',
      },
      {
        accessorKey: 'type',
        header: 'Type',
      },
      {
        accessorKey: 'brand',
        header: 'Brand',
      },
      {
        accessorKey: 'price',
        header: 'Unit Price',
      },
      {
        accessorKey: 'stockQuantity',
        header: 'Sotck Quantity',
      },
      {
        accessorKey: 'importedDate',
        header: 'Imported Date',
        Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
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
    data,
  })

  return (
    <MasterTableContextProvider>
      <MaterialReactTable table={table} />
    </MasterTableContextProvider>
  )
}
