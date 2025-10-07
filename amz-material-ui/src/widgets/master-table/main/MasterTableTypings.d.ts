export type MasterTablePropItem = {
  [key: string]: number | string | boolean | Date
}

export type MasterTablePropColumn = {
  [key: string]: number | string | boolean | Date
}

export type MasterTablePropOptions = {
  [key: string]: number | string | boolean | Date
}

export type MasterTablePropParams = {
  [key: string]: number | string | boolean | Date
}

export type MasterTablePropAction = (action: string, index: number) => void
export type MasterTablePropBuilkAction = (action: string, selections: number[]) => void

export type MasterTableData = {
  amzoneuid: number
  [key: string]: number | string | boolean | Date
}

export type MasterTableColumnMeta = {
  display: 'Text' | 'Integer' | 'Decimal' | 'Currency' | 'Date' | 'Time' | 'DateTime' | 'Label' | 'Tags'
  action: 'Copy' | 'Open' | 'Custom' | undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any | undefined
  [key: string]: number | string | boolean | Date
}
