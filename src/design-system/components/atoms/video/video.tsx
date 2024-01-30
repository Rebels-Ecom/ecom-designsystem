import React, { useRef, useEffect, useState } from 'react'
import styles from './video.module.css'
import cx from 'classnames'

export interface IVideoSource {
  srcset?: string
  type?: string
  media?: string
  sizes?: string
}

export interface IVideo {
  videoUrl: string;
  mobileUrl?: string;
  videoWithOpacity?: string;
  className?: string;
};

const Video = ({videoUrl, videoWithOpacity, className, mobileUrl} : IVideo) => {
  const [source, setSource] = useState(videoUrl);
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.defaultMuted = true;
          videoRef.current.autoplay = true
          videoRef.current.loop = true
        }

        if (typeof window === 'undefined') return;

        if (window.innerWidth <= 767 && mobileUrl) {
          setSource(mobileUrl);
        }

      }, [videoRef])
    
    return (
        <>
            <video ref={videoRef} loop={true} playsInline className={cx(styles.video, className && className)}>
              <source src={source} type="video/mp4" />
            </video>
            {videoWithOpacity && <div className={cx(styles.opacityLayer, videoWithOpacity==='light' ? styles.withLightBackground : styles.withDarkBackground)}/>}
        </>
    )
}

export  { Video }

