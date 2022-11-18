const addToLocalStorage = id => {
    let shoppingCart = {}; 

    const storedData = localStorage.getItem('shopping-cart');
    
    if(storedData){
        shoppingCart = JSON.parse(storedData);
    }
    
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    else{
        shoppingCart[id] = 1;
    }

    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

const getStoredCard = () => {
    let shoppingCart = {}; 

    const storedData = localStorage.getItem('shopping-cart');
    
    if(storedData){

        shoppingCart = JSON.parse(storedData);
    }
    return shoppingCart;
}

export {
    addToLocalStorage,
    getStoredCard
}