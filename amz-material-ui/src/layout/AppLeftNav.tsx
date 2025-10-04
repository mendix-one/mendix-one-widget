import { Fragment, useContext, useMemo } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { blueGrey } from '@mui/material/colors'

import AppContext from '../context/AppContext'
import type { NavItem } from '../context/AppNavigation'

export default function AppLeftNav() {
  const appContext = useContext(AppContext)

  const dashboard = useMemo((): NavItem => {
    return appContext.naviation?.find((x) => !!x.index) || ({} as NavItem)
  }, [appContext.naviation])

  const navigation = useMemo((): NavItem[] => {
    return appContext.naviation?.filter((x) => !x.index) || ([] as NavItem[])
  }, [appContext.naviation])

  return (
    <Box sx={{ py: 2, width: '100%', height: 'auto' }}>
      <MenuList>
        <MenuItem sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}>
          <ListItemIcon sx={{ minWidth: '28px' }}>{dashboard.icon}</ListItemIcon>
          <ListItemText
            sx={{
              color: 'primary.main',
              [`& .MuiListItemText-primary`]: { color: 'primary.main' },
            }}
          >
            {dashboard.title}
          </ListItemText>
        </MenuItem>
      </MenuList>
      {navigation.map((group, idx) => (
        <Fragment key={idx}>
          <Divider />
          <Box sx={{ p: 2, backgroundColor: blueGrey[50] }}>
            <Typography variant="subtitle2">{group.title}</Typography>
          </Box>
          <MenuList>
            {group.items?.map((item, idj) => (
              <MenuItem key={idj} sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}>
                <ListItemIcon sx={{ minWidth: '28px' }}>{item.icon}</ListItemIcon>
                <ListItemText
                  sx={{
                    color: 'primary.main',
                    [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                  }}
                >
                  {item.title}
                </ListItemText>
              </MenuItem>
            ))}
          </MenuList>
        </Fragment>
      ))}
    </Box>
  )
}
