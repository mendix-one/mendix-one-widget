const uuidv4 = () => {
  return 'dadsddd'
}

/**
 *
 * @param dateFrom
 * @returns new date of previous closest quarter
 */
const prevQuarterFrom = (dateFrom: Date): Date => {
  const [sMonth, sYear] = [dateFrom.getMonth(), dateFrom.getFullYear()]
  const sQuarter = Math.ceil((sMonth + 1) / 3)

  if (sQuarter === 1) {
    const nYear = sYear - 1
    const nMonth = 11
    const nDate = 31
    return new Date(nYear, nMonth, nDate)
  } else {
    const nQuarter = sQuarter - 1
    const nMonth = nQuarter * 3 - 1
    const nDate = nMonth === 2 || nMonth === 11 ? 31 : 30
    return new Date(sYear, nMonth, nDate)
  }
}

/**
 * return list of category and it's height
 * if category' orderNo is continous, increase it's height
 * and ignore the merged category
 * @param list of pra categories
 */
const mergeVerticalCategory = (categoriesByLineup: any[]) => {
  const singleCtgs = [] as any[]
  for (let i = 0; i < categoriesByLineup.length; i++) {
    const currOrder = categoriesByLineup[i].orderNo
    if (i === 0) {
      singleCtgs.push({
        cIdx: i,
        height: 1,
      })
    }

    if (i < categoriesByLineup.length - 1) {
      const nextOrder = categoriesByLineup[i + 1].orderNo
      if (nextOrder - currOrder === 1) {
        // increase height of closet object
        const ctgObj = singleCtgs[singleCtgs.length - 1] as { cIdx: string; height: number }
        ctgObj.height++
        singleCtgs[singleCtgs.length - 1] = ctgObj
        continue
      } else {
        singleCtgs.push({
          cIdx: i + 1,
          height: 1,
        })
      }
    }
  }
  return singleCtgs
}


/**
 * convert datasource solution item into chart type
 * group by key: chip code + density + plane + product
 * @param _props
 */
// group by unique key: controller interface + product channel + product capacity
const lineups = (sourceSolutionItems: any[], categories: any[], praItems: any[]): any[] => {
  const lineups = [] as any[]

  // loop each pra group
  for (let i = 0; i < praItems.length; i++) {
    const praItem = praItems[i]
    const praSolutionItems = sourceSolutionItems.filter((sourceItem) => sourceItem.praKey === praItem.key)
    if (!praSolutionItems || praSolutionItems.length < 1) continue

    const productKeyMap = praSolutionItems.map((sol) => sol.coverageProductKey)
    const productKeySet: Set<String> = new Set(productKeyMap)

    console.log(`productKeySet: ${productKeySet}`)

    productKeySet.forEach((productKey) => {
      const solutionItemsByProduct = praSolutionItems.filter((item) => item.coverageProductKey === productKey)
      solutionItemsByProduct.sort((a, b) => a.solutionDate.getTime() - b.solutionDate.getTime())

      const sourceItem = solutionItemsByProduct[0]

      console.log(`sourceItem: ${JSON.stringify(sourceItem, null, 2)}`)

      // get list categories from merge categories and order it
      // set category = lowest order category
      // change lineup height by first continous category
      // if there are a list of categories but the list is not in a continous order, split it into many single items?
      const mergeCategories = sourceItem.mergeCategories
      const categoriesByLineup = categories
        .filter((c) => mergeCategories.indexOf(c.key) >= 0)
        .sort((a, b) => a.orderNo - b.orderNo)

      const praCategories = mergeVerticalCategory(categoriesByLineup)

      // for each category, create a lineup item
      praCategories.forEach((ctg) => {
        const startCategory = categoriesByLineup[ctg.cIdx as number]
        const height = ctg.height

        const lineupItem = {} as any
        lineupItem.guid = uuidv4()
        lineupItem.chipCode = sourceItem.chipCode
        lineupItem.density = sourceItem.density + sourceItem.densityUnit
        lineupItem.ioSpeed = sourceItem.ioSpeed + 'Gbps'
        lineupItem.plane = sourceItem.plane
        lineupItem.controller = sourceItem.controller
        lineupItem.productName = sourceItem.productName
        lineupItem.height = height
        lineupItem.categoryGuid = startCategory.guid || ''

        lineupItem.praGuid = praItem.guid
        lineupItem.generation = praItem.generation

        // get seperate date by category
        // should find the max end date of all categories ?
        // if height > 1, find the min date from merged categories
        
        let sourceItemByCategory = praSolutionItems.filter((source) => source.categoryKey === startCategory.key)
        if (height > 1) {
          const startOrderNo = startCategory.orderNo
          const mergedVerticalCtgs = categoriesByLineup.filter(ct => ct.orderNo >= startOrderNo && ct.orderNo < startOrderNo + height)
          const mergedVertialKeys = mergedVerticalCtgs.map(ct => ct.key)
          sourceItemByCategory = praSolutionItems.filter((source) => mergedVertialKeys.includes(source.categoryKey))
        }

        console.log('sourceItemByCategory', JSON.stringify(sourceItemByCategory, null, 2))

        const minSourceItem = sourceItemByCategory.sort(
          (a, b) => a.solutionDate.getTime() - b.solutionDate.getTime(),
        )[0]

        console.log('minSourceItem', JSON.stringify(minSourceItem, null, 2))
        lineupItem.startDate = new Date(minSourceItem.solutionDate)

        if (praItem.endDate && praItem.endDate.getFullYear() !== 1970) {
          lineupItem.endDate = prevQuarterFrom(praItem.endDate)
        } else {
          const maxSourceItem = sourceItemByCategory.sort(
            (a, b) => b.solutionEndDate.getTime() - a.solutionEndDate.getTime(),
          )[0]
          lineupItem.endDate = new Date(maxSourceItem.solutionEndDate)
        }

        if (
          lineupItem.endDate.getTime() < lineupItem.startDate.getTime() ||
          lineupItem.endDate.getFullYear() === 1970
        ) {
          lineupItem.endDate = new Date(lineupItem.startDate)
        }

        lineups.push(lineupItem)
      })
    })
  }

  return lineups
}


const sourceSolutionItems = JSON.parse(
  '[{"id":"68116944363979053","chipCode":"T3","plane":"","density":128,"densityUnit":"Gb","ioSpeed":"1.2","appLevel":"DC","dieCd":"B","controller":"Duomo","interfaceCd":"0001","interfaceName":"NVMe","productCd":"16","productName":"t test3","channelName":"8 채널","capacity":"256","capacityUnit":"GB","solutionDate":"2025-04-21T14:59:59.999Z","solutionEndDate":"2025-08-19T14:59:59.999Z","praDate":"2025-01-31T14:59:59.999Z","praKey":"T3#DC#1.2#B","categoryKey":"NVMe#8 채널#256GB","coverageProductKey":"T3#128Gb##t test3","mergeCategories":["NVMe#8 채널#256GB","NVMe#8 채널#512GB"]},{"id":"68116944363979054","chipCode":"T3","plane":"","density":128,"densityUnit":"Gb","ioSpeed":"1.2","appLevel":"DC","dieCd":"B","controller":"Duomo","interfaceCd":"0001","interfaceName":"NVMe","productCd":"16","productName":"t test3","channelName":"8 채널","capacity":"512","capacityUnit":"GB","solutionDate":"2025-02-03T14:59:59.999Z","solutionEndDate":"2025-08-31T14:59:59.999Z","praDate":"2025-01-31T14:59:59.999Z","praKey":"T3#DC#1.2#B","categoryKey":"NVMe#8 채널#512GB","coverageProductKey":"T3#128Gb##t test3","mergeCategories":["NVMe#8 채널#256GB","NVMe#8 채널#512GB"]}]',
)
const categories = JSON.parse(
  '[{"guid":"fb656c45-423e-4dff-adcd-37e3a06efd87","interface":"NVMe","channel":"8 채널","capacity":"256GB","orderNo":0,"key":"NVMe#8 채널#256GB"},{"guid":"2eb46b40-3210-4845-88a9-2a83c10445ed","interface":"NVMe","channel":"8 채널","capacity":"512GB","orderNo":1,"key":"NVMe#8 채널#512GB"}]',
)
const praItems = JSON.parse(
  '[{"chipCode":"T3","density":"128Gb","startDate":"2025-01-31T14:59:59.999Z","endDate":"1970-01-01T00:00:00.000Z","generation":"8 세대","generationNo":null,"key":"T3#DC#1.2#B","guid":"1688849860264237"}]',
)

sourceSolutionItems.forEach((x: { solutionDate: any; solutionEndDate: any; praDate: any }) => {
  x.solutionDate = new Date(x.solutionDate)
  x.solutionEndDate = new Date(x.solutionEndDate)
  x.praDate = new Date(x.praDate)
})

praItems.forEach((x: { startDate: any; endDate: any }) => {
  x.startDate = new Date(x.startDate)
  x.endDate = new Date(x.endDate)
})

const result = lineups(sourceSolutionItems, categories, praItems)

console.log('RESULTS', JSON.stringify(result, null, 2))
