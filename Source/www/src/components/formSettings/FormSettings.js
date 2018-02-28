import React, { Component } from 'react';
import './FormSettings.scss'; 

class FormSettings extends Component {
    render(){
        return(<div className="content-settings uk-flex-center uk-grid-collapse uk-margin-large" data-uk-grid>
        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l uk-box-shadow-small">
    
            <div className="uk-section uk-section-default uk-padding">
    
                <h3>Section Default</h3>
                <form className="uk-form-horizontal uk-margin-large">
    
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-horizontal-text">Email</label>
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <a className="uk-form-icon uk-form-icon-flip" href="#" data-uk-icon="icon: pencil"></a>
                                <input className="uk-input" type="text" />
                            </div>
                        </div>
                    </div>
    
                    <div className="uk-margin">
                        <label className="uk-form-label" htmlFor="form-horizontal-text">Password</label>
                        <div className="uk-form-controls">
                            <div className="uk-inline">
                                <a className="uk-form-icon uk-form-icon-flip" href="#" data-uk-icon="icon: pencil"></a>
                                <input className="uk-input" type="password"  />
                            </div>
                        </div>
                    </div>
    
    
                </form>
            </div>
    
            <div className="uk-section uk-section-default uk-padding">
    
                <h3>Notifications</h3>
                <form className="uk-margin-large">
    
                    <div className="uk-margin uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-width-3-4">
                            <label className="uk-form-label" htmlFor="find-via-email">to find you via email o find you via email o find you via email</label>
                        </div>
                        <div className="uk-width-1-4">
                            <div className="uk-input-switch uk-float-right">
                                <input type="checkbox" id="find-via-email" /><label htmlFor="find-via-email">email visibility</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="uk-margin uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-width-3-4">
                            <label className="uk-form-label" htmlFor="post-notification">New post notification</label>
                        </div>
                        <div className="uk-width-1-4">
                            <div className="uk-input-switch uk-float-right">
                                <input type="checkbox" id="post-notification" /><label htmlFor="post-notification">new post</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="uk-margin uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-width-3-4">
                            <label className="uk-form-label" htmlFor="identity-notification">identity reveal notification</label>
                        </div>
                        <div className="uk-width-1-4">
                            <div className="uk-input-switch uk-float-right">
                                <input type="checkbox" id="identity-notification" /><label htmlFor="identity-notification">identity notification</label>
                            </div>
                        </div>
                    </div>
    
                    <div className="uk-margin uk-flex uk-flex-middle" data-uk-grid>
                        <div className="uk-width-3-4">
                            <label className="uk-form-label" htmlFor="honestgram-updates">honestgram updates</label>
                        </div>
                        <div className="uk-width-1-4">
                            <div className="uk-input-switch uk-float-right">
                                <input type="checkbox" id="honestgram-updates" /><label htmlFor="honestgram-updates">honestgram updates</label>
                            </div>
                        </div>
                    </div>
    
    
                </form>
            </div>
        </div>
    </div>)
    };
}

export default FormSettings;