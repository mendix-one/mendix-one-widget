import { AmzWebAppPreviewProps } from '../typings/AmzWebAppProps'

export function preview(props: AmzWebAppPreviewProps) {
  return (
    <div className="amz-web-app-preview">
      <div className="amz-top-bar shadow border-bottom px-2 d-flex justify-content-between align-items-center">
        <div className="left-box pe-2 flex-grow-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="brand-logo flex-grow-1">
              <props.logo.renderer caption="Brand Logo">
                <div className="amz-widget-placeholder"></div>
              </props.logo.renderer>
            </div>
            <div className="sidebar-toogle flex-grow-0 h-100 amz-center-center">
              <i className="mdi mdi-menu text-primary fs-4"></i>
            </div>
          </div>
        </div>
        <div className="middile-box flex-grow-1 h-100 azm-center-start">
          <props.navbar.renderer caption="Naviation Bar">
            <div />
          </props.navbar.renderer>
        </div>
        <div className="right-box flex-grow-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="menu-toogle-item h-100 amz-center-center">
              <props.notify.renderer caption="Notify">
                <div className="amz-widget-placeholder"></div>
              </props.notify.renderer>
            </div>
            <div className="menu-toogle-item h-100 amz-center-center">
              <props.tasks.renderer caption="Tasks">
                <div className="amz-widget-placeholder"></div>
              </props.tasks.renderer>
            </div>
            <div className="menu-toogle-item h-100 amz-center-center">
              <props.user.renderer caption="User">
                <div className="amz-widget-placeholder"></div>
              </props.user.renderer>
            </div>
          </div>
        </div>
      </div>
      <div className="amz-body">
        <div className="d-flex justify-content-between align-items-start">
          <div className="amz-left-sidebar flex-grow-0 p-2 border-end">
            <props.sidebar.renderer caption="Left Side Bar">
              <div className="amz-widget-placeholder"></div>
            </props.sidebar.renderer>
          </div>
          <div className="amz-main-content flex-grow-1 p-2">
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
