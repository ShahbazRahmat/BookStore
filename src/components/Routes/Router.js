import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../commen/Home';
import App from '../../App';
import BookStoreList from '../Books/BookStoresList';

const Router = () => 
(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/App" component={App} />
            <Route path="/BookStoresList" component={BookStoreList} />
        </Switch>
    </BrowserRouter>
);

export default Router;