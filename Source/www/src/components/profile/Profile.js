import React, { Component } from 'react';
import './Profile.scss';

class Profile extends Component {
    render(){
     return(<div className="content-profile uk-flex-center uk-grid-collapse" data-uk-grid>
     <div className="uk-child-expand@s uk-width-4-5@m uk-width-3-5@l">
         <div className="uk-card uk-text-center">
             <div className="uk-card-media-top uk-width-1-3 uk-width-1-4@m uk-width-1-3@l">
                 <img className="uk-border-circle" src="https://getuikit.com/docs/images/avatar.jpg" alt="" />
             </div>
             <div className="uk-card-body">
                 <h3 className="uk-card-title">Media Top</h3>
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
             </div>
         </div>
     </div>
 </div>);
    }
}
    export default Profile;