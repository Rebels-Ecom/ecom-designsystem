import React, { useState, useEffect } from 'react';
import styles from './picture.module.css';
import cx from 'classnames';
import { mediaQueryHelper } from '../../layouts';

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
  fallbackImageUrl = ''
}) => {
  const { isMobile } = mediaQueryHelper();
  const [imageSources, setImageSources] = useState({ src, sources });

  useEffect(() => {
    const validSources = sources;
    const validSrc = isValidUrl(src) ? src : '';
    setImageSources({ src: validSrc, sources: validSources });
  }, [src, sources]);

  const handleBrokenImage = () => {
    if (fallbackImageUrl && isValidUrl(fallbackImageUrl)) {
      setImageSources({
        src: fallbackImageUrl,
        sources: [{ srcset: fallbackImageUrl }]
      });
    }
  };

  const isValidPicture = (): boolean => {
    if (!imageSources?.sources?.length) {
      return false;
    }
  
    const currentSrc = imageSources.sources[isMobile ? 0 : 1];
    return Boolean(currentSrc?.srcset && isValidUrl(currentSrc.srcset)) && Boolean(imageSources.src);
  };

  return (
    <>
      <picture className={classNamePicture || styles.picture} id={id}>
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
          src={imageSources.src || fallbackImageUrl}
          className={cx(
            classNameImg || styles.image,
            { [styles.fallback]: !isValidPicture() && !!fallbackImageUrl }
          )}
          loading={loading}
          decoding={decoding}
          alt={alt}
          width={width}
          height={height}
          fetchpriority={fetchPriority}
          onError={handleBrokenImage}
        />
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
