import { Fragment, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { blueGrey } from '@mui/material/colors'

import naviation, { type NavItem } from '../context/AppNavigation'

export default function AppLeftNav() {
  const navigate = useNavigate()

  const dashboard = useMemo((): NavItem => {
    return naviation?.find((x) => !!x.index) || ({} as NavItem)
  }, [])

  const list = useMemo((): NavItem[] => {
    return naviation?.filter((x) => !x.index) || ([] as NavItem[])
  }, [])

  const goto = (path: string) => {
    navigate(path)
  }

  return (
    <Box sx={{ py: 2, width: '100%', height: 'auto' }}>
      <MenuList>
        <MenuItem
          sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}
          onClick={() => goto(dashboard.path)}
        >
          <ListItemIcon sx={{ minWidth: '28px' }}>
            <dashboard.icon fontSize="small" color="primary" />
          </ListItemIcon>
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
      {list.map((group, idx) => (
        <Fragment key={idx}>
          <Divider />
          <Box sx={{ p: 2, backgroundColor: blueGrey[50] }}>
            <Typography variant="subtitle2">{group.title}</Typography>
          </Box>
          <MenuList>
            {group.items?.map((item, idj) => (
              <MenuItem
                key={idj}
                sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}
                onClick={() => goto(item.path)}
              >
                <ListItemIcon sx={{ minWidth: '28px' }}>
                  <item.icon fontSize="small" color="primary" />
                </ListItemIcon>
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
