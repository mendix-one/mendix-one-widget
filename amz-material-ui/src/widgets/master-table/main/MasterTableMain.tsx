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

import MasterTableDrawer from './helper/MasterTableDrawer'
import MasterTableComposer from './helper/MasterTableComposer'
import * as MasterTableFunctional from './functional'
import type { MasterTableContextData } from './context/MasterTableContext'

export type MasterTableMainProps = {
  items: MasterTablePropItem[]
  columns: MasterTablePropColumn[]
  options: MasterTablePropOptions
  onAction: MasterTablePropAction
  onBuilkAction: MasterTablePropBuilkAction
}

const displayBuiltInColumnIds = [
  'mrt-row-pin',
  'mrt-row-drag',
  'mrt-row-actions',
  'mrt-row-expand',
  'mrt-row-select',
  'mrt-row-numbers',
  'mrt-row-spacer',
]

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
    const columns = table.getAllColumns()
    MasterTableFunctional.exportDataToCSV(
      context.title,
      columns.filter((x) => !displayBuiltInColumnIds.includes(x.id)),
      data,
    )
  }

  const onPrintOutTable = (action: string, selection: MasterTableData[]) => {
    const columns = table.getAllColumns()
    MasterTableFunctional.printOutTableData(
      context.title,
      columns.filter((x) => !displayBuiltInColumnIds.includes(x.id)),
      data,
    )
  }

  const context = useMemo<MasterTableContextData>(() => {
    return {
      title: 'Sample Master Table',
      onReload,
      onCreateNew,
      onItemAction,
      onBulkAction,
      onExportData,
      onPrintOutTable,
    } as MasterTableContextData
  }, [])

  const options = useMemo<MRT_TableOptions<MasterTableData>>(() => {
    return MasterTableComposer.init(context) as MRT_TableOptions<MasterTableData>
  }, [context])

  const columns = useMemo<MRT_ColumnDef<MasterTableData>[]>(() => {
    return MasterTableDrawer.columns(context)
  }, [context])

  const data = useMemo<MasterTableData[]>(() => {
    return props.items as MasterTableData[]
  }, [props.items])

  const table = useMaterialReactTable({
    ...options,
    columns,
    data,
  })

  return (
    <MasterTableContextProvider value={context}>
      <MaterialReactTable table={table} />
    </MasterTableContextProvider>
  )
}
