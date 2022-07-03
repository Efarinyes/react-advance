import { useContext } from 'react';
import styles from '../styles/styles.module.css';
import { ProductContext } from './ProductCard';

export interface Props {
  className?: string;
  style?: React.CSSProperties
}

export const ProductButtons = ({className, style}: Props) => {

  const { counter, incressBy } = useContext(ProductContext);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style = {style}>
      <button className={styles.buttonMinus} onClick={() => incressBy(-1)}>-</button>
      <div className={styles.countLabel}> {counter}</div>
      <button className={styles.buttonAdd} onClick={() => incressBy(+1)}>+</button>
    </div>
  );
};
