import { useMemo, useRef, useState } from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Stack from '@mui/material/Stack'
import Drawer from '@mui/material/Drawer'
import Collapse from '@mui/material/Collapse'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import AppLogo from './layout/AppLogo'
import AppLeftBar from './layout/AppLeftNav'
import AppUserInfo from './layout/AppUserInfo'
import AppTopNav from './layout/AppTopNav'
import CssBaseline from '@mui/material/CssBaseline'

const drawerWidth = 200

function App() {
  const defaultSettings = useRef({
    spacing: 8,
    typography: {
      fontSize: 14,
      fontFamily: 'Roboto, sans-serif',
      button: {
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 800
      }
    }
  })
  const [customSettings, setCustomSettings] = useState({})

  const theme = useMemo(() => {
    const deafult = defaultSettings.current || {}
    return createTheme({ ...deafult, ...customSettings })
  }, [customSettings])

  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = (show: boolean) => () => {
    setDrawer(show)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="fixed" color="primary" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, px: 2 }}>
        <Toolbar variant="dense" disableGutters={true}>
          <Box sx={{ display: 'flex', width: `${drawerWidth}px` }}>
            <Box sx={{ flexGrow: 1 }}>
              <AppLogo />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(!drawer)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1 }}>
            <AppTopNav />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Stack direction="row" spacing={1}>
              <Box>Item 1</Box>
              <Box>Item 2</Box>
              <Box>
                <AppUserInfo />
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar variant="dense" disableGutters={true} />
      <Drawer
        open={drawer}
        variant={drawer ? `permanent` : 'temporary'}
        hideBackdrop={true}
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
        }}
      >
        <Toolbar variant="dense" disableGutters={true} />
        <Box sx={{ px: 1, overflowX: 'hidden', overflowY: 'auto' }}>
          <AppLeftBar />
        </Box>
      </Drawer>
      <Box sx={{ display: 'flex', width: '100%', height: 'auto', minHeight: 'calc(100vh - 48px)' }}>
        <Box sx={{ flexGrow: 0, height: 'auto', minHeight: 'calc(100vh - 48px)' }}>
          <Collapse orientation="horizontal" in={drawer} timeout={100}>
            <Box sx={{ width: `${drawerWidth}px`, height: 'calc(100vh - 48px)' }}>&nbsp;</Box>
          </Collapse>
        </Box>
        <Box
          sx={{
            flexGrow: 0,
            p: 2,
            height: 'auto',
            minHeight: 'calc(100vh - 48px)'
          }}
        >
          <Box sx={{ with: '100%', height: 'auto', minHeight: 'calc(100vh - 80px)' }}></Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
