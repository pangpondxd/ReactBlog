import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Blog from './Component/Blog/Blog'
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route, Link
  } from 'react-router-dom'
import Login from './Component/Blog/Login'
const AppWithRouter = () => (
    <HashRouter>
        <Router>
        <Link exact to="/"></Link>
        <Link  to="/blog"></Link>
        <Switch>
        <Router path="/login">
          <Login />
        </Router>
        <Router path="/">
          <Blog />
        </Router>
      </Switch>
       </Router>
    </HashRouter>
)
ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
