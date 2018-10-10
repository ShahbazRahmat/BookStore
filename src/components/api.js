import axios from 'axios';
debugger;
export const searchBooks = async (query) => {    
    return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
    .then(res => res).catch(err => err);
}