import React, { Component } from 'react';
import './Wall.scss';
import textarea from '../../assets/images/textarea.svg';

class Wall extends Component {
    render() {
        return (
            <div className="app-page ">
                <div className="page-cover uk-cover-container">
                    <img src="http://getuikit.com/docs/images/dark.jpg" alt="" data-uk-cover />
                </div>
                <div className="page-content">
                <div className="uk-container">

                    <div className="content-profile uk-flex-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
                            <div className="uk-card uk-text-center">
                                <div className="uk-card-media-top uk-width-1-3 uk-width-1-4@m uk-width-1-3@l">
                                    <img src="https://getuikit.com/docs/images/avatar.jpg" alt=""/>
                                </div>
                                <div className="uk-card-body">
                                    <h3 className="uk-card-title">Media Top</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="uk-container">

                        <div className="content-form-post uk-flex-center uk-grid-collapse" data-uk-grid>
                        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
                            <div className="form-wrapper">
                            
                            <form>
                                
                                <textarea className="uk-textarea" placeholder="speak your heart"></textarea>
                                <button className="uk-button uk-button uk-button-third">Post</button>
                            </form>

                            <div className="background-wrapper"></div>
                            </div>
                            </div>
                        </div>
                    </div>


                    <div className="content-list uk-flex-center uk-grid-collapse" data-uk-grid>
                        <ul className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l uk-comment-list">
                            <li>
                                <article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
                                    <header className="uk-comment-header uk-position-relative">
                                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt=""/>
                                            </div>
                                            <div className="uk-width-expand">
                                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                            </div>
                                        </div>
                                        <div className="uk-position-top-right ">
                                            <span data-uk-icon="icon: more"></span>
                                            <div uk-dropdown="mode: click;boundary: .uk-comment">
                                            <ul className="uk-nav uk-dropdown-nav">
                                                <li><a href="#"><span data-uk-icon="icon: lock"></span> Make Private</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: users"></span> Request Identity</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: social"></span> Share</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="uk-comment-body">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </article>
                            </li>

                            <li>
                                <article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
                                    <header className="uk-comment-header uk-position-relative">
                                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt=""/>
                                            </div>
                                            <div className="uk-width-expand">
                                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                            </div>
                                        </div>
                                        <div className="uk-position-top-right ">
                                            <span data-uk-icon="icon: more"></span>
                                            <div uk-dropdown="mode: click;boundary: .uk-comment">
                                            <ul className="uk-nav uk-dropdown-nav">
                                                <li><a href="#"><span data-uk-icon="icon: lock"></span> Make Private</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: users"></span> Request Identity</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: social"></span> Share</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="uk-comment-body">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </article>
                            </li>

                            <li>
                                <article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
                                    <header className="uk-comment-header uk-position-relative">
                                        <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                                            <div className="uk-width-auto">
                                                <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt=""/>
                                            </div>
                                            <div className="uk-width-expand">
                                                <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">Author</a></h4>
                                                <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">12 days ago</a></p>
                                            </div>
                                        </div>
                                        <div className="uk-position-top-right ">
                                            <span data-uk-icon="icon: more"></span>
                                            <div uk-dropdown="mode: click;boundary: .uk-comment">
                                            <ul className="uk-nav uk-dropdown-nav">
                                                <li><a href="#"><span data-uk-icon="icon: lock"></span> Make Private</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: users"></span> Request Identity</a></li>
                                                <li><a href="#"><span data-uk-icon="icon: social"></span> Share</a></li>
                                            </ul>
                                            </div>
                                        </div>
                                    </header>
                                    <div className="uk-comment-body">
                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </article>
                            </li>

                           
                        </ul>
                    </div>    
                </div>
                </div>
            </div>
        );
    }
}
export default Wall;
