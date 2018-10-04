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
        findedStore.push({name:bookStore.name,city:bookStore.city,country:bookStore.country, phone: bookStore.contect, findBook:book});
     }); 

        console.log(findedStore);
     
        this.setState({
            bookStores: findedStore
        });
    }
    render()
    {
        const {name, city, country} = this.state.bookStores;
        debugger;

        return(
            <div>
                
            </div>
        );
    };
}

export default withRouter(SearchBook);