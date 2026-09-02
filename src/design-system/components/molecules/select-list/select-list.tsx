import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../../atoms'
import styles from './select-list.module.css'
import cx from 'classnames'
import { usePortal } from '../../../hooks'

type TSelectItem = {
  name: string
  value: string
}

interface ISelectList {
  options: TSelectItem[]
  placeholder: string
  preSelected?: TSelectItem
  onClickButton?: () => void
  onClickItem?: (item?: TSelectItem) => void
  closeOnSelect?: boolean
  disabled?: boolean
  small?: boolean
  round?: boolean
}

interface IPopupPosition {
  top: number
  left: number
  minWidth: number
}

const POPUP_GAP = 4
const VIEWPORT_MARGIN = 8

const SelectList = ({
  options,
  preSelected,
  onClickButton,
  onClickItem,
  closeOnSelect,
  disabled,
  placeholder,
  small,
  round,
}: ISelectList) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const popupRef = useRef<HTMLUListElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<TSelectItem | undefined>(preSelected)
  const [position, setPosition] = useState<IPopupPosition | null>(null)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)

  const handleClick = () => {
    onClickButton?.()
    setIsOpen(!isOpen)
  }
  const handleClickItem = (option: TSelectItem) => {
    onClickItem?.(option)
    setSelected((prevSelected) => {
      return prevSelected?.name === option.name ? prevSelected : option
    })

    if (closeOnSelect) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    setSelected(preSelected)
  }, [preSelected])

  useEffect(() => {
    setPortalNode(document.getElementById('portal'))
  }, [])

  const Portal = usePortal(portalNode)

  // Portaled to `#portal` (same target `Modal` uses), so the popup renders above a `Modal` panel
  // (or any other `overflow`-clipping ancestor) instead of being cut off by it. Position is computed
  // from the trigger's viewport rect, so this works the same whether there's a modal or not.
  useLayoutEffect(() => {
    if (!isOpen) {
      setPosition(null)
      return
    }

    function updatePosition() {
      const trigger = buttonRef.current
      if (!trigger) return
      const triggerRect = trigger.getBoundingClientRect()
      const popupRect = popupRef.current?.getBoundingClientRect()
      const popupHeight = popupRect?.height ?? 0
      const popupWidth = popupRect?.width ?? triggerRect.width
      const spaceBelow = window.innerHeight - triggerRect.bottom
      const spaceAbove = triggerRect.top
      const openUp = spaceBelow < popupHeight + POPUP_GAP && spaceAbove > spaceBelow
      const maxLeft = window.innerWidth - popupWidth - VIEWPORT_MARGIN
      setPosition({
        top: openUp ? triggerRect.top - popupHeight - POPUP_GAP : triggerRect.bottom + POPUP_GAP,
        left: Math.min(Math.max(triggerRect.left, VIEWPORT_MARGIN), Math.max(maxLeft, VIEWPORT_MARGIN)),
        minWidth: triggerRect.width,
      })
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)
    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [isOpen])

  // Hand-rolled instead of `useOnClickOutside`: that hook only tracks one ref, but the popup now
  // lives outside `wrapperRef` (portaled), so it also needs to be treated as "inside".
  useEffect(() => {
    if (!isOpen) return
    function handlePointerDown(event: MouseEvent | TouchEvent) {
      const target = event.target as Node
      if (wrapperRef.current?.contains(target)) return
      if (popupRef.current?.contains(target)) return
      setIsOpen(false)
    }
    document.addEventListener('mousedown', handlePointerDown)
    document.addEventListener('touchstart', handlePointerDown)
    return () => {
      document.removeEventListener('mousedown', handlePointerDown)
      document.removeEventListener('touchstart', handlePointerDown)
    }
  }, [isOpen])

  return (
    <div ref={wrapperRef} className={styles.selectListWrapper}>
      <Button
        ref={buttonRef}
        type="button"
        surface="x"
        size="xx-small"
        onClick={handleClick}
        iconRight={{ icon: isOpen ? 'icon-chevron-up' : 'icon-chevron-down' }}
        disabled={disabled}
        className={cx({ [styles.small]: small, [styles.round]: round })}
      >
        {selected?.name ?? placeholder}
      </Button>
      <Portal>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              ref={popupRef}
              className={styles.selectList}
              style={
                position
                  ? { top: position.top, left: position.left, minWidth: position.minWidth }
                  : { visibility: 'hidden' }
              }
            >
              {options?.map((option, i) => {
                return (
                  <motion.li key={`${option.name}-${i}`} className={styles.selectItem}>
                    <button
                      type="button"
                      className={styles.selectItemButton}
                      onClick={() => handleClickItem(option)}
                      disabled={disabled}
                    >
                      <input type="radio" checked={option.name === selected?.name} className={styles.radio} readOnly />
                      <span className={styles.label}>{option.name}</span>
                    </button>
                  </motion.li>
                )
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </Portal>
    </div>
  )
}

export { SelectList }
