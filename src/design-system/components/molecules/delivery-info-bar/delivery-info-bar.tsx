import styles from './delivery-info-bar.module.css'
import { motion } from 'framer-motion'
import { Icon } from '../../atoms/icon/icon'
import { ContentWrapper } from '../../layouts/content-wrapper/content-wrapper'

export interface IDeliveryInfoBar {
  exists: boolean
  infoText: string
  altText?: string
  onClick: () => void
}

const DeliveryInfoBar = ({ exists, infoText, onClick }: IDeliveryInfoBar) => {
  if (!exists) {
    return null
  }

  return (
    <ContentWrapper padding={[0.3, 1]}>
      <motion.div
        className={styles.deliveryInfoBar}
        initial={{ opacity: 0, translateY: '-50px' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ delay: 0.5, type: 'spring', duration: 0.3 }}
      >
        <motion.button whileTap={{ scale: 0.95 }} className={styles.button} onClick={onClick}>
          <Icon className={styles.icon} icon={'icon-truck'}></Icon>
          <span className={styles.text}>{infoText}</span>
        </motion.button>
      </motion.div>
    </ContentWrapper>
  )
}

export { DeliveryInfoBar }
