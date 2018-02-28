import React, { Component } from 'react';
import FormSettings from '../../components/formSettings/FormSettings';
import './Settings.scss';

class Settings extends Component {
    render() {
        return (
            <div className="app-page">

                <div className="page-content">
                    <div className="uk-container">

                        <FormSettings/>
                    
                    </div>
                </div>
            </div>
        );
    }
}
export default Settings;
