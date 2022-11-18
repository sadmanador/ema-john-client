import React, { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredCard } from '../../localStorage/localStorageSave';
import Product from '../Product/Product';
import Summary from '../Summary/Summary';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //getting localStored data.
    useEffect(() => {
        const storedCard = getStoredCard();
        //loop through object property

        const savedCard = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCard[id]
                addedProduct.quantity = quantity;
                savedCard.push(addedProduct);
            }
        }
        setCart(savedCard);
    }, [products]);

    const handleAddToCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToLocalStorage(product.id);
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