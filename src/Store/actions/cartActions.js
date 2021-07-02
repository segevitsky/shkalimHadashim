export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const UPDATE_ITEM_AMOUNT = 'UPDATE_ITEM_AMOUNT';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';
export const GET_ITEMS = 'GET_ITEMS';
export const RESULTS = 'RESULTS';

const url = 'https://fakestoreapi.com/products/';


export const getItems = () => {
    console.log('got the request!')
    return dispatch => 
        fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(saveData(res)))
}

export const saveData = (results) => {
    // console.log(results);
    const myRes = results.map(el => ({ ...el, quantity: 1, addedToCart: false }))
    const middle = Math.floor(myRes.length / 2);
    let sale = myRes.slice(0,middle);
    let noSale = myRes.slice(middle);
    // console.log({middle,sale,noSale});
    sale = sale.map(el => ({ ...el, sale: 'yes' }))
    noSale = noSale.map(el => ({ ...el, sale: 'no' }))
    const newRes = [...sale,...noSale];
    console.log({newRes});
    // debugger
    return {
        type: RESULTS,
        items: newRes
    }
}

export const addToCart = (cartItem) => ({
    type: ADD_TO_CART,
    cartItem,
})

export const removeFromCart = (cartItem) => {
    console.log(cartItem);
    return {
        type: REMOVE_FROM_CART,
        cartItem,
    }
}


export const updateItemInCart = (id) => ({
    type: UPDATE_ITEM_AMOUNT,
    id,
    
})


export const increaseAmount = (id) => ({
    type: INCREASE,
    id
})

export const decreaseAmount = (id) => ({
    type: DECREASE,
    id
})