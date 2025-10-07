import { type PropsWithChildren } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import type { MasterTableContextData } from './MasterTableContext'
import MasterTableContext from './MasterTableContext'

export default function MasterTableContextProvider({
  value,
  children,
}: PropsWithChildren<{ value: MasterTableContextData }>) {
  return (
    <MasterTableContext.Provider value={value}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
    </MasterTableContext.Provider>
  )
}
