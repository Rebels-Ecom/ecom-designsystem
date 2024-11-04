import React, { useState, useEffect, useRef } from 'react';
import styles from './picture.module.css';
import cx from 'classnames';

export type TPictureLoading = 'eager' | 'lazy';
export type TPictureDecoding = 'sync' | 'async' | 'auto';
export type TPictureFetchPriority = 'high' | 'low' | 'auto';

export interface IPictureSource {
  srcset: string;
  type?: string;
  media?: string;
  sizes?: string;
}

export interface IPicture {
  id: string;
  sources: Array<IPictureSource>;
  src: string;
  width?: number | string;
  height?: number | string;
  loading?: TPictureLoading;
  decoding?: TPictureDecoding;
  alt?: string;
  fetchPriority?: TPictureFetchPriority;
  classNamePicture?: string;
  classNameImg?: string;
  pictureWithOpacity?: 'light' | 'dark';
  fallbackImageUrl?: string;
}

const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
};

const Picture: React.FC<IPicture> = ({
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
  pictureWithOpacity,
  fallbackImageUrl = '',
}) => {
  const [imageSources, setImageSources] = useState({ src, sources });
  const [isLoading, setIsLoading] = useState(true);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const validSources = sources;
    const validSrc = isValidUrl(src) ? src : '';
    setImageSources({ src: validSrc, sources: validSources });
    setIsLoading(true);
  }, [src, sources]);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      handleImageLoad();
    }
  }, [imageSources]);

  const handleBrokenImage = () => {
    if (fallbackImageUrl && isValidUrl(fallbackImageUrl)) {
      setImageSources({
        src: fallbackImageUrl,
        sources: [{ srcset: fallbackImageUrl }]
      });
    }
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const isValidPicture = (): boolean => {
    if (!imageSources?.sources?.length) {
      return false;
    }
  
    return Boolean(imageSources.src);
  };

  return (
    <>
      <picture className={cx(styles.picture, classNamePicture)} id={id}>
        {imageSources.sources.map((source, i) => (
          <source
            key={`${id}_source_${i}`}
            srcSet={source.srcset || fallbackImageUrl}
            type={source.type}
            media={source.media}
            sizes={source.sizes}
          />
        ))}
        <img
          ref={imgRef}
          src={imageSources.src || fallbackImageUrl}
          className={cx(
            styles.image,
            classNameImg,
            { [styles.fallback]: !isValidPicture() && !!fallbackImageUrl },
            { [styles.loading]: isLoading }
          )}
          loading={loading}
          decoding={decoding}
          alt={alt}
          aria-busy={isLoading}
          width={width}
          height={height}
          fetchpriority={fetchPriority}
          onError={handleBrokenImage}
          onLoad={handleImageLoad}
          onLoadStart={handleLoadStart}
        />
        {isLoading && (
          <div className={styles.skeleton} style={{ width, height }} />
        )}
      </picture>
      {pictureWithOpacity && (
        <div 
          className={cx(
            styles.opacityLayer,
            pictureWithOpacity === 'light' ? styles.withLightBackground : styles.withDarkBackground
          )}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export { Picture };
