import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import WebIcon from '@mui/icons-material/Web'
import VerticalSplitIcon from '@mui/icons-material/VerticalSplit'
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek'
import ArtTrackIcon from '@mui/icons-material/ArtTrack'
import FeedIcon from '@mui/icons-material/Feed'
import Typography from '@mui/material/Typography'

const listsItems = [
  [
    {
      icon: WebIcon,
      path: '/component-aaa',
      title: 'Componenet AAA',
    },
    {
      icon: VerticalSplitIcon,
      path: '/component-aab',
      title: 'Componenet AAB',
    },
    {
      icon: CalendarViewWeekIcon,
      path: '/component-aac',
      title: 'Componenet AAC',
    },
    {
      icon: ArtTrackIcon,
      path: '/component-aad',
      title: 'Componenet AAd',
    },
  ],
  [
    {
      icon: FeedIcon,
      path: '/component-bbb',
      title: 'Componenet BBB',
    },
    {
      icon: VerticalSplitIcon,
      path: '/component-aab',
      title: 'Componenet AAB',
    },
    {
      icon: CalendarViewWeekIcon,
      path: '/component-aac',
      title: 'Componenet AAC',
    },
    {
      icon: ArtTrackIcon,
      path: '/component-aad',
      title: 'Componenet AAd',
    },
  ],
  [
    {
      icon: WebIcon,
      path: '/component-ccc',
      title: 'Componenet CCC',
    },
    {
      icon: VerticalSplitIcon,
      path: '/component-aab',
      title: 'Componenet AAB',
    },
    {
      icon: CalendarViewWeekIcon,
      path: '/component-aac',
      title: 'Componenet AAC',
    },
    {
      icon: ArtTrackIcon,
      path: '/component-aad',
      title: 'Componenet AAd',
    },
  ],
]

export default function AppLeftBar() {
  return (
    <Box sx={{ width: '100%', py: 1 }} role="presentation">
      {listsItems.map((List, idx) => (
        <Box key={idx} sx={{ width: '100%' }}>
          <MenuList>
            {List.map((item, index) => (
              <MenuItem key={index} sx={{ px: 0.5, [`& .MuiListItemIcon-root`]: { minWidth: '28px' } }}>
                <ListItemIcon sx={{ minWidth: '28px' }}>
                  <item.icon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    [`& .MuiListItemText-primary`]: { color: (theme) => theme.palette.primary.main },
                  }}
                >
                  {item.title}
                </ListItemText>
                <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                  (10)
                </Typography>
              </MenuItem>
            ))}
          </MenuList>
          <Divider />
        </Box>
      ))}
    </Box>
  )
}
