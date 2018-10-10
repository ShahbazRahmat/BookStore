import { combineReducers } from "redux";
import searchReducer from './reducers/searchBooksReducer';

export default combineReducers({
SearchBook: searchReducer
});