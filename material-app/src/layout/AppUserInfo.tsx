import { useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function AppUserInfo() {
  const anchorElUserRef = useRef<HTMLElement | undefined>()
  const [showUserInfoMenu, setshowUserInfoMenu] = useState<boolean>(false)

  const handleOpenUserMenu = () => {
    setshowUserInfoMenu(true)
  }

  const handleCloseUserMenu = () => {
    setshowUserInfoMenu(false)
  }

  return (
    <Box ref={anchorElUserRef} sx={{ with: '100%', height: '100%' }}>
      <Tooltip title="Open settings">
        <IconButton  onClick={handleOpenUserMenu} sx={{ p: 0, width: '32px', height: '32px' }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: '32px', height: '32px' }} />
        </IconButton>
      </Tooltip>
      <Menu
        id="user-info-menu"
        anchorEl={anchorElUserRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        keepMounted={false}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        open={showUserInfoMenu}
        onClose={handleCloseUserMenu}
        sx={{mt: '32px'}}
      >
        {settings.map((setting) => (
          <MenuItem key={setting} onClick={handleCloseUserMenu}>
            <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}
