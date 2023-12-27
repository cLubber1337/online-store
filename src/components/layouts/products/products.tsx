import { Product } from '@/components/product/product'

export const Products = () => {
  const products = Array.from({ length: 17 }, (_, index) => index + 1)

  return (
    <>
      {products.map(p => (
        <Product key={p} />
      ))}
    </>
  )
}
