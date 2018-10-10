import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import SearchBooks from './components/forms/SearchBooks';
import BookGallery from './components/Books/BookGallery';
import BookGalleryTitle from './components/commen/BookGalleryTitle';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as searcBookActions from './components/actions/searchBooksAction';


class App extends Component {


SearchBooks = async (e) =>{
  e.preventDefault();
  const {value} = e.target.elements.book;
  if(value){
  const query = value;
  e.target.elements.book.value = "";
  const { booksSearched } = this.props.actions;
    await booksSearched(query);
  }
  else{
    const error = "Please provide the name of the book!"
  }
  
  
}

  render() {
    const { bookList, error } = this.props.state;
    return (
      <div className="container">
        <BookGalleryTitle />
        <SearchBooks  SearchBooks={this.SearchBooks} />
        <BookGallery items={bookList} error={error} />
      </div>
    );
  }
}

export default connect(
  state => ({
  state: state.SearchBook
  }),
  dispatch => ({
  actions: bindActionCreators(searcBookActions, dispatch)
  })
  )(App);
// const mapStateToProps = (state) => ({
//   items: state.bookList
// });

// const actions = {
//   booksSearched: booksSearched
// }

// // export default connect(mapActionsToProps)(App);
// //export default App;
// export default connect(mapStateToProps,actions)(App);
