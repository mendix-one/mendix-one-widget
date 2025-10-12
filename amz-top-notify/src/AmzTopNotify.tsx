import { useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import MyThem from './theme'
import Utils from './utils'

import { AmzTopNotifyContainerProps } from '../typings/AmzTopNotifyProps'

import AppNotify from './main/AppNotify'

export function AmzTopNotify(props: AmzTopNotifyContainerProps) {
  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  const txtReadNotify = useMemo((): string => {
    return props.txtReadNotify?.value || 'Read'
  }, [props.txtReadNotify])
  const txtMarkAllAsRead = useMemo((): string => {
    return props.txtMarkAllAsRead?.value || 'Mark All As Read'
  }, [props.txtMarkAllAsRead])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppNotify txtReadNotify={txtReadNotify} txtMarkAllAsRead={txtMarkAllAsRead} />
    </ThemeProvider>
  )
}
