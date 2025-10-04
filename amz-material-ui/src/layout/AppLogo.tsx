import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

import logo from '../assets/icon.png'

export default function AppLogo() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const navigate = useNavigate()

  const onClick = () => {
    navigate('/')
  }

  return (
    <Card
      sx={{
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden',
        boxShadow: 0,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={onClick}
      tabIndex={1000}
    >
      <Box sx={{ width: 28, height: 28 }}>
        <Tooltip title="Amz One MFG">
          <Avatar variant="rounded" src={logo} sx={{ width: 28, height: 28, bgcolor: 'secondary.main' }} />
        </Tooltip>
      </Box>
      {isDesktop ? (
        <Box sx={{ pl: 2 }}>
          <Tooltip title="Amz One MFG">
            <Typography
              variant="h2"
              color="secondary"
              sx={{
                fontWeight: 800,
              }}
            >
              Amz One MFG
            </Typography>
          </Tooltip>
        </Box>
      ) : (
        <></>
      )}
    </Card>
  )
}
