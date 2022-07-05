import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/productInterfaces";

export const useShopopingCard = () => {

    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCard }>({});

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        console.log({count})
        setShoppingCard(oldShoppingCard => {

            if (count === 0) {
              const { [product.id]: toDelete, ...rest } = oldShoppingCard;
              return rest;
            }
            return {
              ...oldShoppingCard,
              [product.id]: { ...product, count }
            }
        })
    }
return { shoppingCard, onProductCountChange }
}
