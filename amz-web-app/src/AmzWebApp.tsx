import AmzWebAppLayout from './components/AmzWebAppLayout'

import { AmzWebAppContainerProps } from '../typings/AmzWebAppProps'

import './styles/AmzWebApp.scss'

export function AmzWebApp(props: AmzWebAppContainerProps) {
  if (props.init?.canExecute) {
    const data = props.init?.execute()
  }
  return (
    <AmzWebAppLayout
      logo={props.logo}
      notify={props.notify}
      tasks={props.tasks}
      user={props.user}
      sidebar={props.sidebar}
      content={props.content}
    />
  )
}
