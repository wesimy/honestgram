import React, { Component } from 'react';
import Profile from '../../components/profile/Profile';
import Cover from '../../components/cover/Cover';
import PostFilter from '../../components/post/PostFilter';
import PostList from '../../components/post/PostList';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {compose} from 'recompose';
import withAuthentication from '../../components/session/withAuthentication';
import { withRouter } from 'react-router'

class Dashboard extends Component {
    constructor(props){
        super(props);
       // console.log(props);
    }
    componentDidMount(){
        console.log(this.props);
        //this.props.onSetAuthUser();
        // if(!this.props.session.user){
        //     console.log(this.props.session);
        //     this.props.history.push('/');
        // }
    }
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

// function mapStateToProps(state) {
//     return{
//       session: state.session
//     }
//   }

export default compose(
    withAuthentication,
    withRouter,
    //connect(mapStateToProps),
)(Dashboard);

//export default connect(mapStateToProps)(Dashboard);
