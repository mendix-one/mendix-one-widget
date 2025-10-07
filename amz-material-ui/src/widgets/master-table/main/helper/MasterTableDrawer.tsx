import type { ReactNode } from 'react'
import type { MRT_Cell, MRT_Column, MRT_ColumnDef, MRT_Header, MRT_Row, MRT_TableInstance } from 'material-react-table'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import type { MasterTableColumnMeta, MasterTableData } from '../MasterTableTypings'
import type { MasterTableContextData } from '../context/MasterTableContext'

import { grey } from '@mui/material/colors'

import CopyAllOutlinedIcon from '@mui/icons-material/CopyAllOutlined'
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined'
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined'
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined'

type MasterTableHeaderProps = {
  column: MRT_Column<MasterTableData>
  header: MRT_Header<MasterTableData>
  table: MRT_TableInstance<MasterTableData>
}

// eslint-disable-next-line react-refresh/only-export-components
const MasterTableHeader = ({ column }: MasterTableHeaderProps) => (
  <Tooltip title={column.columnDef.header} placement="top">
    <Box sx={{ width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
      {column.columnDef.header}
    </Box>
  </Tooltip>
)

type MasterTableCellProps = {
  cell: MRT_Cell<MasterTableData, unknown>
  column: MRT_Column<MasterTableData, unknown>
  renderedCellValue: ReactNode
  row: MRT_Row<MasterTableData>
  rowRef?: React.RefObject<HTMLTableRowElement | null>
  staticColumnIndex?: number
  staticRowIndex?: number
  table: MRT_TableInstance<MasterTableData>
}

// eslint-disable-next-line react-refresh/only-export-components
const MasterTableCell = ({ cell, column, table }: MasterTableCellProps) => {
  const { density } = table.getState()
  const size = density === 'compact' ? 'small' : 'medium'

  const meta =
    (column.columnDef.meta as MasterTableColumnMeta) ||
    ({
      display: 'Text',
      action: undefined,
    } as MasterTableColumnMeta)

  let display = ''
  let textAlign = 'left'

  const value = cell.getValue()

  if (meta.display === 'Text') {
    textAlign = 'left'
  } else if (meta.display === 'Integer') {
    textAlign = 'right'
  } else if (meta.display === 'Decimal') {
    textAlign = 'right'
  } else if (meta.display === 'Currency') {
    textAlign = 'right'
  } else if (meta.display === 'Date') {
    textAlign = 'right'
  } else if (meta.display === 'Time') {
    textAlign = 'right'
  } else if (meta.display === 'Label') {
    textAlign = 'center'
  } else if (meta.display === 'Tags') {
    textAlign = 'center'
  }

  if (typeof value === 'string') {
    display = value.trim()
  } else if (typeof value === 'number') {
    display = value.toFixed(2)
  } else if (value instanceof Date) {
    display = value.toLocaleDateString()
  } else {
    // eslint-disable-next-line no-extra-boolean-cast
    display = !!value ? `${value}` : ''
  }

  if (meta.display !== 'Currency' && !meta.icon && !meta.action) {
    return (
      <Tooltip title={display} placement="top-start">
        <Box sx={{ width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', textAlign }}>
          {display}
        </Box>
      </Tooltip>
    )
  }

  return (
    <Stack
      direction="row"
      spacing={0}
      sx={{
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      {meta.display === 'Currency' ? <Stack sx={{ flexGrow: 0, width: 30 }}>$</Stack> : <></>}
      {meta.display !== 'Currency' && meta.icon ? (
        <Stack sx={{ flexGrow: 0, width: 30, color: grey[400] }}>
          <Tooltip title={display} placement="top-start">
            <Typography variant="caption" sx={{ color: grey[400], '&:hover': { color: grey[700] } }}>
              {meta.icon}
            </Typography>
          </Tooltip>
        </Stack>
      ) : (
        <></>
      )}
      <Stack
        sx={{
          flexGrow: 1,
          width: `calc(100% - ${meta.display !== 'Currency' && !meta.icon ? 0 : 30}px - ${!meta.action ? 0 : 30}px)`,
        }}
      >
        <Tooltip title={display} placement="top-start">
          <Box sx={{ width: '100%', textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden', textAlign }}>
            {display}
          </Box>
        </Tooltip>
      </Stack>
      {meta.action === 'Copy' ? (
        <Stack sx={{ flexGrow: 0, width: 30 }}>
          <Tooltip title="Copy" placement="top-start">
            <IconButton size="small" sx={{ color: grey[400], '&:hover': { color: grey[700] } }}>
              <CopyAllOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <></>
      )}
      {meta.action === 'Open' ? (
        <Stack sx={{ flexGrow: 0, width: 30 }}>
          <Tooltip title="Open" placement="top-start">
            <IconButton size="small" sx={{ color: grey[400], '&:hover': { color: grey[700] } }}>
              <InsertLinkOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <></>
      )}
      {meta.action === 'Custom' ? (
        <Stack sx={{ flexGrow: 0, width: 30 }}>
          <Tooltip title="Options" placement="top-start">
            <IconButton size="small" sx={{ opacity: 0.5, '&:hover': { opacity: 1 } }}>
              <MoreVertOutlinedIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Stack>
      ) : (
        <></>
      )}
    </Stack>
  )
}
/**
 * Generate columns
 *
 * @param context
 * @returns
 */
const columns = (context: MasterTableContextData): MRT_ColumnDef<MasterTableData>[] => {
  return [
    {
      accessorKey: 'id',
      header: 'ID',
      meta: {
        display: 'Integer',
        action: undefined,
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'name',
      header: 'Name',
      meta: {
        display: 'Text',
        action: 'Copy',
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'category',
      header: 'Category',
      meta: {
        display: 'Text',
        action: 'Open',
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'type',
      header: 'Type',
      meta: {
        display: 'Text',
        action: 'Open',
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'brand',
      header: 'Brand',
      meta: {
        display: 'Text',
        action: 'Open',
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'price',
      header: 'Unit Price',
      meta: {
        display: 'Currency',
        action: undefined,
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'stockQuantity',
      header: 'Stock Quantity',
      meta: {
        display: 'Integer',
        action: 'Custom',
        icon: <InventoryOutlinedIcon fontSize="small" />,
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
    {
      accessorKey: 'importedDate',
      header: 'Imported Date',
      meta: {
        display: 'Date',
        action: undefined,
      } as MasterTableColumnMeta,
      Header: MasterTableHeader,
      Cell: MasterTableCell,
    },
  ] as MRT_ColumnDef<MasterTableData>[]
}

export default {
  columns,
}
