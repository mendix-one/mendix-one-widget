import { type PropsWithChildren } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'

import type { AppContextData } from './AppContext'
import AppContext from './AppContext'

export default function MyContextProvider({ auth, children }: PropsWithChildren<AppContextData>) {
  return (
    <AppContext.Provider value={{ auth } as AppContextData}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>
    </AppContext.Provider>
  )
}
