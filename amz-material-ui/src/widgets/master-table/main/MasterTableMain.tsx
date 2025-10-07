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

import MasterTableComposer from './helper/MasterTableComposer'
import type { MasterTableContextData } from './context/MasterTableContext'

export type MasterTableMainProps = {
  items: MasterTablePropItem[]
  columns: MasterTablePropColumn[]
  options: MasterTablePropOptions
  onAction: MasterTablePropAction
  onBuilkAction: MasterTablePropBuilkAction
}

export default function MasterTableMain(props: MasterTableMainProps) {
  const onReload = () => {
    console.log(`onReload`)
  }

  const onCreateNew = () => {
    console.log(`onCreateNew`)
  }

  const onItemAction = (action: string, item: MasterTableData) => {
    console.log(`onItemAction: ${action} - ${item}`)
  }

  const onBulkAction = (action: string, selection: MasterTableData[]) => {
    console.log(`onBulkAction: ${action} - ${selection}`)
  }

  const onExportData = (action: string, selection: MasterTableData[]) => {
    console.log(`onExportData: ${action} - ${selection}`)
  }

  const onPrintOutTable = (action: string, selection: MasterTableData[]) => {
    console.log(`onPrintOutTable: ${action} - ${selection}`)
  }

  const context = {
    title: "Sample Master Table",
    onReload,
    onCreateNew,
    onItemAction,
    onBulkAction,
    onExportData,
    onPrintOutTable,
  } as MasterTableContextData

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
        Cell: ({ cell }) =>
          cell.getValue<number>()?.toLocaleString?.('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
      },
      {
        accessorKey: 'stockQuantity',
        header: 'Sotck Quantity',
        Cell: ({ cell }) =>
          cell.getValue<number>()?.toLocaleString?.('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }),
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
    return MasterTableComposer.init(context) as MRT_TableOptions<MasterTableData>
  }, [])

  const table = useMaterialReactTable({
    ...options,
    columns,
    data,
  })

  return (
    <MasterTableContextProvider
      title="Sample Master Table"
      onReload={onReload}
      onCreateNew={onCreateNew}
      onItemAction={onItemAction}
      onBulkAction={onBulkAction}
      onExportData={onExportData}
      onPrintOutTable={onPrintOutTable}
    >
      <MaterialReactTable table={table} />
    </MasterTableContextProvider>
  )
}
