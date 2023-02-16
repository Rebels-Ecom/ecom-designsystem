function getisErroneousStyle(styles: CSSModuleClasses, isErroneous?: boolean): string {
  if (isErroneous) {
    return styles.error
  }

  return ''
}
export { getisErroneousStyle }
