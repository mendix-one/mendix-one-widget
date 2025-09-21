import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import Stack from '@mui/material/Stack'
import Divider from '@mui/material/Divider'
import Button from '@mui/material/Button'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function AppNotify() {
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
      <Tooltip title="Notification">
        <IconButton size="large" aria-label="show 17 new notifications" color="primary" onClick={handleOpenMenu}>
          <Badge badgeContent={17} color="secondary" variant="dot">
            <NotificationsNoneIcon />
          </Badge>
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
        sx={{ mt: '32px' }}
      >
        {settings.map((setting) => (
          <>
            <Box key={setting} sx={{ minWidth: '320px', p: 1.5 }}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                  <Stack sx={{}}>
                    <NotificationsNoneIcon fontSize="small" color="primary" />
                  </Stack>
                  <Stack sx={{ minWidth: 0 }}>
                    <Typography
                      variant="h5"
                      noWrap
                      sx={{
                        color: (theme) => theme.palette.primary.main,
                      }}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                  </Stack>
                </Stack>
                <Stack>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </Typography>
                </Stack>
                <Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Stack>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        2 minutes ago
                      </Typography>
                    </Stack>
                    <Stack>
                      <Button variant="text" size="small" aria-label="Read this notify">
                        Read
                      </Button>
                    </Stack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Divider />
          </>
        ))}
      </Menu>
    </Box>
  )
}
