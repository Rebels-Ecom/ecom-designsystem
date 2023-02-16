import styles from './movie-poster.module.css'
import { IPicture, Picture } from '../picture/picture'

const MoviePoster = (props: IPicture) => {
  return (
    <>
      <div className={styles.moviePoster}>
        <Picture {...props} classNamePicture={styles.picture} classNameImg={styles.image} />
      </div>
    </>
  )
}

export { MoviePoster }
