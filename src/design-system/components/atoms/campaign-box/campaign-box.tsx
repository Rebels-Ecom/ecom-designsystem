import cx from 'classnames';
import { motion } from 'framer-motion';
import styles from './campaign-box.module.css'

export type TCampaignBox = {
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
  onClick?: () => void;
}

const CampaignBox = ({ title, description, subDescription, color = '#1D1D1B', onClick }: TCampaignBox) => {

  const style: { [key: string]: string } = ({
    '--campaign-box-color': color,
  })
  return (
    <motion.button className={cx(styles.campaignBox, {[styles.isButton]: !!onClick})} style={style} onClick={onClick} whileTap={onClick ? { scale: 0.99 } : undefined}>
      <h5 className={styles.title}>{title}</h5>
      {description && <p className={styles.description}>{description}</p>}
      {subDescription && <hr className={styles.divider} />}
      {subDescription && <p className={styles.subDescription}>{subDescription}</p>}
    </motion.button>
  )
}

export {
  CampaignBox
}