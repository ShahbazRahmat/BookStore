import React, {Component} from 'react';
import BookStores from '../commen/BookStores';

class BookStoreList extends Component
{
    render()
    {
       return(
           <div className="container">{BookStores.map(({name, country, city, address, contect, books}, j) =>
                <div className="row" key={j}>
                <div><h2>{name}</h2></div>
                <div className="book-list-address"><b>Address:</b> {address}, {city} ,{country}, contect: {contect}</div>
                <ul className="list-main-heading">
                    <li>bookname</li>
                    <li>ISBN</li>
                    <li>Identifier</li>
                    <li>InStock </li>
                </ul>
                <ul className="list-group-detail">
                {books.map(({bookname, ISBN, identifier, inStock}, i) => 
                    <div key={i}>
                        <li>{bookname}</li>
                        <li>{ISBN}</li>
                        <li>{identifier}</li>
                        <li>{inStock === true && "Available"}</li>
                    </div>
                    )}
                    </ul>
                </div>
            )}
            </div>
       ) 
    }
};

export default BookStoreList;

