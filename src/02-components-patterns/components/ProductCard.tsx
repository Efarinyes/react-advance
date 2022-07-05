import { createContext, CSSProperties, ReactElement } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { onCchangeArgs, Product, ProductContextProps } from '../interfaces/productInterfaces';

export interface Props {
  product: Product;
  children: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onCchangeArgs) => void;
  value?: number;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
  const { counter, incressBy } = useProduct( {onChange, product, value} )
  return (
    <Provider value={{
      counter,
      incressBy,
      product,
      
    }}>
      <div className={ `${styles.productCard} ${className }` } style = {style} >
        {children}
      </div>
    </Provider>

  )
}

