import React, { Component } from 'react';
import './Post.scss';

class Post extends Component {
    render(){
        return(<article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
        <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src="https://getuikit.com/docs/images/avatar.jpg" width="80" height="80" alt="" />
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
    </article>);
    };
}

export default Post;