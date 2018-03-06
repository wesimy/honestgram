import './Post.scss';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getPosts } from '../../Actions';
import Post from '../post/Post';

class PostList extends Component {
    constructor(){
        super();
    }

    componentDidMount(){
        let p = [
            {
                _id: 1,
                wall: 1,
                date: '12APR',
                author: null,
                authorSecretID: 123,
                content:'some post content',
                isPrivate: false,
                avatar: 'https://getuikit.com/docs/images/avatar.jpg',
                
                },
                {
                    _id: 2,
                    wall: 1,
                    date: '12APR',
                    author: 'moataz',
                    authorSecretID: 1234,
                    content:'some post content 2',
                    isPrivate: false,
                    avatar: 'https://getuikit.com/docs/images/avatar.jpg',
                    }
        ]
            
        const ps = this.props.getPosts(p);
    }
    render(){
        const postList = this.props.posts.map(function(postsArr){
            return(
                <li key={postsArr._id} >
                <Post post={postsArr} />
                </li>
                
            )
        })

        return( <div className="content-list uk-flex-center uk-grid-collapse" data-uk-grid>
        <ul className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l uk-comment-list">
            {postList}
        </ul>
    </div>);
    };
}


function mapDispatchToProps(dispatch){
    return bindActionCreators({getPosts:getPosts},dispatch);
}

function mapStateToProps(state) {
    return{
        posts: state.posts.posts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);