import { useMemo } from 'react'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { AmzWebAppContainerProps } from '../typings/AmzWebAppProps'

import MyThem from './theme'
import AppContextProvider from './context/AppContextProvider'

import AmzWebAppMain from './main/AmzWebAppMain'

export function AmzWebApp(props: AmzWebAppContainerProps) {
  console.info(props.name)
  const theme = useMemo((): Theme => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme(MyThem.tokens as any)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <AmzWebAppMain>aa</AmzWebAppMain>
      </AppContextProvider>
    </ThemeProvider>
  )
}
