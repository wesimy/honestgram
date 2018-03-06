import React, { Component } from 'react';
import { auth } from '../../firebase/index';
import './Account.scss';
import { withRouter} from 'react-router-dom';
import * as routes from '../../constants/routes';


class GetStarted extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            error: null
        };
       
      }


    onSignInSubmit(event){
        event.preventDefault();
        
    }
    onSignUpSubmit(event){
        event.preventDefault();

          auth.doCreateUserWithEmailAndPassword(this.refs.email.value, this.refs.password.value)
            .then(authUser => {
                this.refs.email.value = '';
                this.refs.password.value = '';
                this.refs.username.value = '';

                this.setState({
                    error: null
                });
                const {
                    history,
                  } = this.props;
                  history.push(routes.HOME);
            })
            .catch(error => {
              this.setState({
                error: error
              });
            });
            
        
    }
    render() {
        //console.log(this.props);
        //   const isInvalid =
        //     this.state.signup.password === '' ||
        //     this.state.signup.email === '' ||
        //     this.state.signup.username === '';


        return (
            <div className="form-account">
                <ul data-uk-accordion="toggle: > .uk-accordion-tab">
                    <li>
                        <a className="uk-accordion-tab uk-button uk-button-secondary uk-width-1-1" href="#">Get Started</a>
                        <div className="uk-accordion-content">
                        <form onSubmit={this.onSignUpSubmit.bind(this)}>

                                <div >
                                    <div className="uk-inline uk-width-1-1">    
                                        <input placeholder="Email" className="uk-input uk-form-blank" type="text" ref="email"/>
                                    </div>
                                </div>

                                <div>
                                    <div className="uk-inline uk-width-1-1">
                                        <input placeholder="Username" className="uk-input uk-form-blank" type="text" ref="username"/>
                                    </div>
                                </div>

                                <div >
                                    <div className="uk-inline uk-width-1-1">

                                        <input placeholder="Password" className="uk-input uk-form-blank" type="password" ref="password"/>
                                    </div>
                                </div>

                                <div className="uk-margin">
                                    <div className="uk-inline uk-width-1-1">
                                        <label><input className="uk-checkbox" type="checkbox" /> <span className="uk-text-meta uk-text-left">I have read, understand, and agree to the honestgram Terms of Service.</span></label>
                                    </div>
                                </div>

                                <div className="uk-margin-small">

                                    <button type="submit" className="uk-button uk-button-secondary uk-width-1-1">Sign up</button>
                                    { this.state.error && <p>{this.state.error.message}</p> }
                                </div>

                            </form>
                        </div>
                    </li>

                    <li>
                        <a className="uk-accordion-tab uk-button uk-button-third uk-width-1-1" href="#">Sign in</a>
                        <div className="uk-accordion-content">
                            <form onSubmit={this.onSignInSubmit.bind(this)}>
                                <div className="uk-margin-small">
                                    <div className="uk-inline uk-width-1-1">
                                        <span className="uk-form-icon" data-uk-icon="icon: user"></span>
                                        <input placeholder="email" className="uk-input uk-form-blank" type="text" />
                                    </div>
                                </div>

                                <div className="uk-margin-small">
                                    <div className="uk-inline uk-width-1-1">
                                        <span className="uk-form-icon" data-uk-icon="icon: lock"></span>
                                        <input placeholder="password" className="uk-input uk-form-blank" type="password" />
                                    </div>
                                </div>
                                <div className="uk-margin-small">
                                    <button className="uk-button  uk-button-third uk-width-1-1">Sign in</button>
                                </div>

                            </form>

                        </div>
                    </li>
                </ul>


            </div>
        )
    }
}

export default GetStarted;

