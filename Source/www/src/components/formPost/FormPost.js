import React, { Component } from 'react';
import './FormPost.scss';

class FormPost extends Component {
    render(){
       return(
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
       );
    }
}
    export default FormPost;