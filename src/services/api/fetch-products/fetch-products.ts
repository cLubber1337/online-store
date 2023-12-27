import { ProductsResponse } from './types'
export const fetchProducts = {
  getProducts: async (): Promise<ProductsResponse> => {
    const response = await fetch('https://dummyjson.com/products')
    const data = await response.json()

    return data
  },
}
