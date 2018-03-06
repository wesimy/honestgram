import React, { Component } from 'react';
import GetStarted from '../../components/account/GetStarted';

class Login extends Component {
    render() {
        return (
            <div className="app-page">
            
             
            <div data-uk-height-viewport>
                    <div className="uk-position-center">
                        <GetStarted />
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;
