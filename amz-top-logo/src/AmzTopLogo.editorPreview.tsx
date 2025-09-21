import AmzTopLogoMain from './components/AmzTopLogoMain'
import { AmzTopLogoPreviewProps } from '../typings/AmzTopLogoProps'

export function preview(props: AmzTopLogoPreviewProps) {
  console.info(props.class)
  return <AmzTopLogoMain />
}

export function getPreviewCss(): string {
  return require('./styles/AmzTopLogo.scss')
}
