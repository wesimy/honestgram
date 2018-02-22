import React, { Component } from 'react';
import './FormGetStarted.scss';
class FormGetStarted extends Component {
  render() {
    return (
     <div className="form-get-started">
     
            <ul data-uk-accordion="toggle: > .uk-accordion-tab">
               
                <li>
                    <a className="uk-accordion-tab uk-button uk-button-secondary uk-width-1-1"  href="#">Get Started</a>
                    <div className="uk-accordion-content">
                    <form>

<div >
    <div className="uk-inline uk-width-1-1">
        <input placeholder="Email" className="uk-input uk-form-blank" type="text"/>
    </div>
</div>

<div>
    <div className="uk-inline uk-width-1-1">
        <input placeholder="Username" className="uk-input uk-form-blank" type="text"/>
    </div>
</div>

<div >
    <div className="uk-inline uk-width-1-1">
        
        <input placeholder="Password" className="uk-input uk-form-blank" type="password"/>
    </div>
</div>

<div className="uk-margin">
    <div className="uk-inline uk-width-1-1">
        <label><input className="uk-checkbox" type="checkbox"/> <span className="uk-text-meta uk-text-left">I have read, understand, and agree to the honestgram Terms of Service.</span></label>
    </div>
</div>

<div className="uk-margin-small">

<button className="uk-button uk-button-secondary uk-width-1-1">Sign up</button>

</div>

</form>
                    </div>
                </li>

                 <li>
                    <a className="uk-accordion-tab uk-button uk-button-third uk-width-1-1" href="#">Sign in</a>
                    <div className="uk-accordion-content">                        
                    <form>
                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: user"></span>
                                <input placeholder="email" className="uk-input uk-form-blank" type="text"/>
                            </div>
                        </div>

                        <div className="uk-margin-small">
                            <div className="uk-inline uk-width-1-1">
                                <span className="uk-form-icon" uk-icon="icon: lock"></span>
                                <input placeholder="password" className="uk-input uk-form-blank" type="password"/>
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

export default FormGetStarted;

