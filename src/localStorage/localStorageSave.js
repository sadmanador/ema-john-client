const addToLocalStorage = id => {
    //make a object is which the data will be stored
    let shoppingCart = {}; 

    //check weather a name of value data is stored/not
    const storedData = localStorage.getItem('shopping-cart');
    
    //if the storedData exist, parse the data make it usable.
    if(storedData){
        //setting parse object into the new array
        shoppingCart = JSON.parse(storedData);
    }
    
    //if the id(property) is already present, then into that ID 1 is added
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }
    //if the id(property) is not present, added the id and it's value 1
    else{
        shoppingCart[id] = 1;
    }

    //set name of the data, and make the object stringify.
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}