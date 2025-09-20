import { AmzWebAppPreviewProps } from '../typings/AmzWebAppProps'

export function preview(props: AmzWebAppPreviewProps) {
  return (
    <div className="amz-web-app-preview">
      <div className="amz-top-bar d-flex justify-content-between align-items-center">
        <div className="left-box flex-grow-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="brand-logo">
              <props.logo.renderer caption="Brand Logo">
                <div className="amz-widget-placeholder"></div>
              </props.logo.renderer>
            </div>
            <div className="sidebar-toogle">
              <button type="button" className="btn btn-outline-primary border-0">
                <i className="mdi mdi-menu"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="middile-box flex-grow-1">asdasdsdas</div>
        <div className="right-box flex-grow-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="menu-toogle-item">
              <props.notify.renderer caption="Notify">
                <div className="amz-widget-placeholder"></div>
              </props.notify.renderer>
            </div>
            <div className="menu-toogle-item">
              <props.tasks.renderer caption="Tasks">
                <div className="amz-widget-placeholder"></div>
              </props.tasks.renderer>
            </div>
            <div className="menu-toogle-item">
              <props.user.renderer caption="User">
                <div className="amz-widget-placeholder"></div>
              </props.user.renderer>
            </div>
          </div>
        </div>
      </div>
      <div className="amz-body">
        <div className="d-flex justify-content-between align-items-start">
          <div className="amz-left-sidebar lex-grow-0">
            <props.sidebar.renderer caption="Left Side Bar">
              <div className="amz-widget-placeholder"></div>
            </props.sidebar.renderer>
          </div>
          <div className="amz-main-content lex-grow-1 p-4">
            <props.content.renderer caption="Main Content">
              <div className="amz-widget-placeholder"></div>
            </props.content.renderer>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzWebAppPreview.scss')
}
