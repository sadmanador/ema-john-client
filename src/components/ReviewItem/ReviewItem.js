import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { id, name, price, quantity, shipping, img } = product;
    return (
        <div className='order-card'>
            <div className="order-details">
                <img src={img} alt={name} />
                <div className="order-card-info">
                    <h3>{name}</h3>
                    <p>Quantity: <strong className='high-lighted'>{quantity}</strong>x</p>
                    <p>Price: $<strong className='high-lighted'>{price}</strong></p>
                    <p>Shipping Charge: $<strong className='high-lighted'>{shipping}</strong></p>
                </div>
            </div>
            <div className='remove-product-btn' onClick={() => handleRemoveProduct(id)}>
                <DeleteOutlineIcon/>
            </div>
        </div>
    );
};

export default ReviewItem;