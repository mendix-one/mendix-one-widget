import { useState } from 'react'
import { Outlet } from 'react-router'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AppLogo from './/AppLogo'
import AppLeftBar from './/AppLeftNav'
import AppUserInfo from './/AppUserInfo'
import AppTopNav from './/AppTopNav'
import AppTasks from './/AppTasks'
import AppNotify from './/AppNotify'

const drawerWidth = 200

function App() {
  const isDesktop = true
  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = (show: boolean) => () => {
    setDrawer(show)
  }

  return (
    <>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, px: 2, backgroundColor: 'common.white' }}
      >
        <Toolbar variant="dense" disableGutters={true}>
          <Box sx={{ flexGrow: 0, width: isDesktop ? `${drawerWidth}px` : 'auto', maxHeight: '100%' }}>
            <Box
              sx={{
                width: '100%',
                maxHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ flexGrow: 1, maxHeight: '100%' }}>
                <AppLogo />
              </Box>
              {isDesktop ? (
                <Box sx={{ flexGrow: 0, maxHeight: '100%' }}>
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    aria-label="menu"
                    onClick={toggleDrawer(!drawer)}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, maxHeight: '100%' }}>
            <AppTopNav />
          </Box>
          <Box sx={{ flexGrow: 0, maxHeight: '100%' }}>
            <Stack direction="row" spacing={1}>
              <Stack>
                <AppTasks />
              </Stack>
              <Stack>
                <AppNotify />
              </Stack>
              <Stack>
                <AppUserInfo />
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" disableGutters={true} />
      {isDesktop ? (
        <Drawer
          open={drawer}
          variant={drawer ? `permanent` : 'temporary'}
          hideBackdrop={true}
          color="transparent"
          sx={{
            width: drawerWidth,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
              background: 'transparent',
              border: 'none',
            },
            backgroundColor: 'common.grey',
            border: 'none',
          }}
        >
          <Toolbar variant="dense" disableGutters={true} />
          <Box sx={{ px: 1, overflowX: 'hidden', overflowY: 'auto' }}>
            <AppLeftBar />
          </Box>
        </Drawer>
      ) : (
        <></>
      )}
      <Box
        sx={{
          display: { xs: 'block', sm: 'block', md: 'block', lg: 'flex' },
          width: '100%',
          height: 'auto',
          minHeight: 'calc(100% - 48px)',
          backgroundColor: 'common.grey',
        }}
      >
        {isDesktop ? (
          <Box sx={{ flexGrow: 0, height: 'auto', minHeight: '100%' }}>
            <Collapse orientation="horizontal" in={drawer} timeout={100}>
              <Box sx={{ width: `${drawerWidth}px`, height: 'calc(100vh - 48px)' }}>&nbsp;</Box>
            </Collapse>
          </Box>
        ) : (
          <></>
        )}
        <Box
          sx={{
            p: 2,
            flexGrow: 1,
            height: 'auto',
            minHeight: '100%',
          }}
        >
          <Box sx={{ with: '100%', height: 'auto', minHeight: '100%' }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default App
