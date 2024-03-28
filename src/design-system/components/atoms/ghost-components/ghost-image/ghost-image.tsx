import styles from './ghost-image.module.css';

type TGhostImage = {
  // rem
  width?: number;
  // rem
  height?: number;
}

const GhostImage = ({ width, height }: TGhostImage) => {
  return (
    <div
      className={styles.ghostImage}
      style={{ minWidth: `${width}rem`, minHeight: `${height}rem` }}
    />
  );
}

export {
  GhostImage
}
