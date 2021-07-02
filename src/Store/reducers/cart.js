import { ADD_TO_CART, INCREASE,DECREASE, REMOVE_FROM_CART, RESULTS,UPDATE_ITEM_AMOUNT } from '../actions/cartActions';

const initialState = {
    allItems: [],
    itemsAmount: {},
    loading: true,
    cartItems: [],
    uniqueItems: [],
    readyToPurchase: false,
    amount: 1
};


const cartReducer = (state = initialState, action) => {
    if (action.type === RESULTS) {
        let itemsAmount = {}
        const items = action.items;
        // if (Object.keys(state.itemsAmount).length === 0 ) {
            for (let i = 0; i < items.length; i++) {
                let index = items[i]['id'];
                itemsAmount[index] = {amount: 1, price: items[i]['price']}
            }
        // } else {
            // console.log(state.itemsAmount);
            // debugger;
        // }

        return {
            ...state,
            allItems: action.items,
            itemsAmount: itemsAmount,
            loading: false
        }
    }
    
    if (action.type === ADD_TO_CART ) {
        console.log(action)
        const id = action.cartItem.id
        const price = action.cartItem.price
        const amount = state.itemsAmount[id]['amount'];
            return {
                ...state,
                readyToPurchase: true,
                cartItems: [...state.cartItems,{...action.cartItem, quantity: amount, price: price * amount }],
            
            }
    }


    if (action.type === REMOVE_FROM_CART) {
        const id = action.cartItem.id;
        const itemPrice = state.allItems.filter(el => el.id === id)[0]['price']
        const {itemsAmount} = state;
        const newItemsAmount = {...itemsAmount}
        newItemsAmount[id] = {amount: 1, price: itemPrice }
        const newCart = state.cartItems.filter(el => el.id !== id )
        const newUnique = state.uniqueItems.filter(el => el.id !== id)
        return {
            ...state,
            cartItems: newCart,
            uniqueItems: newUnique,
            itemsAmount: newItemsAmount
        }
    }

    
    if (action.type === INCREASE) {
        const {id} = action;
        const item = state.allItems.filter(el => el.id === id)[0];
        const itemPrice = item.price
        const itemAmount = state.itemsAmount[id]['amount'] + 1;
        const newPrice = (itemPrice * itemAmount).toFixed(2)
        return {
            ...state,
            itemsAmount: {...state.itemsAmount, [id]: { amount: itemAmount, price: newPrice }}
        }
    }

    if (action.type === DECREASE) {
        const {id} = action;
        const item = state.allItems.filter(el => el.id === id)[0];
        const itemPrice = item.price
        let itemAmount = 1;
        if (state.itemsAmount[id]['amount'] === 1) {
            itemAmount = 1;
        }
        itemAmount = state.itemsAmount[id]['amount'] - 1;
        const newPrice = (itemPrice * itemAmount).toFixed(2)
        return {
            ...state,
            itemsAmount: {...state.itemsAmount, [id]: { amount: itemAmount, price: newPrice }}
        }
    }

    if (action.type === UPDATE_ITEM_AMOUNT) {
        const {id} = action;
        const quantity = state.itemsAmount[id]['amount']
        const price = +state.itemsAmount[id]['price']
        const item = state.cartItems.filter(el => el.id === id)[0];
        const itemToUpdate = {...item, quantity, price: price }
        const newCartItems = [...state.cartItems];
        const itemsIndex = newCartItems.findIndex(el => el.id === id);
        newCartItems[itemsIndex] = itemToUpdate;
        // debugger;
        return {
            ...state,
            cartItems: newCartItems
        }
    }


    
    return state;
}


export default cartReducer;