import { SEARCH_BOOK } from '../appTypes';

const INITIAL_STATE = {
  bookList: [],
  error: ""
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SEARCH_BOOK:
        return {...state, bookList: action.payload.items, error: "" };
        case 'ERROR':
        return { ...state, bookList: [], error: action.payload}
        default:
        return state;
    }
}

// const INITIAL_STATE = {

//     bankName: ''
//     };
    
//     export default (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//     case ADD_BANK_ACCOUNT_CHANGED:
//     return {
//     ...state, [action.payload.prop]: action.payload.value
//     };
//     default:
//     return state;
//     }
//     }