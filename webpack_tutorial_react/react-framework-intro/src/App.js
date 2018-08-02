import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import User from './components/User';
import Account from './components/Account';
import Blog from './components/Blog';
import Info from './components/Info';

class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <div>
                    <Link to="/">Home </Link> |
                    <Link to="/info"> Info </Link> |
                    <Link to="/account"> Account </Link> |
                    <Link to="/blog"> Blog</Link>
                </div>
                <hr/>
                <div>
                    <Route exact path="/" component={User}/>
                    <Route path="/info" component={Info}/>
                    <Route path="/user" component={User}/>
                    <Route path="/account" component={Account}/>
                    <Route path="/blog" component={Blog}/>
                </div>
            </div>
        </Router>
    );
  }
}

export default App;


