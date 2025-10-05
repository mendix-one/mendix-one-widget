import { useMemo } from 'react'

import DataGenerator from '../DataGenerator'
import MasterTableWidget from '../../../widgets/master-table/MasterTableWidget'
import type {
  MasterTablePropColumn,
  MasterTablePropItem,
  MasterTablePropOptions,
} from '../../../widgets/master-table/main/MasterTableTypings'

export default function MasterTablePage() {
  const items = useMemo((): MasterTablePropItem[] => {
    return DataGenerator.data() as MasterTablePropItem[]
  }, [])

  const columns = useMemo((): MasterTablePropColumn[] => {
    return [] as MasterTablePropColumn[]
  }, [])

  const options = useMemo((): MasterTablePropOptions => {
    return {} as MasterTablePropOptions
  }, [])
  return <MasterTableWidget items={items} columns={columns} options={options} />
}
