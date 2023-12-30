import type { AllProductsCategories, ProductsResponse } from './types'

import { TRACE_OUTPUT_VERSION } from 'next/dist/shared/lib/constants'

const baseUrl = 'https://dummyjson.com/products'

export const fetchProducts = {
  // Fetches all products using @tanstack/react-query library
  getAllProducts: async (): Promise<ProductsResponse> => {
    const response = await fetch(baseUrl)
    const data = await response.json()

    return data
  },
  getAllProductsCategories: async (): Promise<AllProductsCategories> => {
    // Fetches all product categories using default fetch

    try {
      const response = await fetch(`${baseUrl}/categories`)
      const data = await response.json()

      return data
    } catch (error) {
      throw new Error(error as string)
    }
  },
}
