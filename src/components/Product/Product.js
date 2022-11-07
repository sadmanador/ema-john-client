import React from 'react';
import './Product.css'

const Product = ({ product }) => {

    const { name, price, seller, rating, img } = product;
    return (
        <div className='product-card'>
            <img src={img} alt="" className='product-img'/>
            <div className="product-info">
                <h2>{name}</h2>
                <h4>Price: ${price}</h4>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {rating} stars</small></p>
            </div>
        </div>
    );
};

export default Product;