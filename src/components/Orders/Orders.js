import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../localStorage/localStorageSave';

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

    //clear cart
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
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
        {
            cart.length === 0 && <h2>Please add some Products from <Link to='/'>Shop</Link></h2>
        }
            </div>
            <div className='product-summary'>
                <Summary
                cart={cart}
                clearCart={clearCart}
                >
                    <Link to='/shipping'>
                        <button>Proceed Shipping</button>
                    </Link>
                </Summary>
            </div>
        </div>
    );
};

export default Orders;