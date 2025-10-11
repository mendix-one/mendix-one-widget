import { AmzTopNotifyPreviewProps } from '../typings/AmzTopNotifyProps'

export function preview(_props: AmzTopNotifyPreviewProps) {
  return (
    <div className='amz-top-notify-preview'>
      <div className='amz-web-wrapper'>U</div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzTopNotifyPreview.scss')
}
