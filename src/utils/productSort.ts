import { Product } from "../mock-data/products";

export const sortProduct = (products: Product[], isAscSort: boolean) => {
    const sortedProduct = [...products].sort((p1, p2) => {
        return isAscSort ? p1.environmentalScore - p2.environmentalScore : p2.environmentalScore - p1.environmentalScore;
    })
    return sortedProduct;
}