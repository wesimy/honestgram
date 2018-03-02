import React, { Component } from 'react';
import './Wall.scss';
import textarea from '../../assets/images/textarea.svg';

import Profile from '../../components/profile/Profile';
import Cover from '../../components/cover/Cover';
import PostAdd from '../../components/post/PostAdd';
import PostFilter from '../../components/post/PostFilter';
import PostList from '../../components/post/PostList';

class Wall extends Component {
    render() {
        return (
            <div className="app-page ">
                
                <Cover/>
                <div className="page-content">
                    <div className="uk-container">
                        <Profile/>
                        
                        <PostAdd/>
                        
                        <PostList/>

                    </div>
                </div>
            </div>
        );
    }
}
export default Wall;
