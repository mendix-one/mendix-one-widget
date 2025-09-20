import { ReactElement, createElement } from 'react'
import { HelloWorldSample } from './components/HelloWorldSample'

import { AmzWebAppContainerProps } from '../typings/AmzWebAppProps'

import './styles/AmzWebApp.scss'

export function AmzWebApp({ sampleText }: AmzWebAppContainerProps): ReactElement {
  return <HelloWorldSample sampleText={sampleText ? sampleText : 'World'} />
}
