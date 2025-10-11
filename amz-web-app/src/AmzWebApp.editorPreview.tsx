import { AmzWebAppPreviewProps } from '../typings/AmzWebAppProps'

export function preview(props: AmzWebAppPreviewProps) {
  return (
    <div className="amz-web-app-preview" style={{}}>
      <div className="amz-web-topbar" style={{}}>
        <div className="amz-web-wrapper" style={{}}>
          <div className="amz-web-brand" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <div className="amz-web-logo" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.logo.renderer caption="Logo">
                    <div className="amz-widget-placeholder" />
                  </props.logo.renderer>
                </div>
              </div>
              <div className="amz-web-toggle" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#37474f"
                  >
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                  </svg>
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
                    <div className="amz-widget-placeholder" />
                  </props.tasks.renderer>
                </div>
              </div>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.notify.renderer caption="Notify">
                    <div className="amz-widget-placeholder" />
                  </props.notify.renderer>
                </div>
              </div>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#37474f"
                  >
                    <path d="M160-360q-50 0-85-35t-35-85q0-50 35-85t85-35v-80q0-33 23.5-56.5T240-760h120q0-50 35-85t85-35q50 0 85 35t35 85h120q33 0 56.5 23.5T800-680v80q50 0 85 35t35 85q0 50-35 85t-85 35v160q0 33-23.5 56.5T720-120H240q-33 0-56.5-23.5T160-200v-160Zm200-80q25 0 42.5-17.5T420-500q0-25-17.5-42.5T360-560q-25 0-42.5 17.5T300-500q0 25 17.5 42.5T360-440Zm240 0q25 0 42.5-17.5T660-500q0-25-17.5-42.5T600-560q-25 0-42.5 17.5T540-500q0 25 17.5 42.5T600-440ZM320-280h320v-80H320v80Zm-80 80h480v-480H240v480Zm240-240Z" />
                  </svg>
                </div>
              </div>
              <div className="amz-web-menu-item" style={{}}>
                <div className="amz-web-wrapper" style={{}}>
                  <props.user.renderer caption="User">
                    <div className="amz-widget-placeholder" />
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
                <div className="amz-widget-placeholder" />
              </props.sidebar.renderer>
            </div>
          </div>
          <div className="amz-web-content" style={{}}>
            <div className="amz-web-wrapper" style={{}}>
              <props.content.renderer caption="Content">
                <div className="amz-widget-placeholder" />
              </props.content.renderer>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzWebAppPreview.scss')
}
