import { useMemo, useRef, useState } from 'react'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
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
import AppMessenger from './layout/AppMessenger'
import AppNotification from './layout/AppNotification'
import PageContent from './example/content/PageContent'

const drawerWidth = 200

function App() {
  const defaultSettings = useRef({
    spacing: 8,
    palette: {
      primary: {
        light: '#8fc6f0',
        main: '#1060b0',
        dark: '#034391',
        contrastText: '#ffffff',
      },
      secondary: {
        light: '#cfc4df',
        main: '#603890',
        dark: '#3b206d',
        contrastText: '#ffffff',
      },
      tertiary: {
        light: '#b2dfdb',
        main: '#00897b',
        dark: '#004d40',
        contrastText: '#ffffff',
      },
      error: {
        light: '#ffcbbc',
        main: '#dd0000',
        dark: '#dd0000',
        contrastText: '#ffffff',
      },
    },
    typography: {
      fontSize: 14,
      fontFamily: 'Roboto, sans-serif',
      button: {
        fontSize: 14,
        textTransform: 'capitalize',
        fontWeight: 600,
      },
    },
  })
  const [customSettings, setCustomSettings] = useState({})

  const theme = useMemo((): Theme => {
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
      <AppBar position='fixed' color='primary' sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, px: 2 }}>
        <Toolbar variant='dense' disableGutters={true}>
          <Box sx={{ display: 'flex', width: `${drawerWidth}px` }}>
            <Box sx={{ flexGrow: 1 }}>
              <AppLogo />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
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
            <Stack direction='row' spacing={1}>
              <Box>
                <AppNotification />
              </Box>
              <Box>
                <AppMessenger />
              </Box>
              <Box>
                <AppUserInfo />
              </Box>
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar variant='dense' disableGutters={true} />
      <Drawer
        open={drawer}
        variant={drawer ? `permanent` : 'temporary'}
        hideBackdrop={true}
        sx={{
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar variant='dense' disableGutters={true} />
        <Box sx={{ px: 1, overflowX: 'hidden', overflowY: 'auto' }}>
          <AppLeftBar />
        </Box>
      </Drawer>
      <Box
        id='id-body-container'
        sx={{
          display: 'flex',
          width: '100%',
          height: 'auto',
          minHeight: 'calc(100% - 48px)',
        }}
      >
        <Box sx={{ flexGrow: 0, height: 'auto', minHeight: '100%' }}>
          <Collapse orientation='horizontal' in={drawer} timeout={100}>
            <Box sx={{ width: `${drawerWidth}px`, height: 'calc(100vh - 48px)' }}>&nbsp;</Box>
          </Collapse>
        </Box>
        <Box
          id='id-body-wrapper'
          sx={{
            flexGrow: 0,
            p: 2,
            height: 'auto',
            minHeight: '100%',
          }}
        >
          <Box id='id-body-main' sx={{ with: '100%', height: 'auto', minHeight: '100%' }}>
            <PageContent />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
