import { Button } from '../button/button';
import { IIcon, Icon, TIcon } from '../icon/icon';
import styles from './campaign-message.module.css'

export type TCampaignMessage = {
  message: string;
  ctaText: string;
  icon?: IIcon;
  onClick?: () => void;
}

const CampaignMessage = ({ message, ctaText, icon, onClick }: TCampaignMessage) => (
  <div className={styles.campaignMessage}>
    {icon && <Icon {...icon} className={styles.icon} />}
    <span className={styles.message}>{message}</span>
    <Button className={styles.button} surface='primary' type='button' onClick={onClick} size='x-small'><span>{ctaText}</span></Button>
  </div>
)

export {
  CampaignMessage
}