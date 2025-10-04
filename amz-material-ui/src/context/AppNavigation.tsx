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
    icon: DashboardOutlinedIcon,
    path: '/',
    title: 'Dashboard',
    index: true
  },
  {
    icon: TableChartOutlinedIcon,
    path: '/table',
    title: 'Master Table Examples',
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
    title: 'Master Table Guidelines',
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
] as NavItem[]
