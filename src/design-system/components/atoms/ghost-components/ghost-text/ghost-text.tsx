import cx from 'classnames';
import styles from './ghost-text.module.css';

type TGhostText = {
  /**
   * Number of paragraphs to be displayed
   * @default 3
   */
  rows?: number;
}

const GhostText = ({ rows = 3 }: TGhostText) => {
  return (
    <div className={styles.ghostTextWrapper}>
      {Array.from({ length: rows }, (_, i) => (
        <p key={i} className={styles.ghostText} />
      ))}
    </div>
  );
}

export {
  GhostText
}
