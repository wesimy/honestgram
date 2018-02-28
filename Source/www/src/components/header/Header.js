import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/paper-plane.svg';
import './Header.scss';
import Search from '../search/search';
class Header extends Component {
    render() {
        return (

            <div className="app-header uk-position-top" >

                <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-sticky="sel-target: .page-content; cls-active: uk-navbar-sticky; top: 200;animation: uk-animation-slide-top;">
                    <div className="uk-navbar-left">
                        <div className="brand">
                        <NavLink to="/" ><h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo" /></h1></NavLink>
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                    
                        <ul className="uk-iconnav">
                            <li><a href="#search-modal" data-uk-toggle="target: #search-modal"><span data-uk-icon="icon: search" ></span></a></li>

                            <li><NavLink to="/dashboard" ><span data-uk-icon="icon: user"></span></NavLink></li>
                            <li><NavLink to="/wall"><span data-uk-icon="icon: comments"></span></NavLink></li>
                            <li><NavLink to="/settings"><span data-uk-icon="icon: cog"></span></NavLink></li>
                            <li><NavLink to="/" exact ><span data-uk-icon="icon: sign-out"></span></NavLink></li>
                        </ul>

                    </div>
                </nav>

                 <Search/>

            </div>



        );
    }
}

export default Header;

