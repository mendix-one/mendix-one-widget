import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'

export type AmzTopLogoMainProps = {
  image: string | undefined
  text: string
  title: string
  tabIndex?: number
  onClick: () => void
}

export default function AmzTopLogoMain(props: AmzTopLogoMainProps) {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Card
      sx={{
        width: '100%',
        maxHeight: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        overflow: 'hidden',
        boxShadow: 0,
        cursor: 'pointer',
        userSelect: 'none',
      }}
      onClick={props.onClick}
      tabIndex={props.tabIndex || 1000}
    >
      <Box sx={{ width: 28, height: 28 }}>
        <Tooltip title={props.title}>
          {props.image ? (
            <Avatar variant='rounded' src={props.image} sx={{ width: 28, height: 28, bgcolor: 'secondary.main' }} />
          ) : (
            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 -960 960 960' width='24px' fill='#603890'>
              <path d='M480-427ZM240-120q-50 0-85-35t-35-85v-240q0-24 9-46t26-39l240-240q17-18 39.5-26.5T480-840q23 0 45 8.5t40 26.5l240 240q17 17 26 39t9 46v240q0 50-35 85t-85 35H240Zm0-80h480q17 0 28.5-11.5T760-240v-240q0-8-3-15t-9-13L595-662l-59 58 144 144v180H280v-180l258-258-30-30q-8-8-15.5-10t-12.5-2q-5 0-12.5 2T452-748L212-508q-6 6-9 13t-3 15v240q0 17 11.5 28.5T240-200Zm120-160h240v-67L480-547 360-427v67Z' />
            </svg>
          )}
        </Tooltip>
      </Box>
      {isDesktop ? (
        <Box sx={{ pl: 2 }}>
          <Tooltip title={props.title}>
            <Typography
              variant='h2'
              color='secondary'
              sx={{
                fontWeight: 800,
              }}
            >
              {props.text}
            </Typography>
          </Tooltip>
        </Box>
      ) : (
        <></>
      )}
    </Card>
  )
}
