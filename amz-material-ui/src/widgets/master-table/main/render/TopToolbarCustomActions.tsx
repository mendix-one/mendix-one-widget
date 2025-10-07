import type { ReactNode } from 'react'
import type { MRT_TableInstance } from 'material-react-table'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import type { MasterTableContextData } from '../context/MasterTableContext'
import type { MasterTableData } from '../MasterTableTypings'

import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined'

const TopToolbarCustomActions =
  (context: MasterTableContextData): ((props: { table: MRT_TableInstance<MasterTableData> }) => ReactNode) =>
  () => {
    return (
      <Box sx={{ width: '100%', height: '100%' }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Typography variant="h3">{context.title}</Typography>
          </Stack>
          <Stack
            direction="row"
            spacing={0}
            sx={{
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Stack>
              <Tooltip title="Reload Data">
                <IconButton onClick={context.onReload} tabIndex={101}>
                  <CachedOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Stack>
            <Stack>
              <Tooltip title="Create New">
                <IconButton onClick={context.onCreateNew} tabIndex={102}>
                  <AddCircleOutlineOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    )
  }

export default TopToolbarCustomActions
