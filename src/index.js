import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import App from './App';
import About from './components/commen/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import BookStoresList from './components/BookStore/BookStoresList';
import SearchBookStores from './components/BookStore/SearchBookStores';
import { createStore } from  'redux';
import { Provider } from 'react-redux';
import rootReducer from './components/rootReducer';


// const INITIAL_STATE = {
//     bookList: []  
//   }
  
//   const fuck = (state = INITIAL_STATE, action) => {
//       debugger;
//       switch(action.type) {
//           case 'SEARCHED_BOOK':
//             {
//             console.log('Action', action)
//             return {...state, bookList: action.payload };
//             }
//           default:
//           return state;
//       }
//   }
const store = createStore(rootReducer);




const Root = () =>
{
   return (<Router>
        <div>
            <Navbar>
                <Navbar.Header>
                    <Navbar.Toggle>
                        <Navbar.Brand>
                            <Link to="/">Book Gallery</Link>
                        </Navbar.Brand>
                    </Navbar.Toggle>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem componentClass='span'>
                            <NavLink to="/" activeClassName="active">Book Gallery</NavLink>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <NavLink to="/BookStoresList" activeClassName="active">Book Stores</NavLink>
                        </NavItem>
                        <NavItem componentClass='span'>
                            <NavLink exact to="/About" activeClassName="active">About</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Route exact path="/" component={App} />
            <Route path="/BookStoresList" component={BookStoresList} />
            <Route path="/About" component={About} />
            <Route path="/SearchBookStores/:id" component={SearchBookStores} />
        </div>
    </Router>
   );
}

ReactDOM.render(
   <Provider store={store}>
   <Root />
   </Provider>
    , document.getElementById('root'));
registerServiceWorker();
