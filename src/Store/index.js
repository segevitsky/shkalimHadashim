import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import auth from './reducers/auth';
import cart from './reducers/cart';
import items from './reducers/items';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export const MainReducer = combineReducers({
    auth,
    cart,
    items
})

const store = createStore(MainReducer, composeEnhancers(applyMiddleware(thunk)));


export default store;
