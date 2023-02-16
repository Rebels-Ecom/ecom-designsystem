import styles from './color-box.module.css'

interface IColorBox {
  children?: React.ReactNode
  bg: string
  small?: boolean
}

const ColorBox = ({ children, bg, small }: IColorBox) => (
  <div className={`${styles.colorBox} ${small ? styles.small : ''}`} style={{ background: bg }}>
    {small ? children : <div className={styles.label}>{children}</div>}
  </div>
)

export default ColorBox
