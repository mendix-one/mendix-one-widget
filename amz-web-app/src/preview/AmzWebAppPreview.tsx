import { AmzWebAppPreviewProps } from 'typings/AmzWebAppProps'

export default function AmzWebAppPreview(props: AmzWebAppPreviewProps) {
  return (
    <div className="amz-web-app-preview">
      <div className="amz-top-bar">
        <div className="amz-barnd-logo">
          <div className="amz-preview-container">
            <props.logo.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.logo.renderer>
          </div>
        </div>
        <div className="amz-top-notify">
          <div className="amz-preview-container">notify</div>
          <div className="amz-preview-container">
            <props.notify.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.notify.renderer>
          </div>
        </div>
        <div className="amz-top-tasks">
          <div className="amz-preview-container">
            <props.tasks.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.tasks.renderer>
          </div>
        </div>
        <div className="amz-top-user">
          <div className="amz-preview-container">
            <props.user.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.user.renderer>
          </div>
        </div>
      </div>
      <div className="amz-body">
        <div className="amz-left-sidebar">
          <div className="amz-preview-container">
            <props.sidebar.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.sidebar.renderer>
          </div>
        </div>
        <div className="amz-main-content">
          <div className="amz-preview-container">
            <props.content.renderer caption="Place widgets here">
              <div className="amz-widget-placeholder"></div>
            </props.content.renderer>
          </div>
        </div>
      </div>
    </div>
  )
}
