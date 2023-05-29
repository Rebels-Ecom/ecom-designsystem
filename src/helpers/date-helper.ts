function convertToISOStringMidnight(date:Date) {
    const formatedDate = date
    formatedDate.setUTCHours(0)
    formatedDate.setUTCMinutes(0)
    formatedDate.setUTCSeconds(0)
    formatedDate.setUTCMilliseconds(0)

    return formatedDate.toISOString().split(".")[0]
}

export {convertToISOStringMidnight}


function getIsoString(date: Date) {
    var tzo = -date.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num: number) {
            return (num < 10 ? '0' : '') + num;
        };
  
    return date.getFullYear() +
        '-' + pad(date.getMonth() + 1) +
        '-' + pad(date.getDate()) +
        'T' + pad(date.getHours()) +
        ':' + pad(date.getMinutes()) +
        ':' + pad(date.getSeconds()) +
        dif + pad(Math.floor(Math.abs(tzo) / 60)) +
        ':' + pad(Math.abs(tzo) % 60);
  }

  export { getIsoString }