import React, { Component } from 'react';
import './FormPost.scss';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { addPost } from '../../Actions';
class PostAdd extends Component {
    constructor(){
        super();
    }

    handleSubmit(){
        let p = {
            _id: 4,
            wall: 1,
            date: '12APR',
            author: null,
            authorSecretID: 123,
            content:this.refs.content.value,
            isPrivate: false,
            avatar: 'https://getuikit.com/docs/images/avatar.jpg',
          };
        this.props.addPost(p);
    }
    render(){
       return(
        <div className="content-form-post uk-flex-center uk-grid-collapse" data-uk-grid>
        <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
            <div className="form-wrapper">

                <form>

                    <textarea className="uk-textarea" placeholder="speak your heart" ref="content" ></textarea>
                    <a className="uk-button uk-button uk-button-third" onClick={this.handleSubmit.bind(this)}>Post</a>
                </form>

                <div className="background-wrapper"></div>
            </div>
        </div>
    </div>
       );
    }
}
 


function mapStateToProps(state){
    return {
        posts: state.posts.posts,
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({addPost:addPost},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(PostAdd);