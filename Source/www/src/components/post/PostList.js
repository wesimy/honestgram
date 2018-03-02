import './PostList.scss';
import React, { Component } from 'react';
import store from '../../Store';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { getPosts } from '../../Actions';
import Post from '../post/Post';

class PostList extends Component {
    constructor(){
        super();
        //store.dispatch(getBooks());
    }
    componentDidMount(){
        let p = {
            Id: 1,
            Date: '12APR',
            Author: null,
            AuthorSecretID: 123,
            Content:'some post content',
            Private: false,
            }
            
            
        const ps = this.props.getPosts(p);
        console.log(ps);
    }
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


function mapDispatchToProps(dispatch){
    return bindActionCreators({getPosts:getPosts},dispatch);
}

function mapStateToProps(state) {
    return{
        posts: state.posts.posts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostList);