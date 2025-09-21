import { Fragment, useRef, useState } from 'react'
import { useTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import useMediaQuery from '@mui/material/useMediaQuery'
import Stack from '@mui/material/Stack'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import WebIcon from '@mui/icons-material/Web'
import ArticleIcon from '@mui/icons-material/Article'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined'
import Drawer from '@mui/material/Drawer'
import MenuList from '@mui/material/MenuList'
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined'
import Divider from '@mui/material/Divider'

const pages = [
  {
    icon: DashboardIcon,
    path: '/dashboard',
    title: 'Dashboard',
  },
  {
    icon: CategoryIcon,
    path: '/components',
    title: 'Components',
  },
  {
    icon: WebIcon,
    path: '/examples',
    title: 'Examples',
  },
  {
    icon: ArticleIcon,
    path: '/guidelines',
    title: 'Guieslines',
  },
]

export default function AppTopNav() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const anchorElRef = useRef<HTMLElement | undefined>()
  const [showTopNav, setShowTopNav] = useState<boolean>(false)

  const handleOpenNav = () => {
    setShowTopNav(true)
  }

  const handleCloseNav = () => {
    setShowTopNav(false)
  }

  return isDesktop ? (
    <Stack
      direction="row"
      spacing={1}
      sx={{
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {pages.map((page, idx) => (
        <Stack key={idx}>
          <MenuItem>
            <ListItemIcon>
              <page.icon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: (theme) => theme.palette.primary.main,
                [`& .MuiListItemText-primary`]: { color: (theme) => theme.palette.primary.main, fontWeight: 'bold' },
              }}
            >
              {page.title}
            </ListItemText>
          </MenuItem>
        </Stack>
      ))}
    </Stack>
  ) : (
    <Box ref={anchorElRef}>
      <IconButton size="large" aria-label="show 4 new mails" color="primary" onClick={handleOpenNav}>
        <AppsOutlinedIcon />
      </IconButton>
      <Drawer open={showTopNav} anchor={'bottom'} onClose={handleCloseNav}>
        <Box
          sx={{
            minHeight: '20vh',
            maxHeight: 'calc(100vh - 96px)',
          }}
        >
          <Box sx={{ maxHeight: 'calc(100% - 36px)', overflowX: 'hidden', overflowY: 'auto' }}>
            <MenuList>
              {pages.map((page, idx) => (
                <Fragment key={idx}>
                  <MenuItem>
                    <ListItemIcon>
                      <page.icon fontSize="small" color="primary" />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                        [`& .MuiListItemText-primary`]: {
                          color: (theme) => theme.palette.primary.main,
                          fontWeight: 'bold',
                        },
                      }}
                    >
                      {page.title}
                    </ListItemText>
                  </MenuItem>
                </Fragment>
              ))}
            </MenuList>
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: grey['300'] }}>
            <IconButton size="small" onClick={handleCloseNav}>
              <ExpandMoreOutlinedIcon />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </Box>
  )
}
