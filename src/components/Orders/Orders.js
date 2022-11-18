import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../localStorage/localStorageSave';

import ReviewItem from '../ReviewItem/ReviewItem';
import Summary from '../Summary/Summary';

const Orders = () => {
    const {products, previousCart} = useLoaderData();
    const [cart, setCart] = useState(previousCart);

    const handleRemoveProduct = id => {
        const remaining = cart.filter(product => product.id !== id)
        setCart(remaining);
        removeFromDb(id)
    }
    return (
        <div className='shop'>
            <div className='orders-container'>
        {
            cart.map(product => <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
            ></ReviewItem>)
        }
            </div>
            <div className='product-summary'>
                <Summary cart={cart}></Summary>
            </div>
        </div>
    );
};

export default Orders;