import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Summary.css'

const Summary = ({ cart , clearCart, children }) => {
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
            <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            <p>{quantity}</p>
            </div>
            
            <p>Total price: ${total}</p>
            <p>Tax (10%): ${tax.toFixed(2)}</p>
            <p>Shipping Charges: ${shipping}</p>
            <h5>Grand total: ${grandTotal.toFixed(2)}</h5>
            <button className='remove-all-items' onClick={clearCart}>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
            </button>
            {children}
        </div>
    );
};

export default Summary;