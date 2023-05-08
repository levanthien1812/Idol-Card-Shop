import { products } from "./sample-data"

export const getProductDetail = (productId) => {
    return products.find(product => product.id === productId)
}