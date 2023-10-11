import cx from 'classnames'
import styles from './wave-divider.module.css'

type TWaveDivider = {
  color?: string;
  /**
   * sm = 25% | md = 33% | lg = 50% | xl = 75%
   * @default 'md'
   */
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const WaveDivider = ({ color = "#DA7E00", size = 'md' }: TWaveDivider) => {
  return (
    <svg
      className={cx(styles.waveDivider, styles[size])}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 782 52"
    >
      <path className={styles.waveDividerPath} d="M6,6c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.2-40c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.2-40
      c48.1,0,48.1,40,96.2,40c48.1,0,48.1-40,96.3-40c48.1,0,48.1,40,96.3,40S727.9,6,776,6" stroke={color} />
    </svg>
  )
}

export {
  WaveDivider
}