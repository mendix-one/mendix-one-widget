import type { MRT_ColumnDef } from 'material-react-table'
import type { MasterTableData } from '../MasterTableTypings'
import type { MasterTableContextData } from '../context/MasterTableContext'

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
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'category',
      header: 'Category',
    },
    {
      accessorKey: 'type',
      header: 'Type',
    },
    {
      accessorKey: 'brand',
      header: 'Brand',
    },
    {
      accessorKey: 'price',
      header: 'Unit Price',
      Cell: ({ cell }) =>
        cell.getValue<number>()?.toLocaleString?.('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
    },
    {
      accessorKey: 'stockQuantity',
      header: 'Sotck Quantity',
      Cell: ({ cell }) =>
        cell.getValue<number>()?.toLocaleString?.('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }),
    },
    {
      accessorKey: 'importedDate',
      header: 'Imported Date',
      Cell: ({ cell }) => cell.getValue<Date>()?.toLocaleDateString(),
    },
  ] as MRT_ColumnDef<MasterTableData>[]
}

export default {
  columns,
}
