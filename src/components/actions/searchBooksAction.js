import axios from 'axios';
import { SEARCH_BOOK } from '../appTypes';

export const booksSearched = (searchedBooks) => {
    return (dispatch) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchedBooks}`)
        .then(response => {
            dispatch({ type: SEARCH_BOOK, payload: response.data });
        }).catch(error => {
            dispatch({ type: 'ERROR', payload: error.message });
        }).finally(() => {
        });
    }
    };
