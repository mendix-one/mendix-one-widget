import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

import { blueGrey } from '@mui/material/colors'

import logo from '../../../assets/icon.png'
import bg from '../../../assets/wafer-bg.png'

import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined'
import Avatar from '@mui/material/Avatar'

export default function LoginPage() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const [username, setUsername] = useState('MxAdmin')
  const [password, setPassword] = useState('1')
  const [hasErrors, setHasErrors] = useState(false)

  return (
    <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
      <Container
        sx={{
          zIndex: 1,
          height: isDesktop ? '100%' : 'auto',
          display: isDesktop ? 'flex' : 'block',
          alignItems: 'start',
          justifyContent: 'space-between',
          pt: isDesktop ? '15%' : 6,
        }}
      >
        {isDesktop ? (
          <Box sx={{ maxWidth: 480 }}>
            <Box sx={{ width: '100%', mb: 6 }}>
              <Box
                sx={{
                  width: '100%',
                  maxHeight: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'left',
                }}
              >
                <Box sx={{ width: 36, height: 36 }}>
                  <Avatar variant="rounded" src={logo} sx={{ width: 36, height: 36, bgcolor: 'secondary.main' }} />
                </Box>
                <Box sx={{ pl: 4 }}>
                  <Typography
                    variant="h1"
                    color="common.white"
                    sx={{
                      fontWeight: 800,
                    }}
                  >
                    Amz One UI
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }} color="common.white">
                Digital Fabrication Solution
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 800, mb: 2 }} color="common.white">
                Centralized Control System for Wafer Manufacturing
              </Typography>
              <Typography variant="subtitle2" sx={{ fontWeight: 800, mb: 2 }} color="common.white">
                Digital Fabrication Solution delivers a Centralized Control System for wafer manufacturing — connecting
                all tools, automation systems, and operations into one intelligent hub for real-time monitoring,
                seamless coordination, and data-driven optimization.
              </Typography>
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: '100%', px: 2, textAlign: 'center' }}>
            <Box
              sx={{ width: '100%', maxHeight: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <Box sx={{ width: 36, height: 36 }}>
                <Avatar variant="rounded" src={logo} sx={{ width: 36, height: 36, bgcolor: 'secondary.main' }} />
              </Box>
              <Box sx={{ pl: 4 }}>
                <Typography
                  variant="h1"
                  color="common.white"
                  sx={{
                    fontWeight: 800,
                  }}
                >
                  Amz One UI
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="h3" sx={{ fontWeight: 800, mt: 2 , mb: 1 }} color="common.white">
                Digital Fabrication Solution
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 3 }} color="common.white">
                Centralized Control System for Wafer Manufacturing
              </Typography>
            </Box>
          </Box>
        )}
        <Paper sx={{ width: isDesktop ? 420 : '100%', p: 3 }}>
          <Box sx={{ mb: 5 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                color: 'primary.main',
              }}
            >
              Login
            </Typography>
          </Box>
          <Box sx={{ mb: 3 }}>
            {hasErrors ? (
              <Alert
                severity="warning"
                onClose={() => {
                  setHasErrors(false)
                }}
              >
                Username or password is incorrect.
              </Alert>
            ) : (
              // <Alert
              //   severity="info"
              //   onClose={() => {
              //     setHasErrors(false)
              //   }}
              // >
              //   Enter username and password to login.
              // </Alert>
              <></>
            )}
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption">Username:</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Username"
              value={username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setUsername(event.target.value)
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="caption">Password:</Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="Password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value)
              }}
            />
          </Box>
          <Box sx={{ mb: 3 }}>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack sx={{ flexFlow: 1 }}>
                <Typography variant="caption">
                  <Link color="inherit" underline="none">
                    Forgot your password?
                  </Link>
                </Typography>
              </Stack>
              <Stack sx={{ flexFlow: 0 }}>
                <Button variant="contained" endIcon={<LoginOutlinedIcon />} sx={{ boxShadow: 0 }}>
                  Login
                </Button>
              </Stack>
            </Stack>
          </Box>
          <Divider />
          <Box sx={{ pt: 2, textAlign: 'center' }}>
            <Button variant="text">{'English (United State)'}</Button>
          </Box>
        </Paper>
      </Container>
      <Box
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          bgcolor: blueGrey[100],
          textAlign: 'center',
        }}
      >
        <img src={bg} style={{ width: '100%', minWidth: 1920, minHeight: '100%' }} />
      </Box>
    </Box>
  )
}
