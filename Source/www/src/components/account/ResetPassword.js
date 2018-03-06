import React, { Component } from 'react';
import './Account.scss';

class ResetPassword extends Component {
    render() {
        return (
            
            <div className="form-account">
                <form onSubmit={this.onForgotPasswordSubmit}>
                    <div>
                        <div className="uk-inline uk-width-1-1">
                            <input placeholder="Email" className="uk-input uk-form-blank" type="text" />
                        </div>
                    </div>

                    <div className="uk-margin-small">

                        <button className="uk-button uk-button-secondary uk-width-1-1">Reset Password</button>

                    </div>

                </form>

            </div>
          
        );
    }
}
export default ResetPassword;