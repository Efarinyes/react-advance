import { createContext, CSSProperties } from 'react';
import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';
import { InitialValues, onCchangeArgs, Product, ProductCardHandlers, ProductContextProps } from '../interfaces/productInterfaces';

export interface Props {
  product: Product;
  // children: ReactElement | ReactElement[];
  children: ((args: ProductCardHandlers) => JSX.Element);
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onCchangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {
  const { counter, incressBy, maxCount, reset, isMaxCountReached } = useProduct( {onChange, product, value, initialValues} )
  return (
    <Provider value={{
      counter,
      incressBy,
      maxCount,
      product,
      
    }}>
      <div className={ `${styles.productCard} ${className }` } style = {style} >
        {children({
          count: counter,
          isMaxCountReached,
          maxCount: initialValues?.maxCount,
          product,
          incressBy,
          reset,
        })}
      </div>
    </Provider>

  )
}

