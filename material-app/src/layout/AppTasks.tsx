import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import AlertTitle from '@mui/material/AlertTitle'
import AssignmentIcon from '@mui/icons-material/Assignment';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

export default function AppTasks() {
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
      <Tooltip title="Todo Tasks">
        <IconButton size="large" aria-label="show 4 new mails" color="primary" onClick={handleOpenMenu}>
          <Badge badgeContent={4} color="secondary" variant="dot">
            <AssignmentIcon />
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
          <Box key={setting} sx={{ minWidth: '320px', maxWidth: 'calc(100vw - 48px)', p: 1 }}>
            <Alert
              variant="outlined"
              severity="error"
              action={
                <Button color="inherit" size="small">
                  Check
                </Button>
              }
            >
              <AlertTitle>This is a urgent tasks.</AlertTitle>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
              dignissim diam.
            </Alert>
          </Box>
        ))}
        {settings.map((setting) => (
          <Box key={setting} sx={{ minWidth: '320px', maxWidth: 'calc(100vw - 48px)', p: 1 }}>
            <Alert
              variant="outlined"
              severity="warning"
              action={
                <Button color="inherit" size="small">
                  Check
                </Button>
              }
            >
              <AlertTitle>This is a priority task.</AlertTitle>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
              dignissim diam.
            </Alert>
          </Box>
        ))}
        {settings.map((setting) => (
          <Box key={setting} sx={{ minWidth: '320px', maxWidth: 'calc(100vw - 48px)', p: 1 }}>
            <Alert
              variant="outlined"
              severity="info"
              action={
                <Button color="inherit" size="small">
                  Check
                </Button>
              }
            >
              <AlertTitle>This is a normal taks.</AlertTitle>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
              dignissim diam.
            </Alert>
          </Box>
        ))}
      </Menu>
    </Box>
  )
}
