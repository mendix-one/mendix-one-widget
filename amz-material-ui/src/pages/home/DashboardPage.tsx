import { Fragment, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'

import naviation, { type NavItem } from '../../context/AppNavigation'
import Grid from '@mui/material/Grid'
import Divider from '@mui/material/Divider'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'

export default function DashboardPage() {
  const navigate = useNavigate()

  const list = useMemo((): NavItem[] => {
    return naviation?.filter((x) => !x.index) || ([] as NavItem[])
  }, [])

  const goto = (path: string) => {
    navigate(path)
  }

  return (
    <>
      {list.map((group, idx) => (
        <Fragment key={idx}>
          <Box sx={{ py: 1 }}>
            <Typography variant="subtitle2">{group.title}</Typography>
          </Box>
          <Divider />
          <Box sx={{ py: 3, mb: 5 }}>
            <Grid container spacing={2}>
              {group.items?.map((item, idj) => (
                <Grid key={idj} size={3}>
                  <Card>
                    <CardActionArea onClick={() => goto(item.path)}>
                      <CardContent sx={{ p: 2 }}>
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                          <item.icon color="primary.main" sx={{ fontSize: '3rem' }} />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography variant="subtitle2">{item.title}</Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fragment>
      ))}
    </>
  )
}
