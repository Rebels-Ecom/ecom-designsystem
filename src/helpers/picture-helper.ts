import { IPicture } from '../design-system/components/atoms/picture/picture';

export function getProductPicture(partNo: string, productImageUrl:string): IPicture {
    return {
        id: `product_${partNo}`,
        src: productImageUrl,
        alt: 'Placholder',
        loading: 'eager',
        decoding: 'auto',
        fetchPriority: 'high',
        sources: 
        [
            { srcset: `${productImageUrl}`, media: `(max-width: 767px)` },
            { srcset: `${productImageUrl}`, media: `(min-width: 768px)` },
        ]
    }
}
