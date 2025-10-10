import { useMemo } from 'react'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { AmzWebPageContainerProps } from '../typings/AmzWebPageProps'

import MyThem from './theme'
import AppContextProvider from './context/AppContextProvider'

import AmzWebPageMain from './main/AmzWebPageMain'

export function AmzWebPage(props: AmzWebPageContainerProps) {
  console.info(props.name)
  const theme = useMemo((): Theme => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme(MyThem.tokens as any)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <AmzWebPageMain>aa</AmzWebPageMain>
      </AppContextProvider>
    </ThemeProvider>
  )
}
