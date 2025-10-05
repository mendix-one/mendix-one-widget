import { useMemo } from 'react'
import MasterTableMain from './main/MasterTableMain'
import type { MasterTablePropColumn, MasterTablePropItem, MasterTablePropOptions } from './main/MasterTableTypings'

export type MasterTableContainerProps = {
  items: MasterTablePropItem[]
  columns: MasterTablePropColumn[]
  options: MasterTablePropOptions
}

export default function MasterTableWidget(props: MasterTableContainerProps) {
  const items = useMemo((): MasterTablePropItem[] => {
    return props.items
  }, [props.items])

  const columns = useMemo((): MasterTablePropColumn[] => {
    return props.columns
  }, [props.columns])

  const options = useMemo((): MasterTablePropOptions => {
    return props.options
  }, [props.options])

  const onAction = (action: string) => {
    console.log(`onAction: ${action}`)
  }

  const onBuilkAction = (action: string) => {
    console.log(`onBuilkAction: ${action}`)
  }

  return (
    <MasterTableMain
      items={items}
      columns={columns}
      options={options}
      onAction={onAction}
      onBuilkAction={onBuilkAction}
    />
  )
}
