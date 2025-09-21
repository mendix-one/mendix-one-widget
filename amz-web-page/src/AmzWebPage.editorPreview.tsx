import { AmzWebPagePreviewProps } from '../typings/AmzWebPageProps'

export function preview(_props: AmzWebPagePreviewProps) {
  return (
    <div className='amz-user-menu-preview'>
      <div className='amz-avatar-preview'>U</div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzWebPagePreview.scss')
}
