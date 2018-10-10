import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import SearchBooks from './components/forms/SearchBooks';
import BookGallery from './components/Books/BookGallery';
import BookGalleryTitle from './components/commen/BookGalleryTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { searchBooks } from './components/api';
import { booksSearched } from './components/actions/searchBooksAction';


class App extends Component {

state = {
  items: [],
  error: ""
};

// componentWillMount() 
// {
//   const { onSearchButtonPress } = this.props.actions;
//   onSearchButtonPress(query);
//   debugger;
// }


SearchBooks = async (e) =>
{
  
  e.preventDefault();
  const {value} = e.target.elements.book;
  if(value)
  {
  const query = value;
  e.target.elements.book.value = "";
    await searchBooks(query).then((res)=> {
      console.log('response......', res.data)
      const { booksSearched } = this.props;
      booksSearched({ searchedBooks: res.data});
    })
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
    // console.log(this.props);
    const {items, error} = this.state;
    console.log('App state',this.state);
    debugger;
    return (
      <div className="container">
        <BookGalleryTitle />
        <SearchBooks  SearchBooks={this.SearchBooks} />
        <BookGallery items={items} key={items.id} error={error} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.bookList
});

const actions = {
  booksSearched: booksSearched
}

// export default connect(mapActionsToProps)(App);
//export default App;
export default connect(mapStateToProps,actions)(App);
