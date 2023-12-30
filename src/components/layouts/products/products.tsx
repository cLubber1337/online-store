'use client'

import { Product } from '@/components/product/product'
import { fetchProducts } from '@/services/api/fetch-products'
import { useQuery } from '@tanstack/react-query'

export const Products = () => {
  const { data } = useQuery({
    queryFn: fetchProducts.getAllProducts,
    queryKey: ['products'],
  })

  return <>{data?.products.map(product => <Product key={product.id} product={product} />)}</>
}
