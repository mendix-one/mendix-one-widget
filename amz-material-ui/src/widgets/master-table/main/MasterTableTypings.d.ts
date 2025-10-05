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
