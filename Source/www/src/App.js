import 'uikit/dist/css/uikit.min.css';
import './App.scss';

//import Header from './components/header/Header';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
// import store from './Store';
import Header from './components/header/Header';
import Home from './routes/home/Home';
//import Dashboard from '../../';

UIkit.use(Icons);
class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* <Header/> */}
        <div className="app-content">
        
        <Route exact path="/" component={Home}/>
        {/* <Route path="/Books" component={Dashboard}/> */}
        {/* <Route path="/details/:article" component={Details}/> */}
      </div>
      </div>
      </Router>
    );
  }
}

export default App;
