export const CONNECT = 'CONNECT';
export const DISCONNECT = 'DISCONNECT';
export const TOKEN = 'TOKEN';


export const connectFn = (user) => ({
    type: CONNECT,
    user
});

export const disconnectFn = (user) => ({
    type: DISCONNECT,
    user
});

export const saveUserToken = token => {
    return ({
        type: TOKEN,
        token
    })
};

