import { useMemo } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import MyThem from './theme'
import Utils from './utils'

import { AmzChatBoxContainerProps } from '../typings/AmzChatBoxProps'

import AIChatBot from './main/AIChatBot'

export function AmzChatBox(props: AmzChatBoxContainerProps) {
  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  const onClose = () => {

  }

  const txtInputPlaceholder = useMemo((): string => {
    return props.txtInputPlaceholder?.value || 'Check'
  }, [props.txtInputPlaceholder])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AIChatBot onClose={onClose} txtInputPlaceholder={txtInputPlaceholder} />
    </ThemeProvider>
  )
}
