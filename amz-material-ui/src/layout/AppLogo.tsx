import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function AppLogo() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ width: '32px', height: '32px' }}>
        <img src="/icon.png" style={{ width: '100%', height: '100%' }} />
      </Box>
      <Box sx={{ pl: 1 }}>
        <Typography
          variant="h3"
          component="h3"
          color="primary"
          sx={{
            fontWeight: 900,
          }}
        >
          Mx One UI
        </Typography>
      </Box>
    </Box>
  )
}
