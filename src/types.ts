type DimensionType = {
    width: number,
    height: number,
    depth: number
}

type ProductReviewType = {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}

export type ProductType = {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: Array<string>,
    brand: string,
    sku: string,
    weight: number,
    dimensions: DimensionType,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: Array<ProductReviewType>,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: any,
    thumbnail: string,
    images: Array<string>
}

export type ProductFetchType = {
    products: Array<ProductType>,
    total: number,
    skip: number,
    limit: number
}