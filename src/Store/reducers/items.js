import { RESULTS, SEARCH_ITEMS, FILTER_ITEMS } from '../actions/itemActions';

const initialState = {
    allItems: [],
    filteredItems: [],
    loading: true,
    input: '',
    categories: []
};

const itemsReducer = (state = initialState, action) => {
    if (action.type === RESULTS) {
        let itemsAmount = {}
        const {items} = action;
        let categories = items.reduce((acc,el) => {
            acc.push(el.category)
            return acc
        },[])
        for (let i = 0; i < items.length; i++) {
            let index = items[i]['id'];
            itemsAmount[index] = 1
        }

        categories = [...new Set(categories)];

        return {
            allItems: action.items,
            filteredItems: action.items,
            itemsAmount: itemsAmount,
            loading: false,
            categories: ['Filter',...categories]
        }
    }

    if (action.type === SEARCH_ITEMS) {
        const {text} = action;
        const lowercasedInput = text.toLowerCase();

        const filteredItems = state.allItems.filter((item) => 
        item.title.toLowerCase().includes(lowercasedInput || ''));

        // const filteredData = state.allItems.filter(item => {
        //   return Object.keys(item).some(key =>
        //     item[key].toLowerCase().includes(lowercasedInput)
        //   );
        // });
        console.log(state.allItems);
        console.log(state.filteredItems);

        return {
            ...state,
            filteredItems: filteredItems
        }

    }

    if (action.type === FILTER_ITEMS) {
        const {filter} = action;
        console.log(filter);
        if (filter === 'Filter') {
            const filteredItems = state.allItems
            return {
                ...state,
                filteredItems: filteredItems
            }
        } 

        const filteredItems = state.allItems.filter(el => el.category === filter);
        return {
            ...state,
            filteredItems: filteredItems
        }
    }
    
    return state;
}

export default itemsReducer;