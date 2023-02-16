import { motion, AnimatePresence } from 'framer-motion'
import cx from 'classnames'
import { Icon } from '../icon/icon'
import styles from './accordion.module.css'

export interface IAccordion {
  id: string
  label: string
  description: React.ReactNode | string
  isExpanded: boolean
  onAccordionBtnClick: CallableFunction
}

const variants = {
  open: { display: 'block' },
  collapsed: { display: 'none' },
}

const Accordion = ({ id, label, description, isExpanded = false, onAccordionBtnClick }: IAccordion) => {
  function handleOnBtnClick() {
    onAccordionBtnClick(id)
  }

  return (
    <>
      <button className={styles.accordionBtn} id={`btn_${id}`} aria-controls={id} aria-expanded={isExpanded} onClick={handleOnBtnClick}>
        <div className={styles.accordionBtnInnerWrapper}>
          {<Icon icon={isExpanded ? 'icon-x-circle' : 'icon-plus-circle'} className={styles.icon} />}
          <span className={cx(styles.label, 'headingXS')}>{label}</span>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={id}
            className={cx(styles.accordionContent)}
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

export { Accordion }
