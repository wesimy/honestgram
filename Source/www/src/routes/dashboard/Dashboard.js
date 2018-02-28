import React, { Component } from 'react';
import Profile from '../../components/profile/Profile';
import Cover from '../../components/cover/Cover';
import FormPost from '../../components/formPost/FormPost';
import PostFilter from '../../components/postFilter/PostFilter';
import PostList from '../../components/postList/PostList';
class Dashboard extends Component {
    render() {
        return (
            <div className="app-page ">

                <Cover />
                <div className="page-content">
                    <div className="uk-container">
                        <Profile />
                        <PostFilter />
                        <PostList />

                    </div>
                </div>
            </div>
        );
    }
}
export default Dashboard;
