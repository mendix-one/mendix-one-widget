import { createContext } from 'react'
import type { MasterTableData } from '../MasterTableTypings'

export type MasterTableContextData = {
  title: string
  // rawItems: [],
  // flatData: MasterTableData[],
  // hashingTable?: {
  //   key: number
  //   index: number
  // }
  onReload: () => void
  onCreateNew: () => void
  onItemAction: (action: string, item: MasterTableData) => void
  onBulkAction: (action: string, selection: MasterTableData[]) => void
  onExportData: (action: string, selection: MasterTableData[]) => void
  onPrintOutTable: (action: string, selection: MasterTableData[]) => void
}

const MasterTableContext = createContext({} as MasterTableContextData)
export default MasterTableContext
