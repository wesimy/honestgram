import React, { Component } from 'react';
import HomeSlideShow from '../../components/homeSlideshow/HomeSlideShow';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {onSetAuthUser} from '../../Actions';
import {compose} from 'recompose';
import withAuthentication from '../../components/session/withAuthentication';
import { withRouter } from 'react-router'

//import withAuthentication from '../../components/session/withAuthentication';

class Home extends Component {
    
    constructor(props){
        super(props);
    
    }
    
    componentDidMount(){
        console.log(this.props.session, 'Clciked')
    }

    onClick = () => {
        console.log(this.props.session, 'Clciked')
    }
    
    render() {
        return (
            <div className="app-page">
            
                <HomeSlideShow />
                <div id="spread"></div>
                <button onClick={this.onClick}>asdasdasdasdas</button>
            </div>
        );
    }
}


// function mapDispatchToProps(dispatch){
//   return bindActionCreators({
//     onSetAuthUser:onSetAuthUser,
//   },dispatch);
// }

// function mapStateToProps(state) {
//   return{
//     session: state.session
//   }
// }

export default compose(
    withAuthentication,
    withRouter,
    // connect(mapStateToProps),
)(Home);


