import { useMemo } from 'react'
import { ValueStatus } from 'mendix'
import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import MyThem from './theme'
import Utils from './utils'

import { AmzTopLogoContainerProps } from '../typings/AmzTopLogoProps'

import AmzTopLogoMain from './main/AmzTopLogoMain'

export function AmzTopLogo(props: AmzTopLogoContainerProps) {
  const theme = useMemo((): Theme => {
    const options = Utils.parseJsonStringSlient(props.optThemeTokens?.value)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...MyThem.tokens, ...options } as any)
  }, [props.optThemeTokens])

  const image = useMemo(() => {
    if (props.pptLogo?.status === ValueStatus.Available) {
      return props.pptLogo?.value?.uri || undefined
    }

    return undefined
  }, [props.pptLogo])

  const text = useMemo((): string => {
    return props.pptText?.value || 'Your Brand'
  }, [props.pptText])

  const title = useMemo((): string => {
    return props.pptTitle?.value || 'Your Brand'
  }, [props.pptTitle])

  const onClick = () => {
    if (props.actOnClick?.canExecute) {
      props.actOnClick?.execute()
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AmzTopLogoMain image={image} text={text} title={title} onClick={onClick} />
    </ThemeProvider>
  )
}
