import { Fragment, useMemo } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'

import { blueGrey } from '@mui/material/colors'

import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'

import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';


const lists = [
  {
    icon: TableChartOutlinedIcon,
    path: '/table',
    title: 'Master Table',
    items: [
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
  {
    icon: TableChartOutlinedIcon,
    path: '/table',
    title: 'Master Table',
    items: [
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
  {
    icon: TableChartOutlinedIcon,
    path: '/table',
    title: 'Master Table',
    items: [
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
  {
    icon: TableChartOutlinedIcon,
    path: '/table',
    title: 'Master Table',
    items: [
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: TableChartOutlinedIcon,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
]

export default function AppLeftNav() {
  const navigation = useMemo(() => {
    return [...lists]
  }, [])

  return (
    <Box sx={{ py: 2, width: '100%', height: 'auto' }}>
      <MenuList>
        <MenuItem sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}>
          <ListItemIcon sx={{ minWidth: '28px' }}>
            <DashboardOutlinedIcon fontSize="small" color="primary" />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: 'primary.main',
              [`& .MuiListItemText-primary`]: { color: 'primary.main' },
            }}
          >
            Dashboard
          </ListItemText>
        </MenuItem>
      </MenuList>
      {navigation.map((group, idx) => (
        <Fragment key={idx}>
          <Divider />
          <Box sx={{ p: 2, backgroundColor: blueGrey[50] }}>
            <Typography variant='subtitle2'>{group.title}</Typography>
          </Box>
          <MenuList>
            {group.items.map((item, idj) => (
              <MenuItem key={idj} sx={{ px: 2, py: 2, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}>
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
