import './ProductList.scss'

export interface Product {
  productId: number
  name: string
  price: number
}

interface ProductListProps {
  products: Product[]
}

export default function ProductList({ products }: ProductListProps) {
  // if no prods, let's just not render unnessary elements on the dom or maybe we want to show simple message
  if (products.length === 0) {
    return <p>No products available</p>;
  }

  // removed some styles from ProductList.scss since we can leverage TW
  return (
    <div className="flex flex-col sm:flex-row gap-5 p-5">
      {products.map(product => (
        <div className="product-card flex-1/3 sm:flex-1" key={product.productId}>
          <h3>{product.name}</h3>
          <p>${product.price ?? 'N/A'}</p>
        </div>
      ))}
    </div>
  )
}