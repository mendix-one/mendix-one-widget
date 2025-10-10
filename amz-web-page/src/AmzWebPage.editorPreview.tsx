import { AmzWebPagePreviewProps } from '../typings/AmzWebPageProps'

export function preview(props: AmzWebPagePreviewProps) {
  return (
    <div className="amz-web-page-preview" style={{}}>
      <div className="amz-web-topbar" style={{}}>
        <div className="amz-web-wrapper" style={{}}>
          <div className="amz-web-brand" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <div className="amz-web-logo" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.logo.renderer caption="Logo">
                    <div />
                  </props.logo.renderer>
                </div>
              </div>
              <div className="amz-web-toggle" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  Toggle
                </div>
              </div>
            </div>
          </div>
          <div className="amz-web-nav" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              &nbsp;
            </div>
          </div>
          <div className="amz-web-menu" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.tasks.renderer caption="Tasks">
                    <div />
                  </props.tasks.renderer>
                </div>
              </div>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.notify.renderer caption="Notify">
                    <div />
                  </props.notify.renderer>
                </div>
              </div>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.user.renderer caption="User">
                    <div />
                  </props.user.renderer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="amz-web-body" style={{}}>
        <div className="amz-web-wrapper" style={{}}>
          <div className="amz-web-sidebar" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <props.sidebar.renderer caption="Sidebar">
                <div />
              </props.sidebar.renderer>
            </div>
          </div>
          <div className="amz-web-content" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <props.content.renderer caption="Content">
                <div />
              </props.content.renderer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzWebPagePreview.scss')
}
