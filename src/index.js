import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import App from './App';
import Home from './components/commen/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import BookStoresList from './components/Books/BookStoresList';


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
                        <NavItem>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/App" activeClassName="active">Book Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/BookStoresList" activeClassName="active">Book Stores</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            
            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/BookStoresList" component={BookStoresList} />
        </div>
    </Router>
   );
}

ReactDOM.render(
    <Root />
    //<App />
    , document.getElementById('root'));
registerServiceWorker();
