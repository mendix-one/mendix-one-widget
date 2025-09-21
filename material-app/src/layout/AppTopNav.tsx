import { useEffect, useRef, useState } from 'react'
import Stack from '@mui/material/Stack'
import DashboardIcon from '@mui/icons-material/Dashboard'
import CategoryIcon from '@mui/icons-material/Category'
import WebIcon from '@mui/icons-material/Web'
import ArticleIcon from '@mui/icons-material/Article'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AppsIcon from '@mui/icons-material/Apps';

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
  const anchorElTopNavRef = useRef<HTMLElement | undefined>()
  const [showTopNavMenu, setShowTopNavMenu] = useState<boolean>(false)

  const handleOpenNavMenu = () => {
    setShowTopNavMenu(true)
  }

  const handleCloseNavMenu = () => {
    setShowTopNavMenu(false)
  }

  useEffect(() => {
    if (anchorElTopNavRef.current) {
      handleOpenNavMenu()
    }
  }, [anchorElTopNavRef.current])

  return (
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
  )
}
