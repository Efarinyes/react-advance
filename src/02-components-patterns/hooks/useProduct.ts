import { useState, useEffect, useRef } from 'react';
import { InitialValues, onCchangeArgs, Product } from "../interfaces/productInterfaces";

interface useProductArgs {
    product: Product;
    onChange?: (args: onCchangeArgs) => void;
    value?: number;
    initialValues?: InitialValues;
}

export const useProduct = ( { onChange, product, value = 0, initialValues   }: useProductArgs ) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value );
    const isMounted = useRef(false)
    
    
    const incressBy = (value: number) => {
        let newValue = Math.max(counter + value, 0);
        if( initialValues?.maxCount ) {
            newValue = Math.min(newValue, initialValues.maxCount);
        }
        setCounter(newValue);
    }
    const reset = () => {
        setCounter(initialValues?.count || value );
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value || 0)
    }, [value])

    useEffect( () => {
        isMounted.current = true
    },[])

    return { 
        counter, 
        incressBy,
        reset,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
    }
}