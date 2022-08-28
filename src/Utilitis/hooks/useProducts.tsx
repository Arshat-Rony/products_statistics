import { useEffect, useState } from 'react';
import Product from '../../types/Producttypes';

const useProducts = () => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        fetch('productsData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return {
        products
    }
};

export default useProducts;