import { useMemo } from 'react'
import { ValueStatus } from 'mendix'
import AmzTopLogoMain from './main/AmzTopLogoMain'
import { AmzTopLogoContainerProps } from '../typings/AmzTopLogoProps'

export function AmzTopLogo(props: AmzTopLogoContainerProps) {
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

  return <AmzTopLogoMain image={image} text={text} title={title} onClick={onClick} />
}
