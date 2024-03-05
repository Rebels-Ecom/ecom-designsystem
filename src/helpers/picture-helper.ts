import { IPicture } from '../design-system/components/atoms/picture/picture';

export function getProductPicture(partNo: string, primaryImageUrl: string, width?: string): IPicture {
    return {
        id: `product_${partNo}`,
        src: width ? `${primaryImageUrl}?w=${width}`: primaryImageUrl,
        alt: 'Placholder',
        loading: 'eager',
        decoding: 'auto',
        fetchPriority: 'high',
        sources: 
        [
            { srcset: width ? `${primaryImageUrl}?w=${width}` : primaryImageUrl, media: `(max-width: 767px)` },
            { srcset: width ? `${primaryImageUrl}?w=${width}` : primaryImageUrl, media: `(min-width: 768px)` },
        ]
    }
}
