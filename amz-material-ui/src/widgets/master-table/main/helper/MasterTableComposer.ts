import type {
  MRT_ColumnDef,
  MRT_DisplayColumnDef,
  MRT_TableOptions,
  MRT_TableState,
  MRT_Theme,
} from 'material-react-table'
import type { MasterTableData } from '../MasterTableTypings'
import type { PaginationProps } from '@mui/material/Pagination'
import type { TableCellProps } from '@mui/material/TableCell'
import type { TableContainerProps } from '@mui/material/TableContainer'
import type { TableBodyProps } from '@mui/material/TableBody'
import type { TableRowProps } from '@mui/material/TableRow'
import type { PaperProps } from '@mui/material/Paper'
import type { TableHeadProps } from '@mui/material/TableHead'
import type { TableProps } from '@mui/material/Table'
import type { BoxProps } from '@mui/material/Box'
import type { AlertProps } from '@mui/material/Alert'
import type { CheckboxProps } from '@mui/material/Checkbox'
import type { DatePickerProps } from '@mui/x-date-pickers/DatePicker'
import type { DateTimePickerProps } from '@mui/x-date-pickers/DateTimePicker'
import type { SliderProps } from '@mui/material/Slider'
import type { TextFieldProps } from '@mui/material/TextField'
import type { TimePickerProps } from '@mui/x-date-pickers/TimePicker'

import { alpha } from '@mui/material'
import { lime, brown, amber, grey, blueGrey, common } from '@mui/material/colors'
// import type { Theme } from '@mui/material/styles'

import type { MasterTableContextData } from '../context/MasterTableContext'
import MasterTableRender from '../render'
import icons from './MasterTableIcons'

/**
 *  Init table option
 *
 * @param context
 * @returns MRT_TableOptions<MasterTableData>
 */
export const init = (context: MasterTableContextData): MRT_TableOptions<MasterTableData> => {
  // const mrtTheme = (theme: Theme): Partial<MRT_Theme> => {
  const mrtTheme = (): Partial<MRT_Theme> => {
    return {
      baseBackgroundColor: common.white,
      // cellNavigationOutlineColor: '',
      draggingBorderColor: alpha(grey[300], 0.35),
      // matchHighlightColor: '',
      // menuBackgroundColor: '',
      pinnedRowBackgroundColor: brown[50],
      selectedRowBackgroundColor: amber[50],
    } as Partial<MRT_Theme>
  }

  const muiTablePaperProps = {
    elevation: 1,
    sx: {
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      maxHeight: '100%',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as PaperProps
  const muiTableContainerProps = {
    sx: {
      width: '100%',
      height: 'calc(100% - 56px - 56px)',
      maxWidth: '100%',
      maxHeight: 'calc(100% - 56px - 56px)',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
      borderTop: 1,
      borderBottom: 1,
      borderColor: alpha(grey[400], 0.5),
    },
  } as TableContainerProps
  const muiTableProps = {
    sx: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as TableProps

  const muiTopToolbarProps = {
    sx: {
      width: '100%',
      height: '56px',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
      '& > div': { width: '100%', height: '56px', alignItems: 'center' },
    },
  } as BoxProps
  const muiBottomToolbarProps = {
    sx: {
      width: '100%',
      height: '56px',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
      boxShadow: 0,
      '& > div': { width: '100%', height: '56px', alignItems: 'center' },
    },
  } as BoxProps
  const muiToolbarAlertBannerProps = {
    sx: {
      backgroundColor: common.white,
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as AlertProps

  const muiTableHeadProps = {
    sx: {},
  } as TableHeadProps
  const muiTableHeadRowProps = {
    sx: {
      boxShadow: 0,
      backgroundColor: blueGrey[100],
    },
  } as TableRowProps
  const muiTableHeadCellProps = {
    sx: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
      boxShadow: 0,
      '& > div': { minHeight: 28 },
      '&[data-pinned="true"]:before': {
        boxShadow: 0,
        backgroundColor: blueGrey[100],
      },
    },
  } as TableCellProps

  const muiTableBodyProps = {} as TableBodyProps
  const muiTableBodyRowProps = {
    sx: {
      backgroundColor: common.white,
      '&:nth-of-type(odd):not([data-pinned="true"]):not([data-selected="true"])': {
        backgroundColor: common.white,
      },
      '&:nth-of-type(even):not([data-pinned="true"]):not([data-selected="true"])': {
        backgroundColor: grey[50],
      },
      '&:not([data-pinned="true"]):not([data-selected="true"]):hover': {
        backgroundColor: grey[100],
      },
      '&:[data-pinned="true"]:not([data-selected="true"])': {
        backgroundColor: brown[50],
      },
      '&:[data-pinned="true"]:not([data-selected="true"]):hover': {
        backgroundColor: brown[100],
      },
      '&:not([data-pinned="true"]):[data-selected="true"]': {
        backgroundColor: amber[50],
      },
      '&:not([data-pinned="true"]):[data-selected="true"]:hover': {
        backgroundColor: amber[100],
      },
      '&:[data-pinned="true"]:[data-selected="true"]': {
        backgroundColor: amber[50],
      },
      '&:[data-pinned="true"]:[data-selected="true"]:hover': {
        backgroundColor: amber[100],
      },
      '&.Mui-selected': {
        backgroundColor: amber[50],
      },
      '&.Mui-selected:hover': {
        backgroundColor: amber[100],
      },
      '& > td:before': {
        backgroundColor: alpha(common.white, 0.000000001),
      },
      '& > td:after': {
        backgroundColor: alpha(common.white, 0.000000001),
      },
      '& > td[data-pinned="true"]:before': {
        backgroundColor: alpha(lime[100], 0.25),
      },
    },
  } as TableRowProps
  const muiTableBodyCellProps = {
    sx: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
      backgroundColor: alpha(common.white, 0.000000001),
      '&[data-pinned="true"]': {
        backgroundColor: alpha(blueGrey[100], 0.25),
      },
      '&[data-pinned="true"]:before': {
        backgroundColor: alpha(blueGrey[100], 0.25),
      },
    },
  } as TableCellProps

  const muiPaginationProps = {
    rowsPerPageOptions: [100, 50, 30, 20, 15, 10, 5],
    showFirstButton: true,
    showLastButton: true,
    color: 'primary',
    shape: 'rounded',
    showRowsPerPage: true,
    variant: 'outlined',
    size: 'medium',
  } as Partial<PaginationProps>

  // const muiFilterAutocompleteProps = {} as AutocompleteProps
  const muiFilterCheckboxProps = {} as CheckboxProps
  const muiFilterDatePickerProps = {} as DatePickerProps
  const muiFilterDateTimePickerProps = {} as DateTimePickerProps
  const muiFilterSliderProps = {} as SliderProps
  const muiFilterTextFieldProps = {} as TextFieldProps
  const muiFilterTimePickerProps = {} as TimePickerProps

  const muiSelectCheckboxProps = {} as CheckboxProps
  const muiSelectAllCheckboxProps = {} as CheckboxProps

  const primaryOptions = {
    layoutMode: 'grid',

    enableGlobalFilter: true,
    enableDensityToggle: false,
    enableFullScreenToggle: true,

    enableTopToolbar: true,
    enableBottomToolbar: true,

    enableStickyHeader: true,
    enableStickyFooter: false,
    enableTableHead: true,
    enableTableFooter: false,

    enableHiding: true,
    enableSorting: true,
    enableSelectAll: true,
    enableGrouping: true,
    enableRowActions: true,

    enableColumnPinning: true,
    enableColumnResizing: true,
    enableColumnOrdering: true,
    enableColumnDragging: true,
    enableColumnActions: true,

    enableFilters: true,
    enableFacetedValues: false,
    enableColumnFilters: true,
    enableColumnFilterModes: true,
    enableFilterMatchHighlighting: true,
    columnFilterDisplayMode: 'popover',

    enableRowSelection: true,
    enableMultiRowSelection: true,
    enableBatchRowSelection: true,

    selectAllMode: 'page',
    editDisplayMode: 'modal',
    positionActionsColumn: 'last',
    positionCreatingRow: 'bottom',
    positionGlobalFilter: 'right',

    enablePagination: true,
    positionPagination: 'bottom',
    paginationDisplayMode: 'pages',

    positionToolbarAlertBanner: 'none',
    positionToolbarDropZone: 'none',
  } as unknown as Partial<MRT_TableOptions<MasterTableData>>

  const defaultColumn = {
    minSize: 60,
    maxSize: 1000,
    size: 180,
  } as Partial<MRT_ColumnDef<MasterTableData>>

  const defaultDisplayColumn = {
    enableColumnActions: false,
    enableColumnDragging: false,
    enableColumnFilter: false,
    enableColumnFilterModes: false,
    enableColumnOrdering: false,
    enableColumnResizing: false,
    enableGlobalFilter: false,
    enableGrouping: false,
    enableHiding: false,
    enablePinning: false,
    enableResizing: false,
    enableSorting: false,
    sortUndefined: -1,
    sortDescFirst: false,
    grow: false,
    minSize: 40,
    maxSize: 200,
  } as Partial<MRT_ColumnDef<MasterTableData>>

  const displayColumnDefOptions = {
    'mrt-row-expand': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
      minSize: 42,
      grow: false,
      size: 44, // 14 * 1 + 28 | 14 * 1.5 + 40
    },
    'mrt-row-select': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
      minSize: 42,
      grow: false,
      size: 44, // 14 * 1 + 28 | 14 * 1.5 + 40
    },
    'mrt-row-numbers': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
      minSize: 42,
      grow: false,
      size: 44, // 14 * 1 + 28 | 14 * 1.5 + 40
    },
    'mrt-row-actions': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
      minSize: 44,
      grow: false,
      size: 80, // 14 * 1 + 30 * 2 | 14 * 1.5 + 40 * 2
    },
    'mrt-row-drag': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
    },
    'mrt-row-spacer': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
    },
    'mrt-row-pin': {
      columnDefType: 'display',
      enableClickToCopy: false,
      enableColumnActions: false,
      enableColumnDragging: false,
      enableColumnFilter: false,
      enableColumnOrdering: false,
      enableEditing: false,
      enableGlobalFilter: false,
      enableGrouping: false,
      enableHiding: false,
      enableResizing: false,
      enableSorting: false,
    },
  } as Partial<MRT_DisplayColumnDef<MasterTableData>>

  const initialState = {
    density: 'compact',
    showColumnFilters: false,
    showGlobalFilter: false,
    columnPinning: {
      left: ['mrt-row-expand', 'mrt-row-select', 'mrt-row-numbers'],
      right: ['mrt-row-actions'],
    },
    pagination: {
      pageIndex: 0,
      pageSize: 10, //customize the default page size
    },
  } as Partial<MRT_TableState<MasterTableData>>

  return {
    ...primaryOptions,
    mrtTheme,
    icons,

    defaultColumn,
    defaultDisplayColumn,
    displayColumnDefOptions,

    muiTablePaperProps,
    muiTableContainerProps,
    muiTableProps,

    muiTopToolbarProps,
    muiBottomToolbarProps,
    muiToolbarAlertBannerProps,

    muiTableHeadProps,
    muiTableHeadRowProps,
    muiTableHeadCellProps,
    muiTableBodyProps,
    muiTableBodyRowProps,
    muiTableBodyCellProps,

    muiPaginationProps,

    muiFilterCheckboxProps,
    muiFilterDatePickerProps,
    muiFilterDateTimePickerProps,
    muiFilterSliderProps,
    muiFilterTextFieldProps,
    muiFilterTimePickerProps,

    muiSelectCheckboxProps,
    muiSelectAllCheckboxProps,

    renderToolbarInternalActions: MasterTableRender.renderToolbarInternalActions(context),
    renderTopToolbarCustomActions: MasterTableRender.renderTopToolbarCustomActions(context),
    renderBottomToolbarCustomActions: MasterTableRender.renderBottomToolbarCustomActions(context),
    renderRowActions: MasterTableRender.renderRowActions(context),

    initialState,
  } as MRT_TableOptions<MasterTableData>
}

export default { init }
