import React from 'react';
import './Summary.css'

const Summary = ({cart}) => {
    return (
        <div className='summary-container'>
            <h1>From summary: {cart.length}</h1>
            <p>Total price: </p>
            <p>Tax (10%): </p>
            <p>Shipping Charges: </p>
            <p>Grand total: </p>
        </div>
    );
};

export default Summary;