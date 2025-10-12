import { useEffect, useMemo, useRef } from 'react'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import { AmzLoginPageContainerProps } from '../typings/AmzLoginPageProps'

import Utils from './utils'
import MyThem from './theme'
import MyGlobal, { AmzEvent } from './global'
import AppContextProvider from './context/AppContextProvider'

import AmzLoginForm from './main/AmzLoginForm'

export function AmzLoginPage(props: AmzLoginPageContainerProps) {
  const mainElRef = useRef<any>(null)

  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  const handleEvent = (event: AmzEvent) => {
    console.info(event)
    if (event.type === 'HIDE_CHAT_BOX') {
      mainElRef.current?.onCloseChatBox()
    }
  }

  useEffect(() => {
    // On enter page
    if (props.actEnterPage?.canExecute) {
      props.actEnterPage?.execute({ params: '{}' })
    }

    const channel = props.name || 'amzWebApp'
    const unbind = MyGlobal.subscribe(channel, handleEvent)

    // On exit page
    return () => {
      unbind()
      if (props.actExitPage?.canExecute) {
        props.actExitPage?.execute({ params: '{}' })
      }
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <AmzLoginForm
          ref={mainElRef}
          logo={props.wdgBrandLogo}
          tasks={props.wdgTopTasks}
          notify={props.wdgTopNotify}
          userMenu={props.wdgUserMenu}
          navigation={props.wdgPageNavBar}
          aiChatBox={props.wdgAIChatBox}
        >
          {props.wdgMainContent}
        </AmzLoginForm>
      </AppContextProvider>
    </ThemeProvider>
  )
}
