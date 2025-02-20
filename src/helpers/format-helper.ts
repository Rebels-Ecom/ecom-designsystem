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

export { capitalizeFirstLetter, convertNumToStr, getQuantityString }
