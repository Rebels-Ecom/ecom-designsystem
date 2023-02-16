import { RefObject, useLayoutEffect, useEffect } from 'react'

export default function useSetFocusOrder(popUpRef: RefObject<HTMLElement>, isOpen: boolean, focusableElementInside?: any) {
  const focusable = popUpRef.current?.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])')
  const firstFocusable = (focusable?.length ? focusable[0] : null) as HTMLElement | null

  useLayoutEffect(() => {
    const body = document.querySelector('body') as HTMLBodyElement

    if (isOpen) {
      setTimeout(() => {
        body.style.overflow = 'hidden'
        if (focusableElementInside.current) {
          focusableElementInside.current.focus()
        } else {
          firstFocusable?.focus()
        }
      }, 25)
    } else {
      body.style.overflow = 'visible'
    }
  }, [isOpen, focusableElementInside])

  useEffect(() => {
    isOpen ? document.addEventListener('focusout', setCorrectTabOrder) : document.removeEventListener('focusout', setCorrectTabOrder)
  }, [isOpen])

  const setCorrectTabOrder = (e: FocusEvent) => {
    const focusable = popUpRef?.current?.querySelectorAll('button, [href], input, select, textarea, video, [tabindex]:not([tabindex="-1"])')
    const firstFocusable = (focusable?.length ? focusable[0] : null) as HTMLElement | null
    const lastFocusable = focusable?.length ? focusable[focusable.length - 1] : null
    if (lastFocusable === e.target && firstFocusable) {
      setTimeout(() => firstFocusable.focus(), 25)
    }
  }
}
