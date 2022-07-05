import { useState, useEffect, useRef } from 'react';
import { onCchangeArgs, Product } from "../interfaces/productInterfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onCchangeArgs) => void;
    value?: number;
}

export const useProduct = ( { onChange, product, value = 0   }: useProductArgs ) => {

    const [counter, setCounter] = useState(value)
    const isControlled = useRef(!!onChange);

    const incressBy = (value: number) => {
        
        if (isControlled.current) {
           return onChange!({ count: value, product})
        }

        const newValue = Math.max( counter + value, 0)
        setCounter(newValue);
        onChange && onChange({ product, count: newValue })
    }
    useEffect(() => {
        setCounter(value || 0)
    }, [value])

    

    return { counter, incressBy }
}