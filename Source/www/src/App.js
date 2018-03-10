import 'uikit/dist/css/uikit.min.css';
import './App.scss';

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Provider} from 'react-redux';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

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
//import { firebase } from './firebase';

UIkit.use(Icons);
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <Provider store={store} >
      <Router>
      <div className="App">
        {/* <Header authUser={this.state.authUser} /> */}
        <Header/>
        <div className="app-content">
        <Switch>
        <Route exact path={routes.LANDING}  component={Home}/>
        <Route path={routes.WALL} component={Wall}/>
        <Route path={routes.HOME}  component={Dashboard}/>
        <Route path={routes.ACCOUNT} component={Account}/>
        <Route path={routes.PASSWORD_FORGET} component={Password}/>
        <Route path={routes.LOGIN} component={Login}/>
        {/* <Route path="/details/:article" component={Details}/> */}
        </Switch>
      </div>
      </div>
      </Router>
      </Provider>
    );
  }
}


export default App;
