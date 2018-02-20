import React, { Component } from 'react';

import './Header.scss';
class Header extends Component {
  render() {
    return (
     
        <div className="app-header" data-uk-sticky="animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; cls-inactive: uk-navbar-transparent; top: 100">
            <nav className="uk-navbar-container">
                <div className="uk-container uk-container-expand">
                    <div data-uk-navbar>
                    <div className="uk-navbar-left">
                    <div className="uk-navbar-item">
            <form className="uk-search uk-search-navbar">
                <span data-uk-search-icon></span>
                <input className="uk-search-input" type="search" placeholder="Search..." />
            </form>
        </div>
                    </div>
                    <div className="uk-navbar-right">
                    <ul className="uk-iconnav">
                        <li><a href="#" uk-icon="icon: sign-in">Sign in </a></li>
                        <li><a href="#" uk-icon="icon: comments"></a></li>
                        <li><a href="#" uk-icon="icon: cog"></a></li>
                        <li><a href="#" uk-icon="icon: sign-out"></a></li>
                    </ul>
                    </div>    
                    </div>
                </div>
            </nav>
        </div>
        
      
        
    );
  }
}

export default Header;

