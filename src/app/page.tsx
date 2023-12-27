import { Container, ListingLayout } from '@/components/layouts'
import { Products } from '@/components/layouts/products/products'
import { Product } from '@/components/product/product'
import { Sidebar } from '@/components/sidebar/sidebar'

export default function Home() {
  return (
    <Container>
      <ListingLayout left={<Sidebar />} right={<Products />} />
    </Container>
  )
}
