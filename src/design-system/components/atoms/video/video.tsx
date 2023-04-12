import React, { useRef, useEffect } from 'react'
import styles from './video.module.css'
import cx from 'classnames'

export interface IVideo {
  videoUrl: string
  videoWithOpacity?: string
  className?: string
};

const Video = ({videoUrl, videoWithOpacity, className} : IVideo) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.autoplay = true
          videoRef.current.defaultMuted = true
          videoRef.current.muted = true
          videoRef.current.loop = true
        }
      }, [videoRef])
    
    return (
        <>
            <video ref={videoRef} playsInline className={cx(styles.video, className && className)}>
                <source src={videoUrl} type="video/mp4" />
            </video>
            {videoWithOpacity && <div className={cx(styles.opacityLayer, videoWithOpacity==='light' ? styles.withLightBackground : styles.withDarkBackground)}/>}
        </>
    )
}

export  { Video }

