import { useRef, useState, type ReactNode } from 'react'
import type { MRT_TableInstance } from 'material-react-table'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Typography from '@mui/material/Typography'
import type { MasterTableContextData } from '../context/MasterTableContext'
import type { MasterTableData } from '../MasterTableTypings'

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined'

const BottomToolbarCustomActions =
  (context: MasterTableContextData): ((props: { table: MRT_TableInstance<MasterTableData> }) => ReactNode) =>
  () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refAnchorBulkActions = useRef<HTMLElement | undefined>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMenuBulkActions, setShowMenuBulkActions] = useState<boolean>(false)

    const onClickBulkActions = () => {}

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refAnchorExportData = useRef<HTMLElement | undefined>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMenuExportData, setShowMenuExportData] = useState<boolean>(false)

    const onClickExportSelection = () => {}
    const onClickExportCurrentPage = () => {}
    const onClickExportWholeDataset = () => {}

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const refAnchorPrintOut = useRef<HTMLElement | undefined>()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [showMenuPrintOut, setShowMenuPrintOut] = useState<boolean>(false)

    const onClickPrintSelection = () => {}
    const onClickPrintCurrentPage = () => {}
    const onClickPrintWholeDataset = () => {}

    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Stack>
          <Box ref={refAnchorBulkActions}>
            <Button
              tabIndex={99}
              variant="outlined"
              size="medium"
              endIcon={<MoreVertOutlinedIcon />}
              onClick={() => {
                setShowMenuBulkActions(true)
              }}
            >
              Bulk Actions (0)
            </Button>
          </Box>
          <Menu
            anchorEl={refAnchorBulkActions.current}
            open={showMenuBulkActions}
            keepMounted={false}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            onClose={() => {
              setShowMenuBulkActions(false)
            }}
            elevation={2}
            sx={{ mt: '-32px' }}
          >
            <MenuList sx={{ p: 0 }}>
              <MenuItem tabIndex={999} onClick={onClickPrintWholeDataset}>
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
              <MenuItem tabIndex={999} onClick={onClickPrintCurrentPage}>
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
              <MenuItem tabIndex={999} onClick={onClickPrintSelection}>
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
        <Stack>
          <Box ref={refAnchorExportData}>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<FileDownloadOutlinedIcon />}
              onClick={() => {
                setShowMenuExportData(true)
              }}
            >
              Export Data
            </Button>
          </Box>
          <Menu
            anchorEl={refAnchorExportData.current}
            open={showMenuExportData}
            keepMounted={false}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            onClose={() => {
              setShowMenuExportData(false)
            }}
            elevation={2}
            sx={{ mt: '-32px' }}
          >
            <MenuList sx={{ p: 0 }}>
              <MenuItem tabIndex={999} onClick={onClickExportWholeDataset}>
                <ListItemIcon>
                  <FileDownloadOutlinedIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: 'primary.main',
                    [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                  }}
                >
                  Export Whole Dataset
                </ListItemText>
                <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                  (0)
                </Typography>
              </MenuItem>
              <MenuItem tabIndex={999} onClick={onClickExportCurrentPage}>
                <ListItemIcon>
                  <FileDownloadOutlinedIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: 'primary.main',
                    [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                  }}
                >
                  Export Current Page
                </ListItemText>
                <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                  (0)
                </Typography>
              </MenuItem>
              <MenuItem tabIndex={999} onClick={onClickExportSelection}>
                <ListItemIcon>
                  <FileDownloadOutlinedIcon fontSize="small" color="primary" />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    color: 'primary.main',
                    [`& .MuiListItemText-primary`]: { color: 'primary.main' },
                  }}
                >
                  Export Selection
                </ListItemText>
                <Typography variant="body2" sx={{ color: 'text.secondary', pl: 2 }}>
                  (0)
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </Stack>
        <Stack>
          <Box ref={refAnchorPrintOut}>
            <Button
              variant="outlined"
              size="medium"
              startIcon={<PrintOutlinedIcon />}
              onClick={() => {
                setShowMenuPrintOut(true)
              }}
            >
              Print Out Table
            </Button>
          </Box>
          <Menu
            anchorEl={refAnchorPrintOut.current}
            open={showMenuPrintOut}
            keepMounted={false}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            onClose={() => {
              setShowMenuPrintOut(false)
            }}
            elevation={2}
            sx={{ mt: '-32px' }}
          >
            <MenuList sx={{ p: 0 }}>
              <MenuItem tabIndex={999} onClick={onClickPrintWholeDataset}>
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
              <MenuItem tabIndex={999} onClick={onClickPrintCurrentPage}>
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
              <MenuItem tabIndex={999} onClick={onClickPrintSelection}>
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
    )
  }

export default BottomToolbarCustomActions
