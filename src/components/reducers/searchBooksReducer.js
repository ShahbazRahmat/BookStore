const INITIAL_STATE = {
  bookList: []  
}

export default (state = INITIAL_STATE, action) => {
    debugger;
    switch(action.type) {
        case 'SEARCHED_BOOK':
        console.log('fuck off', action)
        return {...state, bookList: action.payload };
        default:
        return state;
    }
}