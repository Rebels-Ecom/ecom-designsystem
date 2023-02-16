import { motion, AnimatePresence } from 'framer-motion'
import cx from 'classnames'
import { Icon } from '../icon/icon'
import styles from './details.module.css'

export interface IDetails {
  id: string
  label: string
  description: React.ReactNode | string
  isExpanded: boolean
  onDetailsBtnClick: CallableFunction
}

const variants = {
  open: { opacity: 1, height: 'auto' },
  collapsed: { opacity: 0, height: 0 },
}

const Details = ({ id, label, description, isExpanded = false, onDetailsBtnClick }: IDetails) => {
  function handleOnBtnClick() {
    onDetailsBtnClick(id)
  }

  return (
    <>
      <button
        className={cx(styles.detailsBtn, isExpanded && styles.isExpanded)}
        id={`btn_${id}`}
        aria-controls={id}
        aria-expanded={isExpanded}
        onClick={handleOnBtnClick}
      >
        {<Icon icon={'icon-arrow-right'} className={cx(styles.icon, isExpanded && styles.isExpanded)} />}
        <span className={cx(styles.label, 'body')}>{label}</span>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={id}
            className={cx(styles.detailsContent)}
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            aria-labelledby={`btn_${id}`}
          >
            {description}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export { Details }
