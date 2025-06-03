import cx from 'classnames'
import { useEffect, useRef, useState } from 'react'
import styles from './video.module.css'

export interface IVideoSource {
  srcset?: string
  type?: string
  media?: string
  sizes?: string
}

export interface IVideo {
  videoUrl: string
  mobileUrl?: string
  videoWithOpacity?: string
  className?: string
}

const Video = ({ videoUrl, videoWithOpacity, className, mobileUrl }: IVideo) => {
  const [source, setSource] = useState(videoUrl)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      videoRef.current.autoplay = true
      videoRef.current.loop = true
      videoRef.current.playsInline = true
      videoRef.current.preload = 'auto'

      if (videoRef.current.paused) {
        const playPromise = videoRef.current.play()

        if (playPromise !== undefined) {
          playPromise
            .then((_) => {
              videoRef.current?.classList.add('playing')
            })
            .catch((error) => {
              videoRef.current?.classList.remove('playing')
              console.log(error)
            })
        }
      }
    }

    if (typeof window === 'undefined') return

    if (window.innerWidth <= 767 && mobileUrl) {
      setSource(mobileUrl)
    }
  }, [videoRef])

  return (
    <>
      <video ref={videoRef} className={cx(styles.video, className && className)}>
        <source src={source} type="video/mp4" />
      </video>
      {videoWithOpacity && (
        <div
          className={cx(styles.opacityLayer, {
            [styles.withLightBackground]: videoWithOpacity === 'light',
            [styles.withDarkBackground]: videoWithOpacity === 'dark',
          })}
        />
      )}
    </>
  )
}

export { Video }
