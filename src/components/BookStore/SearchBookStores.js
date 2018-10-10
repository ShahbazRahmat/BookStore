import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import BookStores from './BookStores';

class SearchBook extends Component{
    constructor(props)
    {
        super(props);
         this.state = {
        bookStores: []
            }

    }
   componentWillMount(){
    this.SearchBooks();
   }
    SearchBooks = () =>
    {
     const id = this.props.match.params.id;
     let findedStore = [];
     BookStores.forEach((bookStore) =>
     {
         const book = bookStore.books.find((book) =>{
            return book.identifier === id
        });
        if(book !== undefined)
        findedStore.push({name:bookStore.name,city:bookStore.city,address:bookStore.address,country:bookStore.country, phone: bookStore.contect, findBook:book});
     }); 
        this.setState({
            bookStores: findedStore
        });
    }
    render()
    {
        const { bookStores } = this.state;
        if(bookStores.length > 0)
        {
            return(
                <div className="container">
                    <div>
                        <span className="active-book-detail"> Book Name: {bookStores !== undefined && bookStores[0].findBook.bookname}</span><span> is available in below mentioned stores</span>
                    </div>
                    <ul className="store-detail">
                        { bookStores !== undefined &&
                            bookStores.map((bookStore,i) =>                       
                            <li key={i}><span><b>STORE: {bookStore.name}</b> </span> <span>Address: {bookStore.address} , {bookStore.city}, {bookStore.country} </span> <span>Contect #{ bookStore.phone}</span></li> 
                        )}
                    </ul>
                </div>
            );
        }
        else
        {
            return(
                <div className="container not-found">The books not available</div>
            )
        }
        
    };
}

export default withRouter(SearchBook);