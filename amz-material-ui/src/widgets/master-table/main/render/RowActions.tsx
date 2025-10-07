import { useRef, useState, type ReactNode } from 'react'
import type { MRT_TableInstance } from 'material-react-table'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'

import type { MasterTableContextData } from '../context/MasterTableContext'
import type { MasterTableData } from '../MasterTableTypings'

import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined'

const RowActions =
  (context: MasterTableContextData): ((props: { table: MRT_TableInstance<MasterTableData> }) => ReactNode) =>
  () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refAnchorRowActions = useRef<HTMLElement | undefined>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMenuRowActions, setShowMenuRowActions] = useState<boolean>(false)

    const onClickRowActions = () => {}

    return (
      <Box>
        <Stack
          direction="row"
          spacing={1}
          sx={{
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Stack>
            <Tooltip title="Edit">
              <IconButton
                size="small"
                onClick={() => {
                  setShowMenuRowActions(true)
                }}
              >
                <ModeEditOutlinedIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack>
            <Box ref={refAnchorRowActions}>
              <IconButton
                size="small"
                onClick={() => {
                  setShowMenuRowActions(true)
                }}
              >
                <MoreVertOutlinedIcon fontSize="small" />
              </IconButton>
            </Box>
            <Menu
              anchorEl={refAnchorRowActions.current}
              open={showMenuRowActions}
              keepMounted={false}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              onClose={() => {
                setShowMenuRowActions(false)
              }}
              elevation={2}
            >
              <MenuList sx={{ p: 0 }}>
                <MenuItem tabIndex={999} onClick={onClickRowActions}>
                  <ListItemIcon>
                    <PrintOutlinedIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: 'primary.main',
                      [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                    }}
                  >
                    Print Whole Dataset
                  </ListItemText>
                  <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                    (0)
                  </Typography>
                </MenuItem>
                <MenuItem tabIndex={999} onClick={onClickRowActions}>
                  <ListItemIcon>
                    <PrintOutlinedIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: 'primary.main',
                      [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                    }}
                  >
                    Print Current Page
                  </ListItemText>
                  <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                    (0)
                  </Typography>
                </MenuItem>
                <MenuItem tabIndex={999} onClick={onClickRowActions}>
                  <ListItemIcon>
                    <PrintOutlinedIcon fontSize="small" color="primary" />
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      color: 'primary.main',
                      [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                    }}
                  >
                    Print Selection
                  </ListItemText>
                  <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                    (0)
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </Stack>
        </Stack>
      </Box>
    )
  }

export default RowActions
