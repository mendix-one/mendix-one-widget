import { type PropsWithChildren } from 'react'
import type { AppContextData } from './AppContext'
import AppContext from './AppContext'
import naviation from './AppNavigation'

export default function MyContextProvider({ auth, children }: PropsWithChildren<AppContextData>) {
  return <AppContext.Provider value={{ auth, naviation } as AppContextData}>{children}</AppContext.Provider>
}
