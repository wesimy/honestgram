import React, { Component } from 'react';
import ResetPassword from '../../components/account/ResetPassword';
class Password extends Component {
    render() {
        return (
            <div className="app-page">
            
             
            <div data-uk-height-viewport>
                    <div className="uk-position-center">
                        <ResetPassword />
                    </div>
                </div>
            </div>
        );
    }
}
export default Password;
