import { Picture, IPicture } from '../../atoms/picture/picture';
import styles from './logotype.module.css';
import cx from 'classnames';

export type TLogotype = IPicture;

const Logotype = ({ classNamePicture, classNameImg, ...props}: TLogotype) => (
  <Picture
    {...props}
    classNamePicture={cx(styles.logoPicture, classNamePicture)}
    classNameImg={cx(styles.logoImg, classNameImg)}
  />
)

export { Logotype }
