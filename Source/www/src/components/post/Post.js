import './Post.scss';
import React, { Component } from 'react';
//import {connect} from 'react-redux';
//import * from '../../Actions';
//import {bindActionCreators} from 'redux';

class Post extends Component {
    render(){
        return(<article className="uk-card-default uk-comment uk-visible-toggle uk-padding">
        <header className="uk-comment-header uk-position-relative">
            <div className="uk-grid-medium uk-flex-middle" data-uk-grid>
                <div className="uk-width-auto">
                    <img className="uk-comment-avatar" src={this.props.post.avatar} width="80" height="80" alt="" />
                </div>
                <div className="uk-width-expand">
                    <h4 className="uk-comment-title uk-margin-remove"><a className="uk-link-reset" href="#">{(this.props.post.author)? this.props.post.author: 'Anonymous'}</a></h4>
                    <p className="uk-comment-meta uk-margin-remove-top"><a className="uk-link-reset" href="#">{this.props.post.date}</a></p>
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
            <p>{this.props.post.content}</p>
        </div>
    </article>);
    };
}

// function mapStateToProps(state){
//     // return {
//     //     books: state.books.books,
//     //     cart: state.cart.cart,
//     // }
//     return {}
// }
 
// function mapDispatchToProps(dispatch){
//     //return bindActionCreators({addToCart,updateCart},dispatch);
// }

//export default connect(mapStateToProps,mapDispatchToProps)(Post);
export default Post;

