import { type PropsWithChildren } from 'react'
import type { AppContextData } from './AppContext'
import MyContext from './AppContext'

export default function MyContextProvider({ auth, children }: PropsWithChildren<AppContextData>) {
  return <MyContext.Provider value={{ auth } as AppContextData}>{children}</MyContext.Provider>
}
