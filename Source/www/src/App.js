import 'uikit/dist/css/uikit.min.css';
import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Store';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Header from './components/header/Header';
import Home from './routes/home/Home';
import Wall from './routes/wall/Wall';
import Dashboard from './routes/dashboard/Dashboard';
import Settings from './routes/settings/Settings';
import Password from './routes/password/Password';
import Login from './routes/login/Login';


UIkit.use(Icons);
class App extends Component {
  render() {
    return (
      <Provider store={store} >
      <Router>
      <div className="App">
        <Header/>
        <div className="app-content">
        <Route exact path="/" component={Home}/>
        <Route path="/Wall" component={Wall}/>
        <Route path="/Dashboard" component={Dashboard}/>
        <Route path="/Settings" component={Settings}/>
        <Route path="/Password" component={Password}/>
        <Route path="/Login" component={Login}/>
        {/* <Route path="/details/:article" component={Details}/> */}
      </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
