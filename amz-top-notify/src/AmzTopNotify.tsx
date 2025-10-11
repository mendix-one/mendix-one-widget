import { useMemo } from 'react'

import { AmzTopNotifyContainerProps } from '../typings/AmzTopNotifyProps'

import AppNotify from './main/AppNotify'

export function AmzTopNotify(props: AmzTopNotifyContainerProps) {
  const txtReadNotify = useMemo((): string => {
    return props.txtReadNotify?.value || 'Read'
  }, [props.txtReadNotify])
  const txtMarkAllAsRead = useMemo((): string => {
    return props.txtMarkAllAsRead?.value || 'Mark All As Read'
  }, [props.txtMarkAllAsRead])

  return <AppNotify txtReadNotify={txtReadNotify} txtMarkAllAsRead={txtMarkAllAsRead} />
}
