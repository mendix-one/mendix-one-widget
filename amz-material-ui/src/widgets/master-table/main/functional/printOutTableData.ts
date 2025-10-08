import { jsPDF } from 'jspdf'
import { autoTable, type ColumnInput, type RowInput, type Styles } from 'jspdf-autotable'
import type { MRT_Column } from 'material-react-table'
import type { MasterTableData } from '../MasterTableTypings'

const generatePDFWithAutoTable = (
  title: string,
  columns: ColumnInput[],
  rows: RowInput[],
  columnStyles: {
    [key: string]: Partial<Styles>
  },
) => {
  const filename = title.replace(/([^a-zA-Z0-9]+)/gi, '_')
  const doc = new jsPDF()

  autoTable(doc, {
    columnStyles,
    columns,
    body: rows,
  })

  doc.save(`${filename}.pdf`)
}

export const printOutTableData = (title: string, columns: MRT_Column<MasterTableData>[], data: MasterTableData[]) => {
  const headers = columns.map((x) => {
    return {
      dataKey: x.columnDef.id,
      header: x.columnDef.header,
    }
  })
  generatePDFWithAutoTable(title, headers, data as RowInput[], {})
}

export default {
  printOutTableData,
}
