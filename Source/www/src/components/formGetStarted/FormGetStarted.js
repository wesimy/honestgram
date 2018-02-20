import React, { Component } from 'react';
import './FormGetStarted.scss';
class FormGetStarted extends Component {
  render() {
    return (
     <div className="form-get-started">
        <ul data-uk-accordion="toggle: > .uk-accordion-t ">
            
            <li>
                <a className="uk-accordion-t uk-button uk-button-secondary" href="#">Sign in</a>
                <div className="uk-accordion-content">
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                </div>
            </li>
            <li>
                
                <a className="uk-accordion-t uk-button uk-button-primary" href="#">Get Started</a>
                <div className="uk-accordion-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </li>
        </ul>
     </div>
    )
  }
}

export default FormGetStarted;

