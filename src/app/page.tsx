import { Container, ListingLayout } from '@/components/layouts'
import { Products } from '@/components/layouts/products/products'
import { ProductCategories } from '@/components/product-categories/product-categories'
import { Sidebar } from '@/components/sidebar/sidebar'
import { fetchProducts } from '@/services/api/fetch-products'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

export default async function Home() {
  const allCategories = await fetchProducts.getAllProductsCategories()
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryFn: fetchProducts.getAllProducts,
    queryKey: ['products'],
  })

  return (
    <Container>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ListingLayout
          left={
            <Sidebar>
              <ProductCategories categories={allCategories} />
            </Sidebar>
          }
          right={<Products />}
        />
      </HydrationBoundary>
    </Container>
  )
}
