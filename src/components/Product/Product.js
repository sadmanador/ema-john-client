import React from 'react';
import './Product.css'

const Product = ({ product }) => {
console.log(product);
    const { name, price, seller, ratings, img } = product;
    return (
        <div className='product-card'>
            <img src={img} alt={name} className='product-img' />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='add-to-cart'>
                <p>Add to Cart</p>

            </button>
        </div>
    );
};

export default Product;