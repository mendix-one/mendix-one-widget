import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AppLogo() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return isDesktop ? (
    <Box
      sx={{
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '32px', height: '32px', '> img': { maxWidth: '32px', maxHeight: '32px' } }}>
        <img src="/icon.png" />
      </Box>
      <Box sx={{ pl: 2 }}>
        <Typography
          variant="h3"
          component="h3"
          color="secondary"
          sx={{
            fontWeight: 800,
          }}
        >
          Mx One UI
        </Typography>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '32px', height: '32px', '> img': { maxWidth: '32px', maxHeight: '32px' } }}>
        <img src="/icon.png" />
      </Box>
    </Box>
  )
}
