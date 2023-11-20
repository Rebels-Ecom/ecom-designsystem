import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '../../atoms';
import styles from './select-list.module.css';
import { useOnClickOutside } from '../../../hooks';

type TSelectItem = {
  name: string;
  value: string;
}

interface ISelectList {
  options: TSelectItem[];
  placeholder: string;
  preSelected?: TSelectItem;
  onClickButton?: () => void;
  onClickItem?: (item?: TSelectItem) => void;
  closeOnSelect?: boolean;
  disabled?: boolean;
}

const SelectList = ({
  options,
  preSelected,
  onClickButton,
  onClickItem,
  closeOnSelect,
  disabled,
  placeholder
}: ISelectList) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<TSelectItem | undefined>(preSelected);
  const selectListRef = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    onClickButton?.();
    setIsOpen(!isOpen);
  }
  const handleClickItem = (option: TSelectItem) => {
    onClickItem?.(option);
    setSelected(prevSelected => {
      return prevSelected?.name === option.name ? prevSelected : option
    })
  
    if (closeOnSelect) {
      setIsOpen(false);
    }
  }
  useOnClickOutside({ ref: selectListRef, onClose: () => setIsOpen(false) })
  return (
    <div ref={selectListRef} className={styles.selectListWrapper}>
      <Button
        type='button'
        surface='x'
        size='xx-small'
        onClick={handleClick}
        iconRight={{ icon: isOpen ? 'icon-chevron-up' : 'icon-chevron-down' }}
        disabled={disabled}
      >
        {selected?.name ?? placeholder}
      </Button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul className={styles.selectList}>
            {options?.map((option, i) => {
              return (
                <motion.li
                  key={`${option.name}-${i}`}
                  className={styles.selectItem}
                >
                  <button
                    className={styles.selectItemButton}
                    onClick={() => handleClickItem(option)}
                    disabled={disabled}
                  >
                    <input
                      type="radio"
                      checked={option.name === selected?.name}
                      className={styles.radio}
                      readOnly
                    />
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

export {
  SelectList
}
