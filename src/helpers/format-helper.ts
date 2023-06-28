function convertNumToStr(number:number) {
    return number.toFixed(2).toString().replace('.', ',');
  }

  function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLocaleLowerCase()
  }

export {convertNumToStr, capitalizeFirstLetter}
