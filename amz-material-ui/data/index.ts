import * as fs from 'fs' // For Node.js environments

function getRandomInt(min: number = 1, max: number = 100): number {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function dashToCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (match, char) => char.toUpperCase())
}

const dataTypes = {
  productId: 1,
  gearName: 0,
  brand: 0,
  categories: 0,
  subCategories: 0,
  color: 0,
  price: 2,
  numImages: 1,
  shortDescription: 0,
  description: 0,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function csvToJson(csvText: string): any[] {
  const lines = csvText.split(/\r?\n/) // Split by new line, handling both \n and \r\n
  const headers = lines[0].split(',').map((header) => header.trim()) // Extract headers and trim whitespace

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonData: any[] = []

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim()
    if (!line) continue // Skip empty lines

    const data = line.split(',')
    if (data.length === headers.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const entry: any = {}
      for (let j = 0; j < headers.length; j++) {
        const key = dashToCamelCase(headers[j])

        entry[key] =
          dataTypes[key] === 1
            ? parseInt(data[j].trim())
            : dataTypes[key] === 2
              ? parseFloat(data[j].trim())
              : data[j].trim() // Assign data to header keys and trim whitespace

        entry['name'] = entry['gearName'] || 'Unknown'

        const categories = entry['categories']?.split('/') || []
        entry['category'] = categories[0]?.trim() || 'Others'

        const types = entry['subCategories']?.split('/') || []
        entry['type'] = types[types?.length - 1]?.trim() || 'Others'

        const qty = getRandomInt(10, 100)
        const importedDate = new Date()
        importedDate.setMonth(importedDate.getMonth() - 24 - qty)
        entry['stockQuantity'] = qty
        entry['importedDate'] = importedDate
      }

      jsonData.push({
        id: entry['productId'],
        name: entry['name'],
        category: entry['category'],
        type: entry['type'],
        brand: entry['brand'],
        color: entry['color'],
        price: entry['price'],

        stockQuantity: entry['stockQuantity'],
        importedDate: entry['importedDate'],

        description: entry['shortDescription'],

        categories: entry['categories'],
        subCategories: entry['subCategories'],
        content: entry['description'],
        imagesCount: entry['numImages'],
      })
    } else {
      console.warn(`Skipping malformed row: ${line}`)
    }
  }
  return jsonData
}

// Example usage with a file in Node.js:
const filePath = './data/motorcycle_gears.csv' // Replace with your CSV file path
try {
  const csvContent = fs.readFileSync(filePath, 'utf-8')
  const jsonResult = csvToJson(csvContent)
  fs.writeFileSync('./data/motorcycle_gears.json', JSON.stringify(jsonResult, null, 2))
  console.log('Successfully wrote data to motorcycle_gears.json')
} catch (error) {
  console.error('Error reading or processing CSV file:', error)
}
