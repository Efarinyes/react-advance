import { products } from '../data/products';
import { ProductCard, ProductButtons, ProductTitle, ProductImage } from '../components/';

const product = products[0]

export const ShoppingPage = () => {

  return (
    <div className='.bg-dark'>
      <h1> Shopping Page </h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        
        initialValues={{
          count: 3,
          maxCount: 10
        }}
      >
        {
          ( {reset, count, incressBy, maxCount, isMaxCountReached } ) => (
            <>
              <ProductImage />
              <ProductTitle />
              <ProductButtons />
            </>
          )
        }

      </ProductCard>
    </div>
  )
}

