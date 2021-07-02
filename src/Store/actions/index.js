//Export all the methods from our actions creators//
// export { getItems,saveData } from './itemActions';
export { 
    addToCart, 
    removeFromCart, 
    increaseAmount, 
    decreaseAmount, 
    getItems ,
    saveData, 
    updateItemInCart,
} from './cartActions';

export { searchItems,filterItems } from './itemActions';

export { connectFn, disconnectFn } from './authActions';