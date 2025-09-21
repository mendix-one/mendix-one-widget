import { useRef, useState } from 'react'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined'

const messages = ['Profile', 'Account', 'Dashboard', 'Logout', 'Profile', 'Account', 'Dashboard', 'Logout']

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
            <NotificationsActiveOutlinedIcon />
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
        <Box
          sx={{
            py: 0.5,
            px: 1.5,
            borderBottom: 1,
            borderColor: grey[400],
          }}
        >
          <Stack
            direction="row"
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Stack>
              <Typography
                variant="h5"
                noWrap
                sx={{
                  color: 'text.primary',
                  fontWeight: 'bold',
                }}
              >
                {messages.length} new messages
              </Typography>
            </Stack>
            <Stack>
              <Button variant="text" size="small" aria-label="Mark all as read">
                Mark all as read
              </Button>
            </Stack>
          </Stack>
        </Box>
        {messages.map((msg, idx) => (
          <Box key={idx} sx={{ maxWidth: 'calc(100vw - 32px)', p: 1.5, borderBottom: 1, borderColor: grey[400] }}>
            <Stack spacing={1}>
              <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
                <Stack sx={{}}>
                  <NotificationsActiveOutlinedIcon fontSize="small" color="primary" />
                </Stack>
                <Stack sx={{ width: '360px', minWidth: 0, maxWidth: '100%' }}>
                  <Typography variant="h5" noWrap>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                </Stack>
              </Stack>
              <Stack sx={{ width: '360px', minWidth: 0, maxWidth: '100%' }}>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
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
        ))}
      </Menu>
    </Box>
  )
}
