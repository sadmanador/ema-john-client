import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

 const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
    }


    return (
        <div className='shop'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                       handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

            <div className="product-summary">
                <Summary
                cart={cart}
                ></Summary>
            </div>
        </div>
    );
};

export default Shop;