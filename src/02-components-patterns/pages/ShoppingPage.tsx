

import { products } from '../data/products';
import { ProductCard, ProductButtons, ProductTitle, ProductImage } from '../components/';


import '../styles/custom-styles.css';

const product = products[0]


export const ShoppingPage = () => {

  return (
    <div className='.bg-dark'>
      <h1> Shopping Page </h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className='bg-dark text-white'
        initialValues={{
          count: 3,
          maxCount: 10
        }}
      >
        {
          ( {reset, count, incressBy, maxCount, isMaxCountReached } ) => (
            <>
              <ProductImage
                className='custom-image' style = {{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }}
              />
              <ProductTitle
                className='text-bold'
              />
              <ProductButtons
                className='custom-buttons'
              />
               <button onClick={ reset }> Reset </button> 
               <button onClick={ () => incressBy(-2) }> -2 </button>
               {
                ( !isMaxCountReached && <button onClick={ () => incressBy(+2 ) }> +2 </button>)
               }

               <span> {count} - { maxCount }</span>
            </>
          )
        }

      </ProductCard>
    </div>
  )
}

