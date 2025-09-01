import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '../../atoms'
import styles from './select-list.module.css'
import cx from 'classnames'
import { useOnClickOutside } from '../../../hooks'

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
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState<'left' | 'right'>('left')
  const [selected, setSelected] = useState<TSelectItem | undefined>(preSelected)
  const selectListRef = useRef<HTMLDivElement>(null)
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

  function handleResize() {
    let right = window.innerWidth - (buttonRef?.current?.getBoundingClientRect()?.right ?? 0)
    if (right <= 32) {
      setPosition('right')
    } else {
      if (position !== 'left') {
        setPosition('left')
      }
    }
  }

  useEffect(() => {
    setSelected(preSelected)
  }, [preSelected])

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useOnClickOutside({ ref: selectListRef, onClose: () => setIsOpen(false) })

  return (
    <div ref={selectListRef} className={styles.selectListWrapper}>
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
      <AnimatePresence>
        {isOpen && (
          <motion.ul className={cx(styles.selectList, styles[position])}>
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
    </div>
  )
}

export { SelectList }
