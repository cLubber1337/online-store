import { Container, ListingLayout } from '@/components/layouts'
import { Products } from '@/components/layouts/products/products'
import { Sidebar } from '@/components/sidebar/sidebar'
import { fetchProducts } from '@/services/api/fetch-products'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query'

export default async function Home() {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryFn: fetchProducts.getProducts,
    queryKey: ['products'],
  })

  return (
    <Container>
      <ListingLayout
        left={<Sidebar />}
        right={
          <HydrationBoundary state={dehydrate(queryClient)}>
            <Products />
          </HydrationBoundary>
        }
      />
    </Container>
  )
}
