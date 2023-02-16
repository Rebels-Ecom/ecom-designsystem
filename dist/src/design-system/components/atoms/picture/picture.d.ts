/// <reference types="react" />
export type TPictureLoading = 'eager' | 'lazy';
export type TPictureDecoding = 'sync' | 'async' | 'auto';
export type TPictureFetchPriority = 'high' | 'low' | 'auto';
export interface IPicture {
    id: string;
    sources: Array<IPictureSource>;
    src: string;
    width?: number;
    height?: number;
    loading?: TPictureLoading;
    decoding?: TPictureDecoding;
    alt?: string;
    fetchPriority?: TPictureFetchPriority;
    classNamePicture?: string;
    classNameImg?: string;
}
export interface IPictureSource {
    srcset?: string;
    type?: string;
    media?: string;
    sizes?: string;
}
declare const Picture: ({ id, sources, src, width, height, loading, decoding, alt, fetchPriority, classNamePicture, classNameImg, }: IPicture) => JSX.Element | null;
export { Picture };
