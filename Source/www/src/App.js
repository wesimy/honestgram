import 'uikit/dist/css/uikit.min.css';
import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Provider} from 'react-redux';
import store from './Store';
import * as routes from './constants/routes';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import Header from './components/header/Header';
import Home from './routes/home/Home';
import Wall from './routes/wall/Wall';
import Dashboard from './routes/dashboard/Dashboard';
import Account from './routes/account/Account';
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
        <Route exact path={routes.LANDING} component={Home}/>
        <Route path={routes.WALL} component={Wall}/>
        <Route path={routes.HOME} component={Dashboard}/>
        <Route path={routes.ACCOUNT} component={Account}/>
        <Route path={routes.PASSWORD_FORGET} component={Password}/>
        <Route path={routes.LOGIN} component={Login}/>
        {/* <Route path="/details/:article" component={Details}/> */}
      </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
