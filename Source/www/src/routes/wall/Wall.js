import React, { Component } from 'react';
import './Wall.scss';
import textarea from '../../assets/images/textarea.svg';

import Profile from '../../components/profile/Profile';
import Cover from '../../components/cover/Cover';
import FormPost from '../../components/formPost/FormPost';
import PostFilter from '../../components/postFilter/PostFilter';
import PostList from '../../components/postList/PostList';

class Wall extends Component {
    render() {
        return (
            <div className="app-page ">
                
                <Cover/>
                <div className="page-content">
                    <div className="uk-container">
                        <Profile/>
                        
                        <FormPost/>
                        
                        <PostList/>

                    </div>
                </div>
            </div>
        );
    }
}
export default Wall;
