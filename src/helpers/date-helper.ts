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

  const normalized = dateStr.replace(/[-]/g, '/')
  const parts = normalized.split('/')

  let day: number, month: number

  if (parts[0].length === 4) {
    // Format is YYYY/MM/DD
    ;[, month, day] = parts.map(Number)
  } else {
    // Format is DD/MM/YYYY
    ;[day, month] = parts.map(Number)
  }

  if (isNaN(day) || isNaN(month) || day < 1 || day > 31 || month < 1 || month > 12) return

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']

  return `${day} ${monthNames[month - 1]}`
}

export { getIsoString, convertToISOStringMidnight, formatDateToDayMonthDMY }
