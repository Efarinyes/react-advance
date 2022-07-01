import { useState } from "react"


export const useProduct = () => {
    const [counter, setCounter] = useState(0)
    const incressBy = (value: number) => {
        setCounter(prev => Math.max(0, prev + value))
    }
    return { counter, incressBy }
}