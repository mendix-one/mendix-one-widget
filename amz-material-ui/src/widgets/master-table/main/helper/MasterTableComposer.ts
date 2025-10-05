import type { MRT_ColumnDef, MRT_DisplayColumnDef, MRT_TableOptions, MRT_TableState } from 'material-react-table'
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

import { blueGrey, common } from '@mui/material/colors'

/**
 * Init table option
 *
 * @returns MRT_TableOptions<MasterTableData>
 */
export const init = (): MRT_TableOptions<MasterTableData> => {
  const muiTablePaperProps = {
    sx: {
      backgroundColor: common.white,
      boxShadow: 1,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as PaperProps
  const muiTableContainerProps = {
    sx: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as TableContainerProps
  const muiTableProps = {
    sx: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as TableProps

  const muiTopToolbarProps = {
    sx: {
      backgroundColor: common.white,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as BoxProps
  const muiBottomToolbarProps = {
    sx: {
      backgroundColor: common.white,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as BoxProps
  const muiToolbarAlertBannerProps = {
    sx: {
      backgroundColor: common.white,
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as AlertProps

  const muiTableHeadProps = {
    sx: {
      backgroundColor: common.white,
    },
  } as TableHeadProps
  const muiTableHeadRowProps = {
    sx: {
      backgroundColor: blueGrey[100],
      boxShadow: 0,
    },
  } as TableRowProps
  const muiTableHeadCellProps = {
    sx: {
      fontWeight: 600,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
    },
  } as TableCellProps

  const muiTableBodyProps = {
    sx: {
      backgroundColor: common.white,
    },
  } as TableBodyProps
  const muiTableBodyRowProps = {
    sx: {
      backgroundColor: common.white,
    },
  } as TableRowProps
  const muiTableBodyCellProps = {
    sx: {
      fontWeight: 400,
      fontSize: '0.875rem',
      lineHeight: 1.42857142857143,
      letterSpacing: 0,
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
    enableDensityToggle: true,
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

  const defaultColumn = {} as Partial<MRT_ColumnDef<MasterTableData>>

  const defaultDisplayColumn = {
    enableColumnActions: true,
    enableColumnDragging: true,
    enableColumnFilter: true,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableColumnResizing: true,
    enableGlobalFilter: true,
    enableGrouping: true,
    enableHiding: true,
    enablePinning: true,
    enableResizing: true,
    enableSorting: true,
    sortUndefined: -1,
    sortDescFirst: false,
    grow: true,
    minSize: 80,
    maxSize: 100,
  } as Partial<MRT_ColumnDef<MasterTableData>>

  const displayColumnDefOptions = {
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
      grow: false,
      size: 60,
      minSize: 60,
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
      grow: false,
      size: 60,
      minSize: 60,
    },
  } as Partial<MRT_DisplayColumnDef<MasterTableData>>

  const initialState = {
    density: 'compact',
    showColumnFilters: false,
    showGlobalFilter: false,
    columnPinning: {
      left: ['mrt-row-expand', 'mrt-row-select'],
      right: ['mrt-row-actions'],
    },
    pagination: {
      pageIndex: 0,
      pageSize: 5, //customize the default page size
    },
  } as Partial<MRT_TableState<MasterTableData>>

  return {
    ...primaryOptions,
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

    initialState,
  } as MRT_TableOptions<MasterTableData>
}

export default { init }
