import { useMemo } from 'react'

import DataGenerator from '../DataGenerator'
import MasterTableWidget from '../../../widgets/master-table/MasterTableWidget'

export default function MasterTablePage() {
  const data = useMemo(() => {
    return DataGenerator.data()
  }, [])
  return <MasterTableWidget />
}
