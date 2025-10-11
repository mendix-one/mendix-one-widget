import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import Menu from '@mui/material/Menu'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import AlertTitle from '@mui/material/AlertTitle'

import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined'

const settings = ['1', '2', '3', '4', '1', '2', '3', '4', '1', '2', '3', '4']

export type AppTasksProps = {
  txtCheck: string
}

export default function AppTasks(props: AppTasksProps) {
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
      <Tooltip title='Todo Tasks'>
        <IconButton size='large' color='primary' tabIndex={1011} onClick={handleOpenMenu}>
          <Badge badgeContent={4} color='primary' variant='dot'>
            <DnsOutlinedIcon />
          </Badge>
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
        {settings.map((setting, idx) => (
          <Box key={`${idx}_${setting}`} sx={{ minWidth: '320px', maxWidth: 'calc(100vw - 48px)', p: 1 }}>
            <Alert
              variant='outlined'
              severity='error'
              action={
                <Button color='inherit' size='small'>
                  {props.txtCheck}
                </Button>
              }
            >
              <AlertTitle>This is a urgent tasks.</AlertTitle>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam
              dignissim diam.
            </Alert>
          </Box>
        ))}
      </Menu>
    </Box>
  )
}
