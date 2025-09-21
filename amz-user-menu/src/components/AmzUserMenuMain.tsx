import { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import MenuList from '@mui/material/MenuList'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import LogoutIcon from '@mui/icons-material/Logout'
import PasswordIcon from '@mui/icons-material/Password'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import TranslateIcon from '@mui/icons-material/Translate'
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined'

export type AmzUserMenuMainProps = {
  displayName?: string
}

export default function AmzUserMenuMain(props: AmzUserMenuMainProps) {
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
        <IconButton onClick={handleOpenMenu}>
          <Avatar alt="Remy Sharp" sx={{ width: '30px', height: '30px', bgcolor: 'secondary.main' }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-info-menu"
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
        <MenuList>
          <MenuItem>
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
