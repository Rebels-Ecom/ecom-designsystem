function getisErroneousStyle(styles: CSSModuleClasses, isErroneous?: boolean): string {
  if (isErroneous) {
    return styles.error
  }

  return ''
}

const detectAutofill = (element: any) => {
  console.log(typeof window);
  if (typeof window === 'undefined') return;

  
  console.log(window.getComputedStyle(element, null).getPropertyValue('appearance'));
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(window.getComputedStyle(element, null).getPropertyValue('appearance') === 'menulist-button')
    }, 600)
  })
}

export { getisErroneousStyle, detectAutofill }

