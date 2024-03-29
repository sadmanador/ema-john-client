import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import {
    addToLocalStorage,
    deleteShoppingCart,
    getStoredCard
} from "../../localStorage/localStorageSave";
import Product from "../Product/Product";
import Summary from "../Summary/Summary";

const Shop = () => {
  const { products } = useLoaderData();
  const [cart, setCart] = useState([]);

  //getting localStored data.
  useEffect(() => {
    const storedCard = getStoredCard();
    //loop through object property
    const savedCard = [];
    for (const id in storedCard) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCard[id];
        addedProduct.quantity = quantity;
        savedCard.push(addedProduct);
      }
    }
    setCart(savedCard);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToLocalStorage(selectedProduct.id);
  };

  //clear cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="shop">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="product-summary">
        <Summary cart={cart} clearCart={clearCart}>
          <Link to="/orders" className="review-link">
            <button className="remove-all-items">Review Orders</button>
          </Link>
        </Summary>
      </div>
    </div>
  );
};

export default Shop;
