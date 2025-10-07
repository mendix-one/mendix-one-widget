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

const BottomToolbarCustomActions =
  (context: MasterTableContextData): ((props: { table: MRT_TableInstance<MasterTableData> }) => ReactNode) =>
  () => {
    return (
      <Box>
       aksdjsklj
      </Box>
    )
  }

export default BottomToolbarCustomActions
