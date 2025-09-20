import { ReactElement, createElement } from 'react'
import AmzWebAppLayout from './components/AmzWebAppLayout'
import { AmzWebAppPreviewProps } from '../typings/AmzWebAppProps'

export function preview(props: AmzWebAppPreviewProps): ReactElement {
  console.info(props.class)
  return <AmzWebAppLayout />
}

export function getPreviewCss(): string {
  return require('./styles/AmzWebApp.scss')
}
