export type TLink = {
  href: string
  text?: string
  title: string
  isExternal?: boolean
  target?: string
}

/*
 TODO: Hämta från types efter merge från Sofies incheckning
*/

function isExternalLink(link: TLink): boolean {
  return !!(link.href && link.isExternal)
}

function isInternalLink(link: TLink, linkComponent: any): boolean {
  return !!(link.href && linkComponent)
}

export { isExternalLink, isInternalLink }