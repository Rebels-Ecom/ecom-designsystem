function getisErroneousStyle(styles: CSSModuleClasses, isErroneous?: boolean): string {
  if (isErroneous) {
    return styles.error
  }

  return ''
}

const detectAutofill = (element: any) => {
  if (typeof window === 'undefined') return;
  
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(window.getComputedStyle(element, null).getPropertyValue('appearance') === 'menulist-button')
    }, 600)
  })
}

export { getisErroneousStyle, detectAutofill }

