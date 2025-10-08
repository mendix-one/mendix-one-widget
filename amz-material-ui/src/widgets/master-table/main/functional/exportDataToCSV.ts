import { mkConfig, generateCsv, download } from 'export-to-csv' //or use your library of choice here
import type { MasterTableData } from '../MasterTableTypings'
import type { MRT_Column } from 'material-react-table'

export type AcceptedData = number | string | boolean | null | undefined

type Header = { key: string; displayLabel: string }
type Row = { [k: string]: AcceptedData; [k: number]: AcceptedData }

const generateCSVFromData = (title: string, headers: Header[], rows: Row[]) => {
  const filename = title.replace(/([^a-zA-Z0-9]+)/gi, '_')

  const csvConfig = mkConfig({
    title,
    filename,
    fileExtension: 'csv',
    fieldSeparator: ';',
    decimalSeparator: '.',
    showColumnHeaders: true,
    columnHeaders: headers,
    useKeysAsHeaders: false,
  })
  const csv = generateCsv(csvConfig)(rows)
  download(csvConfig)(csv)
}

export const exportDataToCSV = (title: string, columns: MRT_Column<MasterTableData>[], data: MasterTableData[]) => {
  const headers = columns.map((x) => {
    return {
      key: x.columnDef.id,
      displayLabel: x.columnDef.header,
    }
  })
  const rows = [] as Row[]
  data.forEach((item) => {
    const row = {} as Row
    headers.forEach((header) => {
      const value = item[header.key]
      if (typeof value === 'string') {
        row[header.key] = value.trim()
      } else if (typeof value === 'number') {
        row[header.key] = value.toFixed(2)
      } else if (value instanceof Date) {
        row[header.key] = value.toLocaleDateString()
      } else {
        // eslint-disable-next-line no-extra-boolean-cast
        row[header.key] = !!value ? `${value}` : ''
      }
    })
    rows.push(row)
  })
  generateCSVFromData(title, headers, rows)
}

export default {
  exportDataToCSV,
}
