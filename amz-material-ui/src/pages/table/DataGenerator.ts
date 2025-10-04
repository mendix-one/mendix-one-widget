import RawData from './RawData'

const data = () => {
  return RawData.map((x) => {
    return { ...x, importedDate: new Date(x.importedDate) }
  })
}

export default {
  data,
}
