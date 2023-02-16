function convertNumToStr(number:number) {
    return number.toFixed(2).toString().replace('.', ',');
  }

export {convertNumToStr}
