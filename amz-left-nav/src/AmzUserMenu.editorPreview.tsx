import { AmzUserMenuPreviewProps } from '../typings/AmzUserMenuProps'

export function preview(_props: AmzUserMenuPreviewProps) {
  return (
    <div className='amz-user-menu-preview'>
      <div className='amz-avatar-preview'>U</div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzUserMenuPreview.scss')
}
