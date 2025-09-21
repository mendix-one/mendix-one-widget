import AmzWebPageMain from './components/AmzWebPageMain'

import { AmzWebPageContainerProps } from '../typings/AmzWebPageProps'

import './styles/AmzWebPage.scss'

export function AmzWebPage(props: AmzWebPageContainerProps) {
  console.info(props.name)
  return <AmzWebPageMain />
}
