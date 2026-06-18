import ProductList, { Product } from '@/app/components/server/ProductList'
import UserCard, { User } from '@/app/components/client/UserCard'

export default async function Home() {
  //const products = await serviceClient.products.getProducts({ productIds: [1, 2, 3] })
  const products: Product[] = [
    { productId: 1, name: 'Laptop', price: 999 },
    { productId: 2, name: 'Mouse', price: 59 },
    { productId: 3, name: 'Keyboard', price: 89 }
  ]

  //const user = await serviceClient.users.getUser({ userId: 1 })
  const user: User = {
    userId: 1,
    name: "John Doe",
    email: "johndoe@example.com"
  }

  return (
    <main>
      <h1>Technical Assessment</h1>
      <ProductList products={products} />
      <UserCard user={user} />
    </main>
  )
}