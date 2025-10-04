import { useMemo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import { createTheme, ThemeProvider, type Theme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import MyThem from './theme'
import AppContextProvider from './context/AppContextProvider'

import App from './layout/App'

import LoginPage from './pages/auth/login/LoginPage'
import LogoutPage from './pages/auth/logout/LogoutPage'
import AccessDeniedPage from './pages/auth/error/AccessDeniedPage'

import DashboardPage from './pages/home/DashboardPage'

import TableExamples from './pages/table/TableExamples'
import MasterTablePage from './pages/table/master-table/MasterTablePage'
import EditableTablePage from './pages/table/editable-table/EditableTablePage'

export default function Root() {
  const theme = useMemo((): Theme => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return createTheme(MyThem.tokens as any)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<App />}>
              <Route index element={<DashboardPage />} />
              <Route path="example" element={<TableExamples />}>
                <Route index element={<MasterTablePage />} />
                <Route path="master-table-basic" element={<MasterTablePage />} />
                <Route path="master-table-editable" element={<EditableTablePage />} />
              </Route>
            </Route>
            <Route path="access-denied" element={<AccessDeniedPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="logout" element={<LogoutPage />} />
          </Routes>
        </BrowserRouter>
      </AppContextProvider>
    </ThemeProvider>
  )
}
