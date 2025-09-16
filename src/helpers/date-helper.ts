function convertToISOStringMidnight(date: Date) {
  const formatedDate = date
  formatedDate.setUTCHours(0)
  formatedDate.setUTCMinutes(0)
  formatedDate.setUTCSeconds(0)
  formatedDate.setUTCMilliseconds(0)

  return formatedDate.toISOString().split('.')[0]
}

function getIsoString(date: Date) {
  var tzo = -date.getTimezoneOffset(),
    dif = tzo >= 0 ? '+' : '-',
    pad = function (num: number) {
      return (num < 10 ? '0' : '') + num
    }

  return (
    date.getFullYear() +
    '-' +
    pad(date.getMonth() + 1) +
    '-' +
    pad(date.getDate()) +
    'T' +
    pad(date.getHours()) +
    ':' +
    pad(date.getMinutes()) +
    ':' +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ':' +
    pad(Math.abs(tzo) % 60)
  )
}

function formatDateToDayMonthDMY(dateStr: string): string | undefined {
  if (!dateStr) return

  // Normalize: remove dashes if present → "YYYYMMDD"
  const normalized = dateStr.replace(/-/g, '')

  if (normalized.length !== 8) return

  const year = Number(normalized.slice(0, 4))
  const month = Number(normalized.slice(4, 6))
  const day = Number(normalized.slice(6, 8))

  if (isNaN(year) || isNaN(month) || isNaN(day) || month < 1 || month > 12 || day < 1 || day > 31) {
    return
  }

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

  return `${day} ${monthNames[month - 1]}`
}

export { getIsoString, convertToISOStringMidnight, formatDateToDayMonthDMY }
