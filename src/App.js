import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBooks from './components/forms/SearchBooks';
import BookGallery from './components/Books/BookGallery';
import BookGalleryTitle from './components/commen/BookGalleryTitle';
//import BookStoreList from './components/Books/BookStoresList';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

state = {
  items: [],
  error: ""
};


SearchBooks = async (e) =>
{
  e.preventDefault();
  const {value} = e.target.elements.book;
  if(value)
  {
  const query = value;
  e.target.elements.book.value = "";
  await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
  .then( res => {
    if(res.status === 200)
    {
      const {items}  = res.data;

      this.setState({
        items,
        error: ""
      });
    }
  }).catch( err =>{
    this.setState({
      items: [],
      error: err.message
    });
  });
  }
  else
  {
    this.setState({
      items: [],
      error: "Please provide the name of the book!"
    });
  }
  
  
}

  render() {
    const {items, error} = this.state;
    return (
      <div className="container">
        <BookGalleryTitle />
        <SearchBooks  SearchBooks={this.SearchBooks}/>
        <BookGallery items={items} key={items.id} error={error} />
      </div>
    );
  }
}

export default App;
