import { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Badge from '@mui/material/Badge'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'

import AppLogo from './AppLogo'
import AppTasks from './AppTasks'
import AppNotify from './AppNotify'
import AppUserMenu from './AppUserMenu'

import MenuIcon from '@mui/icons-material/Menu'
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined'

import AppLeftNav from './AppLeftNav'
import AIChatBot from '../aibot/AIChatBot'

const cfxSideBarLeftWidth = 220
const cfxSideBarRightWidth = 320

function App() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [isShowingSidebarLeft, setIsShowingSidebarLeft] = useState(false)
  const [isShowingSidebarRight, setIsShowingSidebarRight] = useState(false)

  const [isFixiedSidebarLeft, setIsFixiedSidebarLeft] = useState(false)
  const [isFixiedSidebarRight, setIsFixiedSidebarRight] = useState(false)

  useEffect(() => {
    if (!isShowingSidebarLeft) {
      setIsFixiedSidebarLeft(false)
    } else {
      setTimeout(() => {
        setIsFixiedSidebarLeft(true)
      }, 100)
    }
  }, [isShowingSidebarLeft])

  useEffect(() => {
    if (!isShowingSidebarRight) {
      setIsFixiedSidebarRight(false)
    } else {
      setTimeout(() => {
        setIsFixiedSidebarRight(true)
      }, 100)
    }
  }, [isShowingSidebarRight])

  return (
    <Box sx={{ width: '100%', height: '100%', minWidth: '', minHeight: '100%', maxWidth: '100%', maxHeight: 'auto' }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, px: 2, backgroundColor: 'common.white', boxShadow: 2 }}
      >
        <Toolbar variant="dense" disableGutters={true}>
          <Box sx={{ flexGrow: 0, width: isDesktop ? `${cfxSideBarLeftWidth}px` : 'auto', maxHeight: '100%' }}>
            <Box
              sx={{
                width: '100%',
                maxHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ flexGrow: 1, maxHeight: '100%', pr: 4 }}>
                <AppLogo />
              </Box>
              <Box sx={{ flexGrow: 0, maxHeight: '100%' }}>
                <Tooltip title="Navigation">
                  <IconButton
                    size="large"
                    edge="start"
                    color="primary"
                    tabIndex={1001}
                    onClick={() => {
                      setIsShowingSidebarLeft(!isShowingSidebarLeft)
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Box>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, maxHeight: '100%' }}></Box>
          <Box sx={{ flexGrow: 0, maxHeight: '100%' }}>
            <Stack direction="row" spacing={1}>
              <Stack>
                <AppTasks />
              </Stack>
              <Stack>
                <AppNotify />
              </Stack>
              <Stack>
                <Box>
                  <Tooltip title="Assistant Bot">
                    <IconButton
                      size="large"
                      color="primary"
                      tabIndex={1014}
                      onClick={() => {
                        setIsShowingSidebarRight(!isShowingSidebarRight)
                      }}
                    >
                      <Badge badgeContent={4} color="secondary" variant="dot">
                        <SmartToyOutlinedIcon />
                      </Badge>
                    </IconButton>
                  </Tooltip>
                </Box>
              </Stack>
              <Stack>
                <AppUserMenu />
              </Stack>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" disableGutters={true} />
      <Box
        sx={{
          with: '100%',
          height: 'calc(100% - 48px)',
          minWidth: '100%',
          minHeight: 'calc(100% - 48px)',
          maxWidth: '100%',
          maxHeight: 'auto',
        }}
      >
        <Box
          sx={{
            with: '100%',
            height: '100%',
            minWidth: '100%',
            minHeight: '100%',
            maxWidth: '100%',
            maxHeight: 'auto',
            p: 2,
          }}
        >
          <Outlet />
        </Box>
      </Box>
      <Drawer
        anchor="left"
        variant="temporary"
        open={isShowingSidebarLeft}
        onClose={() => {
          setIsShowingSidebarLeft(false)
        }}
        sx={{
          '& > .MuiPaper-root': { boxShadow: 3, border: 0 },
          '& > .MuiBackdrop-root': { opacity: '0.25 !important' },
        }}
      >
        <Toolbar variant="dense" disableGutters={true} />
        <Box sx={{ width: cfxSideBarLeftWidth }}>
          <AppLeftNav />
        </Box>
      </Drawer>
      <Drawer
        anchor="right"
        // variant={isFixiedSidebarRight ? 'permanent' : 'persistent'}
        variant="persistent"
        open={isShowingSidebarRight}
        hideBackdrop={false}
        transitionDuration={100}
        onClose={() => {
          setIsShowingSidebarRight(false)
        }}
        sx={{
          '& > .MuiPaper-root': { boxShadow: 3, border: 0 },
          '& > .MuiBackdrop-root': { opacity: '0.25 !important' },
        }}
      >
        <Box sx={{ width: cfxSideBarRightWidth, height: '100%' }}>
          <Box>
            <Toolbar variant="dense" disableGutters={true} />
          </Box>
          <Box sx={{ width: '100%', height: 'calc(100% - 48px)' }}>
            <AIChatBot />
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default App
