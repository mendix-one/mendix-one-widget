import { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import LogoutIcon from '@mui/icons-material/Logout'
import PasswordIcon from '@mui/icons-material/Password'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import TranslateIcon from '@mui/icons-material/Translate'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import AutoModeOutlinedIcon from '@mui/icons-material/AutoModeOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'

export default function AppUserMenu() {
  const anchorElRef = useRef<HTMLElement | undefined>()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const handleOpenMenu = () => {
    setShowMenu(true)
  }

  const handleCloseMenu = () => {
    setShowMenu(false)
  }

  return (
    <Box ref={anchorElRef} sx={{ with: '100%', height: '100%' }}>
      <Tooltip title="Account">
        <IconButton onClick={handleOpenMenu} tabIndex={1015}>
          <Avatar alt="Administrator" sx={{ width: 32, height: 32, bgcolor: 'primary.main' }} />
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted={false}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={showMenu}
        onClose={handleCloseMenu}
        sx={{ mt: '35px' }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{
            px: 2,
            mb: 1,
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Avatar alt="Remy Sharp" sx={{ width: 44, height: 44, bgcolor: 'secondary.main' }} />
          </Stack>
          <Stack>
            <Stack>
              <Typography variant='subtitle1' color='secondary'>Amz Admin</Typography>
            </Stack>
            <Stack>
              <Typography variant='subtitle2'>Administrator</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          spacing={2}
          sx={{
            p: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Tooltip title="Light Mode">
              <Button variant="outlined" tabIndex={1511} disabled={false}>
                <LightModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title="Dark Mode">
              <Button variant="outlined" tabIndex={1512} disabled={true}>
                <DarkModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title="Sytem Mode">
              <Button variant="outlined" tabIndex={1513} disabled={true}>
                <AutoModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title="Custom Mode">
              <Button variant="outlined" tabIndex={1514} disabled={true}>
                <AutoAwesomeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
        <Divider />
        <MenuList>
          <MenuItem tabIndex={999999}>
            <ListItemIcon>
              <TranslateIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              English (United State)
            </ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ L
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <AccountBoxOutlinedIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              Account Profile
            </ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ A
            </Typography>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <PasswordIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              Change Password
            </ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ P
            </Typography>
          </MenuItem>
          <MenuItem color="primary">
            <ListItemIcon>
              <SettingsSuggestIcon fontSize="small" color="primary" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              Custom Settings
            </ListItemText>
            <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ S
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <LogoutIcon fontSize="small" color="error" />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'error.main',
                [`& .MuiListItemText-primary`]: { color: 'error.main' },
              }}
            >
              Logout
            </ListItemText>
            <Typography variant="body2" sx={{ color: { color: 'error.main' }, pl: 2 }}>
              ⌘ ⇧ Q
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
