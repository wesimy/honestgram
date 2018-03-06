import React, { Component } from 'react';
import Settings from '../../components/settings/Settings';
import './Account.scss';

class Account extends Component {
    render() {
        return (
            <div className="app-page">

                <div className="page-content">
                    <div className="uk-container">

                        <Settings/>
                    
                    </div>
                </div>
            </div>
        );
    }
}
export default Account;
