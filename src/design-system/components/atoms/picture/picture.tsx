import styles from './picture.module.css'

export type TPictureLoading = 'eager' | 'lazy'
export type TPictureDecoding = 'sync' | 'async' | 'auto'
export type TPictureFetchPriority = 'high' | 'low' | 'auto'

export interface IPicture {
  id: string
  sources: Array<IPictureSource>
  src: string
  width?: number
  height?: number
  loading?: TPictureLoading
  decoding?: TPictureDecoding
  alt?: string
  fetchPriority?: TPictureFetchPriority
  classNamePicture?: string
  classNameImg?: string
}

export interface IPictureSource {
  srcset?: string
  type?: string
  media?: string
  sizes?: string
}

const Picture = ({
  id,
  sources,
  src,
  width,
  height,
  loading = 'lazy',
  decoding = 'auto',
  alt = '',
  fetchPriority = 'auto',
  classNamePicture,
  classNameImg,
}: IPicture) => {
  function isValidPicture() {
    return sources instanceof Array && src && id
  }
  if (!isValidPicture()) return null
  return (
    <picture className={classNamePicture ? classNamePicture : styles.picture} id={id}>
      {sources.map((source, i) => (
        <source key={`${id}_source_${i}`} srcSet={source.srcset} type={source.type} media={source.media} sizes={source.sizes} />
      ))}
      <img
        src={src}
        className={classNameImg ? classNameImg : styles.image}
        loading={loading}
        decoding={decoding}
        alt={alt}
        width={width}
        height={height}
        fetchpriority={fetchPriority}
      />
    </picture>
  )
}

export { Picture }
