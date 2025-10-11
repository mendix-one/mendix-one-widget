import { useEffect, useMemo } from 'react'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { AmzWebAppContainerProps } from '../typings/AmzWebAppProps'

import Utils from './utils'
import MyThem from './theme'
import AppContextProvider from './context/AppContextProvider'

import AmzWebAppMain from './main/AmzWebAppMain'

export function AmzWebApp(props: AmzWebAppContainerProps) {
  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  useEffect(() => {
    // On enter page
    if (props.actEnterPage?.canExecute) {
      props.actEnterPage?.execute({ params: '{}' })
    }

    // On exit page
    return () => {
      if (props.actExitPage?.canExecute) {
        props.actExitPage?.execute({ params: '{}' })
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <AmzWebAppMain
          logo={props.wdgBrandLogo}
          tasks={props.wdgTopTasks}
          notify={props.wdgTopNotify}
          userMenu={props.wdgUserMenu}
          navigation={props.wdgPageNavBar}
          aiChatBox={props.wdgAIChatBox}
        >
          {props.wdgMainContent}
        </AmzWebAppMain>
      </AppContextProvider>
    </ThemeProvider>
  )
}
