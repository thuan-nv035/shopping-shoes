import {Axios} from './Axios'
export function getProduct() {
    return Axios.get("product")
}

export const productService = {
    getProduct
}