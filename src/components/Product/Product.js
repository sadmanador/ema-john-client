import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'


const Product = ({ product, handleAddToCart }) => {

    const { name, price, seller, ratings, img, id } = product;
    return (
        <div className='product-card'>
            <img src={img} alt={name} className='product-img' />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: ${price}</p>
                <p className='small-text'><small>Manufacturer: {seller}</small></p>
                <p className='small-text'><small>Rating: {ratings} stars</small></p>
            </div>
            <button className='add-to-cart' onClick={() => handleAddToCart(product)}>
                <p>Add to Cart</p>
                <FontAwesomeIcon icon={faCartPlus} />
            </button>
        </div>
    );
};

export default Product;