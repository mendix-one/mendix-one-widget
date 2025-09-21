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
import AppTasks from './layout/AppTasks'
import AppNotify from './layout/AppNotify'
import PageContent from './example/content/PageContent'

const drawerWidth = 200

function App() {
  const defaultSettings = useRef({
    spacing: 8,
    palette: {
      mode: 'light',
      common: {
        white: '#ffffff',
        black: '#333333',
        grey: '#f5f5f5',
      },
      text: {
        primary: '#333333',
        secondary: '#757575',
        disable: '#bdbdbd',
        title: '#1060b0',
        important: '#603890',
        tertiary: '#00897b',
      },
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
      htmlFontSize: 14,
      fontFamily: 'Roboto, sans-serif',
      h1: {
        fontSize: 24,
      },
      h2: {
        fontSize: 20,
      },
      h3: {
        fontSize: 18,
      },
      h4: {
        fontSize: 16,
      },
      h5: {
        fontSize: 14,
      },
      h6: {
        fontSize: 12,
      },
      subtitle1: {
        fontSize: 16,
      },
      subtitle2: {
        fontSize: 14,
      },
      body1: {
        fontSize: 14,
      },
      body2: {
        fontSize: 12,
      },
      button: {
        fontSize: 14,
        textTransform: 'capitalize',
      },
      caption: {
        fontSize: 13,
      },
      overline: {
        fontSize: 14,
      },
    },
  })
  const [customSettings, setCustomSettings] = useState({})

  const theme = useMemo((): Theme => {
    const deafult = defaultSettings.current || {}
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme({ ...deafult, ...customSettings } as any)
  }, [customSettings])

  console.log(theme)

  const [drawer, setDrawer] = useState(false)
  const toggleDrawer = (show: boolean) => () => {
    setDrawer(show)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="transparent"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, px: 2, backgroundColor: 'common.white' }}
      >
        <Toolbar variant="dense" disableGutters={true}>
          <Box sx={{ display: 'flex', width: `${drawerWidth}px` }}>
            <Box sx={{ flexGrow: 1 }}>
              <AppLogo />
            </Box>
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                edge="start"
                color="primary"
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
              <Box>
                <AppTasks />
              </Box>
              <Box>
                <AppNotify />
              </Box>
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
      <Box
        id="id-body-container"
        sx={{
          display: 'flex',
          width: '100%',
          height: 'auto',
          minHeight: 'calc(100% - 48px)',
          backgroundColor: 'common.grey',
        }}
      >
        <Box sx={{ flexGrow: 0, height: 'auto', minHeight: '100%' }}>
          <Collapse orientation="horizontal" in={drawer} timeout={100}>
            <Box sx={{ width: `${drawerWidth}px`, height: 'calc(100vh - 48px)' }}>&nbsp;</Box>
          </Collapse>
        </Box>
        <Box
          id="id-body-wrapper"
          sx={{
            flexGrow: 0,
            p: 2,
            height: 'auto',
            minHeight: '100%',
          }}
        >
          <Box id="id-body-main" sx={{ with: '100%', height: 'auto', minHeight: '100%' }}>
            <PageContent />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
