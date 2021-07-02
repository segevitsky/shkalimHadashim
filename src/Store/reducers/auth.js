import {CONNECT, DISCONNECT, TOKEN} from '../actions/authActions'

const initialState = {
    user: {},
    token: ""
};

const authReducer = (state = initialState, action) => {
    if (action.type === CONNECT) {
        return {
            user: action.user
        }
    }

    if (action.type === DISCONNECT) {
        return {
            user: {}
        }
    }

    if (action.type === TOKEN) {
        return {
            ...state,
            token: action.token
        }
    }
    
    return state;
}


export default authReducer