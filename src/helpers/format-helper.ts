interface PriceCalculationParams {
  unitPrice: number
  quantity: number | string
  unitNumber?: number
}

function convertNumToStr(number: number) {
  return number.toFixed(2).toString().replace('.', ',')
}

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase()
}

function getQuantityString(quantity: string, defaultValue: number = 1): string {
  const parsedQuantity = Number(quantity)

  if (!quantity || isNaN(parsedQuantity)) {
    return String(defaultValue)
  }

  if (parsedQuantity < 0) {
    return '0'
  }

  return String(parsedQuantity)
}

function calculateTotalPrice({ unitPrice, quantity, unitNumber = 1 }: PriceCalculationParams): string {
  const safeUnitPrice = Number.isFinite(unitPrice) ? Math.max(0, unitPrice) : 0
  const safeUnitNumber = Number.isFinite(unitNumber) ? Math.max(1, unitNumber) : 1

  const parsedQuantity = typeof quantity === 'string' ? parseFloat(quantity.replace(/,/g, '')) : Number(quantity)

  const safeQuantity = Number.isFinite(parsedQuantity) ? Math.max(0, parsedQuantity) : 0

  const rawTotal = safeUnitPrice * safeUnitNumber * safeQuantity

  return rawTotal.toLocaleString('sv-SE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

export { calculateTotalPrice, capitalizeFirstLetter, convertNumToStr, getQuantityString }
