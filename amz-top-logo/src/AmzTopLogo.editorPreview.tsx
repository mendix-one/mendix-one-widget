import { AmzTopLogoPreviewProps } from '../typings/AmzTopLogoProps'

export function preview(props: AmzTopLogoPreviewProps) {
  const text = props.pptText || 'Your Brand'
  const imageUrl = props.pptLogo?.type === 'static' ? props.pptLogo.imageUrl : undefined
  return (
    <div className='amz-top-logo-preview'>
      <div className='amz-web-wrapper'>
        <div className='amz-top-logo-image'>
          <div className='amz-web-wrapper'>
            {imageUrl ? (
              <img src={imageUrl} alt={text} />
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 -960 960 960'
                width='24px'
                fill='#603890'
              >
                <path d='M480-427ZM240-120q-50 0-85-35t-35-85v-240q0-24 9-46t26-39l240-240q17-18 39.5-26.5T480-840q23 0 45 8.5t40 26.5l240 240q17 17 26 39t9 46v240q0 50-35 85t-85 35H240Zm0-80h480q17 0 28.5-11.5T760-240v-240q0-8-3-15t-9-13L595-662l-59 58 144 144v180H280v-180l258-258-30-30q-8-8-15.5-10t-12.5-2q-5 0-12.5 2T452-748L212-508q-6 6-9 13t-3 15v240q0 17 11.5 28.5T240-200Zm120-160h240v-67L480-547 360-427v67Z' />
              </svg>
            )}
          </div>
        </div>
        <div className='amz-top-logo-text'>
          <div className='amz-web-wrapper'>
            <span>{text}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzTopLogoPreview.scss')
}
