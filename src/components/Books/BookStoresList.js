import React, {Component} from 'react';
import BookStores from '../commen/BookStores';

class BookStoreList extends Component
{
    render()
    {
       return(
           <div className="container">{BookStores.map(({name, country, city, address, contect, books}) =>
                <div className="row">
                <div><h2>Book Store Name :{name}</h2></div>
                <div><h3>Address:</h3> {address}, {city} ,{country}, contect: {contect}</div>
                {books.map(({bookname, ISBN, identifier, inStock}) => 
                    <div className="row">
                       <div> 
                       <span> Book Name: {bookname}</span>
                        <span>, ISBN: {ISBN}</span>
                        <span>, Identifier: {identifier}</span>
                        <span>, In Stock: {inStock === true && "Available"}</span>
                        </div>
                    </div>
                    )}
                </div>
            )}
            </div>
       ) 
    }
};

export default BookStoreList;

