import React, { Component } from 'react';
import './PostList.scss';
import Post from '../post/Post';

class PostList extends Component {
    render(){
        return( <div className="content-list uk-flex-center uk-grid-collapse" data-uk-grid>
        <ul className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l uk-comment-list">
            <li><Post/></li>
            <li><Post/></li>
            <li><Post/></li>
            <li><Post/></li>
            <li><Post/></li>
            <li><Post/></li>
        </ul>
    </div>);
    };
}

export default PostList;