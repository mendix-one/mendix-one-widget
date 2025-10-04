import { createContext } from 'react'

export type AppContextData = {
  auth?: {
    username: string
    role: string
  }
}

const MyContext = createContext({} as AppContextData)
export default MyContext