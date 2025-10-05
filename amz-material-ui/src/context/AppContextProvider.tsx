import { type PropsWithChildren } from 'react'

import type { AppContextData } from './AppContext'
import AppContext from './AppContext'

export default function MyContextProvider({ auth, children }: PropsWithChildren<AppContextData>) {
  return (
    <AppContext.Provider value={{ auth } as AppContextData}>
      {children}
    </AppContext.Provider>
  )
}
