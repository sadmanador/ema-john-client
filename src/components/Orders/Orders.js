import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData()
    return (
        <div>
            <h1>Number of products: {products.length}</h1>
        </div>
    );
};

export default Orders;