const addToLocalStorage = id => {
    let shoppingCart = {};

    const storedData = localStorage.getItem('shopping-cart');

    if (storedData) {
        shoppingCart = JSON.parse(storedData);
    }

    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else {
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCard = () => {
    let shoppingCart = {};

    const storedData = localStorage.getItem('shopping-cart');

    if (storedData) {

        shoppingCart = JSON.parse(storedData);
    }
    return shoppingCart;
}

const removeFromDb = id => {
    const storedCart = localStorage.getItem('shopping-cart');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => localStorage.removeItem('shopping-cart');

export {
    deleteShoppingCart,
    addToLocalStorage,
    getStoredCard,
    removeFromDb
}