import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './Component/Blog/Blog'
import * as serviceWorker from './serviceWorker';

import FooterButton from './Component/FooterButton'
import Bid from './Component/Bid/Bid'
import {
    BrowserRouter as Router,
    Switch,
    HashRouter,
    Route, Link
  } from 'react-router-dom'
import Login from './Component/Blog/Login'
const AppWithRouter = () => (
    <HashRouter>
        <Router>
        <Route exact path="/">
          <FooterButton />
        </Route>
        <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/blog">
          <Blog />
          </Route>
          <Route path="/bid">
            <Bid />
        </Route>
      
      </Switch>
       </Router>
    </HashRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
