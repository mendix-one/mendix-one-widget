import { AmzLoginPagePreviewProps } from '../typings/AmzLoginPageProps'

export function preview(props: AmzLoginPagePreviewProps) {
  return (
    <div className="amz-web-app-preview">
      <div className="amz-web-topbar">
        <div className="amz-web-wrapper">
          <div className="amz-web-brand">
            <div className="amz-web-wrapper">
              <div className="amz-web-logo">
                <div className="amz-web-wrapper">
                  <props.wdgBrandLogo.renderer caption="Logo">
                    <div className="amz-widget-placeholder" />
                  </props.wdgBrandLogo.renderer>
                </div>
              </div>
              <div className="amz-web-toggle">
                <div className="amz-web-wrapper">
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
          <div className="amz-web-nav">
            <div className="amz-web-wrapper">&nbsp;</div>
          </div>
          <div className="amz-web-menu">
            <div className="amz-web-wrapper">
              <div className="amz-web-menu-item">
                <div className="amz-web-wrapper">
                  <props.wdgTopTasks.renderer caption="Tasks">
                    <div className="amz-widget-placeholder" />
                  </props.wdgTopTasks.renderer>
                </div>
              </div>
              <div className="amz-web-menu-item">
                <div className="amz-web-wrapper">
                  <props.wdgTopNotify.renderer caption="Notify">
                    <div className="amz-widget-placeholder" />
                  </props.wdgTopNotify.renderer>
                </div>
              </div>
              {props.optEnabelAIBot ? (
                <div className="amz-web-menu-item">
                  <div className="amz-web-wrapper">
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
              ) : (
                <></>
              )}
              <div className="amz-web-menu-item">
                <div className="amz-web-wrapper">
                  <props.wdgUserMenu.renderer caption="User">
                    <div className="amz-widget-placeholder" />
                  </props.wdgUserMenu.renderer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="amz-web-body">
        <div className="amz-web-wrapper">
          {props.previewNavigationPanel ? (
            <div className="amz-web-sidebar">
              <div className="amz-web-wrapper">
                <props.wdgPageNavBar.renderer caption="Navigation Bar">
                  <div className="amz-widget-placeholder" />
                </props.wdgPageNavBar.renderer>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="amz-web-content">
            <div className="amz-web-wrapper">
              <props.wdgMainContent.renderer caption="Content">
                <div className="amz-widget-placeholder" />
              </props.wdgMainContent.renderer>
            </div>
          </div>
          {props.optEnabelAIBot && props.previewAIBotPanel ? (
            <div className="amz-web-chatbox">
              <div className="amz-web-wrapper">
                <props.wdgAIChatBox.renderer caption="AI Chat Bot">
                  <div className="amz-widget-placeholder" />
                </props.wdgAIChatBox.renderer>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export function getPreviewCss(): string {
  return require('./styles/AmzLoginPagePreview.scss')
}
