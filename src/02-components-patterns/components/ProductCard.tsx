import { createContext } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { ProductCardProps, ProductContextProps } from '../interfaces/productInterfaces';


export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { counter, incressBy } = useProduct()
  return (
    <Provider value={{
      counter,
      incressBy,
      product
    }}>
      <div className={styles.productCard}>
        {children}
      </div>
    </Provider>

  )
}

