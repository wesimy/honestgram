import React, { Component } from 'react';
import './Cover.scss';

class Cover extends Component {
    render(){
     return(<div className="page-cover uk-cover-container">
     <img src="http://getuikit.com/docs/images/dark.jpg" alt="" data-uk-cover />
 </div>);
    }
}
    export default Cover;