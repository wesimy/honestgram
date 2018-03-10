import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
//import { auth } from '../../firebase';
import * as routes from '../../constants/routes';
import logo from '../../assets/images/paper-plane.svg';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Search from '../search/search';
import { signout } from '../../Actions';
import './Header.scss';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    onSignOut(event) {
        event.preventDefault();
        this.props.signout();
    }
    render() {
        let Navigation = null;
        if (this.props.session.user) {
            Navigation = () =>
                <ul className="uk-iconnav">
                    <li><a href="#search-modal" data-uk-toggle="target: #search-modal"><span data-uk-icon="icon: search" ></span></a></li>
                    <li><NavLink to={routes.HOME} ><span data-uk-icon="icon: user"></span></NavLink></li>
                    <li><NavLink to={routes.WALL}><span data-uk-icon="icon: comments"></span></NavLink></li>
                    <li><NavLink to={routes.ACCOUNT}><span data-uk-icon="icon: cog"></span></NavLink></li>
                    <li><NavLink onClick={this.onSignOut.bind(this)} to={routes.LANDING} exact ><span data-uk-icon="icon: sign-out"></span></NavLink></li>
                </ul>
        }
        else {
            Navigation = () =>
                <ul className="uk-iconnav">
                    <li><a href="#search-modal" data-uk-toggle="target: #search-modal"><span data-uk-icon="icon: search" ></span></a></li>
                </ul>
        }

        return (
            <div className="app-header uk-position-top" >

                <nav className="uk-navbar uk-navbar-container uk-navbar-transparent" data-uk-sticky="sel-target: .page-content; cls-active: uk-navbar-sticky; top: 200;animation: uk-animation-slide-top;">
                    <div className="uk-navbar-left">
                        <div className="brand">
                            <NavLink to={routes.HOME} ><h1 title="honestgram" data-uk-slideshow-parallax="y: -60,60">honestgram<img src={logo} alt="honestgram logo" /></h1></NavLink>
                        </div>
                    </div>
                    <div className="uk-navbar-right">
                        <Navigation />
                    </div>
                </nav>
                <Search />
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        signout: signout,
    }, dispatch);
}
function mapStateToProps(state) {
    return {
        session: state.session
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);


