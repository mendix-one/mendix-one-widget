import { createContext } from 'react'
import type { NavItem } from './AppNavigation'

export type AppContextData = {
  auth?: {
    username: string
    role: string
  }
  naviation?: NavItem[]
}

const MyContext = createContext({} as AppContextData)
export default MyContext
