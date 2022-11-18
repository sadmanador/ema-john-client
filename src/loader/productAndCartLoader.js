import { getStoredCard } from "../localStorage/localStorageSave";

export const productAndCartLoader =async () => {
    //get products data
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoredCard();
    const previousCart = [];
    
    for(const id in savedCart){
        const addedProducts = products.find(product => product.id === id);
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            previousCart.push(addedProducts);
        }
    }



    return {products, previousCart};
};