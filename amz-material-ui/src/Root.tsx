import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import MyThem from './theme'

import App from './layout/App'
import DashboardPage from './pages/home/DashboardPage'
import LoginPage from './pages/auth/login/LoginPage'
import LogoutPage from './pages/auth/logout/LogoutPage'
import AccessDeniedPage from './pages/auth/error/AccessDeniedPage'

export default function Root() {
  const theme = useMemo((): Theme => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme(MyThem.tokens as any)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route index element={<DashboardPage />} />
          </Route>
          <Route path="/access-denied" element={<AccessDeniedPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/logout" element={<LogoutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
