import { Heading } from '../heading/heading';
import styles from './campaign-box.module.css'

export type TCampaignBox = {
  title: string;
  description?: string;
  subDescription?: string;
  color?: string;
}

const CampaignBox = ({ title, description, subDescription, color = '#1D1D1B' }: TCampaignBox) => {

  const style: { [key: string]: string } = ({
    '--campaign-box-color': color,
  })
  return (
    <div className={styles.campaignBox} style={style}>
      <h5 className={styles.title}>{title}</h5>
      {description && <p className={styles.description}>{description}</p>}
      {subDescription && <hr className={styles.divider} />}
      {subDescription && <p className={styles.subDescription}>{subDescription}</p>}
    </div>
  )
}

export {
  CampaignBox
}