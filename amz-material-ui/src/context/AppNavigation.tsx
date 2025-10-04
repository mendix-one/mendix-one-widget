import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined'

export type NavItem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any
  path: string
  title: string
  index?: boolean
  items?: NavItem[]
}

export default [
  {
    icon: <DashboardOutlinedIcon fontSize="small" color="primary" />,
    path: '/',
    title: 'Dashboard',
    index: true
  },
  {
    icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
    path: '/table',
    title: 'Master Table Examples',
    items: [
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
  {
    icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
    path: '/table',
    title: 'Master Table Guidelines',
    items: [
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-1',
        title: 'Master Table - Basic',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-2',
        title: 'Master Table - Filter',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-3',
        title: 'Master Table - Actions',
      },
      {
        icon: <TableChartOutlinedIcon fontSize="small" color="primary" />,
        path: '/table/master-table-4',
        title: 'Master Table - Export',
      },
    ],
  },
] as NavItem[]
