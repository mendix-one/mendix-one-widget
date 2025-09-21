import AmzTopLogoMain from './components/AmzTopLogoMain'

import { AmzTopLogoContainerProps } from '../typings/AmzTopLogoProps'

import './styles/AmzTopLogo.scss'

export function AmzTopLogo(props: AmzTopLogoContainerProps) {
  console.info(props.name)
  return <AmzTopLogoMain />
}
