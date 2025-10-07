import { type PropsWithChildren } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import type { MasterTableContextData } from './MasterTableContext'
import MasterTableContext from './MasterTableContext'

export default function MasterTableContextProvider({
  title,
  onReload,
  onCreateNew,
  onItemAction,
  onBulkAction,
  onExportData,
  onPrintOutTable,
  children,
}: PropsWithChildren<MasterTableContextData>) {
  return (
    <MasterTableContext.Provider
      value={
        { title, onReload, onCreateNew, onItemAction, onBulkAction, onExportData, onPrintOutTable } as MasterTableContextData
      }
    >
      <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
    </MasterTableContext.Provider>
  )
}
