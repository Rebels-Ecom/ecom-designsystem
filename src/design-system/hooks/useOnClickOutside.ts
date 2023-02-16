import { RefObject, useEffect } from 'react'
interface IOnClickOutside {
  ref: RefObject<HTMLElement>
  onClose: CallableFunction
  disableClose?: boolean
}
export default function useOnClickOutside({ ref, onClose, disableClose }: IOnClickOutside) {
  useEffect(() => {
    if (disableClose) return

    const handleOnClickEvents = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      onClose(event)
    }

    document.addEventListener('mousedown', handleOnClickEvents)
    document.addEventListener('touchstart', handleOnClickEvents)
    return () => {
      document.removeEventListener('mousedown', handleOnClickEvents)
      document.removeEventListener('touchstart', handleOnClickEvents)
    }
  }, [ref, onClose])
}