export const GET_ITEMS = 'GET_ITEMS';
export const RESULTS = 'RESULTS';
export const SEARCH_ITEMS = 'SEARCH_ITEMS';
export const FILTER_ITEMS = 'FILTER_ITEMS';

const url = 'https://fakestoreapi.com/products/';

export const searchItems = (text) => ({
    type: SEARCH_ITEMS,
    text
})


export const getItems = () => {
    console.log('got the request!')
    return dispatch => 
        fetch(url)
        .then((res) => res.json())
        .then((res) => dispatch(saveData(res)))
}

export const saveData = (results) => {
    console.log(results);
    const myRes = results.map(el => ({ ...el, quantity: 1, addedToCart: false }))
    return {
        type: RESULTS,
        items: myRes
    }
}

export const filterItems = (filter) => {
    return {
        type: FILTER_ITEMS,
        filter
    }
}

