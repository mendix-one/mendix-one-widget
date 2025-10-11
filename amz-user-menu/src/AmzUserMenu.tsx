import { useMemo } from 'react'
import { ValueStatus } from 'mendix'

import { AmzUserMenuContainerProps } from '../typings/AmzUserMenuProps'

import AppUserMenu from './main/AppUserMenu'

export function AmzUserMenu(props: AmzUserMenuContainerProps) {
  const avatar = useMemo(() => {
    if (props.pptAvatar?.status === ValueStatus.Available) {
      return props.pptAvatar?.value?.uri || undefined
    }

    return undefined
  }, [props.pptAvatar])

  const username = useMemo((): string => {
    return props.pptDisplayName?.value || ''
  }, [props.pptDisplayName])

  const userRoles = useMemo((): string => {
    return props.pptUserRoles?.value || ''
  }, [props.pptUserRoles])

  const onChangeLanuage = (): void => {
    if (props.actChangeLanuage?.canExecute) {
      props.actChangeLanuage?.execute()
    }
  }

  const onShowProfile = (): void => {
    if (props.actShowProfile?.canExecute) {
      props.actShowProfile?.execute()
    }
  }

  const onChangePassword = (): void => {
    if (props.actChangePassword?.canExecute) {
      props.actChangePassword?.execute()
    }
  }

  const onCustomSettings = (): void => {
    if (props.actCustomSettings?.canExecute) {
      props.actCustomSettings?.execute()
    }
  }

  const onLogout = (): void => {
    if (props.actLogout?.canExecute) {
      props.actLogout?.execute()
    }
  }

  const txtLanguage = useMemo((): string => {
    return props.txtLanguage?.value || 'Language'
  }, [props.txtLanguage])
  const txtAccountProfile = useMemo((): string => {
    return props.txtAccountProfile?.value || 'Account Profile'
  }, [props.txtAccountProfile])
  const txtChangePassword = useMemo((): string => {
    return props.txtChangePassword?.value || 'Change Password'
  }, [props.txtChangePassword])
  const txtCustomSettings = useMemo((): string => {
    return props.txtCustomSettings?.value || 'Custom Settings'
  }, [props.txtCustomSettings])
  const txtLogout = useMemo((): string => {
    return props.txtLogout?.value || 'Logout'
  }, [props.txtLogout])

  return (
    <AppUserMenu
      avatar={avatar}
      username={username}
      userRoles={userRoles}
      onChangeLanuage={onChangeLanuage}
      onShowProfile={onShowProfile}
      onChangePassword={onChangePassword}
      onCustomSettings={onCustomSettings}
      onLogout={onLogout}
      txtLanguage={txtLanguage}
      txtAccountProfile={txtAccountProfile}
      txtChangePassword={txtChangePassword}
      txtCustomSettings={txtCustomSettings}
      txtLogout={txtLogout}
    />
  )
}
