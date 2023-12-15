import { IPicture } from '../design-system/components/atoms/picture/picture';

export function getProductPicture(partNo: string, primaryImageUrl:string): IPicture {
    return {
        id: `product_${partNo}`,
        src: primaryImageUrl,
        alt: 'Placholder',
        loading: 'eager',
        decoding: 'auto',
        fetchPriority: 'high',
        sources: 
        [
            { srcset: `${primaryImageUrl}`, media: `(max-width: 767px)` },
            { srcset: `${primaryImageUrl}`, media: `(min-width: 768px)` },
        ]
    }
}
