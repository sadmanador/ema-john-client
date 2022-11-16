const addToLocalStorage = id => {
    //make a object is which the data will be stored
    let shoppingCart = {}; 

    //insert the stored local data in a variable
    const storedData = localStorage.getItem('shopping-cart');
    
    //if the storedData exist, parse the data make it usable.
    if(storedData){
        //setting parse object into the new array
        shoppingCart = JSON.parse(storedData);
    }
    
    //set the id parameter in the object property
    const quantity = shoppingCart[id];
    //checking weather the object with the set property exist or not
    if(quantity){
        //if the property exits the property value is increase by 1
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