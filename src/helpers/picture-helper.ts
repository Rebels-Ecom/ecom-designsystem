import { IPicture, TPictureFetchPriority, TPictureLoading } from '../design-system/components/atoms/picture/picture';

export function getProductPicture(
    partNo: string,
    primaryImageUrl: string,
    width?: string,
    height?: string,
    loading?: TPictureLoading,
    fetchPriority?: TPictureFetchPriority,
): IPicture {
    return {
        id: `product_${partNo}`,
        src: width ? `${primaryImageUrl}?w=${width}`: primaryImageUrl,
        alt: 'Placholder',
        loading: loading ?? 'lazy',
        decoding: 'auto',
        fetchPriority: fetchPriority ?? 'low',
        width: width ?? '300',
        height: height ?? '200',
        sources: 
        [
            { srcset: width ? `${primaryImageUrl}?w=${width}` : primaryImageUrl, media: `(max-width: 767px)` },
            { srcset: width ? `${primaryImageUrl}?w=${width}` : primaryImageUrl, media: `(min-width: 768px)` },
        ]
    }
}
