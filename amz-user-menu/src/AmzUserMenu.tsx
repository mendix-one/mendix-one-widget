import AmzUserMenuMain from './components/AmzUserMenuMain'

import { AmzUserMenuContainerProps } from '../typings/AmzUserMenuProps'

export function AmzUserMenu(props: AmzUserMenuContainerProps) {
  console.info(props.name)
  return <AmzUserMenuMain />
}
