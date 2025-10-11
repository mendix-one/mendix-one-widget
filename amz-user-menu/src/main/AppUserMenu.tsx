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

export type AppUserMenuProps = {
  avatar: string | undefined
  username: string
  userRoles: string
  onChangeLanuage: () => void
  onShowProfile: () => void
  onChangePassword: () => void
  onCustomSettings: () => void
  onLogout: () => void
  txtLanguage: string
  txtAccountProfile: string
  txtChangePassword: string
  txtCustomSettings: string
  txtLogout: string
  tabIndex?: number
}

export default function AppUserMenu(props: AppUserMenuProps) {
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
      <Tooltip title='Account'>
        <IconButton onClick={handleOpenMenu} tabIndex={props.tabIndex ? props.tabIndex : 1015}>
          <Avatar src={props.avatar} alt={props.username} sx={{ width: 32, height: 32, bgcolor: 'primary.main' }} />
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
          direction='row'
          spacing={2}
          sx={{
            px: 2,
            mb: 1,
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Avatar src={props.avatar} alt={props.username} sx={{ width: 44, height: 44, bgcolor: 'primary.main' }} />
          </Stack>
          <Stack>
            <Stack>
              <Typography variant='subtitle1' color='primary'>
                {props.username}
              </Typography>
            </Stack>
            <Stack>
              <Typography variant='subtitle2'>{props.userRoles}</Typography>
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack
          direction='row'
          spacing={2}
          sx={{
            p: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Tooltip title='Light Mode'>
              <Button variant='outlined' tabIndex={props.tabIndex ? props.tabIndex + 1 : 1511} disabled={false}>
                <LightModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title='Dark Mode'>
              <Button variant='outlined' tabIndex={props.tabIndex ? props.tabIndex + 2 : 1512} disabled={true}>
                <DarkModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title='Sytem Mode'>
              <Button variant='outlined' tabIndex={props.tabIndex ? props.tabIndex + 3 : 1513} disabled={true}>
                <AutoModeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
          <Stack>
            <Tooltip title='Custom Mode'>
              <Button variant='outlined' tabIndex={props.tabIndex ? props.tabIndex + 4 : 1514} disabled={true}>
                <AutoAwesomeOutlinedIcon />
              </Button>
            </Tooltip>
          </Stack>
        </Stack>
        <Divider />
        <MenuList>
          <MenuItem tabIndex={props.tabIndex ? props.tabIndex + 11 : 1551} onClick={props.onChangeLanuage}>
            <ListItemIcon>
              <TranslateIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              {props.txtLanguage}
            </ListItemText>
            <Typography variant='body2' sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ L
            </Typography>
          </MenuItem>
          <MenuItem tabIndex={props.tabIndex ? props.tabIndex + 12 : 1552} onClick={props.onShowProfile}>
            <ListItemIcon>
              <AccountBoxOutlinedIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              {props.txtAccountProfile}
            </ListItemText>
            <Typography variant='body2' sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ A
            </Typography>
          </MenuItem>
          <MenuItem tabIndex={props.tabIndex ? props.tabIndex + 13 : 1553} onClick={props.onChangePassword}>
            <ListItemIcon>
              <PasswordIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              {props.txtChangePassword}
            </ListItemText>
            <Typography variant='body2' sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ P
            </Typography>
          </MenuItem>
          <MenuItem tabIndex={props.tabIndex ? props.tabIndex + 14 : 1554} onClick={props.onCustomSettings}>
            <ListItemIcon>
              <SettingsSuggestIcon fontSize='small' color='primary' />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'primary.main',
                [`& .MuiListItemText-primary`]: { color: 'primary.main' },
              }}
            >
              {props.txtCustomSettings}
            </ListItemText>
            <Typography variant='body2' sx={{ color: 'text.secondary', pl: 2 }}>
              ⌘ ⇧ S
            </Typography>
          </MenuItem>
          <Divider />
          <MenuItem tabIndex={props.tabIndex ? props.tabIndex + 15 : 1555} onClick={props.onLogout}>
            <ListItemIcon>
              <LogoutIcon fontSize='small' color='error' />
            </ListItemIcon>
            <ListItemText
              sx={{
                color: 'error.main',
                [`& .MuiListItemText-primary`]: { color: 'error.main' },
              }}
            >
              {props.txtLogout}
            </ListItemText>
            <Typography variant='body2' sx={{ color: { color: 'error.main' }, pl: 2 }}>
              ⌘ ⇧ Q
            </Typography>
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}
