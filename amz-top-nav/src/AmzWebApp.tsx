import { ReactElement, createElement } from 'react'
import AmzWebAppLayout from './components/AmzWebAppLayout'

import { AmzWebAppContainerProps } from '../typings/AmzWebAppProps'

import './styles/AmzWebApp.scss'

export function AmzWebApp(props: AmzWebAppContainerProps): ReactElement {
  console.info(props.name)
  return <AmzWebAppLayout />
}
