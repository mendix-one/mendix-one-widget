import { createContext } from 'react'

export type MasterTableContextData = {
  hashingTable?: {
    key: number
    index: number
  }
}

const MasterTableContext = createContext({} as MasterTableContextData)
export default MasterTableContext
