import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react';

const Summary = ({ cart, clearCart, children }) => {
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = total * 0.1;
    const grandTotal = total + shipping + +tax;

    return (
        <div className='summary-container'>
            <h3>Order summary: {quantity}</h3>
            <div className="cart-number">
                <ShoppingCartIcon/>
                <p>{quantity}</p>
            </div>

            <p>Total price: ${total}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <p>Shipping Charges: ${shipping}</p>
            <h5>Grand total: ${grandTotal.toFixed(2)}</h5>
            <div className='btn-group'>
                <button className='remove-all-items' onClick={clearCart}>
                    <span>Clear Cart</span>
                    <DeleteForeverIcon/>
                </button>
                <div>{children}</div>
            </div>
        </div>
    );
};

export default Summary;