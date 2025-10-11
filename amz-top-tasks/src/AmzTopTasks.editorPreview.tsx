import { AmzTopTasksPreviewProps } from '../typings/AmzTopTasksProps'

export function preview(_props: AmzTopTasksPreviewProps) {
  return (
    <div className='amz-user-menu-preview'>
      <div className='amz-avatar-preview'>U</div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzTopTasksPreview.scss')
}
