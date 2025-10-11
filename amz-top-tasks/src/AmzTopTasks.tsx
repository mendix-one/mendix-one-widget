import { useMemo } from 'react'
import { AmzTopTasksContainerProps } from '../typings/AmzTopTasksProps'

import AppTasks from './main/AppTasks'

export function AmzTopTasks(props: AmzTopTasksContainerProps) {
  const txtCheck = useMemo((): string => {
    return props.txtCheck?.value || 'Check'
  }, [props.txtCheck])

  return <AppTasks txtCheck={txtCheck} />
}
