import type { ReactNode } from 'react'
import {
  MRT_ShowHideColumnsButton,
  MRT_ToggleFiltersButton,
  MRT_ToggleFullScreenButton,
  MRT_ToggleGlobalFilterButton,
  type MRT_DensityState,
  type MRT_TableInstance,
} from 'material-react-table'
import Box from '@mui/material/Box'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import type { MasterTableContextData } from '../context/MasterTableContext'
import type { MasterTableData } from '../MasterTableTypings'

import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DensitySmallOutlinedIcon from '@mui/icons-material/DensitySmallOutlined'
import DensityMediumOutlinedIcon from '@mui/icons-material/DensityMediumOutlined'

const ToolbarInternalActions =
  (context: MasterTableContextData): (({ table }: { table: MRT_TableInstance<MasterTableData> }) => ReactNode) =>
  ({ table }: { table: MRT_TableInstance<MasterTableData> }) => {
    const { density } = table.getState()
    const enableDensityToggle = table.options.enableDensityToggle
    const isFilterDisplayModePopover = table.options.columnFilterDisplayMode === 'popover'

    const onChangeDensity = (density: MRT_DensityState) => {
      table.setDensity(density)
    }

    const onExportData = () => {
      context.onExportData('EXPORT_DATASET', [])
    }

    const onPrintOutTable = () => {
      context.onPrintOutTable('PRINT_OUT_DATASET', [])
    }

    return (
      <>
        <MRT_ToggleGlobalFilterButton table={table} />
        {!isFilterDisplayModePopover ? <MRT_ToggleFiltersButton table={table} /> : <></>}
        <Box>
          <Tooltip title="Export Data">
            <IconButton tabIndex={101} onClick={onExportData}>
              <FileDownloadOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box>
          <Tooltip title="Print Out">
            <IconButton tabIndex={102} onClick={onPrintOutTable}>
              <PrintOutlinedIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <MRT_ShowHideColumnsButton table={table} />
        {enableDensityToggle ? (
          <Box>
            {density === 'compact' ? (
              <Tooltip title="Comfortable View">
                <IconButton
                  onClick={() => {
                    onChangeDensity('comfortable')
                  }}
                  tabIndex={101}
                >
                  <DensityMediumOutlinedIcon />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="Compact View">
                <IconButton
                  onClick={() => {
                    onChangeDensity('compact')
                  }}
                  tabIndex={101}
                >
                  <DensitySmallOutlinedIcon />
                </IconButton>
              </Tooltip>
            )}
          </Box>
        ) : (
          <></>
        )}
        <MRT_ToggleFullScreenButton table={table} />
      </>
    )
  }

export default ToolbarInternalActions
