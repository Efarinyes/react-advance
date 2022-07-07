import { useCallback, useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {

  const { counter, incressBy, maxCount } = useContext(ProductContext);
  
 const isMaxReached =  useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount],
  )
  
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style = {style}>
      <button className={styles.buttonMinus} onClick={() => incressBy(-1)}>-</button>
      <div className={styles.countLabel}> {counter}</div>
      <button className={`${styles.buttonAdd} ${  isMaxReached() && styles.disabled}`} onClick={() => incressBy(+1)}>+</button>
    </div>
  );
};
