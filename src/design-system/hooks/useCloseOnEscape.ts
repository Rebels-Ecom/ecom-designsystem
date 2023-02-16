import { useEffect } from 'react'
interface ICloseOnEscape {
  onClose: CallableFunction
  isOpen: boolean
  disableClose?: boolean
}
export default function useCloseOnEscape({ onClose, isOpen, disableClose }: ICloseOnEscape) {
  useEffect(() => {
    if (typeof document === `undefined` || disableClose) return

    isOpen ? document.addEventListener('keydown', closeOnEscapeKey) : document.removeEventListener('keydown', closeOnEscapeKey)

    return () => {
      document.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [isOpen])

  const closeOnEscapeKey = (e: KeyboardEvent) => {
    if (e?.key === 'Escape') {
      onClose()
    }
  }
}