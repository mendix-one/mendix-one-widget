import { useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import MyThem from './theme'
import Utils from './utils'

import { AmzTopTasksContainerProps } from '../typings/AmzTopTasksProps'

import AppTasks from './main/AppTasks'

export function AmzTopTasks(props: AmzTopTasksContainerProps) {
  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  const txtCheck = useMemo((): string => {
    return props.txtCheck?.value || 'Check'
  }, [props.txtCheck])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppTasks txtCheck={txtCheck} />
    </ThemeProvider>
  )
}
